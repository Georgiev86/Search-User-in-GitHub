import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Form from "./components/Form.jsx";
import User from "./components/User.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { fetchResults } from "./components/api";


export default function App() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function onSearchChange(event) {
        setQuery(event.target.value);
    }

    async function onSearchSubmit(event) {
        event.preventDefault();
        const results = await fetchResults(query);
        setResults(results);
    }

    return (
        <Router>
            <div className="app">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>
                <main className="main">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <h2>Project by D.Georgiev</h2>
                                <p>Search User in GitHub</p>
                                <Form
                                    onChange={onSearchChange}
                                    onSubmit={onSearchSubmit}
                                    value={query}
                                />
                                <h3>Results</h3>
                                <div id="results">
                                    <div>
                                        {results.map((user) => (
                                            <User
                                                key={user.login}
                                                avatar={user.avatar_url}
                                                url={user.html_url}
                                                username={user.login}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        } />
                        <Route path="/contact" element={<ContactUs />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
