import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold pixelify-sans">Contact.</h1>
          <div className="mt-10">
            <h1 className="mt-2 text-l laptop:text-xl w-full laptop:w-3/5 text-gray-500">
              I'm always happy to chat about robotics, technology, or anything
              else on your mind—let's connect! 🚀
            </h1>
            {/* <div className="mt-5">
              <Button
                type="secondary"
                onClick={() =>
                  window.open("https://calendly.com/sabrinarosebutton/30min")
                }
              >
                SCHEDULE A ONE ON ONE
              </Button>
            </div> */}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.sabrinabutton.com">
          <a className="underline underline-offset-1">Sabrina Button</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
