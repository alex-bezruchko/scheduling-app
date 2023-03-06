import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './App.js';
import Layout from './components/Layout.js';

import Account from './components/pages/Account.js';
import UserList from './components/pages/admin/Userlist.js';
import Locations from './components/pages/admin/Locations.js';
import Appointments from './components/pages/admin/Appointments.js';
import Login from './components/pages/Login.js';
import CreateAccount from './components/pages/CreateAccount.js';
import PasswordReset from './components/pages/PasswordReset.js';
import NoPage from "./components/pages/NoPage.js";
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="users" element={<UserList />} />
          <Route path="locations" element={<Locations />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="password-reset" element={<PasswordReset />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
