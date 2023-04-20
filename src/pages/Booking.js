import React, {useRef, useState} from "react";
import { BsArrowDownShort } from "react-icons/bs";
import emailjs from "@emailjs/browser"

export default function Book () {
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const phoneNumber = useRef(null);
    const [datePreference, setDatePreference] = useState(false);
    const date = useRef(null);
    const location = useRef(null);
    const session = useRef(null);
    const response = useRef(null);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;

        setDatePreference(inputValue);
    }

    const submitForm = (e) => {
        e.preventDefault();
        // TODO: Contract stuff goes here
        emailjs
        .send(
            "service_bfv7dw7",//serviceID (the emailJS account you want to use)
            "template_99o3ssq",//templateID (the template, saved on your emailJS account, that you want to use)
            {  //templateParams (the values you want fed into that template - names must match those on the template)
                first_name: firstName.current.value,
                last_name: lastName.current.value,
                email: email.current.value,
                phone_number: phoneNumber.current.value,
                date: datePreference === 'true' ? date.current.value : "I'm flexible", //note: Date will be YYYY-MM-DD
                location: location.current.value,
                session: session.current.value,
                response: response.current.value,
            },
            "VJ7AN38eOcKTQ89-7" //public key - optional, can be set with emailjs.init()
        )
    }

    return (
        <div>
            <section id="booking-section">
                <div id="request">
                    <h2 id="book">Ready to Book?</h2>
                    <p id="fill">FILL THE FORM BELOW <BsArrowDownShort /></p>
                </div>
            </section>
            <form id="booking-form" onSubmit={submitForm}>
                <h1 id="booking-title">Book Me</h1>
                <div className="myRow">
                    <div id="column-one">
                        <label>Name: <span className="text-danger">*</span></label>
                        <div id="name-section">
                            <input type="text" placeholder="First Name" id="first-name" ref={firstName}></input>
                            <input type="text" placeholder="Last Name" id="last-name" ref={lastName}></input>
                        </div>
                        <label>Phone Number (Optional):</label>
                        <div>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="XXX-XXX-XXXX" ref={phoneNumber}></input>
                        </div>
                        <div className="myRow">
                            <input type="radio" className="radio" name="dateChoice" value={false} onChange={handleInputChange}></input>
                            <label className="radio-label">I'm flexible</label>
                        </div>
                        <div className="myRow">
                            <input type="radio" className="radio" name="dateChoice" value={true} onChange={handleInputChange}></input>
                            <label className="radio-label">I have a specific date in mind <input type="date" ref={date}></input></label>
                        </div>
                        <label>Do you have a location in mind? (Optional)</label>
                        <input type="text" ref={location}></input>
                    </div>
                    <div id="column-two">
                        <label>Email: <span className="text-danger">*</span></label>
                        <input type="email" placeholder="example@email.com" ref={email}></input>
                        <label>Select session type:</label>
                        <select ref={session}>
                            <option>Wedding</option>
                            <option>Couples/Engagements</option>
                            <option>Family</option>
                            <option>Maternity</option>
                            <option>Newborn</option>
                            <option>Individual/Seniors</option>
                            <option>Boudoir</option>
                            <option>Branding</option>
                            <option>Pets</option>
                        </select>
                        <label>Tell me more about you and what your dream photoshoot looks like:</label>
                        <textarea type="text" placeholder="Type your response here..." ref={response}></textarea>
                    </div>
                </div>
                <input type="submit" placeholder="Submit" id="submitBtn"></input>
            </form>
        </div>
    );
}