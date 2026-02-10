import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  try {
    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: ["nirajsinghrajput.ai@gmail.com"], // your email
      subject: "New Equipment Requirement 🚜",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Company:</strong> ${body.company_name}</p>
        <p><strong>Contact:</strong> ${body.contact_person}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Equipment:</strong> ${body.equipment_type}</p>
        <p><strong>City:</strong> ${body.city}</p>
        <p><strong>Duration:</strong> ${body.duration}</p>
      `
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error })
  }
}
