import type { Dispatch, SetStateAction } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import { MdDeleteOutline } from "react-icons/md";

interface SelectedTechnologiesProps {
  selectedTechnologies: Itechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologies[]>>;
}

const SelectedTechnologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechnologiesProps) => {
  const removeTechnology = (id: string) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id)
    );
  };

  const clearStack = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-slate-900">
          Your Stack
        </h2>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={clearStack}
            className="shrink-0 text-xs font-medium text-red-500 transition hover:text-red-600 sm:text-sm"
          >
            Remove All
          </button>
        )}
      </div>

      {selectedTechnologies.length > 0 ? (
        <>
          <p className="mt-1 text-sm text-slate-500">
            {selectedTechnologies.length} Technology
            {selectedTechnologies.length > 1 ? "ies" : "y"} Selected
          </p>

          {/* Selected Technologies */}
          <div className="mt-4 space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                    <img
                      src={technology.icon}
                      alt={`${technology.name} logo`}
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-slate-900">
                      {technology.name}
                    </h3>

                    <p className="truncate text-xs text-slate-500">
                      {technology.category}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => removeTechnology(technology.id)}
                  className="shrink-0 rounded-md p-1 text-red-500 transition hover:bg-red-50 hover:text-red-600"
                  title="Remove from stack"
                  aria-label={`Remove ${technology.name} from stack`}
                >
                  <MdDeleteOutline size={22} />
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-5 text-center sm:p-6">
          <p className="text-sm text-slate-500">
            Your stack is empty.
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Add technologies from the list.
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedTechnologies;