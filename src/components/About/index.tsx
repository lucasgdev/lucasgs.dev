import * as React from "react";
import Avatar from "../Avatar";

const About = () => {
  return (
    <section className="md:flex mt-32">
      <div className="mr-28 flex-1">
        <h1 className="text-3xl font-bold mb-10">
          I am Lucas G. Santos <span className="text-green">.</span>
        </h1>
        <p className="mb-10">
          I&apos;m a passionate Front End specialist located in Brazil, I work
          with front-end development, engineering, and architecting and I&apos;m
          living this passion for the past 10 years. I have fun doing my job!
          For the past years I&apos;ve been focusing especially on front-end
          performance and usability in the web.
        </p>
        <ul>
          <li className="font-bold text-gray">
            Phone{" "}
            <span className="ml-5 text-gray-dark">
              <a className="hover:opacity-80" href="tel:+55 31 999 647 962">
                +55 31 999 647 962
              </a>
            </span>
          </li>
          <li className="font-bold text-gray">
            Email{" "}
            <span className="ml-5 text-gray-dark">
              <a className="hover:opacity-80" href="mailto:lucasgdev@gmail.com">
                lucasgdev@gmail.com
              </a>
            </span>
          </li>
          <li className="font-bold text-gray">
            Linkedin:{" "}
            <a
              className="hover:opacity-80"
              href="https://www.linkedin.com/in/lucasgermanoss/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ml-5 text-gray-dark">/lucasgermanoss</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Avatar />
      </div>
    </section>
  );
};

export default About;
