import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Better arrow icon

const experiences = [
  {
    title: "Habsy Technologies | Frontend Developer",
    location: "Remote (Bangalore)",
    duration: "8th July 2024 - 8th October 2024",
    description:
      "Assisted the technical team in front-end development tasks and contributed to company projects. Gained hands-on experience in front-end technologies and improved technical skills. Adapted to feedback, demonstrating continuous learning and progress. Collaborated effectively with team members, showcasing strong communication skills. Maintained punctuality and a proactive approach to assigned responsibilities.",
    image: "https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg",
  },
  {
    title: "1CloudHub | AWS Intern",
    location: "Coimbatore",
    duration: "December - 2023",
    description:
      "Gained hands-on experience with AWS services, including VPC, IAM, EC2, Auto Scaling, ALB, S3, EFS, RDS, and CloudWatch. Developed expertise in cloud deployment and storage management.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZll4dlRnEmZoY_FTOQsRItuv7Tl2c4hMG7w&s",
  },
  {
    title: "ElectroClouds Lab | MERN Stack Intern",
    location: "Coimbatore",
    duration: "July - 2023",
    description:
      "Demonstrated proficiency in MERN Stack development through successful project completion. Worked with technologies such as HTML, CSS, JavaScript, MySQL, MongoDB, React.js, and Node.js. Gained practical experience in full-stack web development and database management.",
    image: "https://www.mangoitsolutions.com/wp-content/uploads/2022/01/becomeamernstackdeveloper-mobile-300x279.png",
  },
];

const ExperienceAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const styles = {
    section: {
      maxWidth: "800px",
      margin: "auto",
      fontFamily: "'Poppins', sans-serif",
    },
    heading: {
      fontSize: "32px",
      fontWeight: "600",
      textAlign: "center",
      textTransform: "uppercase",
      color: "#222",
      paddingBottom: "10px",
      marginBottom: "25px",
    },
    accordionItem: {
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "transparent",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      marginBottom: "15px",
      transition: "all 0.3s ease",
    },
    accordionHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      padding: "15px 20px",
      backgroundColor: "rgba(9, 113, 232, 0.1)", // Light transparent blue
      borderRadius: "10px",
      transition: "background 0.3s ease",
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
    },
    image: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      marginRight: "15px",
      backgroundColor: "#fff",
      padding: "5px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "500",
    },
    icon: {
      fontSize: "18px",
      transition: "transform 0.3s ease",
    },
    details: {
      padding: "15px",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Light transparent white
      display: "none",
      transition: "0.3s",
    },
    detailsOpen: {
      display: "block",
    },
    description: {
      fontSize: "16px",
      color: "#444",
      marginTop: "10px",
      lineHeight: "1.6",
    },
    duration: {
      fontSize: "14px",
      color: "#555",
      fontWeight: "500",
    },
    location: {
      fontSize: "14px",
      fontStyle: "italic",
      color: "#777",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
          style={{
            ...styles.accordionItem,
            transform: openIndex === index ? "scale(1.02)" : "scale(1)",
          }}
        >
          <div
            style={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            <div style={styles.titleContainer}>
              <img src={exp.image} alt={exp.title} style={styles.image} />
              <span style={styles.title}>{exp.title}</span>
            </div>
            <FaChevronDown
              style={{
                ...styles.icon,
                transform: openIndex === index ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </div>
          <div
            style={{
              ...styles.details,
              ...(openIndex === index ? styles.detailsOpen : {}),
            }}
          >
            <p style={styles.duration}>
              <strong>Duration:</strong> {exp.duration}
            </p>
            <p style={styles.location}>
              <strong>Location:</strong> {exp.location}
            </p>
            <p style={styles.description}>{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceAccordion;
