import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiJavascript, SiHtml5, SiCss3, SiIntellijidea, SiFigma } from "react-icons/si";

const styles = {
  section: {
    padding: "50px 20px",
    textAlign: "center",
    background: "#fff", // White background
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  skillBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  iconStyle: {
    fontSize: "2rem",
    marginBottom: "8px",
    color: "#555",
  },
  skillText: {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#222",
  },
};

const skills = [
  { name: "Java", icon: <FaJava style={{ color: "#f89820" }} /> },
  { name: "HTML", icon: <SiHtml5 style={{ color: "#e34c26" }} /> },
  { name: "CSS", icon: <SiCss3 style={{ color: "#1572b6" }} /> },
  { name: "JavaScript", icon: <SiJavascript style={{ color: "#f7df1e" }} /> },
  { name: "React JS", icon: <FaReact style={{ color: "#61dafb" }} /> },
  { name: "Node JS", icon: <FaNodeJs style={{ color: "#68a063" }} /> },
  { name: "MongoDB", icon: <SiMongodb style={{ color: "#4db33d" }} /> },
  { name: "MySQL", icon: <SiMysql style={{ color: "#4479a1" }} /> },
  { name: "Github", icon: <FaGithub style={{ color: "#333" }} /> },
  { name: "IntelliJ", icon: <SiIntellijidea style={{ color: "#000" }} /> },
  { name: "Figma", icon: <SiFigma style={{ color: "#f24e1e" }} /> },
];

const Skills = () => {
  return (
    <section style={styles.section}>
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 style={styles.title}>Skills & Technologies</h2>
        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              style={styles.skillBox}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                {skill.icon}
                <div style={styles.skillText}>{skill.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
