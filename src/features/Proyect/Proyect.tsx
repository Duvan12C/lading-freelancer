
import Card from '@/components/ui/Card';
import proOne from '@/assets/pro-one.png';
import proTwo from '@/assets/pro-two.png';
import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const services = [
    {
        id: 1,
        title: 'Sistema administrativo',
        description:
            'Plataforma para gestionar procesos, datos y reportes en tiempo real.',
        img: proOne,
        technologies: ['React', 'TypeScript', 'Tailwind', 'Laravel', 'MySQL'],
        url: 'https://bowlerhq.com/',
    },
    {
        id: 2,
        title: 'Página web corporativa',
        description:
            'Sitio web moderno enfocado en presentar servicios y captar clientes.',
        img: proTwo,
        technologies: ['React', 'Vite', 'Tailwind'],
        url: 'https://originlabsdev.com/',
    },


];

const hasCarousel = services.length > 3;

const projectCardWidth =
    'w-[85%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]';


const Proyect = () => {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    const moveCarousel = (direction: 'next' | 'previous') => {
        const carousel = carouselRef.current;
        const firstCard = carousel?.querySelector<HTMLElement>(
            '[data-project-card]',
        );

        if (!carousel || !firstCard) return;

        const distance = firstCard.offsetWidth + 24;

        carousel.scrollBy({
            left: direction === 'next' ? distance : -distance,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        if (!hasCarousel || isPaused) return;

        const interval = window.setInterval(() => {
            const carousel = carouselRef.current;
            const firstCard = carousel?.querySelector<HTMLElement>(
                '[data-project-card]',
            );

            if (!carousel || !firstCard) return;

            const distance = firstCard.offsetWidth + 24;
            const isAtEnd =
                carousel.scrollLeft + carousel.clientWidth >=
                carousel.scrollWidth - 5;

            carousel.scrollTo({
                left: isAtEnd ? 0 : carousel.scrollLeft + distance,
                behavior: 'smooth',
            });
        }, 3500);

        return () => window.clearInterval(interval);
    }, [isPaused]);


    return (
        <section
            id="proyectos"
            className="
                rounded-tl-[7rem]
                bg-fondo
                sm:rounded-tl-[10rem]
                lg:rounded-tl-[16rem]
            "
        >
            <div
                className="
        mx-auto
        flex
        min-h-[calc(100svh-5rem)]
        max-w-7xl
        flex-col
        justify-center
        px-6
        py-6
        lg:px-8
    "
            >                {/* fila arriba */}
                <div className="max-w-4xl">
                    <h3 className="text-lg font-bold text-primario uppercase">
                        Proyectos
                    </h3>
                    <h1
                        className="
                            text-4xl
                            font-bold
                            leading-tight
                            text-blanco
                            sm:text-5xl
                        "
                    >
                        <span className="block lg:whitespace-nowrap">
                            Proyectos que convierten
                        </span>

                        <span className="block lg:whitespace-nowrap">
                            ideas en soluciones reales
                        </span>
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
                        Desde una página para atraer clientes hasta un sistema para
                        administrar procesos internos.
                    </p>
                </div>

                {/* Columna derecha */}
                <div className="group relative mt-6">
                    <div
                        ref={carouselRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className={`
                                -mt-8
                                flex
                                w-full
                                gap-6
                                overflow-x-auto
                                pt-8
                                scroll-smooth
                                snap-x
                                snap-mandatory
                                pb-2
                                [scrollbar-width:none]
                                [&::-webkit-scrollbar]:hidden
                                ${hasCarousel ? 'justify-start' : 'justify-center'}
                            `}
                    >
                        {services.map((service) => (
                            <Card
                                key={service.id}
                                data-project-card
                                animation="lift"
                                width={projectCardWidth}
                                borderColor="borde-morado"
                                hoverBorderColor="primario"
                                rounded="lg"
                                className="
                                    relative
                                    hover:z-10
                                    flex
                                    shrink-0
                                    snap-start
                                    flex-col
                                    overflow-hidden
                                    bg-fondo-card
                                    p-0
                                "
                            >
                                <div className="h-48 overflow-hidden border-b border-borde">
                                    <img
                                        src={service.img}
                                        alt={`Captura de ${service.title}`}
                                        className="size-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col p-5">
                                    <h3 className="text-lg font-bold text-blanco">
                                        {service.title}
                                    </h3>

                                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-texto-secundario">
                                        {service.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between gap-3">
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-md border border-borde px-2 py-1 text-xs text-blanco-suave"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={service.url}
                                            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primario-claro hover:text-primario"
                                        >
                                            Ver proyecto
                                            <FiArrowUpRight />
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {hasCarousel && (
                        <>
                            <button
                                type="button"
                                onClick={() => moveCarousel('previous')}
                                aria-label="Ver proyectos anteriores"
                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-fondo/85 p-3 text-blanco opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-primario"
                            >
                                <FiChevronLeft />
                            </button>

                            <button
                                type="button"
                                onClick={() => moveCarousel('next')}
                                aria-label="Ver más proyectos"
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-fondo/85 p-3 text-blanco opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-primario"
                            >
                                <FiChevronRight />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Proyect;