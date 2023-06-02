import React from "react";
import { Link } from "react-router-dom";
import Book from "./Booking";
import { wedinvest1, wedinvest2, wedinvest3, wedinvest4, wedinvest5, wedinvest6, wedinvest7, wedinvest8, wedinvest9 } from "../assets";

export default function WedInvest () {
    return (
        <section>
            <div id="wedinvest-section-one">
                <h1>Wedding Investment</h1>
                <div id="wedinvest-divider"></div>
                <h4>ALL REMAINING 2023 DATES ON SALE</h4>
            </div>
            <div id="wedding-dates">
                <div>
                    <h5>2023 WEDDING DATES</h5>
                    <ol>
                        <li>MARCH 2023</li>
                        <li>APRIL 2023</li>
                        <ol>
                            <li>APR 15, 2023 - BOOKED</li>
                        </ol>
                        <li>MAY 2023</li>
                        <ol>
                            <li>MAY 27, 2023 - BOOKED</li>
                        </ol>
                        <li>JUNE 2023</li>
                        <li>JULY 2023</li>
                        <ol>
                            <li>JUL 8, 2023 - BOOKED</li>
                            <li>JUL 21, 2023 - BOOKED</li>
                        </ol>
                        <li>AUGUST 2023</li>
                        <ol>
                            <li>AUG 25, 2023 - BOOKED</li>
                        </ol>
                        <li>SEPTEMBER 2023</li>
                        <ol>
                            <li>SEP 1, 2023 - BOOKED</li>
                        </ol>
                       <li>OCTOBER 2023</li>
                       <ol>
                        <li>OCT 28, 2023 - BOOKED</li>
                       </ol>
                       <li>NOVEMBER 2023</li>
                       <li>DECEMBER 2023</li>
                    </ol>
                </div>
                <div>
                    <h5>2024 WEDDING DATES</h5>
                    <ol>
                        <li>MARCH 2023</li>
                        <li>APRIL 2024</li>
                        <li>MAY 2024</li>
                        <ol>
                            <li>MAY 4, 2024 - BOOKED</li>
                        </ol>
                        <li>JUNE 2024</li>
                        <li>JULY 2024</li>
                        <li>AUGUST 2024</li>
                        <li>SEPTEMBER 2024</li>
                        <li>OCTOBER 2024</li>
                        <li>NOVEMBER 2024</li>
                        <li>DECEMBER 2024</li>
                    </ol>
                </div>
            </div>
            <div id="wedinvest-section-three">
                <h2>WANT TO SCHEDULE?</h2>
                <h5>CLICK "REQUEST A BOOKING"</h5>
                <button id="bookbtn"><Link to="/booking" element={<Book />} className="page-links">REQUEST A BOOKING</Link></button>
            </div>
            <div id="wedinvest-section-four">
                <img src={wedinvest1} width="300px"></img>
                <img src={wedinvest2} width="300px" height="200px" id="wedinvest-Img2"></img>
                <img src={wedinvest3} width="300px"></img>
                <img src={wedinvest4} width="300px"></img>
            </div>
            <div id="wedinvest-section-five">
                <div id="wedding-talk">
                    <h3>LETS TALK WEDDINGS</h3>
                    <p>Your wedding day is the most beautiful day in your life; but weddings are a big investment and choosing your wedding photographer is one of the biggest decisions you'll make. Look at it like this - Your wedding photographer has a major effect on how your day goes. You'll be spending more time with your photographer on your wedding day than any other vendor, so you should choose a photographer you trust, and one you enjoy being around.</p>
                    <p>I know planning a wedding can be stressful and I want you to feel important, heard, never ignored and it's so nice to receive the same back! Let me help you take some stress off your shoulders. From the moment you book with me I will be right by your side, helping you and guiding you. Creating a custome timeline for your big day, to helping you create a "must-have" photo list, to checking off everything you need for your detail photos... I got your back! <br/> I believe in building a friendship with you and your partner. I want to know the stories on how you met, what makes you a strong couple, and what your future goals are together. I want to know the inside jokes, the things that your partner does to make you laugh. What you like to do as a couple, what type of adventures do you go on.</p>
                    <p>Because I believe in building a friendship with you as a couple, I offer a 1 hour complimentary engagement session within all my wedding packages. I love this part inn your wedding process. I will teach you core poses/prompts I do, and will teach you how you can help me better capture the emotion and love between you and your partner.</p>
                    <p>Not sure if you want to book quite yet? No worries I offer a 1 hour engagement session. Before your session I will send you a questionnaire, in this questionnaire I want you to answer the questions the absolute best way you can... Session time: in this session, I will teach you my core poses, I will guide you and egven show you how to pose. Give you prompts an try to get you as comfortable in front of the camera as possible; and really get the feel for who you are as a couple. If we are a good fit... here's the cool part... I will add your session proce into the downpayment/retainer for your wedding package. Pretty cool right?</p>
                </div>
            </div>
            <div className="wedinvest-section-image">
                <img src={wedinvest5} width="1020px"></img>
            </div>
            <div id="the-vinyl">
                <h1>The Vinyl</h1>
                <ul id="the-vinyl-list">
                    <li>$4,200</li>
                    <li>Up to 10 Hours of Coverage</li>
                    <li>1 Hour Complimentary Engagement Session</li>
                    <li>2 Photographers</li>
                    <li>Timeline Planning</li>
                    <li>Custom Wedding Box</li>
                    <li>High Resolution Edited Images</li>
                    <li>Online Digital Art with Print Release</li>
                    <li>Michigan Travel Fees Are Included in Package Price</li>
                    <li>**Loding or hotels are not included in package price, weddings more than 2 hours away from Greenville, MI loding would need to be provided</li>
                    <li>Highlight Within 48 Hours</li>
                </ul>
            </div>
            <div className="wedinvest-section-image">
                <img src={wedinvest6} width="1020px" height="1200px" id="wedinvest-Img6"></img>
            </div>
            <div id="the-record">
                <h1>The Record</h1>
                <ul id="the-record-list">
                    <li>$3,700</li>
                    <li>8 Hours of Coverage</li>
                    <li>1 Hour Complimentary Engagement Session Within 1 Hour Radius of Greengville, MI</li>
                    <li>2 Photographers</li>
                    <li>Timeline Planning</li>
                    <li>Custom Flash Drive</li>
                    <li>High Resolution Edited Images</li>
                    <li>Online Digital Art with Print Release</li>
                    <li>Michigan Travel Fees Are Included in Package Price</li>
                    <li>**Loding or hotels are not included in package price, weddings more than 2 hours away from Greenville, MI loding would need to be provided</li>
                    <li>Highlight Within 72 Hours</li>
                </ul>
            </div>
            <div className="wedinvest-section-image">
                <img src={wedinvest7} width="1020px;"></img>
            </div>
            <div id="the-album">
                <h1>The Album</h1>
                <ul id="the-album-list">
                    <li>$3,000</li>
                    <li>6 Hours of Coverage</li>
                    <li>1 Hour Complimentary Engagement Session Within 30 Minutes of Greenville, MI</li>
                    <li>2 Photographers</li>
                    <li>Custom Flash Drive</li>
                    <li>High Resolution Edited Images</li>
                    <li>Online Digital Art with Print Release</li>
                    <li>Michigan Travel Fees Are Included in the Package Price</li>
                    <li>**Lodging or hotels are not included in package price, weddings more than 2 hours away from Greenville, MI loding would need to be provided</li>
                    <li>Highlight Within 72 Hours</li>
                </ul>
            </div>
            <div id="wedinvest-section-six">
                <div id="two-photographers">
                    <h3>WHY DO ALL THE PACKAGES INCLUDE 2 PHOTOGRAPHERS?</h3>
                    <p>I have worked so many weddings where I was the only photographer and I found it stressful; going from 1 suite to another missing moments in-between. Having 2 photographers allows each photographer to be with you and your partner at the same time, having 2 photographers will make sure there are no moments or angles missed. <br/> Typically for your wedding day the second photographer goes with your partner and their posse and I will go with you and your group. This ensures we capture all of those moments and no moments go missed. <br/> The second photographer is great! I have been working with her for the last 8 months and she's been actively editing and learning my posing techniques for the last 6 months. She's picked up photography very quickly and is eager to help capture your wedding day!</p>
                </div>
            </div>
            <div id="wedinvest-section-three">
                <h2>WANT TO SCHEDULE?</h2>
                <h5>CLICK "REQUEST A BOOKING"</h5>
                <button id="bookbtn"><Link to="/booking" element={<Book />} className="page-links">REQUEST A BOOKING</Link></button>
            </div>
            <div id="wedinvest-section-seven">
                <img src={wedinvest8} width="500px" height="700px" id="wedinvest-Img8"></img>
                <h1>The Process</h1>
            </div>
            <div className="the-process" id="the-process-one">
                <h4>ONE</h4>
                <h1>Inquire</h1>
                <p>Fill out my contact form and I will get back to you within 48 hours! <br/> Please over share your love story on my contact form. I love getting to know my couples!</p>
            </div>
            <div className="the-process">
                <h4>TWO</h4>
                <h1>Decide On A Package</h1>
                <p>After looking over my packages, you decide which one is the best fit and let me know. I'd love to meet you via Zoom or for coffee during this step! <br/> (Absolutely not required though!) I can also schedule a quick phone call to discuss your needs and help you pick the best package for you!</p>
            </div>
            <div className="the-process" id="the-process-two">
                <h4>THREE</h4>
                <h1>Proposal</h1>
                <p>This is the time to ask more questions if you have any. When you are ready, you are able to sign your contract and pay your retainer to reserve your date!</p>
            </div>
            <div id="wedinvest-section-eight">
                <img src={wedinvest9} width="1500px"></img>
                <p>How can I tell your love story uniquely?</p>
            </div>
            <div id="wedding-footer">
                <div>
                    <Link className="page-links"><span>About Me</span> <br/> GET TO KNOW ME</Link>
                </div>
                <div id="wedding-break"></div>
                <div>
                    <Link className="page-links"><span>Contact Me</span> <br/> GET IN TOUCH</Link>
                </div>
            </div>
        </section>
    )
}