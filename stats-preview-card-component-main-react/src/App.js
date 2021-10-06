// import logo from './logo.svg';
import './App.css';
import Attribution from './components/Attribution';
import Card from './components/Card';

function App() {
  document.title="Frontend Mentor | Stats preview card component"
  return (
    <div className="main">
      <Card />
      <Attribution />
    </div>
  );
}

export default App;