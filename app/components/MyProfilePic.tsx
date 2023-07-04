import Image from "next/image";
import React from "react";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black h-[200px] object-cover dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src={"/images/Profile.jpeg"}
        width={200}
        height={200}
        alt="Strong"
        priority
      />
    </section>
  );
}
