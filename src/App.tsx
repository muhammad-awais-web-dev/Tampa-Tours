import './App.css';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
// Don't forget to wrap this component in ThemeProvider inside main.tsx!

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
      
      <nav className="navbar">
        <div className="logo">Tampa Tours</div>
        <ThemeToggle />
      </nav>

      <main>
        <Home />
      </main>

    </div>
    </ThemeProvider>
  );
}

export default App;