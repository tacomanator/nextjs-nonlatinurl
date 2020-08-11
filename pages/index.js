import Link from "next/link";

const types = ["apple", "watermelon", "バナナ", "桃"];

export default function Home() {
  return (
    <div className="container">
      {types.map((type) => (
        <Link as={`/fruit/${type}`} href="/fruit/[type]" key={type}>
          {type}
        </Link>
      ))}
    </div>
  );
}
