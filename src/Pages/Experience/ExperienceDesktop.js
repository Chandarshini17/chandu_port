import React from "react";

const experiences = [
  {
    title: "Habsy Technologies | Frontend Developer",
    location: "Remote (Bangalore)",
    duration: "8th July 2024 - 8th October 2024",
    description:
      "Assisted the technical team in front-end development tasks and contributed to company projects. Gained hands-on experience in front-end technologies and improved technical skills. Adapted to feedback, demonstrating continuous learning and progress. Collaborated effectively with team members, showcasing strong communication skills. Maintained punctuality and a proactive approach to assigned responsibilities.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
  },
  {
    title: "1CloudHub | AWS Intern",
    location: "Coimbatore",
    duration: "December - 2023",
    description:
      "Gained hands-on experience with AWS services, including VPC, IAM, EC2, Auto Scaling, ALB, S3, EFS, RDS, and CloudWatch. Developed expertise in cloud deployment and storage management.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
  },
  {
    title: "ElectroClouds Lab | MERN Stack Intern",
    location: "Coimbatore",
    duration: "July - 2023",
    description:
      "Demonstrated proficiency in MERN Stack development through successful project completion. Worked with technologies such as HTML, CSS, JavaScript, MySQL, MongoDB, React.js, and Node.js. Gained practical experience in full-stack web development and database management.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
  },
];

const Experience = () => {
  const styles = {
    section: {
      textAlign: "center",
      padding: "40px 20px",
      fontFamily: "'Arial', sans-serif",
    },
    heading: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
      textTransform: "uppercase",
      display: "inline-block",
      paddingBottom: "5px",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
    },
    card: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      maxWidth: "800px",
      width: "100%",
      borderBottom: "2px solid #ccc",
      padding: "20px 0",
    },
    image: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
    },
    content: {
      textAlign: "left",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#222",
    },
    location: {
      fontSize: "18px",
      fontWeight: "500",
      color: "#666",
      marginBottom: "5px",
    },
    duration: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#666",
      marginBottom: "5px",
    },
    description: {
      fontSize: "16px",
      color: "#444",
      lineHeight: "1.5",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>
      <div style={styles.container}>
        {experiences.map((exp, index) => (
          <div key={index} style={styles.card}>
            <img src={exp.image} alt={exp.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.title}>{exp.title}</h3>
              <p style={styles.location}>{exp.location}</p>
              <p style={styles.duration}>{exp.duration}</p>
              <p style={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
