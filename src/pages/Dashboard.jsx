import React, { useState } from "react";
import "../css/Dashboard.css";
import dbjson from '../db.json'
import Component1 from "../components/Component1";

function Dashboard() {
    const [sections] = useState(dbjson.sections);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [selectedSection, setSelectedSection] = useState("");
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    return (
        <div className="dashboard-container">
            <div className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}>
                <div className="header">
                    <h3 className="app-title" style={{ fontFamily: 'Tahoma, sans-serif',cursor:'pointer' }} onClick={() => setSelectedSection("")}>Template</h3>
                </div>
                <button
                    className="toggle-sidebar-btn"
                    onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                >
                    {isSidebarExpanded ? "<<" : ">>"}
                </button>
                <ul className="sidebar-list">
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            onClick={() => setSelectedSection(section.name)}
                            className={`sidebar-item ${selectedSection === section.name ? "active" : ""}`}
                        >
                            <span className="sidebar-icon">{section.icon}</span>
                            {isSidebarExpanded && <span>{section.name}</span>}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="main-content">
                {selectedSection ? (
                    <>
                        <h1 className="section-title">{selectedSection}</h1>
                        <h2 className="current-date">{formattedDate}</h2>
                        <div className="section-content">
                            {selectedSection === "Component1" && (<Component1/>)}
                        </div>
                    </>
                ) : (
                    <h1>WELCOME TO AYDON'S TEMPLATE</h1>
                    )}
            </div>
        </div >
    );
}

export default Dashboard;
