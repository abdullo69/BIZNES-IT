import React from 'react'
import "./xizmat.scss"
import img1 from "../Images/xizmat.png"
function xizmat() {
    return (
        <div>

            <div className='xizmat'>
                <h1>
                    Bizning xizmatlarimiz</h1>

                <div className='xizmat1'>
                    <div className='xizmat1_text'>
                        <h3>
                            Analitik tadqiqot</h3>
                        <p>Bizning asosiy yo'nalishlarimizdan biri xalqaro bozorlardagi texnologik tendentsiyalarni tahlil qilishdir.
                            Biz McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY, Crunchbase, Dealroom, F6S, PitchBook tadqiqotlari asosida tahlil qilamiz, shuningdek ochiq xalqaro manbalar patentlari, ommaviy axborot vositalari, ilmiy nashrlar maʼlumotlarini jamlaymiz va tahlil qilamiz.</p>
                        <button>
                            Batafsil ma'lumot</button>
                    </div>
                    <div className='xizmat1_img'>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default xizmat