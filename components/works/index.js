import Slider from "../ui/slider";
import Divider from "../ui/divider";

export default function Works({ works }) {
  return (
    <div id="works" className="px-8 py-12 lg:p-24">
      <h2 className="mb-12 text-7xl text-slate-800">
        <Divider />
        Works
      </h2>
      <Slider items={works} />
    </div>
  );
}
