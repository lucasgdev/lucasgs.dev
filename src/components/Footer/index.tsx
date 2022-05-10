import React from "react";
import { LinkedinBox } from "@styled-icons/remix-line/LinkedinBox";
import { Smartphone } from "@styled-icons/remix-line/Smartphone";
import { MailSend } from "@styled-icons/remix-line/MailSend";

const Footer = () => {
  return (
    <section className="px-20 py-10 md:flex bg-green items-center justify-around">
      <h1 className="text-3xl font-bold mr-10">
        Find me and see projects at:<span className="text-green">.</span>
      </h1>
      <div>
        <a
          className="hover:opacity-70 mr-10"
          href="https://www.linkedin.com/in/lucasgermanoss/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinBox className="w-12" />
          <span>/lucasgermanoss</span>
        </a>
        <a className="hover:opacity-70 mr-10" href="mailto:lucasgdev@gmail.com">
          <MailSend className="w-12" />
          lucasgdev@gmail.com
        </a>
        <a className="hover:opacity-70" href="tel:+55 31 999 647 962">
          <Smartphone className="w-12" />
          <span>+55 31 999 647 962</span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
