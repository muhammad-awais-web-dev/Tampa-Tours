import Expeditations from "./Expeditations";
import Hero from "./Hero";
import Locals from "./Locals";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Expeditations />
      <Locals />
    </>
  );
}