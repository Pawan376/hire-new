import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import GlobalNavbar from './Components/GlobalNavbar/GlobalNavbar';
import Home from './Components/SitePages/Home';
import Generator from './Components/SitePages/Generator';
import Search from './Components/SitePages/Search';
import SignIn from './Components/SignIn/SignIn';
import RequirementAnalysis from './Components/SitePages/RequirementAnalysis';
import ResumeAnalysis from './Components/SitePages/ResumeAnalysis';
import Creator from './Components/SitePages/Creator';
import Training from './Components/SitePages/Training';
import LoaderOverlay from './Components/HelperComponents/LoaderOverlay';
import { auth,googleProvider,fbprovider,setCookie,removeCookie } from './Components/config';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        localStorage.setItem('email', user.email);
        setUserData(user);
        setLogin(true);
        setCookie('user', JSON.stringify(user), { path: '/' });
      } else {
        setUserData(null);
        setLogin(false);
        removeCookie('user');
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = (provider) => {
    signInWithPopup(auth, provider)
      .then((data) => {
        if (data && data.user) {
          localStorage.setItem('email', data.user.email);
          setUserData(data.user);
          setLogin(true);
        } else {
          console.log('Login cancelled or failed');
        }
      })
      .catch((error) => {
        console.error('Authentication error:', error);
      });
  };

  const googleLoginHandler = () => {
    handleLogin(googleProvider);
  };

  const fbLoginHandler = () => {
    handleLogin(fbprovider);
  };

  const logoutHandler = () => {
    signOut(auth).then(() => {
      setLogin(false);
      removeCookie('user');
    });
  };

  if (loading) {
    return <LoaderOverlay />;
  }

  if (!login) {
    return <SignIn googleLoginHandler={googleLoginHandler} fbLoginHandler={fbLoginHandler} />;
  }

  return (
    <div>
      <GlobalNavbar userData={userData} logoutHandler={logoutHandler} />
      <Routes>
        <Route path="/" element={<Home userData={userData} />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/search" element={<Search />} />
        <Route path="/requirementAnalysis" element={<RequirementAnalysis />} />
        <Route path="/resumeAnalsis" element={<ResumeAnalysis />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
