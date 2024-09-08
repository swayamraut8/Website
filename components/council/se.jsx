import Card from "./Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import data from "../../data/Council/se";

export default function SE() {
    const [heads, setHeads] = useState(false);
    const [tech, setTech] = useState(false);
    const [ops, setOps] = useState(false);
    const [pro, setPro] = useState(false);
    const [graphics, setGraphics] = useState(false);
    return (
          <div>
              <Tabs>
                  <TabList>
                      <Tab className={`${tech && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/4 py-2 mt-8 rounded-l-xl`} onClick={() => {setTech(true);}} onAnimationEnd={() => setTech(false)}>
                          Tech
                      </Tab>
                      <Tab className={`${ops && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/4 py-2 mt-8`} onClick={() => {setOps(true);}} onAnimationEnd={() => setOps(false)}>
                          Operations
                      </Tab>
                      <Tab className={`${pro && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/4 py-2 mt-8`} onClick={() => {setPro(true);}} onAnimationEnd={() => setPro(false)}>
                          P.R.O
                      </Tab>
                      <Tab className={`${graphics && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/4 py-2 mt-8 rounded-r-xl`} onClick={() => {setGraphics(true);}} onAnimationEnd={() => setGraphics(false)}>
                          Graphics
                      </Tab>
                  </TabList>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                      <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                        <Card name={data[0].name} position={data[0].position} image={data[0].img} insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                      </ div>
                          {/* <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                              <Card name={data[0].name} position={data[0].position} image={data[0].img} insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                              <Card name={data[1].name} position={data[1].position} image={data[1].img} insta={data[1].insta} linkedin={data[1].linkedin} github={data[1].github}/>
                              <Card name={data[2].name} position={data[2].position} image={data[2].img} insta={data[2].insta} linkedin={data[2].linkedin} github={data[2].github}/>
                              <Card name={data[3].name} position={data[3].position} image={data[3].img} insta={data[3].insta} linkedin={data[3].linkedin} github={data[3].github}/>
                          </div>
                          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                              <Card name={data[4].name} position={data[4].position} image={data[4].img} insta={data[4].insta} linkedin={data[4].linkedin} github={data[4].github}/>
                              <Card name={data[5].name} position={data[5].position} image={data[5].img} insta={data[5].insta} linkedin={data[5].linkedin} github={data[5].github}/>
                              <Card name={data[6].name} position={data[6].position} image={data[6].img} insta={data[6].insta} linkedin={data[6].linkedin} github={data[6].github}/>
                              <Card name={data[7].name} position={data[7].position} image={data[7].img} insta={data[7].insta} linkedin={data[7].linkedin} github={data[7].github}/>
                              </div>
                          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-7 my-10">
                              <Card name={data[8].name} position={data[8].position} image={data[8].img} insta={data[8].insta} linkedin={data[8].linkedin} github={data[8].github}/>
                              <Card name={data[9].name} position={data[9].position} image={data[9].img} insta={data[9].insta} linkedin={data[9].linkedin} github={data[9].github}/>
                          </div> */}
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                            <Card name={data[0].name} position={data[0].position} image={data[0].img} insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                          </div>
                          {/* <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                              <Card name={data[10].name} position={data[10].position} image={data[10].img} insta={data[10].insta} linkedin={data[10].linkedin} github={data[10].github}/>
                              <Card name={data[11].name} position={data[11].position} image={data[11].img} insta={data[11].insta} linkedin={data[11].linkedin} github={data[11].github}/>
                              <Card name={data[12].name} position={data[12].position} image={data[12].img} insta={data[12].insta} linkedin={data[12].linkedin} github={data[12].github}/>
                              <Card name={data[13].name} position={data[13].position} image={data[13].img} insta={data[13].insta} linkedin={data[13].linkedin} github={data[13].github}/>
                          </div>
                          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                              <Card name={data[14].name} position={data[14].position} image={data[14].img} insta={data[14].insta} linkedin={data[14].linkedin} github={data[14].github}/>
                              <Card name={data[15].name} position={data[15].position} image={data[15].img} insta={data[15].insta} linkedin={data[15].linkedin} github={data[15].github}/>
                              <Card name={data[16].name} position={data[16].position} image={data[16].img} insta={data[16].insta} linkedin={data[16].linkedin} github={data[16].github}/>
                              <Card name={data[17].name} position={data[17].position} image={data[17].img} insta={data[17].insta} linkedin={data[17].linkedin} github={data[17].github}/>
                              </div>
                          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-7 my-10">
                              <Card name={data[18].name} position={data[18].position} image={data[18].img} insta={data[18].insta} linkedin={data[18].linkedin} github={data[18].github}/>
                              <Card name={data[19].name} position={data[19].position} image={data[19].img} insta={data[19].insta} linkedin={data[19].linkedin} github={data[19].github}/>
                          </div> */}
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                            <Card name={data[0].name} position={data[0].position} image={data[0].img} insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                          </div>
                          {/* <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                              <Card name={data[20].name} position={data[20].position} image={data[20].img} insta={data[20].insta} linkedin={data[20].linkedin} github={data[20].github}/>
                              <Card name={data[21].name} position={data[21].position} image={data[21].img} insta={data[21].insta} linkedin={data[21].linkedin} github={data[21].github}/>
                              <Card name={data[22].name} position={data[22].position} image={data[22].img} insta={data[22].insta} linkedin={data[22].linkedin} github={data[22].github}/>
                          </div> */}
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                            <Card name={data[0].name} position={data[0].position} image={data[0].img} insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                          </div>
                          {/* <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                              <Card name={data[23].name} position={data[23].position} image={data[23].img} insta={data[23].insta} linkedin={data[23].linkedin} github={data[23].github}/>
                              <Card name={data[24].name} position={data[24].position} image={data[24].img} insta={data[24].insta} linkedin={data[24].linkedin} github={data[24].github}/>
                              <Card name={data[25].name} position={data[25].position} image={data[25].img} insta={data[25].insta} linkedin={data[25].linkedin} github={data[25].github}/>
                              <Card name={data[26].name} position={data[26].position} image={data[26].img} insta={data[26].insta} linkedin={data[26].linkedin} github={data[26].github}/>
                          </div> */}
                      </section>
                  </TabPanel>
              </Tabs>
          </div>
    );
}
