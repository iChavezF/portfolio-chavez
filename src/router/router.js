import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { AboutScreen } from '../screens/AboutScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Navbar } from '../components/Navbar';
import { NotFoundScreen } from "../screens/NoFoundScreen";
import { ShowcaseScreen } from '../screens/ShowcaseScreen';
import { SkillsScreen } from '../screens/SkillsScreen';


export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/showcases" element={<ShowcaseScreen />} />
                <Route path="/skills" element={<SkillsScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </Router>

    )
}
