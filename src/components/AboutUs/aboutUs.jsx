import React from "react";
import { useState } from "react";
import './aboutUs.css';
import { IoBriefcase } from "react-icons/io5";

const AboutUs = () => {
    const [content, setContent] = useState('Experience');

    return (
        <section id="aboutUs">
            <div className="container">
                <div className="row p-sm-0 p-3 ">
                    <div className=" col-12 col-md-4 d-flex align-items-start h-100">
                        <div>
                            <h2 className='text-center'>About <span className="keyword">Us</span> </h2>
                            <p className='my-3 text-wrap'>I have nearly two years of experience in web development, specializing in building applications using React.js, Express.js, and Node.js, with MongoDB for database management. I have been actively involved in all stages of the development process, including requirement gathering and deployment.
                            </p>
                            <div className='d-flex  gap-2 flex-wrap align-items-center '>
                                <button onClick={() => setContent("Experience")} className={content === "Experience" ? "active-btn my-3" : "inActive-btn my-3"}>Experience</button>
                                <button onClick={() => setContent("Education")} className={content === "Education" ? "active-btn my-3" : "inActive-btn my-3"}>Eductation</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-8 d-flex align-items-center h-100'>
                        {
                            content === "Experience" ?
                                <div >
                                    <h3 className="text-center">My <span className="keyword">Experience</span></h3>
                                    <div className="card-style w-100">
                                        <p className="keyword">May 2023 - since 2025</p>
                                        <h5>Software Developer</h5>
                                        <h6 className="keyTitle mb-3" >TNXT India Pvt Lmt</h6>
                                        <p >I am proficient in developing web applications using the MEAR stack and Microsoft SPFx, with experience in building REST APIs. My expertise also includes deploying and hosting both static and dynamic web applications in AWS and Hostinger VPS environments.</p>

                                    </div>

                                    <div className="card-style w-100">
                                        <p className="keyword">July 2021 - June 2023 </p>
                                        <h5 className="">Technology  Trainer </h5>
                                        <h6 className="keyTitle mb-3" > R2C Technologies</h6>
                                        <p>I have one year of experience as a technology trainer in web development and programming, along with additional expertise gained during my internship.</p>

                                    </div>

                                </div> :
                                <div >
                                    <h3 className="text-center">My <span className="keyword">Education</span></h3>
                                    <div className="card-style w-100">
                                        <p className="keyword">July 2017 - April 2020 </p>
                                        <h5 className="">Bachelor of Mathematics (B.Sc)</h5>
                                        <h6 className="keyTitle mb-3" >Government Arts and Science College.
                                        </h6>
                                        <p>CGPA  [7.7]</p>
                                    </div>
                                    <div className="card-style w-100">
                                        <p className="keyword">August 2021 - May 2023</p>
                                        <h5>Master of Computer Application</h5>
                                        <h6 className="keyTitle mb-3" >Dr. Mahalingam College of Engineering and Technology.</h6>
                                        <p >CGPA  [7.8]</p>

                                    </div>
                                </div>
                        }

                    </div>

                </div>
            </div>
        </section>
    );
}


export default AboutUs;