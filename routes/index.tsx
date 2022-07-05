/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Navbar from "../islands/Navbar.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Navbar />
      <p class={tw`my-6 text-center font-bold font-`}>
        Welcome to My First Deno Application
      </p>
    </div>
  );
}
