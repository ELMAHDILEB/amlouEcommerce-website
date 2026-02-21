import ContactForm from "../components/sections/Contact/ContactForm";
import ContactInfo from "../components/sections/Contact/ContactInfo";
import MetaTag from "../components/ui/MetaTag"


function Contact() {
  return (
    <>
      <MetaTag pageKey="contact"/>
      <section className="w-full h-fit grid grid-cols-1 md:grid-cols-2 items-center  font-montserrat">
        <ContactInfo />
        <ContactForm />
      </section>
    </>
  )
}

export default Contact;