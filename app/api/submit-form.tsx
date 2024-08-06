import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      website,
      companySize,
      country,
      comment,
    } = req.body;

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "your-smtp-host",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "your-email@example.com",
        pass: "your-email-password",
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: '"Your Website" <your-email@example.com>',
        to: "hello@metastash.xyz",
        subject: "New Form Submission",
        text: `
          New form submission:
          First Name: ${firstName}
          Last Name: ${lastName}
          Email: ${email}
          Website: ${website}
          Company Size: ${companySize}
          Country: ${country}
          Comment: ${comment}
        `,
      });

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error submitting form" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
