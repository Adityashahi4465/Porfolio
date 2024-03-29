import React from 'react';
import Classes from './Profile.module.css'
import { TypeAnimation } from 'react-type-animation'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link';

function Profile(props) {
    return (
        <div className={Classes['profile-container']}>
            <div className='flex flex-col md:flex-row  justify-content:center'>
                <div className={Classes['profile-details']}>
                    <div className={Classes['colz']}>
                        <div className="flex space-x-4 cursor-pointer scale-150 mb-4">
                            <a href='https://www.linkedin.com/in/aditya4465/' target='blank'>
                                <BsLinkedin />
                            </a>
                            <a href='https://www.instagram.com/aditya_shahi_eng/' target='blank'>
                                <AiFillInstagram />
                            </a>
                            <a href='https://github.com/Adityashahi4465' target='blank'>
                                <AiFillGithub />
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100057639700910' target='blank'>
                                <BsFacebook />
                            </a>
                        </div>
                    </div>
                    <div className={Classes['profile-details-name']}>
                        <span className={Classes['primary-text']}>
                            {" "}
                            Hello, IM <span className={Classes['highlighted-text']}>Aditya Shahi</span>
                        </span>
                    </div>
                    <div className={Classes['profile-details-role']}>
                        {" "}
                        <h1 className='overflow-hidden'>
                            {" "}
                            <TypeAnimation
                                sequence={[
                                    "Flutter Developer",
                                    1000,
                                    "Competitive Programmer",
                                    1000,
                                    "Graphic Designer",
                                    1000,
                                    "Freelancer",
                                    1000,
                                ]}
                                // wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </h1>
                        <span className={Classes['profile-role-tagline']}>
                            Passionate to Learn and Grow
                        </span>
                    </div>
                    <div className='flex justify-center'>
                        <a className='flex-frow' href='https://drive.google.com/file/d/1fWnLw5wTU2cePDCofBQw79eoA3ZJJdoe/view?usp=share_link' download="Aditya_Shahi.pdf">
                            <button className='button ml-2'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className={Classes['profile-picture']}>
                    <div className={Classes['profile-picture-background']}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
