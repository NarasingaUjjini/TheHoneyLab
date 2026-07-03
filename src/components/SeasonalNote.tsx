import { currentBloom } from "../data/products";

export default function SeasonalNote() {
  return (
    <div className="surface-moss border-y border-moss/15">
      <div className="container-main py-4 text-center">
        <p className="text-sm text-bark/80">
          <span className="text-label text-moss mr-2">Current bloom</span>
          {currentBloom}
        </p>
      </div>
    </div>
  );
}
