import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroMobile from "./HomeMobile";
import logo from "../../images/logo.png";
import resumePDF from "../../documents/Chandarshini_Resume.pdf";
import chan from "../../images/chandu.jpg";
import Project from "../Project/ProjectDesktop";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Icons from "../Icons";
import Footer from "../Footer/Footer";
import Experience from "../Experience/ExperienceDesktop";
import FreelanceProjects from "../Freelance/FreelanceDesktop";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = resumePDF;
        link.download = "Gokul_Raj_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (isMobile) {
        return <HeroMobile />;
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    background: "linear-gradient(to right, #0a0f1f, #0d2a5a, #0f4c8c)",
                    padding: "50px 20px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Logo, Title, and Navbar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        paddingLeft: "50px",
                        paddingRight: "50px",
                    }}
                >
                    {/* Logo and Title */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ display: "flex", alignItems: "center", gap: "10px" }}
                    >
                        {/* <img
                            src={logo}
                            alt="Logo"
                            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                        /> */}
                        <h1
                            style={{
                                fontSize: "40px",
                                fontWeight: "bold",
                                color: "#fff",
                                margin: 0,
                            }}
                        >
                            Chandarshini S
                        </h1>
                    </motion.div>

                    {/* Navbar */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            display: "flex",
                            gap: "20px",
                            whiteSpace: "nowrap", // Prevent wrapping
                        }}
                    >
                        {[
                            { name: "Home", ref: homeRef },
                            { name: "Experience", ref: experienceRef },
                            { name: "Project", ref: projectRef },
                            { name: "Skills", ref: skillsRef },
                            { name: "Contact", ref: contactRef },
                        ].map((item, index) => (
                            <motion.a
                                key={index} // Ensure unique key
                                onClick={() => handleScroll(item.ref)}
                                style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                    fontSize: "18px",
                                    position: "relative",
                                    cursor: "pointer",
                                    paddingLeft: "60px",
                                }}
                                whileHover={{ scale: 1.1, color: "#FFD700" }} // Gold hover effect
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Main Content */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "40px",
                        width: "100%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "50px 20px",
                    }}
                >
                    {/* Left Section: Text Content */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{
                            maxWidth: "550px",
                            textAlign: "left",
                            color: "#fff",
                        }}
                    >
                        <h2 style={{ fontSize: "38px", fontWeight: "bold", lineHeight: "1.3" }}>
                            Full-Stack Developer & Freelance Project Specialist
                        </h2>
                        <p style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.6" }}>
                            I am <b>Chandarshini</b>, a dedicated <b>Full-Stack Developer</b> and <b>Freelancer</b> passionate about delivering high-performance web applications.
                            With expertise in <b>JavaScript, React, Node.js, and Express.js</b>, I specialize in crafting user-friendly and scalable solutions.
                            Whether it’s front-end design, back-end optimization, or full-cycle project execution, I bring technical proficiency and innovation to every project.
                        </p>
                        <motion.button
                            onClick={handleResumeDownload}
                            style={{
                                marginTop: "25px",
                                padding: "12px 24px",
                                background: "#ff6f61",
                                border: "none",
                                borderRadius: "30px",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                color: "#fff",
                                cursor: "pointer",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                transition: "background 0.3s",
                            }}
                            whileHover={{
                                scale: 1.05,
                                background: "#ff3b2f",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Download Resume
                        </motion.button>
                    </motion.div>

                    {/* Right Section: Image */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            background: "#fff",
                            borderRadius: "20px",
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                            overflow: "hidden",
                        }}
                    >
                        <motion.img
                            src={chan}
                            alt="Illustration"
                            style={{
                                width: "350px",
                                height: "450px",
                                borderRadius: "20px",
                                objectFit: "cover",
                                transition: "transform 0.3s ease-in-out",
                            }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>
                </div>

            </motion.div>
            <Icons />
            <div ref={experienceRef}><Experience /></div>
            <div ref={projectRef}><Project /></div>
            <FreelanceProjects />
            <div ref={skillsRef}><Skills /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    );
};

export default Hero;
