import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
// import { useContext, useEffect } from 'react';

function App() {
  // const context = useContext(noteContext);
  //   const { getUser, user } = context;

    // const location = useLocation();

    // useEffect(() => {
    //     if (localStorage.getItem('token') && (location.pathname === '/' || location.pathname === '/about')) {
    //         getUser();
    //     }
    //     // eslint-disable-next-line
    // }, [])

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
