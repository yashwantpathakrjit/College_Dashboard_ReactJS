import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <div className="d-flex">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        {/* Add more routes for courses and students */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;