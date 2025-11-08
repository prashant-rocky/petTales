import React from "react";
import ContactBanner from "../../components/contactBanner";
import ContactForm from "../../components/contacform";
import ContactInfoSection from "../../components/contactInfo";

const Contact = () => {
    return(
        <>
            <ContactBanner />
            <ContactForm/>
            <ContactInfoSection />
        </>
    )
}
export default Contact;