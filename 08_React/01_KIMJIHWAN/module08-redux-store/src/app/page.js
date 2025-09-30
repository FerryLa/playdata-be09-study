import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Wo</h1>

      <h2>chap01 basicRedux</h2>
      <ul>
        <li>
          <Link href="/chap01">basicRedux</Link>
        </li>
      </ul>

      <h2>chap02 combineRedux</h2>
      <ul>
        <li>
          <Link href="/chap01">combineRedux</Link>
        </li>
      </ul>

      <h2>chap03 Redux toolkit</h2>
      <ul>
        <li>
          <Link href="/chap03">Redux toolkit</Link>
        </li>
      </ul>
    </div>
  );
}
