import { useState } from "react";

// COMPONENTS IMPORTS
import Button from "../ui/button";
import Input from "../ui/form/input";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const [formMessage, setFormMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // Trim all values and check if all fields are filled
    if (
      values.name.trim() === "" ||
      values.email.trim() === "" ||
      values.message.trim() === ""
    ) {
      setFormMessage("Merci de remplir tous les champs");
      return;
    }

    // Check if email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setFormMessage("Merci de saisir une adresse email valide");
      return;
    }

    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();

    // Set submit message, than clear it after 5s
    setFormMessage(data.message);
    setTimeout(() => {
      setFormMessage("");
    }, 5000);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Nom"
        value={values.name}
        onChange={onChange}
      />
      <Input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={onChange}
      />
      <Input
        name="message"
        placeholder="Message"
        value={values.message}
        onChange={onChange}
        textarea
      />
      <Button type="submit" text="Envoyer" light large>
        Envoyer
      </Button>
      <p className="text-slate-100">{formMessage}</p>
    </form>
  );
}
