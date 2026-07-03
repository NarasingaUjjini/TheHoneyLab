import BatchStamp from "./ui/BatchStamp";

interface BatchCardProps {
  batchNumber: string;
  season: string;
  name: string;
  region: string;
  note: string;
  approval?: string;
}

export default function BatchCard({
  batchNumber,
  season,
  name,
  region,
  note,
  approval = "Grandpa approved.",
}: BatchCardProps) {
  return (
    <div className="relative card-paper p-8 md:p-10">
      <div className="absolute top-6 right-6">
        <BatchStamp batchNumber={batchNumber} />
      </div>

      <p className="text-label text-bark-soft/60">
        {season}
      </p>
      <h3 className="mt-2 font-display text-2xl md:text-3xl text-bark">
        {name}
        <span className="text-bark-soft/50 font-normal"> · </span>
        {region}
      </h3>

      <blockquote className="mt-8 pt-6 border-t border-kraft-deep">
        <p className="font-display text-xl md:text-2xl text-bark/85 italic leading-relaxed">
          &ldquo;{note}&rdquo;
        </p>
        <footer className="mt-4 text-sm text-bark-soft not-italic">{approval}</footer>
      </blockquote>
    </div>
  );
}
