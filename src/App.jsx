import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from './layout';
import { MoviePage } from './components/MoviePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;