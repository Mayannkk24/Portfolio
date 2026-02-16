import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
    
// Frontend
{ name: "HTML/CSS", level: 95, category: "frontend" },
{ name: "JavaScript", level: 90, category: "frontend" },
{ name: "React", level: 90, category: "frontend" },
{ name: "TypeScript", level: 85, category: "frontend" }, 
{ name: "Tailwind CSS", level: 90, category: "frontend" },
{ name: "Next.js", level: 80, category: "frontend" },

// Backend
{ name: "Node.js", level: 80, category: "backend" },
{ name: "Express", level: 75, category: "backend" },
{ name: "MongoDB", level: 70, category: "backend" },
{ name: "PostgreSQL", level: 65, category: "backend" },
{ name: "GraphQL", level: 60, category: "backend" },

// Tools
{ name: "Git/GitHub", level: 90, category: "tools" },
{ name: "Docker", level: 70, category: "tools" },
{ name: "VS Code", level: 95, category: "tools" },
{ name: "Figma", level: 85, category: "tools" },

// AI / ML
{ name: "Python", level: 85, category: "ai_ml" },
{ name: "NumPy / Pandas", level: 80, category: "ai_ml" },
{ name: "Scikit-learn", level: 75, category: "ai_ml" },
{ name: "TensorFlow", level: 70, category: "ai_ml" },
{ name: "PyTorch", level: 70, category: "ai_ml" },

// Generative AI
{ name: "Generative AI", level: 85, category: "ai_ml" },
{ name: "LLMs (GPT, Claude)", level: 80, category: "ai_ml" },
{ name: "Prompt Engineering", level: 90, category: "ai_ml" },
{ name: "LangChain", level: 75, category: "ai_ml" },
{ name: "RAG (Retrieval Augmented Generation)", level: 70, category: "ai_ml" },

// AI Agents & Advanced
{ name: "AI Agents", level: 75, category: "ai_ml" },
{ name: "OpenAI API", level: 85, category: "ai_ml" },
{ name: "Vector Databases (Pinecone / FAISS)", level: 70, category: "ai_ml" },
{ name: "Embeddings", level: 75, category: "ai_ml" },
{ name: "Hugging Face", level: 70, category: "ai_ml" },

// Deployment & MLOps (Optional but powerful)
{ name: "Model Deployment", level: 70, category: "ai_ml" },
{ name: "FastAPI", level: 75, category: "ai_ml" },
{ name: "Docker (AI)", level: 70, category: "ai_ml" }
    
];

const categories = ['all', 'frontend', 'backend', 'tools', 'ai_ml'];

export const SkillSection = () =>{
    const [activeCategory, setActiveCategory] = useState("all");
    const filterdSkills = skills.filter((skill)=>activeCategory === "all" || skill.category === activeCategory)


    return(<section id="skills" className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
               {categories.map((category,key)=>(
                <button 
                key={key}
                onClick={()=> setActiveCategory(category)}
                 className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                    activeCategory === category ? "bg-primary text-primary-foreground":
                    "bg-secondary/70 text-foreground hover:bg-secondary"
                 )}>
                 {category}
                </button>
               ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterdSkills.map((skills,key)=>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> 
                    <div className="text-left mb-4 ">
                        <h3 className="font-semibold text-lg ">{skills.name}</h3>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] " style={{ width: `${skills.level}%` }}/>

                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">{skills.level}%</span>
                    </div>

                    </div>
                ))}

            </div>

        </div>
    </section>);
}