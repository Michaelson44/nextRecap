"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", gap: "15px", alignItems: "center"}}>
        <Link href="/about-us">Go to about us</Link>
        <Link href="/contact-us">Go to contact us</Link>
        <Link href="/FAQ">Go to frequently asked questions (FAQ)</Link>
      </div>

      <div style={{display: "flex", flexDirection: "column-reverse", marginTop: "100px", gap: "10px"}}>
        <button onClick={()=> router.push("/about-us")}>about</button>
        <button onClick={() => router.push("/contact-us")}>contact</button>
        <button onClick={() => router.push("/FAQ")}>faq</button>
      </div>
    </>
  );
}
