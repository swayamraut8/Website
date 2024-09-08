import React from "react";
import { Card } from "flowbite-react";
import cardList from "../data/domains";
import Image from "next/image";
import Link from "next/link";
const Domains = () => {
  return (
    <div className="px-4">
      <div className="flex justify-center">
        <main className="container text-center py-16">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Expertise
            </h1>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-24 gap-y-10">
            {cardList.map((card) => (
              <>
                <div className="group h-80 w-80 md:h-96 md:w-96 [perspective:1000px] mx-auto">
                  <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                      <img
                        className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                        src={card.img}
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold">{card.title}</h1>

                        <p className="text-base mt-2">{card.text}</p>
                        {/* <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                          Read More
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Domains;
