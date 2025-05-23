"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import project1 from "@/assets/project1.png"
import tableau1 from "@/assets/tableau1.png"
import tableau2 from "@/assets/tableau2.png"
import tableau3 from "@/assets/tableau3.png"
import RProject1 from "@/assets/RProject1.png"
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion'

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
const projects = [
    { 
        id:1, 
        year:2024, 
        title: 'Ecommerce Year-to-Date (YTD) sales analysis using Tableau', 
        description: 'This visualization provides key insights into business performance, including total sales and profit, order volumes, category-wise sales distribution, and monthly customer acquisition trends across various markets.', 
        image: tableau1,
        link: 'https://public.tableau.com/app/profile/shashank.chaubey4310/viz/ECOMMERCEANALYSIS_17236946835530/Dashboard1'
    },
    { 
        id:2, 
        year:2024, 
        title: 'Data Science job market trends using Tableau', 
        description: 'Global Data Science job trends by role, salary and location', 
        image: tableau2,
        link: 'https://public.tableau.com/app/profile/shashank.chaubey4310/viz/DataScienceJobMarketTrends/Dashboard1'
    },
    { 
        id:3, 
        year:2025, 
        title: 'Breaking Bad Episode Analytics in Tableau',
        description: 'Comprehensive dashboard visualizing episode data, ratings, and viewership trends of Breaking Bad', 
        image: tableau3,
        link: 'https://public.tableau.com/app/profile/shashank.chaubey4310/viz/BreakingBad_17353206913580/Dashboard1'
    },
    { 
        id:4, 
        year:2025, 
        title: 'AI content generator using Next.js', 
        description: 'An AI tool that helps you supercharge your creativity by helping you to write, innovate and ideate like never before', 
        image: project1,
        link: 'https://github.com/sh4sh4nk-9/AI-content-generator'
    },
    {
        id:5, 
        year:2025, 
        title: 'Apple products Visualization in R', 
        description: 'A dataset of 60+ apple products that Visualizes, Star Ratings by RAM, Sale Price and Top 15 Apple Products by Star Rating using R libraries like ggplot2 and dplyr.', 
        image: RProject1,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7331397678754361345/'  
    }
]


export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])

    const color = useMotionValue(COLORS_TOP[0])
    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
  return (
    <motion.section 
        id="projects" 
        style={{
            backgroundImage
        }} 
        className="py-32 text-white"
        >
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
            <h2 className="text-6xl font-bold mb-10">My <span className="text-gray-400">Projects</span></h2>
            {projects.map((project) => (
                <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer mb-8 group"
                >
                    <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                    <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                        {project.title}
                    </h3>
                    {selectedProject.id === project.id && (
                        <div className="border-b-2 border-gray-200 my-4"></div>
                    )}
                    
                    {selectedProject.id === project.id && (
                    <>
                        <p className="text-gray-400 transition-all duration-500 ease-in-out">
                            {project.description}
                        </p>
                        <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-base font-medium text-blue-400 hover:text-white transition duration-300 group"
                    >
                        <span className="relative group-hover:underline">View Project</span>
                        <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                        </>
                    )}

            </div>
        ))}
        </div>
    
        <Image 
            src={selectedProject.image.src}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
        />
        </div>
    </motion.section>
  )
}

