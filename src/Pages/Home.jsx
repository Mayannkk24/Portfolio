import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">

       {/*Theme toggle */}
          <ThemeToggle/>

       {/*Background effect*/}
           <StarBackground/>

       {/* Navbar */}

       {/* Main Content */}

       {/* footer */}
    </div>
};