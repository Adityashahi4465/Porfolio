import React from 'react';
import ScreenHeading from '../ScreenHeading';
import Classes from './AboutMe.module.css';
import Image from 'next/image';
function AboutMe(props) {
    const SCREEN_CONSTANT = {
        description: "Full stack web and mobile developer with background knowledge of Flutter with RiverPod and Firebase, along with a knock of building application with utmost efficiency, strong professional with a Diploma willing to be an asset far an organization. ",
        highlights: {
            bullets: [
                "Full Stack Software Developer",
                "Proficient in Data Structure and Algorithms",
                "Problem Solving and Team Management",
                "Flutter and Firebase",
                "MySql and Firestore"
            ],
            heading: "Here are few highlights:"
        },
    };
    const renderHighlight = SCREEN_CONSTANT.highlights.bullets.map((ele, i) => {
        return <div className={Classes.highlight} key={i}>
            <div className={Classes['highlight-blob']}></div>
            <div>{ele}</div>
        </div>
    })
    return (

        <div id={'aboutMe'} className={`${Classes['about-me-container']} ${Classes['screen-container']} dark:text-white`}>
            <div className={`${Classes['about-me-parent']}`}>
                <ScreenHeading title={"About Me"} subHeading={'Why Choose Me?'} />
                <div className={Classes['about-me-card']} >
                    <div className="relative w-[100%] h-[20rem] md:h-auto md:w-[50%]">
                        <Image
                            src="/self.jpeg"
                            objectFit='cover'
                            fill
                            alt="profile image"
                        />
                    </div>
                    <div className={Classes['about-me-details']}>
                        <span className={Classes['about-me-description']}>{SCREEN_CONSTANT.description}
                        </span>
                        <div className={Classes['about-me-highlights']} >
                            <div className={Classes['highlights-heading']}>
                                <span>{SCREEN_CONSTANT.highlights.heading}</span>
                            </div>
                            {renderHighlight}
                        </div>
                        <div className='flex flex-col sm:flex-row' >
                            <a className='button sm:ml-2 text-center' href='https://drive.google.com/uc?id=10pnEXBJazd-https://drive.google.com/file/d/1fWnLw5wTU2cePDCofBQw79eoA3ZJJdoe/view?usp=share_link
' download="Aditya_Shahi_Resume.pdf">
                                <button >Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;