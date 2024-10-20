import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicPage1 from './components/PublicPage1';
import PublicPage2 from './components/PublicPage2';
import Login from './pages/Login';
import PrivatePage1 from './components/PrivatePage1';
import PrivatePage2 from './components/PrivatePage2';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';  

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/public1" element={<PublicPage1 />} />
                <Route path="/public2" element={<PublicPage2 />} />

                {/* Private Routes */}
                <Route
                    path="/private1"
                    element={
                        <ProtectedRoute>
                            <div>
                                <Header />  
                                <PrivatePage1 />
                            </div>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/private2"
                    element={
                        <ProtectedRoute>
                            <div>
                                <Header />  
                                <PrivatePage2 />
                            </div>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;


