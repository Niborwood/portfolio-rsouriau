// COMPONENTS IMPORTS
import Button from "../ui/button";
import Input from "../ui/form/input";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input name="name" placeholder="Nom" />
      <Input name="email" placeholder="Email" />
      <Input name="message" placeholder="Message" textarea />
      <Button type="submit" text="Envoyer" light large>
        Envoyer
      </Button>
    </form>
  );
}
