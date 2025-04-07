
import Link from "next/link";
// import Header from "./header";

export default function Home() {
  return (
    <main>
     <h1>Welcome to next js course</h1>
      <p> Get Started </p>
      <p>
        <Link href="/about">About us !</Link>
      </p>
    </main>
  );
}