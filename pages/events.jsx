import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import cardList from "../data/events";
import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";

const Event = () => {
  const items = ["Tech Workshops", "Non Tech", "Fun Events"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const id = useId();
  const onChange = (index, value) => console.log(index, value);
  useEffect(() => {
    onChange(currentIndex, items[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <Layout title="ISTE-VESIT | Events">
        <div className="control-container w-11/12 ml-24 mt-5 p-2 inline-flex justify-between rounded-sm ">
          {items.map((item, index) => {
            return (
              <div
                key={item}
                className="control-item"
                onClick={() => setCurrentIndex(index)}
              >
                {currentIndex === index && (
                  <>
                    <motion.div
                      layoutId={id}
                      className="control-item-bg"
                    ></motion.div>
                  </>
                )}
                <div className="control-item-text">{item}</div>
              </div>
            );
          })}
        </div>
        <div className="h-fit w-fit mx-auto">
          <main className="container text-center py-16">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-24 gap-y-10">
              {cardList.map((card) => (
                <>
                  {card.type == items[currentIndex] ? (
                    <div
                      key={card.title}
                      className="flex flex-col bg-slate-100 justify-center"
                    >
                      <div className="group h-72 w-72 sm:h-96 sm:w-96 md:h-72 md:w-72 lg:h-96 lg:w-96">
                        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 ">
                          <div className="absolute inset-0 bg-slate-400 rounded-xl">
                            <Image
                              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                              src={card.img}
                              width={400}
                              height={400}
                              alt="Post image"
                            />
                            <div className="absolute inset-0 opacity-0 hover:opacity-80 rounded-xl transition-opacity hover:cursor-auto bg-black/80 flex items-center">
                              <div className="opacity-100 text-center">
                                <h3 className="text-white pb-3">
                                  {card.title}
                                </h3>
                                <p className="text-white text-sm sm:text-base md:text-sm ld:text-base pb-5 px-4">
                                  {card.desc}
                                </p>
                                <div className="flex justify-center space-x-2">
                                  {card.github.length > 0 && (
                                    <a
                                      className="hover:opacity-70 transition-all"
                                      target="_blank"
                                      rel="noreferrer"
                                      href={card.github}
                                    >
                                      <Image
                                        className="rounded-xl object-cover"
                                        src="https://res.cloudinary.com/sarveshp46/image/upload/v1674477865/icons8-github-30_gvdueq.png"
                                        width={25}
                                        height={25}
                                        alt="Github image"
                                      />
                                    </a>
                                  )}
                                  {card.instagram.length > 0 && (
                                    <a
                                      className="hover:opacity-70 transition-all"
                                      target="_blank"
                                      rel="noreferrer"
                                      href={card.instagram}
                                    >
                                      <Image
                                        className="rounded-xl object-cover"
                                        src="https://res.cloudinary.com/sarveshp46/image/upload/v1673757813/instagram_fynii0.png"
                                        width={25}
                                        height={25}
                                        alt="Github image"
                                      />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </main>
        </div>
        <div style={{ marginTop: "16px" }}></div>
      </Layout>
    </>
  );
};

export default Event;
