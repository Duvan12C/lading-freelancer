import { FiArrowUpRight } from 'react-icons/fi';

import { Button } from '@/components/ui/Button';
import heroIllustration from '@/assets/hero-illustration.svg';
import { FaChild } from "react-icons/fa";


const Hero = () => {

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    return (
        <section
            id="inicio"
            className="
                overflow-hidden
                rounded-br-[7rem]
                bg-fondo
                sm:rounded-br-[10rem]
                lg:rounded-br-[16rem]
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    min-h-[calc(100svh-5rem)]
                    max-w-7xl
                    items-center
                    gap-12
                    px-6
                    py-16
                    lg:grid-cols-2
                    lg:px-8
                "
            >
                {/* Columna izquierda */}
                <div className="max-w-xl">
                    <div
                        className="
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-sm
                            bg-superficie
                            px-3
                            py-1.5
                            text-sm
                            text-blanco
                        "
                    >
                        <FaChild />
                        Hola, soy Duvan Castellanos
                    </div>

                    <h1
                        className="
                            text-4xl
                            font-bold
                            leading-tight
                            text-primario
                            sm:text-5xl
                        "
                    >
                        Sistemas y soluciones digitales
                        <br />
                        a la medida de tu negocio.
                    </h1>

                    <p
                        className="
                            mt-6
                            max-w-lg
                            text-base
                            leading-relaxed
                            text-texto-secundario
                            sm:text-lg
                        "
                    >
                        Desarrollo páginas web, sistemas
                        administrativos, aplicaciones e
                        integraciones para ayudarte a trabajar
                        mejor.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button
                            onClick={() => scrollToSection('contacto')}
                            icon={<FiArrowUpRight />}
                            iconPosition="right"
                        >
                            Solicitar cotización
                        </Button>

                        <Button
                            onClick={() => scrollToSection('proyectos')}
                            variant="outline"
                            color="primario"
                            hoverColor="primario"
                            icon={<FiArrowUpRight />}
                            iconPosition="right"
                        >
                            Ver proyectos
                        </Button>
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="
                    relative
                    flex
                    h-[320px]
                    items-center
                    justify-center
                    lg:h-[460px]
                    lg:justify-end
                ">
                    <img
                        src={heroIllustration}
                        alt="Ilustración de desarrollo web"
                        className="
                            w-full
                            max-w-xl
                            object-contain

                            lg:absolute
                            lg:right-[-5rem]
                            lg:w-[760px]
                            lg:max-w-none
                        "
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;