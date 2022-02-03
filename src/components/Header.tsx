import Image from "next/image";
import Link from "next/link";
import { useUser } from "../context/AuthContext";
import Auth from "@aws-amplify/auth";
import { MenuIcon } from "@heroicons/react/solid";

// Code from https://github.com/tailwindtoolbox/Minimal-Blog/blob/master/index.html
// TODO: Hide login/signup if user is loged in
// TODO: Add user Icon when loged in
// TODO: Fix Mobile menu UI for logged users, icon and logout are unaligned
export default function Header() {
  let { user } = useUser();

  const signOut = () => {
    Auth.signOut().catch((e) => console.log(e));
  };

  return (
    <nav id="header" className="w-full top-0">
      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link href="/">
            <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
              Super Duper
            </a>
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
            onClick={() => {
              document
                .getElementById("nav-content")!
                .classList.toggle("hidden");
            }}
          >
            <MenuIcon className="h-3 text-gray-500"></MenuIcon>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent"
          id="nav-content"
        >
          {user && (
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <button
                  className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                  onClick={signOut}
                >
                  Sign out
                </button>
              </li>
              <li className="mr-3">
                <Image
                  className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                  src="http://i.pravatar.cc/50"
                  alt=""
                />
              </li>
            </ul>
          )}

          {!user && (
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link href="/signin">
                  <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">
                    Login
                  </a>
                </Link>
              </li>
              <li className="mr-3">
                <Link href="/signup">
                  <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                    Signup
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
