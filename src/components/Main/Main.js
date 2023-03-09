import React from 'react'
import "./Main.scss"
import Navbar from "../Navbar/Navbar"
import Xizmat from "../xizmatlarimiz/xizmat"
function Main() {
    return (
        <div>
            <Navbar />
            <div className='main'>
                <h1>Yuguring <br />
                    <span style={{ background: "#07AF91" }}>Texnologik IT biznes</span> <br />
                    xalqaro bozorlarda</h1>

                <h3>Ochiq tezlatgich ilovalari uchun qo'ng'iroq qiling</h3>

                <button>Qong'iroq qilish</button>
            </div>
            {/* <Xizmat /> */}
        </div>
    )
}

export default Main