import React from 'react'
import "./Navbar.scss"
import { useState } from 'react'
import { AiOutlineAlignCenter } from "react-icons/ai"
import { FaTimes } from "react-icons/fa"

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [scrollClick, setScrollClick] = useState(false)

    window.addEventListener('scroll', function () {
        console.log(window.scrollY)
        if (window.scrollY > 50) {
            setScrollClick(true)
        } else {
            setScrollClick(false)
        }
    })


    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        < div className='navbar' style={scrollClick ? { background: "rgba(0, 255, 255, 0.692)" } : { background: "unset" }}>
            <h1>BIZNES.<span style={{ color: "#016CA8" }}>IT</span></h1>
            <ul className={isMobile ? "media" : "nav_links"}
                onClick={() => setIsMobile(false)}>
                <a style={{ textDecoration: "none", color: "#fff" }} href="biz"><li>Biz kimmiz?</li></a>
                <li>Xizmatlar</li>
                <li>Tezlatgich</li>
                <li>
                    Yangiliklar</li>
            </ul>
            <button onClick={toggleModal}>Kirish</button>
            {
                modal && (
                    <div className="modal">

                        <h1>
                            Ro'yxatdan o'tish</h1>
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='password' />
                        <button className='kirish'>Kirish</button>
                        <p>Parolni unitdingizmi</p>
                        <div onClick={toggleModal} className="overlay"></div>
                        <FaTimes onClick={toggleModal} className='fa_times' />

                    </div>
                )
            }
            <div className='menyu_icon'>
                <AiOutlineAlignCenter className='bars' />
            </div>
            <div className='menyu_icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<FaTimes />) : (<AiOutlineAlignCenter />)}
            </div>

        </div >
    )
}

export default Navbar