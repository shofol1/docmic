import Header from "../components/Header/Header";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Summary from "../components/SummaryDetails/Summary";
import Service from "../components/Service/Service";
import Features from "../components/Features/Features";
import FAQ from "../components/FAQ/FAQ";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
export default function index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header></Header>
      <Hero />
      <Summary />
      <Service />
      <Features />
      <FAQ />
      <Testimonial />
      <Footer />
    </>
  );
}
