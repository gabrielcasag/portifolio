import "./style.css";

interface DataPillItemProps {
  label: string;
  color?: string;
}

interface InfiniteScrollProps {
  data: Array<DataPillItemProps>;
}

function DataPill({ label, color }: DataPillItemProps) {
  return <span data-color={color ?? ""}>{label}</span>;
}

export function InfiniteScroll({ data }: InfiniteScrollProps) {
  return (
    <section className="scroll-parent">
      <div className="scroll-element primary">
        {data.map((item, i) => (
          <DataPill {...item} key={i} />
        ))}
      </div>

      <div aria-hidden className="scroll-element">
        {data.map((item, i) => (
          <DataPill {...item} key={i} />
        ))}
      </div>
    </section>
  );
}
