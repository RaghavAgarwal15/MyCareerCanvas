'use client';
import Head from "next/head";
import Hero from "./components/LandingPage/hero";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/LandingPage/sectionTitle";
import { benefitOne } from "./components/LandingPage/data";
import Benefits from "./components/LandingPage/benefits";
import Testimonials from "./components/LandingPage/testimonials";
import Faq from "./components/LandingPage/faq";
import Chatbot from "./components/Chatbot";
import Footer from './components/Footer'


const Home = () => {
  
  return (
    <div >
      <Head>
        <title>CareerCanvas - your completely free online career guide</title>
        <meta
          name="description"
          content="CareerCanvas - your completely free online career guide"
        />
        <link rel="icon" href="/favicon.ico" />
        

      </Head>

      <Navbar />
      <div className="px-5">
        <Hero />
        <SectionTitle
          title=" Why should you use CareerCanvas?">
          A career guidance website is an invaluable tool for students to navigate the complex world of career choices. It helps to explores diverse professions, and aligns individual strengths with suitable paths. By leveraging such platforms, students make informed decisions, ensuring a fulfilling and successful future.
        </SectionTitle>
        <Benefits data={benefitOne} />

        <SectionTitle
          pretitle="Our Alumnus"
          title="Here's what our alumnus said">
          Explore Our Collection of Authentic Alumni Success Stories: Uncover Real Voices and Journeys That Inspire Achievement and Showcase the Power of Education in Shaping Remarkable Careers.
        </SectionTitle>
        <Testimonials />
        <SectionTitle title="Frequently Asked Questions">
        </SectionTitle>
        <Faq />
        <Footer/>
        {/* <Chatbot/> */}
      </div>
    </div>
  );
}

export default Home;