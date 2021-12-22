import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { AboutScreen } from '../screens/AboutScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Navbar } from '../components/Navbar';
import { NoFoundScreen } from "../screens/NoFoundScreen";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div>Media pantalla izq</div>
                <div>
                Media pantalla derecha
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route path="/about" element={<AboutScreen />} />
                        <Route path="*" element={<NoFoundScreen />} />
                    </Routes>
                </div>
            </div>
        </Router>

    )
}
