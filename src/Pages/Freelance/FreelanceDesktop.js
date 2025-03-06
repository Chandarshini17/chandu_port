import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const styles = {
  section: {
    padding: "50px 20px",
    textAlign: "center",
    background: "#fff",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  projectCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  projectTitle: {
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "#222",
    marginBottom: "10px",
  },
  projectDesc: {
    fontSize: "1rem",
    color: "#444",
    marginBottom: "10px",
  },
  projectLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "1rem",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
  },
};

const projects = [
  {
    title: "Portfolio Website",
    description: "Developed a sleek and interactive portfolio website.",
    github: "https://github.com/Chandarshini17/portfolio",
  },
  {
    title: "Publication Backend",
    description: "Built a robust backend for a research publication system.",
    github: "https://github.com/Chandarshini17/publicationBackend",
  },
  {
    title: "Fashion E-Commerce Website",
    description: "Designed and implemented a fashion e-commerce platform.",
    github: "https://github.com/Chandarshini17/ai_fashoin",
  },
];

const FreelanceProjects = () => {
  return (
    <section style={styles.section}>
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 style={styles.title}>Freelanced Projects</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={styles.projectCard}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                <FaGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FreelanceProjects;
