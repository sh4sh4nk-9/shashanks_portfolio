import React from "react"
import { SiTableau, SiPython, SiTailwindcss, SiMysql, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandNextjs } from "react-icons/tb"


const stackItems = [
  { id: 1, name: 'Tableau', icon: SiTableau, color: '#E97627' },
  { id: 2, name: 'Next.js', icon: TbBrandNextjs, color: '#000000' },
  { id: 3, name: 'Python', icon: SiPython, color: '#3776AB' },
  { id: 4, name: 'Java', icon: FaJava, color: '#007396' },
  { id: 5, name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { id: 6, name: 'SQL', icon: SiMysql, color: '#00758F' },
  { id: 7, name: 'Git', icon: SiGit, color: '#F05032' },
];

export const Stack = () => {
    return(
      <section className="py-16 glass" id="stack">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {stackItems.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-center flex-col rounded-xl p-4"
                    >
                      <div className="mb-4 bg-white/10 p-6 rounded-xl">
                          {React.createElement(item.icon, {
                            className: "w-32 h-32",
                            style: {color: item.color}
                          })}
                      </div>
                      <p className="text-gray-400 font-semibold">{item.name}</p>
                  </div>
                ))}
            </div>
        </div>
      </section> 
    );
}