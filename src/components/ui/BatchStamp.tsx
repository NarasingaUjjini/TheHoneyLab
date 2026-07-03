interface BatchStampProps {
  batchNumber: string;
  className?: string;
}

export default function BatchStamp({ batchNumber, className = "" }: BatchStampProps) {
  return (
    <span className={`batch-stamp ${className}`}>
      Batch {batchNumber.padStart(2, "0")}
    </span>
  );
}
