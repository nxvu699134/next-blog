import Link from "next/link";
import Switch from "@ui/switch";

const switchMap = [
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
];

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <div className="mb-8 flex flex-col gap-y-2">
        {switchMap.map((row, idx) => (
          <div key={`switchR_${idx}`} className="flex gap-x-2">
            {row.map((v, idx) => (
              <Switch key={`switchC_${idx}`} variant="danger" toggled={!!v} />
            ))}
          </div>
        ))}
      </div>
      <Link className="custom-link" href="/">
        Return Home
      </Link>
    </div>
  );
}
