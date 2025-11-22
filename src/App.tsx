import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home/Home';
// Don't forget to wrap this component in ThemeProvider inside main.tsx!

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
      <Navbar />
      <main>
        <Home />
      </main>

    </div>
    </ThemeProvider>
  );
}

export default App;