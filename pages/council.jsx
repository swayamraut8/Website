import Layout from "../components/Layout";
import Card from "../components/council/Card";
import BE from "../components/council/be";
import TE from "../components/council/te";
import SE from "../components/council/se";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";

export default function Council() {
    const [be, setbe] = useState(false);
    const [te, sette] = useState(false);
    const [se, setse] = useState(false);

    return (
        <Layout title="ISTE-VESIT | Council" content="Council page of ISTE-VESIT">
            <section className="text-gray-400 bg-gray-200 body-font">
                <div className="container px-5 py-24 mx-auto pt-16">
                  <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-bold title-font mb-4 text-gray-900">OUR TEAM</h1>
                    <p className="lg:w-full mx-auto mt-7 leading-relaxed text-lg text-gray-900 font-medium">Trust is knowing that when a team member does push you, they are doing it because they care about the team</p>
                    <Tabs>
                        <TabList>
                            <Tab className={`${be && "animate-clickbe"} float-left text-3xl text-slate-100 font-bold w-1/3 h-48 pt-16 mt-8 rounded-l-xl bg-be-tab bg-cover bg-center`} onClick={() => {setbe(true);}} onAnimationEnd={() => setbe(false)}>
                                BE <p className='font-thin text-xl'>Masterminds</p>
                            </Tab>
                            <Tab className={`${te && "animate-clickte"} float-left text-3xl text-slate-100 font-bold w-1/3 h-48 pt-16 mt-8 bg-te-tab bg-cover bg-center`} onClick={() => {sette(true);}} onAnimationEnd={() => sette(false)}>
                                TE <p className='font-thin text-xl'>Leaders</p>
                            </Tab>
                            <Tab className={`${se && "animate-clickse"} float-left text-3xl text-slate-100 font-bold w-1/3 h-48 pt-16 mt-8 rounded-r-xl bg-se-tab bg-cover bg-center`} onClick={() => {setse(true);}} onAnimationEnd={() => setse(false)}>
                                SE <p className='font-thin text-xl'>Learners</p>
                            </Tab>
                        </TabList>
                        <TabPanel> <BE /> </TabPanel>
                        <TabPanel> <TE /> </TabPanel>
                        <TabPanel> <SE /> </TabPanel>
                    </Tabs>
                  </div>
                </div>
            </section>
        </Layout>
    );
}
