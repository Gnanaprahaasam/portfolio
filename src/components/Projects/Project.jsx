import React from "react";
import "./Project.css";
import { IoLogoGithub, IoGlobeOutline } from "react-icons/io5";
import sirihrconsultant from "../../assets/sirihrconsulting.png";
import CuMinds from "../../assets/CuMinds.png";
import EduVerse from "../../assets/EduVerse.png";
import OneStopShop from "../../assets/OneStopShop.png";
import R2CRobotics from "../../assets/R2CRobotics.png";
import chithiraipandian from "../../assets/chithiraipandian.png"

const Project = () => {
    return (
        <section id="myprojects">
            <div className="container ">
                <h2 className="text-center mb-3">Latest<span className="keyword"> project </span></h2>
                <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="project-card">
                            <img src={sirihrconsultant} alt="sirihrconsultant" width={100} className="mb-3" />

                            <h2 className="">01</h2>
                            <h5 className="">Siri HR Consulting</h5>
                            <p className="keyword">HTML | CSS3 | Bootstrap | Js</p>
                            <hr className="" />
                            <div className="project-link">
                                {/* <a href="http://" className=" " target="_blank"> <IoLogoGithub /> </a> */}
                                <a href="https://www.sirihrconsultant.com/" className=" " target="_blank" title="Live Site"> <IoGlobeOutline />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 ">
                        <div className="project-card">
                            <img src={CuMinds} alt="CuMinds" width={100} className="mb-3" />

                            <h2 className="">02</h2>
                            <h5 className="">Cu Minds</h5>
                            <p className="keyword">React | HTML | CSS | Bootstrap5 </p>
                            <hr className="" />
                            <div className="project-link">
                                {/* <a href="http://" className=" " target="_blank"> <IoLogoGithub /> </a> */}
                                <a href="https://Gnanaprahaasam-SR.github.io/cuMinds" className=" " target="_blank" title="Live Site"> <IoGlobeOutline />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="project-card">
                            <img src={OneStopShop} alt="Shop" width={100} className="mb-3" />

                            <h2 className="">03</h2>
                            <h5 className="">OneStopShop</h5>
                            <p className="keyword">React | HTML | CSS | Bootstrap5  </p>
                            <hr className="" />
                            <div className="project-link">
                                {/* <a href="http://" className=" " target="_blank"> <IoLogoGithub /> </a> */}
                                <a href="https://gnanaprahaasam-sr.github.io/OnestopShop/#/" className=" " target="_blank" title="Live Site"> <IoGlobeOutline />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="project-card">
                            <img src={EduVerse} alt="EduVerse" width={100} className="mb-3" />

                            <h2 className="">04</h2>
                            <h5 className="">EduVerse</h5>
                            <p className="keyword">React | HTML | CSS | Bootstrap  </p>
                            <hr className="" />
                            <div className="project-link">
                                {/* <a href="http://" className=" " target="_blank"> <IoLogoGithub /> </a> */}
                                <a href="https://vishwa10032000.github.io/Learning-Management-System/" className=" " target="_blank" title="Live Site"> <IoGlobeOutline />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="project-card">
                            <img src={R2CRobotics} alt="Robotic" width={100} className="mb-3" />

                            <h2 className="">05</h2>
                            <h5 className="">R2CRobtics</h5>
                            <p className="keyword">React | HTML | CSS | Bootstrap  </p>
                            <hr className="" />
                            <div className="project-link">
                                {/* <a href="http://" className=" " target="_blank"> <IoLogoGithub /> </a> */}
                                <a href="https://Gnanaprahaasam.github.io/R2C-Robotics" className=" " target="_blank" title="Live Site"> <IoGlobeOutline />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                        <div className="project-card">
                            <img src={chithiraipandian} alt="CA" width={100} className="mb-3" />

                            <h2 className="">06</h2>
                            <h5 className="">Chithiraipandian CA</h5>
                            <p className="keyword">React | HTML | CSS | Bootstrap  </p>
                            <hr className="" />
                            <div className="project-link">
                                {/* <a href="http://" className=" " target="_blank"> <IoLogoGithub /> </a> */}
                                <a href="https://chithiraipandianandco.com" className=" " target="_blank" title="Live Site"> <IoGlobeOutline />  </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Project;