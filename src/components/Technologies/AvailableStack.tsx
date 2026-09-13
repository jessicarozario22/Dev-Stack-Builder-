import React from 'react';
import type { Itechnologies } from '../../types/technologiesType';
import { CiStar } from 'react-icons/ci';

const AvailableStack = ({ technologies }: { technologies: Itechnologies[] }) => {
    // console.log(technologies, "stack from AvailableStack");
    return (
        
        <div className="grid grid-cols-3 gap-4 my-4">
            {technologies.map ((tech: Itechnologies) => (
                <div key={tech.id} className="card bg-base-100 w-90  shadow-sm">
                    <figure className="px-10 pt-10 justify-space-between flex gap-54">
                        <img className="w-10 h-10"
                            src={tech.icon}
                            alt={tech.technologiesname} />
                        <div className="badge badge-circle bg-icon">{tech.badge}</div>
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="card-title">
                            {tech.technologiesname}
                            <div className="text-lg font-bold">{tech.name}</div>
                        </h2>
                        
                        <p>{tech.description}</p>
                        <div className="card-actions justify-space-between gap-5">
                             <div className="category badge-circle bg-icon">{tech.category}</div>
                              <div className="difficulty badge-circle bg-icon">{tech.difficulty}</div>
                              <div className="flex gap-1 items-center">
                            <CiStar />
                             <div className="category badge-circle bg-icon">{tech.rating}</div>
                             </div>
                           
                        </div>
                        <button className="btn btn-neutral">Add To Stack</button>
                    </div>
                </div>
                        //    <div className="divider"></div>
    
            ))}
        </div>
   
    );
};

export default AvailableStack;