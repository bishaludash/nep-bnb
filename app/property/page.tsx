"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div>Property Page</div>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 p-2 text-white rounded-lg mx-4"
      >
        Home
      </button>
      <Link href="/property/add">Add Property</Link>
      <br />
      <Link href="/property/abc">view Property abc</Link>
    </div>
  );
};

export default Page;
