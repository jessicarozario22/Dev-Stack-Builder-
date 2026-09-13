import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/Technologies";
import type { Itechnologies } from "./types/technologies";

const technologiesFetch = async () : Promise<Itechnologies[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();
  console.log("technologiesPromise");
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} />

      </Suspense>




    </>
  )
}

export default App
