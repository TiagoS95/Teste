import './App.scss';
import "./components/Navbar/Navbar.js";
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
function App() {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
