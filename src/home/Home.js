import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <div className="graf-bg-container">
                        <div style={{marginLeft: "30x"}} className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>
                    </div>
                    <h1 style={{marginLeft: "30px"}} className="home-title">Welcome</h1>
                    <img src="qi.jpg" alt="image1"style={{ width: "400px", height: "300px", marginLeft: "30px",float:"center" }}></img>
                </div>
            </div>
        )
    }
}

export default Home;