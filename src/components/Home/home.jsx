import React from 'react';
import './home.css';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import profile from "../../assets/My-Profile.png";

const Home = () => {
    return (
        <section id='home'>
            <div className="home container">
                <div className="row p-sm-0 p-3">
                    <div className=" col-12 col-md-6  d-flex align-items-center my-3">
                        <div className='d-block'>
                            <h2 className='text-wrap'>Hi, I'm Gnana Prahaasam</h2>
                            <h3 className='my-3' data-text="MERN Stack Developer">MERN Stack Developer</h3>
                            <p className='my-3 '>I’m a software developer passionate about continuous learning, skilled in FullStack development. Proficient in multiple programming languages and problem-solving. I am seeking a collaborative team where I can enhance my skills and contribute meaningfully to growth while advancing my career.
                            </p>
                            <div className='d-flex flex-row align-items-center flex-wrap flex-sm-nowrap'>
                                <a href="#" download className='my-2 cv-btn'>
                                    Get My CV
                                </a>
                                <div className='social'>
                                    <a href="" className='' target='_blank'><IoLogoGithub /></a>
                                    <a href="" className='' target='_blank'><IoLogoLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-flex justify-content-center align-items-center my-4'>
                        <div className='profile-box'>
                            <div className='profile-img'>
                                <img src={profile} alt='My-Profile' className='' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );

}

export default Home;