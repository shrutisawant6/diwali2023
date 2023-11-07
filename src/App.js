import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {

    const images = [
        {
            id: "idI",
            url: "SadMan.gif",
            label: "Dont send long texts and make people sick!"
        },
        {
            id: "IdII",
            url: "HappyMan.gif",
            label: "Rather use this link and earn a smile."
        }
    ];

    const decorPicture = [
        {
            id: "fpI",
            width: "10%",
            top: "20%",
            left: "2%"
        },
        {
            id: "fpII",
            width: "18%",
            top: "30%",
            left: "80%"
        }
    ];

    const lampIPlacement = [
        {
            id: "lIpI",
            top: "72%", left: "80%"
        },
        {
            id: "lIpII",
            top: "72%", left: "75%"
        },
        {
            id: "lIpIII",
            top: "72%", left: "70%"
        },
        ,
        {
            id: "lIpIV",
            top: "50%", left: "5%"
        },
        {
            id: "lIpV",
            top: "50%", left: "10%"
        }
    ];

    const lampIIPlacement = [
        {
            id: "lIIpI",
            top: "65%", left: "10%"
        },
        {
            id: "lIIpII",
            top: "65%", left: "15%"
        },
        {
            id: "lIIpIII",
            top: "65%", left: "20%"
        }
    ];

    const lightsPlacement = [
        {
            id: "lpI",
            top: "0%", left: "2%"
        },
        {
            id: "lpII",
            top: "0%", left: "10%"
        },
        {
            id: "lpIII",
            top: "0%", left: "20%"
        },
        {
            id: "lpIV",
            top: "0%", left: "30%"
        },
        {
            id: "lpV",
            top: "0%", left: "40%"
        },
        {
            id: "lpVI",
            top: "0%", left: "50%"
        },
        {
            id: "lpVII",
            top: "0%", left: "60%"
        },
        {
            id: "lpVIII",
            top: "0%", left: "70%"
        },
        {
            id: "lpIX",
            top: "0%", left: "80%"
        }
    ];

    var imageCounter = 0;
    var imagesCount = images.length;
    const [show, toggleShow] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (imageCounter < imagesCount) {
                setCurrentImage(images[imageCounter]);
                imageCounter++;
            }
            else {
                setCurrentImage(null);
                toggleShow(!show);
                clearInterval(intervalId);
            }
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className="container">

                {currentImage == null && !show &&
                    <div className="blink"><span>This Diwali...</span></div>
                }

                {currentImage != null &&
                    <div> 
                        <img src={currentImage.url} width="50%" />
                        <label className="label-div" style={{ display: "block", "text-align": "center" }}>{currentImage.label}</label>
                    </div>
                }

                {show &&
                    <div>

                        <label className="label-div" style={{ position: "absolute", top: "20%", left: "25%" }}>Happy</label>
                        <label className="label-div" style={{ position: "absolute", top: "20%", left: "60%" }}>Diwali</label>

                        {decorPicture.map((pic) => {
                            return (
                                <img key={pic.id} id={pic.id} src="Decor1.gif" width={pic.width}
                                    style={{ position: "absolute", top: pic.top, left: pic.left }} />
                            );
                        })}

                        {lampIPlacement.map((pic) => {
                            return (
                                <img key={pic.id} src="Lamp1.gif" width="5%"
                                    style={{ position: "absolute", top: pic.top, left: pic.left }} />
                            );
                        })}

                        {lampIIPlacement.map((pic) => {
                            return (
                                <img key={pic.id} src="Lamp2.gif" width="10%"
                                    style={{ position: "absolute", top: pic.top, left: pic.left }} />
                            );
                        })}

                        {lightsPlacement.map((pic) => {
                            return (
                                <img key={pic.id} src="Lights.gif" width="12%"
                                    style={{ position: "absolute", top: pic.top, left: pic.left }} />
                            );
                        })}

                        <img src="Family.gif" width="60%" />

                    </div>
                }
            </div>
        </div>
    );
}


export default App;
