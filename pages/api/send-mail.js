import sgMail from "@sendgrid/mail";
import emailTeplate from "../../styles/email-templates/contact-email-template";

// Sign SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    if (!data)
      return res.status(400).json({ message: "Aucune donnée fournie" });

    // * Data Validation
    // Trim all values and check if all fields are filled
    if (
      !data.name ||
      !data.email ||
      !data.message ||
      data.name.trim() === "" ||
      data.email.trim() === "" ||
      data.message.trim() === ""
    ) {
      res.status(400).json({ message: "Merci de remplir tous les champs" });
      return;
    }

    // Check if email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      res
        .status(400)
        .json({ message: "Merci de saisir une adresse email valide" });
      return;
    }

    // * Send email
    // Create email template
    const html = emailTeplate(data);

    // Create email object
    const msg = {
      to: "robin.souriau@gmail.com",
      from: "robin.souriau@gmail.com",
      subject: "Contact via le portfolio",
      name: data.name,
      html,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({
        success: true,
        message: `Votre email a été envoyé ! Je vous répondrai sous peu.`,
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Une erreur est survenue lors de l'envoi du mail. Merci de réessayer",
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
