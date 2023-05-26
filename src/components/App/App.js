import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);

  function onRegister() {}

  function onLogin() {}

  const handlelogOut = () => {};

  const onSearch = (search) => {};

  const handleSignInCLick = () => {
    setIsSignInPopupOpen(true);
  };
  const handleSignUpCLick = () => {
    setIsSignUpPopupOpen(true);
  };

  const closeAllPopups = useCallback(() => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
  }, []);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    const closeByOverlay = (e) => {
      if (e.target.classList.contains('popup_open')) {
        closeAllPopups();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    document.addEventListener('click', closeByOverlay);

    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document.removeEventListener('click', closeByOverlay);
    };
  }, [closeAllPopups]);

  return (
    <div className="app">
      <Header
        onSignIn={handleSignInCLick}
        onLogOut={handlelogOut}
        onSearchSubmit={onSearch}
      />

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="saved-news" element={<SavedNews />}></Route>
        </Route>
        <Route path="/" element={<Main />}>
          <Route path="signin" element={<SignInPopup />}></Route>
          <Route path="signup" element={<SignUpPopup />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>

      <Footer />

      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={closeAllPopups}
        onLinkClick={handleSignUpCLick}
        onLogin={onLogin}
      />
      <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={closeAllPopups}
        onLinkClick={handleSignInCLick}
        onRegister={onRegister}
      />
    </div>
  );
}

export default App;
