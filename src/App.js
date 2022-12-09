
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js"
import Login from "./pages/Login.js"
import Register from "./pages/Register.js"
import Navbar from "./components/Navbar";
import { Provider } from "react-redux"
import { store } from "./Store"


function App() {


    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="./" element={<Main />} />
                        <Route path="./login" element={<Login />} />
                        <Route Path="./register" element={<Register />} />
                    </Routes >
                </Router >
            </Provider>
        </div >
    )

}

export default App;