import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
import {useEffect} from "react";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";

function App() {

    const [{user}, dispatch] = useStateValue();

    useEffect(()=> {  // useEffect - 동기화
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) { // User is signed in
                dispatch({
                    type: 'SET_USER',
                    user: user,
                })
            }else{ // User is signed out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        });
    },[]);

  return (
      <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<><Header/><Home/></>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/checkout" element={<><Header/><Checkout/></>}/>
                    <Route path="/payment" element={<Payment />}/>
                </Routes>
            </div>
      </Router>
  );
}

export default App;
