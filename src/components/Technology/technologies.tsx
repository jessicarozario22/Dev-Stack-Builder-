import { use, useState } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import AvailableStack from "./AvailableStack";
import SelectedTechnologies from "./SelectedTechnologies";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Itechnologies[]
  >([]);

  return (
    <section
      id="technologies"
      className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Explore the Technologies
        </h2>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Discover and add technologies to your development stack.
        </p>
      </div>

      {/* Available Technologies + Your Stack */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

        {/* Available Technologies */}
        <div className="w-full lg:flex-1">
          <AvailableStack
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>

        {/* Your Stack */}
        <div className="w-full lg:w-[380px]">
          <SelectedTechnologies
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>

      </div>
    </section>
  );
};

export default Technologies;