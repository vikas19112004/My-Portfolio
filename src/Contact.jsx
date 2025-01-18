import "./Contact.css"
import { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {

    let [contactDetails, setContactDetails] = useState({
        email: "",
        tel: ""
    });

    function handleChange(event) {
        setContactDetails((currData) => {return {...currData, [event.target.name]: event.target.value}});
    }

    function handleSubmit(event) {
        event.preventDefault();

        emailjs.send("service_l7vx9ee","template_5fvmy8w", {
            email: contactDetails.email,
            mobile: contactDetails.tel,
        }, "up8La4qOIgPoNILwP")
        .then(() => {
            alert("Details sent successfully!");
        })
        .catch(() => {
            console.log("Faild to send details!");
        });

        setContactDetails({
            email: "",
            tel: ""
        });
    }

    return (
        <form className="contact" onSubmit={handleSubmit} id="contact">
            <h2>Contact me for work or genarel quiries</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="@gmail.com" name="email" value={contactDetails.email}  onChange={handleChange}required/>
            </div>
            <p>I will not share your contact details to anyone.</p>
            <div>
                <label htmlFor="tel">Mobile: </label>
                <input type="tel" id="tel" placeholder="1234567890" name="tel" value={contactDetails.tel} onChange={handleChange} required/>
            </div>
            <div id="checkbox">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Want to work on a project.</label>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Contact;