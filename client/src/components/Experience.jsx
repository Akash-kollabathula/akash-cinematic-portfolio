import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0f0f15]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10">Experience</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer – HCL Technologies
            </h3>

            <p className="text-gray-400 mt-2">
              Dec 2023 – Present · Hyderabad
            </p>

            <ul className="mt-6 space-y-2 text-gray-300 list-disc list-inside">
              <li>
                Built and maintained scalable full-stack applications using the
                MERN stack.
              </li>
              <li>
                Developed reusable and high-performance React components using
                modern JavaScript (ES6+).
              </li>
              <li>
                Designed and integrated RESTful APIs with Node.js and Express.
              </li>
              <li>
                Managed MongoDB databases with Mongoose and optimized CRUD
                operations.
              </li>
              <li>
                Improved application performance through code optimization,
                lazy loading, and efficient state management.
              </li>
              <li>
                Collaborated with cross-functional teams using Git, pull
                requests, and Agile methodologies.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
