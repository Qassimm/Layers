import FeaturesCard from "../components/FeaturesCard";
import Tag from "../components/Tag";
import Image from "next/image";
import Profile from "../components/Profile";
import Pic1 from '../assets/images/Pic3.jpg'
import Pic2 from '../assets/images/Pic4.jpg'
import Keys from "../components/Keys";

const  features = [
    'Assets Library',
    'Code Preview',
    'Flow Mode',    
    'Smart Sync',
    'Auto Layout',
    'Fast Search',
    'Smart Guides'
];

export default function Features () {
    return(
        <section id="features" className="py-24 px-5 flex justify-center">
            <div  className="container">
                <div className="flex justify-center ">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 mx-auto">Where power meets <br /><span className="text-green-500  mx-auto ">Simplicity</span>
                </h2>
                <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8  ">
                    <FeaturesCard title="Real-time collaboration" description="Work together seamlessly with conflict-free team editing" className="group md:col-span-2 lg:col-span-1">
                        <div className="flex  aspect-video items-center justify-center">
                            <Profile className="group-hover:border-green-500 transition duration-300">
                            <Image src={Pic1} alt="Pic1"/>
                        </Profile>
                        <Profile className="-ml-6 group-hover:border-green-500 transition duration-300">
                            <Image src={Pic2} alt="Pic2"/>
                        </Profile>
                        <Profile className="-ml-6 group-hover:border-green-500 transition duration-300">
                            <Image src={Pic1} alt="Pic1"/>
                        </Profile>
                        <Profile className="-ml-6 group-hover:border-green-500 transition duration-300">
                           <Image src={Pic2} alt="Pic2"/> 
                        </Profile>
                        </div>
                    </FeaturesCard>

                    <FeaturesCard title="Interacitive Prototyping" description="Engage your clients with prototype that react to user acions" className="group md:col-span-2 lg:col-span-1">
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center ">We&apos;ve achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-lime-500 transition duration-300 bg-clip-text text-transparent ">incredible</span> growth this year</p>
                        </div> 
                    </FeaturesCard>

                    <FeaturesCard title="Keyboard Quick Actions" description="Powerful command to help you create design more quickly" className="group md:col-span-2 md:col-start-2 lg:col-span-1">
                        <div className="aspect-video flex justify-center items-center gap-5">
                            <Keys className="px-8 outline-transparent group-hover:outline-2 group-hover:outline-green-500 outline-offset-3 group-hover:translate-y-1 transition duration-500">shift</Keys>
                            <Keys className="outline-transparent group-hover:outline-2 group-hover:outline-green-500 outline-offset-3 group-hover:translate-y-1 transition duration-500 delay-100">alt</Keys>
                            <Keys className="outline-transparent group-hover:outline-2 group-hover:outline-green-500 outline-offset-3 group-hover:translate-y-1 transition duration-500 delay-200">S</Keys>
                        </div>
                    </FeaturesCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map(features => (
                        <div key={features} className="group bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition-all duration-300">
                            <span className="bg-green-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-60 transition-all">&#10038;</span>
                            <span className=" md:text-lg">{features}</span>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    )
}