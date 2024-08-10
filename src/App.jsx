import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import ArtistGridPage from './pages/Artist/ArtistGridPage'
import PasswordPage from './pages/Password/PasswordPage';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import DashboardPage from './pages/Dashboard/DashboardPage';
import HomePage from './pages/Dashboard/HomePage';
import ExplorePage from './pages/Dashboard/ExplorePage';
import PremiumPage from './pages/Dashboard/PremiumPage';
import HistoryPage from './pages/Dashboard/HistoryPage';
import LibraryPage from './pages/Dashboard/LibraryPage';
import LikePage from './pages/Dashboard/LikePage';
import SavePage from './pages/Dashboard/SavePage';
import SubscriptionFormPage from './pages/Subscription/SubscriptionFormPage';
import ConfrimationPage from './pages/Subscription/ConfrimationPage';
import PlaylistPage from './pages/Dashboard/PlaylistPage';
import { useState } from 'react';

function App() {
  const [showNav, setshowNav] = useState(true)
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/password' element={<PasswordPage />} />
      <Route path='/artist' element={<ArtistGridPage />} />
      <Route path='/subscription/form' element={<SubscriptionFormPage />} />
      <Route path='/confirmation' element={<ConfrimationPage />} />
      <Route path="/dashboard/" element={<DashboardPage setshowNav={setshowNav} showNav={showNav}  />}>
        <Route path='home' element={<HomePage setshowNav={setshowNav} showNav={showNav} />} />
        <Route path='explore' element={<ExplorePage setshowNav={setshowNav} showNav={showNav} />} />
        <Route path='premium' element={<PremiumPage setshowNav={setshowNav} showNav={showNav} />} />
        <Route path='history' element={<HistoryPage setshowNav={setshowNav} showNav={showNav} />} />
        <Route path='library' element={<LibraryPage setshowNav={setshowNav} showNav={showNav} />} />
        <Route path='library/like' element={<LikePage setshowNav={setshowNav} showNav={showNav} />} />
        <Route path='library/save' element={<SavePage setshowNav={setshowNav} showNav={showNav} />} />
        <Route path='playlist' element={<PlaylistPage setshowNav={setshowNav} showNav={showNav} />} />
        <Route path='explore/playlist' element={<PlaylistPage  setshowNav={setshowNav} showNav={showNav} />} />
      </Route>
    </Routes>
  );
}

export default App;
