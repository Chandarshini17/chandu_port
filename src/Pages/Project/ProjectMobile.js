import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mush from "../../images/mush.jpeg";
import relief from "../../images/relief.jpg";
import talk from "../../images/talk.png";
import ride from "../../images/ride.jpg";

const ProjectMob = () => {
    const services = [
        {
            id: 1,
            title: "Relief-Radar",
            description: "Centralizes critical details from rescue agencies, utilizing GPS and tracking for real-time resource visualization.",
            image: relief,
            background: "linear-gradient(#74EBD580, #ACB6E580)",
            liveDemo: "#",
            gitHub: "https://github.com/ReliefRadar"
        },
        {
            id: 2,
            title: "Mushymate",
            description: "Led backend development, integrated real-time product management, and optimized order handling for better efficiency.",
            image: mush,
            background: "linear-gradient(#E59A4980, #51AFB780)",
            liveDemo: "#",
            gitHub: "https://github.com/Chandarshini17/Mushymate"
        },
        {
            id: 3,
            title: "Transient Talk",
            description: "Provides real-time, ephemeral messaging with end-to-end encryption and automatic message deletion for privacy.",
            image: talk,
            background: "linear-gradient(#5F307480, #3F5B8380)",
            liveDemo: "#",
            gitHub: "https://github.com/Chandarshini17/Transient_Talk"
        },
        {
            id: 4,
            title: "Ride Sharing Website",
            description: "A ride-sharing platform connecting drivers and passengers, with real-time tracking and secure payment integration.",
            image: ride,
            background: "linear-gradient(#5F307480, #3F5B8380)",
            liveDemo: "#",
            gitHub: "https://github.com/Chandarshini17/ride_sharing"
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>PROJECT</h1>
            <p style={styles.description}>
                As a full-stack developer passionate about building robust applications, I work closely with clients to transform their ideas into efficient, scalable solutions.
            </p>
            <Slider {...sliderSettings} style={styles.slider}>
                {services.map((service) => (
                    <div key={service.id} style={{ ...styles.card, background: service.background }}>
                        <img src={service.image} alt={service.title} style={styles.image} />
                        <div style={styles.textContainer}>
                            <h3 style={styles.cardHeading}>{service.title}</h3>
                            <p style={styles.cardDescription}>{service.description}</p>
                        </div>
                        <div style={styles.buttonContainer}>
                            <button style={styles.button} onClick={() => window.open(service.gitHub, "_blank")}>GitHub</button>
                            <button style={styles.button} onClick={() => window.open(service.liveDemo, "_blank")}>Live Demo</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "100%",
        margin: "0 auto",
        padding: "20px 10px",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
    },
    heading: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "15px",
        color: "#333",
    },
    description: {
        fontSize: "16px",
        color: "#666",
        marginBottom: "30px",
        lineHeight: "1.5",
    },
    slider: {
        width: "100%",
        maxWidth: "320px", 
        padding: "0 10px",
    },
    card: {
        borderRadius: "20px",
        padding: "15px",
        maxWidth: "280px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto", 
    },
    textContainer: {
        backgroundColor: "#FFFFFF80",
        borderRadius: "0 0 30px 0",
        padding: "10px",
        width: "90%",
        height: "120px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    cardHeading: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "8px",
        color: "#333",
    },
    cardDescription: {
        fontSize: "14px",
        color: "#555",
        lineHeight: "1.4",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "15px",
    },
    button: {
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
    },
    image: {
        width: "100%",       
        height: "250px",      
        objectFit: "cover",  
        borderRadius: "10px",  
    }    
};

export default ProjectMob;
