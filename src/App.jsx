import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Models from './pages/Models';
import Instructions from './pages/Instructions';
import FAQ from './pages/FAQ';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}