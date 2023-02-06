import React from "react";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

import { about } from "./data/data.js";
import { education } from "./data/data.js";
import { skill } from "./data/data.js";
import { experiance } from "./data/data.js";

import HomePage from "./pages/portfolio.js";
import AdminPage from "./pages/adminPage.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/homePage.css'


export default function App() {

  const [details, setDetails] = useState(null);
  const [login, setLogin] = useState(false);

  const data = [about, education, skill, experiance];

  setTimeout(() => {
    setDetails("")
  }, 1500);

  return (

    <Routes >

      <Route path="/" element={<HomePage details={details} login={login} data={data} />} />
      <Route path="/admin" element={<AdminPage details={details} login={login} />} />

    </Routes>

  )
}