import type { APIRoute } from 'astro';
import { ContactModel } from '../../models/Contact';
import { connectToDatabase } from '../../lib/database';
import type { ContactFormData } from '../../types/contact';

// Disable prerendering for this API route to access server-side features
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        // Connect to database
        await connectToDatabase();

        // Parse form data
        const formData = await request.formData();
        const contactData: ContactFormData = {
            fullName: formData.get('fullName') as string,
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
            newsletter: formData.get('newsletter') === 'on' || formData.get('newsletter') === 'true',
        };

        // Validate required fields
        if (!contactData.fullName || !contactData.email || !contactData.subject || !contactData.message) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'All required fields must be filled',
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        // Additional validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(contactData.email)) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Please enter a valid email address',
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        if (contactData.message.length < 10) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Message must be at least 10 characters long',
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        // Get client information safely (using headers instead of clientAddress for prerendered routes)
        const userAgent = request.headers.get('user-agent') || '';
        const xForwardedFor = request.headers.get('x-forwarded-for');
        const xRealIp = request.headers.get('x-real-ip');
        const ipAddress = xForwardedFor?.split(',')[0] || xRealIp || 'unknown';

        // Create contact entry
        const contact = new ContactModel({
            ...contactData,
            ipAddress: ipAddress,
            userAgent: userAgent,
            status: 'pending',
        });

        await contact.save();

        // Return success response
        return new Response(
            JSON.stringify({
                success: true,
                message: 'Thank you for your message! We will get back to you within 24 hours.',
                id: contact._id,
            }),
            {
                status: 201,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        // Handle validation errors
        if (error instanceof Error && error.name === 'ValidationError') {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Please check your input and try again',
                    details: error.message,
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        // Handle duplicate email (if we want to track this)
        if (error instanceof Error && error.message.includes('duplicate key')) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'A message with this email was recently submitted. Please wait before sending another message.',
                }),
                {
                    status: 409,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        // Generic error response
        return new Response(
            JSON.stringify({
                success: false,
                error: 'Something went wrong. Please try again later.',
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
};

// Optional: Add GET method to retrieve contact messages (for admin)
export const GET: APIRoute = async ({ url }) => {
    try {
        await connectToDatabase();

        const searchParams = url.searchParams;
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const status = searchParams.get('status');
        const subject = searchParams.get('subject');

        // Build query
        const query: any = {};
        if (status) query.status = status;
        if (subject) query.subject = subject;

        // Execute query with pagination
        const contacts = await ContactModel
            .find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const total = await ContactModel.countDocuments(query);

        return new Response(
            JSON.stringify({
                success: true,
                data: contacts,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit),
                },
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

    } catch (error) {
        console.error('Get contacts error:', error);

        return new Response(
            JSON.stringify({
                success: false,
                error: 'Failed to retrieve contacts',
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
};