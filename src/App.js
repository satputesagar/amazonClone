
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import { useEffect } from 'react';
import { auth } from "./firebase";




function App( {dispatch}) {
  useEffect(()=>{
    // will only run once when the app component load...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
  
      if (authUser) {
        // the user just logged in / the user was logged in
  
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Header/>
     <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
       <Route path="/login" element={<Login/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
