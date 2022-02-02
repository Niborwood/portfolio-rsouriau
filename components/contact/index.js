// COMPONENT IMPORTS
import BackgroundGradient from "../ui/background-gradient";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <BackgroundGradient id="contact">
      <div className="flex items-center min-h-screen px-8 py-12 lg:p-24">
        <div className="flex flex-col justify-end gap-16 lg:w-2/3 sm:flex-row">
          <div className="space-y-4 text-right lg:w-1/3">
            <h2 className="text-5xl lg:text-6xl">
              Envie de me contacter&nbsp;?
            </h2>
            <h3 className="text-lg lg:text-2xl">
              Pour en savoir plus sur mes travaux, mes compétences ou tout
              simplement m&apos;envoyer un petit mot doux, vous pouvez remplir
              le formulaire ci-joint.
            </h3>
          </div>
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
}
