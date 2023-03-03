import React from "react";


export default function Book () {
    return (
        <section>
            <form>
                <div>
                    <h2>REQUEST A BOOKING</h2>
                    <div>
                    <label>Name: <span className="text-danger">*</span></label>
                    <input type="text" placeholder="First Name"></input>
                    <input type="text" placeholder="Last Name"></input>
                    </div>
                    <label>Phone Number (Optional):</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone Number"></input>
                </div>
            </form>
        </section>
    )
}