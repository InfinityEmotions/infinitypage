import React, { useRef, useState } from "react";
import Candy from "../assets/images/bn-candy.png";
import Mario from "../assets/images/bn-mario.png";
import Farm from "../assets/images/bn-farm.png";
import Terracota from "../assets/images/bn-terracota.png";
import Close from "../assets/images/close.png";
import { Image } from "@nextui-org/react";
import Cookies from "universal-cookie";

export const Main = (props) => {
    const fullscreen = useRef(null);
    const [url, setUrl] = useState();
    const urls = {
        'invasion': 'https://infinityslots.net/invasion/',
        'candy': 'https://infinityslots.net/candy/',
        'terracota': 'https://infinityslots.net/terracota/',
        'mario': 'https://infinityslots.net/mario/'
    };

    function OpenFullscreen(id) {
        const cookie = new Cookies();
        if(cookie.get("userdata") === undefined)
        {
            props.showLogin();
            return;
        }

        setUrl(urls[id]);
        fullscreen.current.style.display = "block";
        if (fullscreen.current.requestFullscreen) {
            fullscreen.current.requestFullscreen();
        } else if (fullscreen.current.mozRequestFullScreen) { // Firefox
            fullscreen.current.mozRequestFullScreen();
        } else if (fullscreen.current.webkitRequestFullscreen) { // Chrome, Safari e IE
            fullscreen.current.webkitRequestFullscreen();
        } else if (fullscreen.current.msRequestFullscreen) { // IE 11
            fullscreen.current.msRequestFullscreen();
        }
    }

    function CloseButton(e) {
        var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile)
            window.location.reload();
        else
            document.exitFullscreen();
        fullscreen.current.style.display = "none";
        setUrl("");
    }

    return (
        <div>
            
            <div className="container">
                <div className="grid">
                    <Image className="img-game" isBlurred src={Candy} onClick={e => OpenFullscreen('candy')} />
                    <Image className="img-game" isBlurred src={Mario} onClick={e => OpenFullscreen('mario')} />
                    <Image className="img-game" isBlurred src={Farm} onClick={e => OpenFullscreen('invasion')} />
                    <Image className="img-game" isBlurred src={Terracota} onClick={e => OpenFullscreen('terracota')} />
                </div>
            </div>

            <div className="hide" ref={fullscreen}>
                <span className="close" id="closeButton" onClick={CloseButton}>
                    <img src={Close} alt="Boton cerrar" title="Cerrar juego" width="50px" height="50px" />
                </span>
                <iframe id="frame" width="100%" height="100%" src={url}></iframe>

            </div>

            
        </div>
    );
}

export default Main;