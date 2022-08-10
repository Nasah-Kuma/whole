import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignInPage from './pages/signin/sign_in';
import SignupPage from './pages/register/signup';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/home';
// eslint-disable-next-line import/order
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector(((state) => state.auth));
  console.log(auth);
  return (
    <div className="content">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={(auth.isAuthenticated) ? <Home /> : <SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
