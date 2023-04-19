import { Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import RootLayout from './Layout/RootLayout';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Dashboard" element={<RootLayout />} />
        <Route path="/Dashboard/profile" element={<Profile />} />
        <Route path="/Dashboard/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
