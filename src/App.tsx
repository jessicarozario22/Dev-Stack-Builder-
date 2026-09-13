import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnologies } from "./types/technologiesType";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const technologiesFetch = async (): Promise<Itechnologies[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data = await res.json();

  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<div>Loading...</div>}>
        <Technologies
          technologiesPromise={technologiesPromise}
        />
      </Suspense>
        <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;