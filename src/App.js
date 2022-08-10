import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignInPage from './pages/signin/sign_in';
import SignupPage from './pages/register/signup';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/home';

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
