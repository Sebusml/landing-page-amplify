import Link from "next/link";
import { useUser } from "../context/AuthContext";

const navigation = [{ name: "Posts", href: "/", current: true }];
import Auth, { CognitoUser } from "@aws-amplify/auth";
import { useState } from "react";

function classNames(...classes: Array<any>) {
  return classes.filter(Boolean).join(" ");
}

// Code from https://github.com/tailwindtoolbox/Minimal-Blog/blob/master/index.html
// TODO: Hide login/signup if user is loged in
// TODO: Add user Icon when loged in
export default function Header() {
  let { user } = useUser();

  const signOut = async () => {
    await Auth.signOut().catch((e) => console.log(e));
  };

  return (
    <div className="h-16">
      <nav id="header" className="fixed w-full z-10 top-0">
        <div id="progress" className="h-1 z-20 top-0"></div>

        <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4">
            <Link href="/">
              <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
                Super Duper
              </a>
            </Link>
          </div>

          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
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
                  <img
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
    </div>
  );
}
