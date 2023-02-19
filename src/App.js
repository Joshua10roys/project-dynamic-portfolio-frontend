import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate, Outlet } from 'react-router-dom';
import axios from "axios";
import { SERVER_URL } from "./utilities/links.js";
import HomePage from "./pages/homePage.js";
import AdminPage from "./pages/adminPage.js";
import DisplayAlert from "./components/otherCompo/alert.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './style/homePage.css'


export default function App() {

  const navigate = useNavigate();
  // login status
  const [login, setLogin] = useState(localStorage.getItem("auth_token"));
  // alert bar
  const [alert, setAlert] = useState({ display: false, message: "", variant: "" });

  // alert function
  const displayAlert = (msg, vari) => {
    setAlert({ display: true, message: msg, variant: vari });
  }

  // token validation check
  useEffect(() => {

    let token = localStorage.getItem("auth_token");

    if (token) {
      axios.get(`${SERVER_URL}/user/checkToken`, { headers: { "token": token } })
        .then(res => {
          if (res.status == 200) {
            setLogin(true);
          }
        })
        .catch(err => {
          if (err.response.status == 401) {
            setLogin(false);
            localStorage.clear();
            setTimeout(() => {
              displayAlert('Your Session Expired', 'warning')
            }, 500);
          }
        })
    }
  }, [])

  // logout function
  const logout = async () => {
    localStorage.clear();
    setLogin(false);
    navigate('/');
    displayAlert('Logout Successful', 'primary');
  }

  // private route
  const PrivateRoute = () => {
    return (
      login ? <Outlet /> : <Navigate to='/' />
    )
  }


  return (
    <>

      <DisplayAlert alert={alert} setAlert={setAlert} />

      <Routes >

        <Route path="/" element={<HomePage login={login} setLogin={setLogin} logout={logout} displayAlert={displayAlert} />} />
        <Route element={<PrivateRoute />} >
          <Route path="/admin" element={<AdminPage logout={logout} />} />
        </Route>

      </Routes>

    </>
  )
}