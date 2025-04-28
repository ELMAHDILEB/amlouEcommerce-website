import ContactForm from "../components/Contact/ContactForm"
import ContactInfo from "../components/Contact/ContactInfo"


function Contact() {
  return (
    <section className="w-full h-[calc(100dvh-70px)] grid grid-cols-1 md:grid-cols-2 items-center  font-montserrat">
         <ContactInfo/>
         <ContactForm/>
    </section>
  )
}

export default Contact