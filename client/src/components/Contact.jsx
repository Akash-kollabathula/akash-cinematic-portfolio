import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
     await axios.post(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  formData
);

      setStatus("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#0f0f15]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black/40 border border-white/10 rounded text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black/40 border border-white/10 rounded text-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black/40 border border-white/10 rounded text-white"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-gray-400 mt-2">{status}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
