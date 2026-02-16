import { AboutSection } from "../Components/AboutSection";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { SkillSection } from "../Components/SkillSection";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">

       {/*Theme toggle */}
          <ThemeToggle/>

       {/*Background effect*/}
           <StarBackground/>

       {/* Navbar */}
           <Navbar/> 

       {/* Main Content */}

         <main>
            <HeroSection/>
            <AboutSection/>
            <SkillSection/>
         </main>


       {/* footer */}
    </div>
};