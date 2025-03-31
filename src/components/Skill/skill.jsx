import React from "react";
import "./skill.css";

// Import assets
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import mongo from "../../assets/mongodb.png";
import express from "../../assets/express.png";
import git from "../../assets/git.png";
import bootstrap from "../../assets/bootstrap.png";
import typescript from "../../assets/typescript.png";
import spfx from "../../assets/Sharepoint.png";
import mysql from "../../assets/MySql.png";

// SkillCard Component
const SkillCard = ({ imgSrc, title }) => (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex align-items-center justify-content-center">
        <div className="skill-card ">
            <div className="skill-icon mb-3">
                <img src={imgSrc} alt={title} />
            </div>
            <h5>{title}</h5>
        </div>
    </div>
);

const Skill = () => {
    // Skill data
    const skills = [
        
        { imgSrc: react, title: "React.js" },
        { imgSrc: express, title: "Express.js" },
        { imgSrc: node, title: "Node.js" },
        { imgSrc: mongo, title: "MongoDB" }, 
        { imgSrc: mysql, title: "MySQL" },
        { imgSrc: spfx, title: "SharePoint" },       
        { imgSrc: html, title: "HTML" },
        { imgSrc: css, title: "CSS" },
        { imgSrc: bootstrap, title: "Bootstrap" },
        { imgSrc: js, title: "JavaScript" },
        { imgSrc: typescript, title: "TypeScript" },
        { imgSrc: git, title: "Git" },
    ];

    return (
        <section id="skill">
            <div className="container">
                <h2 className="text-center">My <span className="keyword">Skills</span></h2>
                <div className="row  g-2">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} imgSrc={skill.imgSrc} title={skill.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
