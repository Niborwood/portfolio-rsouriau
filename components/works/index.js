import Slider from "../ui/slider";

const works = [
  {
    _id: "1",
    title: "Roundnet France",
    description:
      "Roundnet France is a French company that provides a wide range of services to the French market. The company is located in Paris, France.",
    image: "/images/works/roundnet-france.jpg",
  },
  {
    _id: "2",
    title: "PokeReact",
    description:
      "PokeReact is a React project that displays a list of Pokemon.",
    image: "/images/works/pokereact.jpg",
  },
  {
    _id: "3",
    title: "Promesse tenue",
    description:
      "Promesse tenue is a French company that provides a wide range of services to the French market. The company is located in Paris, France.",
    image: "/images/works/promesse.jpg",
  },
  {
    _id: "4",
    title: "Horror Footage Findr",
    description:
      "Horror Footage Findr is a React project that displays a list of horror movies.",
    image: "/images/works/vhs.jpg",
  },
];

export default function Works() {
  return (
    <div id="works" className="px-8 py-12 lg:p-24">
      <h2 className="mb-12 text-7xl text-slate-800">Works</h2>
      <Slider items={works} />
    </div>
  );
}
