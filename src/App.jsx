import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
    </>
  );
}

export default App;
