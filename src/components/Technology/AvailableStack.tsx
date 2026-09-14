import type { Dispatch, SetStateAction } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import TechnologiesCard from "./TechnologiesCard";

interface AvailableStackProps {
  technologies: Itechnologies[];
  selectedTechnologies: Itechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologies[]>>;
}

const AvailableStack = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
}: AvailableStackProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologiesCard
          key={technology.id}
          technology={technology}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      ))}
    </div>
  );
};

export default AvailableStack;