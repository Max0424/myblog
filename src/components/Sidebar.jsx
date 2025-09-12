import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-800 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">My Blog</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:underline">🏠 Home</Link>
        <Link to="/blog-1" className="hover:underline">📄 Where it started</Link>
        <Link to="/blog-2" className="hover:underline">📄 My first project</Link>
      </nav>
    </aside>
  );
}