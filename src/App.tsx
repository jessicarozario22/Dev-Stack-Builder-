import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technology/technologies";
import type { Itechnologies } from "./types/technologiesType";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

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

      <Suspense
  fallback={
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <span className="loading loading-spinner loading-lg text-primary"></span>

        <p className="text-sm text-slate-500">
          Loading technologies...
        </p>
      </div>
    </div>
  }
>
  <Technologies
    technologiesPromise={technologiesPromise}
  />
</Suspense>

      <ToastContainer position="bottom-right" />

      <Footer />
    </>
  );
}

export default App;