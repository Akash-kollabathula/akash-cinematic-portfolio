import { motion } from "framer-motion";

const projects = [
  {
    title: "Device Inventory Management System",
    description:
      "A role-based web application to track, allocate, and manage organizational devices. Includes request approval workflows, check-in/check-out logs, and real-time device availability.",
    tech: "React, Node.js, Express, MongoDB, JWT",
  },
  {
    title: "Task Management System",
    description:
      "A scalable task management platform enabling teams to plan, assign, and track tasks with role-based access, secure authentication, and real-time status updates.",
    tech: "MERN Stack, REST APIs, MongoDB, JWT",
  },
  {
    title: "Digital Attendance Web Application",
    description:
      "An employee attendance system with daily check-in/check-out, working hour tracking, geo-location validation, and manager dashboards for reporting.",
    tech: "React, Node.js, Express, MongoDB",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <p className="text-sm text-purple-400">
                  {project.tech}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
