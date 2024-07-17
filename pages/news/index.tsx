import { Fragment } from "react";
import Link from "next/link";
export default function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <p>This is the News page</p>
      <ul>
        <li>
          <Link href="/news/news1">News 1</Link>
        </li>
        <li>News 2</li>
        <li>News 3</li>
      </ul>
    </Fragment>
  );
}
