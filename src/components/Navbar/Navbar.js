import React from 'react'
import "./Navbar.scss"
import { useState } from 'react'
import { AiOutlineAlignCenter } from "react-icons/ai"
import { FaTimes } from "react-icons/fa"

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [scrollClick, setScrollClick] = useState(false)

    console.log(scrollClick)
    window.addEventListener('scroll', function () {
        console.log(window.scrollY)
        if (window.scrollY > 50) {
            setScrollClick(true)
        } else {
            setScrollClick(false)
        }
    })


    return (
        <header style={scrollClick ? { background: "rgba(0, 255, 255, 0.692)" } : { background: "unset" }}>
            <h1>BIZNES.<span style={{ color: "#016CA8" }}>IT</span></h1>
            <ul style={{}} className={isMobile ? "media" : "nav_links"}
                onClick={() => setIsMobile(false)}>
                <li>Biz kimmiz?</li>
                <li>Xizmatlar</li>
                <li>Tezlatgich</li>
                <li>
                    Yangiliklar</li>
            </ul>
            <button>Kirish</button>
            <div className='menyu_icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<FaTimes />) : (<AiOutlineAlignCenter />)}
            </div>

        </header>
    )
}

export default Navbar