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
    <section className="container mx-auto px-4 py-16">
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Explore the Technologies
        </h2>

        <p className="mt-2 text-slate-500">
          Discover and add technologies to your development stack.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex items-start gap-6">
        {/* Technology Cards */}
        <div className="flex-1">
          <AvailableStack
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>

        {/* Your Stack */}
        <SelectedTechnologies
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
    </section>
  );
};

export default Technologies;