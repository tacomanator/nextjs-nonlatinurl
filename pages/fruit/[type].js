import { useRouter } from "next/router";
import Link from "next/link";

const types = ["apple", "watermelon", "バナナ", "桃"];

export default function Fruit({}) {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="container">
      <h3>{type}</h3>
      <img src={`/${type}.gif`} style={{ maxWidth: "300px" }} />
      <Link href="/">Home</Link>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { types },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: types.map((type) => ({
      params: {
        type,
      },
    })),
    fallback: false,
  };
}
