import Tag from "../components/Tag";
import clickup from "../assets/Integration Logos/clickup.png";
import airbnb from "../assets/Integration Logos/airbnb.png";
import figma from "../assets/Integration Logos/figma.png";
import apple from "../assets/Integration Logos/apple.png";
import spodify from "../assets/Integration Logos/spodify.png";
import nvidia from "../assets/Integration Logos/nvidia.png";
import IntegrationColumns from "../components/IntegrationColumns";

const Integrations = [
  {
    name: "Airbnb",
    icon: airbnb,
    description:
      "Airbnb is a global platform that connects people to book unique stays and experiences offered by hosts around the world.",
  },

  {
    name: "Click Up",
    icon: clickup,
    description:
      "ClickUp is an all-in-one productivity platform for managing tasks, projects, and team collaboration.",
  },

  {
    name: "Figma",
    icon: figma,
    description:
      "Figma is a cloud-based design tool for creating, collaborating, and prototyping user interfaces in real time.",
  },

  {
    name: "Apple",
    icon: apple,
    description:
      "Apple is a global technology company known for its innovative hardware, software, and digital services.",
  },

  {
    name: "Spodify",
    icon: spodify,
    description:
      "Spotify is a digital music streaming platform that gives users access to millions of songs, podcasts, and playlists worldwide.",
  },

  {
    name: "Nvidia",
    icon: nvidia,
    description:
      "NVIDIA is a leading technology company known for its powerful GPUs, AI innovations, and high-performance computing solutions.",
  },
];

export type integrationType = typeof Integrations;

export default function Integration() {
  return (
    <section id="integerations" className="py-24 px-auto p-5 overflow-hidden justify-center flex">
      <div className="container ">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integration</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Pay well with <span className="text-green-500">others</span>{" "}
            </h2>
            <p className="text-white/50 mt-4 text-lg max-w-lg">
              Layers seemless conncts to your favorite tools, make it easy to
              plug into any wrokflow and collaborate accross plateforms.
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[600px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
              <IntegrationColumns Integrations={Integrations} />
              <IntegrationColumns reverse
                Integrations={Integrations.slice().reverse()}
                className="hidden md:flex "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
