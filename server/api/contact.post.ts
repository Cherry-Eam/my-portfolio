import nodemailer from 'nodemailer'

interface ContactPayload {
    name: string
    email: string
    message: string
    services?: string[]
}

const isNonEmptyString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export default defineEventHandler(async (event) => {
    const body = await readBody<ContactPayload>(event)

    if (!isNonEmptyString(body?.name) || !isNonEmptyString(body?.email) || !isNonEmptyString(body?.message)) {
        throw createError({ statusCode: 400, statusMessage: 'Name, email, and message are required.' })
    }

    if (!isValidEmail(body.email.trim())) {
        throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address.' })
    }

    const config = useRuntimeConfig()

    if (!config.smtpHost || !config.smtpUser || !config.smtpPass || !config.contactToEmail) {
        throw createError({ statusCode: 500, statusMessage: 'Email is not configured on the server yet.' })
    }

    const transporter = nodemailer.createTransport({
        host: config.smtpHost,
        port: Number(config.smtpPort) || 587,
        secure: Number(config.smtpPort) === 465,
        auth: {
            user: config.smtpUser,
            pass: config.smtpPass
        }
    })

    const services = Array.isArray(body.services) ? body.services.filter(isNonEmptyString) : []

    const fromEmail = config.contactFromEmail || config.contactToEmail

    await transporter.sendMail({
        from: `"Cherry Website" <${fromEmail}>`,
        to: config.contactToEmail,
        replyTo: body.email.trim(),
        subject: `New inquiry from ${body.name.trim()}`,
        text: [
            `Name: ${body.name.trim()}`,
            `Email: ${body.email.trim()}`,
            services.length ? `Interested in: ${services.join(', ')}` : null,
            '',
            body.message.trim()
        ].filter(Boolean).join('\n'),
        html: `
            <p><strong>Name:</strong> ${escapeHtml(body.name.trim())}</p>
            <p><strong>Email:</strong> ${escapeHtml(body.email.trim())}</p>
            ${services.length ? `<p><strong>Interested in:</strong> ${services.map(escapeHtml).join(', ')}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(body.message.trim()).replace(/\n/g, '<br>')}</p>
        `
    })

    return { success: true }
})

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}
