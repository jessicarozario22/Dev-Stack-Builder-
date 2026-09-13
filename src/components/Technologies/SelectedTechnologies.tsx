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
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">
          Your Stack
        </h2>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={clearStack}
            className="text-sm font-medium text-red-500 transition hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {selectedTechnologies.length > 0 ? (
        <>
          <p className="mt-1 text-sm text-slate-500">
            {selectedTechnologies.length} Technology Selected
          </p>

          {/* Selected Technologies */}
          <div className="mt-4 space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center">
                    <img
                      src={technology.icon}
                      alt={`${technology.name} logo`}
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {technology.category}
                    </p>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => removeTechnology(technology.id)}
                  className="rounded-md p-1 text-red-500 transition hover:bg-red-50 hover:text-red-600"
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
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-6 text-center">
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