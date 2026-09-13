import React, { use, useState } from 'react';
import type { Itechnologies } from '../../types/technologiesType';
import AvailableStack from './AvailableStack';



interface TechnologiesProps {
    technologiesPromise: Promise<Itechnologies[]>;

}
const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    // console.log(technologies);
    // const [addedTechnologies, setAddedTechnologies] = useState<Itechnologies[]>([]); //add to stack or remove from stack
    const [addedTechnologies, setAddedTechnologies] = useState("addedTechnologies");
    console.log(addedTechnologies);

    // console.log(addedTechnologies);


    return (
        <div className="container mx-auto">
            <div className="flex justify-between gap-4 mb-2">

            </div>

            <h2 className='font-bold text-4xl'>Explore the Technologies</h2>

            <p>Discover and add technologies to your development stack.</p>

            <div className="flex gap-12 items-top">

                <AvailableStack technologies={technologies} />

                <div className='card bg-base-100 w-96 h-60 shadow-sm'>
                    <div className="card-body">
                        <h2 className="card-title">Your Stack</h2>
                        <p>No technologies selected yet.</p>

                        <div
                            className={`card bg-base-100 ${addedTechnologies === "addedTechnologies" ? "add-to-stack" : ""} w-86 shadow-sm`}>
                            <div className="card-body">
                                <h2 className="card-title">Your Stack is Empty</h2>
                            </div>
                        </div>
                    </div>
                    {/* <div className={`card bg-base-100 ${removedTechnologies === "removedTechnologies" ? "border border-primary" : ""} w-86 shadow-sm`}></div>     */}

                </div>
            </div>
        </div>
    );
};

export default Technologies;