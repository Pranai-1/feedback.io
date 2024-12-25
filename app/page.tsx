// import { auth } from "@/auth";
// import axios from "axios";
// import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { redirect } from "next/navigation";



export default async function Home() {
  const session=await auth()
  if(session)
    return redirect("/dashboard")
  // const userDetails = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userDetails`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => res.json());

  // console.log(userDetails);
  return (
  <div>
  <p>I am in home</p>
  </div>
  );
}
