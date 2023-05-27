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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import {
  CurrentUserContext,
  isLoggedInContext,
} from '../../contexts/CurrentUserContext';
import {
  ArticleContext,
  SavedNewsArticle,
} from '../../contexts/ArticleContext';

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);

  //const [isInfoTootlipOpen, setIsInfoTootlipOpen] = useState(false);
  //const [tooltipStatus, setTooltipStatus] = useState(false);
  const [isInfoTootlipOpen, setIsInfoTootlipOpen] = useState(true);
  const [tooltipStatus, setTooltipStatus] = useState(false);

  const [savedArticles, setSavedArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  //  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const sampleArticles = [
    {
      keyword: 'Nature',
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: `Ever since I read Richard Louv's influential book, "Last child in the Woods,"
       the idea of having a special "sit spot" has stuck with me. This advice which louv attributes to nature educator Jon Young,
        is for both adults and children to find...`,
      date: 'November 4, 2020',
      source: 'TREEHUGGER',
      link: 'www.google.com',
      image:
        'https://w7.pngwing.com/pngs/998/297/png-transparent-johnny-bravo-cartoon-network-desktop-thug-life-miscellaneous-television-hand-thumbnail.png',
    },
    {
      keyword: 'Nature',
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: `Ever since I read Richard Louv's influential book, "Last child in the Woods,"
       the idea of having a special "sit spot" has stuck with me. This advice which louv attributes to nature educator Jon Young,
        is for both adults and children to find...`,
      date: 'November 4, 2020',
      source: 'TREEHUGGER',
      link: 'www.google.com',
      image:
        'https://w7.pngwing.com/pngs/998/297/png-transparent-johnny-bravo-cartoon-network-desktop-thug-life-miscellaneous-television-hand-thumbnail.png',
    },
    {
      keyword: 'Nature',
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: `Ever since I read Richard Louv's influential book, "Last child in the Woods,"
       the idea of having a special "sit spot" has stuck with me. This advice which louv attributes to nature educator Jon Young,
        is for both adults and children to find...`,
      date: 'November 4, 2020',
      source: 'TREEHUGGER',
      link: 'www.google.com',
      image:
        'https://w7.pngwing.com/pngs/998/297/png-transparent-johnny-bravo-cartoon-network-desktop-thug-life-miscellaneous-television-hand-thumbnail.png',
    },
    {
      keyword: 'Nature',
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: `Ever since I read Richard Louv's influential book, "Last child in the Woods,"
       the idea of having a special "sit spot" has stuck with me. This advice which louv attributes to nature educator Jon Young,
        is for both adults and children to find...`,
      date: 'November 4, 2020',
      source: 'TREEHUGGER',
      link: 'www.google.com',
      image:
        'https://w7.pngwing.com/pngs/998/297/png-transparent-johnny-bravo-cartoon-network-desktop-thug-life-miscellaneous-television-hand-thumbnail.png',
    },
    {
      keyword: 'Nature',
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: `Ever since I read Richard Louv's influential book, "Last child in the Woods,"
       the idea of having a special "sit spot" has stuck with me. This advice which louv attributes to nature educator Jon Young,
        is for both adults and children to find...`,
      date: 'November 4, 2020',
      source: 'TREEHUGGER',
      link: 'www.google.com',
      image:
        'https://w7.pngwing.com/pngs/998/297/png-transparent-johnny-bravo-cartoon-network-desktop-thug-life-miscellaneous-television-hand-thumbnail.png',
    },
  ];
  const sampleUser = { email: 'a@a.com', password: '12345678', name: 'Elise' };

  localStorage.setItem('articles', JSON.stringify(sampleArticles));

  useEffect(() => {
    setSavedArticles(sampleArticles);
    setCurrentUser(sampleUser);
  }, []);

  const [article, setArticle] = useState(
    JSON.parse(localStorage.getItem('articles')) || []
  );

  function onRegister() {
    setTooltipStatus(true);
  }

  function onLogin() {
    setIsLoggedIn(true);
    closeAllPopups();
  }

  const handlelogOut = () => {
    localStorage.removeItem('articles');
    setIsLoggedIn(false);
    setArticle([]);
    setSavedArticles([]);
  };

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
    setIsInfoTootlipOpen(false);
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
    <CurrentUserContext.Provider value={currentUser}>
      <isLoggedInContext.Provider value={isLoggedIn}>
        <ArticleContext.Provider value={article}>
          <SavedNewsArticle.Provider value={savedArticles}>
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
              <InfoTooltip
                isOpen={isInfoTootlipOpen}
                onClose={closeAllPopups}
                tooltipStatus={tooltipStatus}
                onSignInCLick={handleSignInCLick}
                onSignUpCLick={handleSignUpCLick}
              />
            </div>
          </SavedNewsArticle.Provider>
        </ArticleContext.Provider>
      </isLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
