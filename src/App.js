import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
