// import React, { Fragment } from 'react'
// import Component from '../components/Component';
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-awesome-reveal';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Profile from '../components/Home/Homes'
import AboutMe from '../components/AboutMe/AboutMe';
import Project from '../components/Project';
import ContactMe from '../components/ContactMe/ContactMe';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills';
function Home({ projectDetails, skills }) {
    return (
        <main className='dark:bg-black'>
            <Head>
                <title>Aditya Shahi</title>
                <meta name="description" content="Personal Portfolio WebSite For Aditya Shahi"></meta>
                <meta name="author" content="Aditya Shahi"></meta>
                <link rel="shortcut icon" href="/AS_logo.png" type="image/x-icon"></link>
            </Head>
            <ToastContainer />
            <Zoom>
                <Profile />
            </Zoom>
            <Zoom>
                <AboutMe />
            </Zoom>
            <Zoom>
                <Project projectDetails={projectDetails} />
            </Zoom>
            <Zoom>
                <Skills skills={skills} />
            </Zoom>
            <Zoom>
                <ContactMe />
            </Zoom>
            <Zoom>
                <Footer />
            </Zoom>
        </main>
    );
}

export default Home;

export async function getStaticProps(context) {
    const projectDetails = [
        {
            title: "E-ASComplaints",
            webUrl: "https://e-as-complaint-web.vercel.app/#/",
            appUrl: "https://drive.google.com/file/d/1SN5V_c4d26h9QWtSSKGuLWQjqY4GjNKG/view?usp=share_link",
            gitUrl: "https://github.com/Adityashahi4465/E-ASComplaint",
            image: '/ASComplaint_Promo.mp4'
        },
        {
            title: "Portfolio",
            webUrl: "https://port-folio-vxwv.vercel.app/",
            gitUrl: "https://github.com/inderjitshahi/PortFolio",
            image: '/is.jpg'
        },
        {
            title: "ISDoc",
            webUrl: "https://isdoc.vercel.app/",
            gitUrl: "https://github.com/inderjitshahi/ISDOc",
            image: '/ISDoc.jpg'
        },
        {
            title: "IS_AirBnB",
            webUrl: "https://is-air-bn-b.vercel.app/",
            gitUrl: "https://github.com/inderjitshahi/ISAirBnB",
            image: '/ISairBnb.jpg'
        },
        {
            title: "ISShop",
            webUrl: "/404",
            gitUrl: "https://github.com/inderjitshahi/ISShop",
            image: '/isshop.jpg'
        },
    ];
    const skills = [
        {
            logo: '/c-language-logo.png',
            level: '99%'
        },
        {
            logo: '/Java.jpg',
            level: '90%'
        },
        {
            logo: '/dart.png',
            level: '95%'
        },
        {
            logo: '/flutter-logo.jpg',
            level: '98%'
        },
        {
            logo: '/google-firebase-icon.svg',
            level: '90%'
        },

        {
            logo: '/mysql-icon.svg',
            level: '80%'
        },
        {
            logo: '/riverpod.png',
            level: '95%'
        },
        {
            logo: '/node.png',
            level: '90%'
        },
        {
            logo: '/Material.svg.png',
            level: '99%'
        },
        {
            logo: '/python-programming-language-icon.svg',
            level: '80%'
        },
    ]
    // console.log(projectDetails);
    return {
        props: { projectDetails, skills }
    }
}