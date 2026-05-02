import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SignInCard from './components/signup/SignInCard';
import Dashboard from './pages/Dashboard';
import Profile from './pages/account/Profile';
import AccountLayout from './layouts/AccountLayout';
import CloseAccount from './pages/account/CloseAccount';
import Security from './pages/account/Security';
import EditPhoneNumber from './components/account/EditPhoneNumber';
import EditLegalName from './components/account/EditLegalName';
import EditEmailAddress from './components/account/EditEmailAddress';
import EditResidentialAddress from './components/account/EditResidentialAddress';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<AccountLayout />}>
          <Route index element={<Profile />} />
          <Route path="edit">
            <Route path="phone-number" element={<EditPhoneNumber />} />
            <Route path="legal-name" element={<EditLegalName />} />
            <Route path="email" element={<EditEmailAddress />} />
            <Route path="residential-address" element={<EditResidentialAddress />} />
          </Route>
          <Route path="security" element={<Security />} />
          <Route path="close" element={<CloseAccount />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
