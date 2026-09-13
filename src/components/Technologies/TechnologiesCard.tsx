import type { Dispatch, SetStateAction } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import { CiStar } from "react-icons/ci";
import { toast } from "react-toastify";

interface TechnologiesCardProps {
  technology: Itechnologies;
  selectedTechnologies: Itechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologies[]>>;
}

const TechnologiesCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologiesCardProps) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  const isSelected = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  const handleAddToStack = () => {
    if (isSelected) return;

    setSelectedTechnologies((prev) => [
      ...prev,
      technology,
    ]);

    toast.success(`${technology.name} added successfully!`);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center">
          <img
            src={icon}
            alt={`${name} logo`}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
          {badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-3 min-h-[72px] text-sm leading-5 text-slate-500">
        {description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">
          {category}
        </span>

        <span className="text-xs font-medium text-slate-500">
          {difficulty}
        </span>

        <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
          <CiStar className="text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>

      <button
        onClick={handleAddToStack}
        disabled={isSelected}
        className={`mt-4 w-full rounded-lg py-3 text-sm font-medium text-white transition ${
          isSelected
            ? "cursor-not-allowed bg-slate-400"
            : "bg-slate-950 hover:bg-slate-800"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
      
    </div>
  );
};

export default TechnologiesCard;