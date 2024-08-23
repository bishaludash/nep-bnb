import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>Property Page</div>
      <Link href="/property/add">Add Property</Link>
      <br />
      <Link href="/property/abc">view Property abc</Link>
    </div>
  );
};

export default page;
