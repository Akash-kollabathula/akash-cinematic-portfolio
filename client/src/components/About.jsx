import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
          I am a MERN Stack Developer with 2 years of professional experience,
          currently working as a React Developer at HCL Technologies. I specialize
          in building scalable, high-performance web applications using React,
          Node.js, Express, and MongoDB. I enjoy solving real-world problems and
          writing clean, maintainable code.
        </p>
      </motion.div>
    </section>
  );
}
