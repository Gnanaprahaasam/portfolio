import React, { useState } from "react";
import "./Contact.css";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import emailjs from '@emailjs/browser';



const Contact = () => {
    const [contact, setContact] = useState({
        user_name: "",
        user_email: "",
        phone: "",
        title: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const templateParams = {
        name: contact.user_name,
        email: contact.user_email,
        subject: contact.title,
        phone: contact.phone,
        message: contact.message
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!contact.user_name.trim()) newErrors.user_name = "Name is required";
        if (!contact.user_email.trim()) {
            newErrors.user_email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(contact.user_email)) {
            newErrors.user_email = "Invalid email format";
        }
        if (!contact.title.trim()) newErrors.title = "Message subject is required";
        if (!contact.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            alert("Please fill in all required fields correctly");
        }
        else {



            emailjs
                .send('service_zv0rli2', 'template_gsyy5td', templateParams, {
                    publicKey: 'JmqSaSLE20eIY3NB0',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setContact({
                            user_name: "",
                            user_email: "",
                            phone: "",
                            title: "",
                            message: "",
                        })
                        alert("Mail sent successfully!");
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setContact({
                            user_name: "",
                            user_email: "",
                            phone: "",
                            title: "",
                            message: "",
                        })
                        alert("Failed to send mail. Please try again.");
                    },
                );
        }

    };

    return (
        <>

            <section id="contact">
                <div className="container-fluid my-4 ">
                    <div className="row d-flex align-items-center mx-0 mx-sm-2">
                        <div className="col-12 col-md-6">
                            <div className="d-block ">
                                <h2>Let's work together</h2>
                                <p>Get in touch</p>
                                <div className="d-flex gap-3 mb-4">
                                    <div className="contact-icon" >
                                        <IoCall size={25} />
                                    </div>
                                    <div >
                                        <div className="keyword">Phone</div>
                                        <a href="tel:+917904431901">(+91) 7904431901</a>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 mb-4">
                                    <div className="contact-icon" >
                                        <MdEmail size={25} />
                                    </div>
                                    <div >
                                        <div className="keyword">Email</div>
                                        <a href="mailto:srgnanaprahaasam@gmail.com">srgnanaprahaasam@gmail.com</a>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 mb-4">
                                    <div className="contact-icon" >
                                        <IoLogoLinkedin size={25} />
                                    </div>
                                    <div >
                                        <div className="keyword">Linked In</div>
                                        <a href="https://www.linkedin.com/in/gnana-prahaasam-sr" target="_blank" rel="noopener noreferrer">Gnana prahaasam SR</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="contact-form">
                                <h2 className="text-center mb-3">Contact <span className="keyword"> me!</span></h2>
                                <form>
                                    <div className=" d-inline-flex flex-wrap flex-sm-nowrap gap-3">
                                        <input type="text" name="user_name" id="name" value={contact.user_name} placeholder="Full Name" onChange={handleChange} required={true} />
                                        <input type="email" name="user_email" id="email" value={contact.user_email} placeholder="Email Address" onChange={handleChange} required={true} />
                                    </div>
                                    <div className=" d-inline-flex flex-wrap flex-sm-nowrap gap-3">
                                        <input type="tel" name="phone" id="phone" value={contact.phone} placeholder="Phone Number" onChange={handleChange} />
                                        <input type="text" name="title" id="subject" value={contact.title} placeholder="Message Subject" onChange={handleChange} required={true} />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="" name="message" id="message" rows={6} placeholder="Your Message" onChange={handleChange} value={contact.message} required={true}></textarea>
                                    </div>
                                    <button type="submit" className="submit-btn" onClick={sendEmail}>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Contact;