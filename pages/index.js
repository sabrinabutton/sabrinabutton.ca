import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { Analytics } from "@vercel/analytics/react";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      <Analytics />
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10 ">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="flex flex-col laptop:flex-row full-screen-container ">
          <div className=" laptop:w-full">
            <div className="mt-10 laptop:mt-30 p-3 laptop:p-2">
              <h1
                ref={textOne}
                className="text-6xl tablet:text-6xl laptop:text-6xl laptopl:text-9xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-full pixelify-sans"
              >
                {data.headerTaglineOne}
              </h1>
              <h2
                ref={textTwo}
                className="text-2xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 pixelify-sans"
              >
                {data.headerTaglineTwo.txt}{" "}
                <div className="inline-block green-blue">
                  <Link href={data.headerTaglineTwo.link}>
                    <div className="pixelify-sans inline-block">
                      {"@" + data.headerTaglineTwo.place}
                    </div>
                  </Link>
                </div>
              </h2>
              <h2
                ref={textThree}
                className="text-2xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 pixelify-sans"
              >
                {data.headerTaglineThree.txt}{" "}
                <div className="inline-block green-blue">
                  {" "}
                  <Link href={data.headerTaglineThree.link}>
                    <div className="pixelify-sans inline-block">
                      {"@" + data.headerTaglineThree.place}
                    </div>
                  </Link>
                </div>
              </h2>
            </div>

            <Socials className="mt-2 laptop:mt-5" />
          </div>

          <div className="laptop:w-1/10 flex flex-col items-center justify-center invisible-mobile">
            <img
              src={data.headshot}
              alt="Sabrina's Headshot"
              className=" w-3/5 pt-20 laptop:w-4/5 invisible-mobile"
            />
          </div>
        </div>
        <div className="vertical-spacer"></div>
        <div className="mt-10 laptop:mt-30 p-3 laptop:p-2" ref={aboutRef}>
          <h1 className=" text-2xl text-bold pixelify-sans">About.</h1>
          {data.aboutpara.map((para, index) => (
            <p
              className="mt-2 text-l laptop:text-xl w-full laptop:w-3/5 text-gray-500"
              key={index}
            >
              {para}
            </p>
          ))}
        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold pixelify-sans">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                date={project.date}
                description={project.description}
                onClick={() => Router.push(`/project/${project.id}`)}
              />
            ))}
          </div>
        </div> */}

        <Footer />
      </div>
    </div>
  );
}
