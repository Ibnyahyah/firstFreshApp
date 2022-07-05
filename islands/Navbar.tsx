/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Navbar() {
  return (
    <div class={tw`py-2 px-2 bg-blue-100`}>
      <header class={tw`flex justify-between text-xl`}>
        <div className={tw`flex sm:justify-center align-center`}>
          <img
            src="./logo.svg"
            height="100px"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p>App</p>
        </div>
        <nav className={tw`flex sm:justify-center space-x-4`}>
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url]) => (
            <a
              href={url}
              className={tw`rounded-lg px-3 py-2 text-slate-700 font-regular hover:bg-slate-100 hover:text-slate-900`}
            >
              {title}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}
