import Hero from "@/features/Hero/Hero";
import Services from "@/features/Services/Services";
import Proyect from "@/features/Proyect/Proyect";
import HowWork from "@/features/HowWork/HowWork";
import Contact from "@/features/Contact/Contact";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Proyect />
            <HowWork />
            <Contact />
        </>
    );
};

export default HomePage;