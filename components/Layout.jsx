import React, { FC } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link
          rel="icon"
          href="https://res.cloudinary.com/atharva7/image/upload/v1673784977/samples/iste_logos_uvie6q.png"
        />
      </Head>
      <div className='scroll-smooth'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
