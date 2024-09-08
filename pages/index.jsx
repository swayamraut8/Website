import { Inter } from "@next/font/google";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import Image from "next/image";
import Domains from "../components/Domains";
import Project from "../components/Project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Home">
      <div className="bg-neutral-800 relative w-full h-4/5">
        <img
          src={
            "https://res.cloudinary.com/dyn3rj4lh/image/upload/v1674063968/Website-2022/images/vesit_bg_viudgv.jpg"
          }
          layout="fill"
          // width={700}
          // height={700}
          alt="Post image"
          className="mix-blend-overlay w-full h-full object-contain"
        />
        <div className="mt-20 md:mt-0 absolute font-sans top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xs md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-100 text-center font-bold uppercase">
            Welcome to ISTE-VESIT,
          </h1>
          <h1 className="text-xs md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-3 text-gray-100 text-center font-bold uppercase">
            Where Imagination Is Power
          </h1>
          <div className="opacity-0 md:opacity-100">
            <p className="text-xs md:text-sm lg:text-base xl:text-md 2xl:text-xl mt-6  text-gray-100 text-center text-contain">
              Welcome to the Indian Society for Technology in Education (ISTE),
              home to a passionate community of global educators who believe in
              the power of technology to transform teaching and learning,
              accelerate innovation and solve tough problems in education.
            </p>
          </div>
          {/* <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Extra large
          </button> */}
        </div>
      </div>
      <Domains />
      {/* <Project /> */}
      <ContactForm />
    </Layout>
  );
}
