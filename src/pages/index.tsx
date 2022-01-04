import type { NextPage } from "next";
import { useUser } from "../context/AuthContext";

const Home: NextPage = () => {
  const { user } = useUser();

  console.log("landing page user:", user);
  return <h1>Hello world!</h1>;
};

export default Home;
