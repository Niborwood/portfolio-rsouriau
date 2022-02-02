import Slider from "../ui/slider";
import SectionTitle from "../ui/section-title";

export default function Works({ works }) {
  return (
    <div id="works" className="px-8 py-12 lg:p-24">
      <SectionTitle title="Works" />
      <Slider items={works} />
    </div>
  );
}
