export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold tracking-wide">
          Akash<span className="text-purple-500">.</span>
        </h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
