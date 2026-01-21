import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center max-w-3xl px-4"
      >
        <h1 className="text-6xl font-bold">
          Akash <span className="text-purple-500">Kollabathula</span>
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          MERN Stack Developer · React Developer @ HCL Technologies
        </p>

        <p className="mt-4 text-gray-500">
          Building scalable, high-performance web applications.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-full hover:border-purple-500 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
