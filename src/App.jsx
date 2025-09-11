import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';

export default function App() {
  return (
    <div className="min-h-screen flex bg-zinc-900 text-white">
      <Sidebar />
      <main className="flex-1 p-10 space-y-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-1" element={<BlogPost1 />} />
          <Route path="/blog-2" element={<BlogPost2 />} />
        </Routes>
      </main>
    </div>
  );
}