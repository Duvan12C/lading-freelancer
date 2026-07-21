import {
    useEffect,
    useState,
} from 'react';

import { IoMdMenu } from "react-icons/io";

import logo from '@/assets/logo.png';
import { MdClose, MdOutlineArrowForward } from 'react-icons/md';
import { Button } from '@/components/ui/Button';
const navItems = [
    {
        label: 'Inicio',
        id: 'inicio',
    },
    {
        label: 'Servicios',
        id: 'servicios',
    },
    {
        label: 'Proyectos',
        id: 'proyectos',
    },
    {
        label: 'Como trabajo',
        id: 'como-trabajo',
    },

];

const sectionIds = [
    ...navItems.map((item) => item.id),
    'contacto',
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] =
        useState('inicio');

    // Detectar la sección visible
    useEffect(() => {
        const sections = sectionIds
            .map((id) => {
                return document.getElementById(id);
            })
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(
                    (entry) => entry.isIntersecting,
                );

                if (visibleSection) {
                    setActiveSection(
                        visibleSection.target.id,
                    );
                }
            },
            {
                rootMargin: '-35% 0px -55% 0px',
                threshold: 0,
            },
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Detectar si se hizo scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener(
            'scroll',
            handleScroll,
        );

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll,
            );
        };
    }, []);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const goToContact = () => {
        setActiveSection('contacto');

        document
            .querySelector('#contacto')
            ?.scrollIntoView({
                behavior: 'smooth',
            });
    };

    const goToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        closeMenu();

        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };


    return (
        <header className="sticky top-0 z-50">
            <nav
                className={`
                    relative
                    border-b
                    border-borde
                    transition-all
                    duration-300
                    ${isScrolled
                        ? 'bg-fondo/95 shadow-lg backdrop-blur-md'
                        : 'bg-fondo'
                    }
                `}
            >
                <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-6 lg:px-8">
                    {/* Logo + nombre */}
                    <a
                        href="#inicio"
                        onClick={() => setActiveSection('inicio')}
                        className="flex shrink-0 items-center gap-3"
                        aria-label="Ir al inicio"
                    >
                        <img
                            src={logo}
                            alt="Logo DC"
                            className="size-14 object-contain"
                        />

                        <div className="leading-tight">
                            <p className="text-lg font-semibold text-blanco">
                                Duvan Castellanos
                            </p>

                            <p className="text-sm text-texto-secundario">
                                Desarrollador Full Stack
                            </p>
                        </div>
                    </a>

                    {/* Menú de escritorio + CTA */}
                    <div className="ml-auto hidden items-center gap-10 lg:flex">
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => {
                                const isActive =
                                    activeSection === item.id;

                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            goToSection(item.id);
                                        }}
                                        className={`
                                        relative
                                        px-1
                                        py-2
                                        text-sm
                                        font-semibold
                                        transition-colors
                                        hover:text-primario
                                        ${isActive
                                                ? `
                                                    text-blanco
                                                    after:absolute
                                                    after:bottom-0
                                                    after:left-0
                                                    after:h-0.5
                                                    after:w-full
                                                    after:bg-primario
                                                `
                                                : 'text-texto-secundario'
                                            }
                                    `}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>

                        <Button
                            variant="brand"
                            rounded="sm"
                            size="small"
                            className={`px-5 ${activeSection === 'contacto'
                                ? 'ring-2 ring-primario-claro/60'
                                : ''
                                }`}
                            onClick={() => goToSection('contacto')}>
                            Hablemos
                            <MdOutlineArrowForward />
                        </Button>
                    </div>

                    {/* Botón móvil */}
                    <button
                        type="button"
                        onClick={() => {
                            setIsOpen((current) => !current);
                        }}
                        className="
                        ml-auto
                        rounded-sm
                        p-2
                        text-texto-secundario
                        transition-colors
                        hover:text-primario
                        lg:hidden
                    "
                        aria-label={
                            isOpen
                                ? 'Cerrar menú'
                                : 'Abrir menú'
                        }
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <MdClose size={26} />
                        ) : (
                            <IoMdMenu size={26} />
                        )}
                    </button>
                </div>

                {/* Menú móvil */}
                {isOpen && (
                    <div
                        className="
                        absolute
                        left-0
                        top-full
                        w-full
                        border-t
                        border-borde
                        bg-fondo
                        px-6
                        py-5
                        lg:hidden
                    "
                    >
                        <div className="mx-auto flex max-w-7xl flex-col gap-1">
                            {navItems.map((item) => {
                                const isActive =
                                    activeSection === item.id;

                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => {
                                            setActiveSection(item.id);
                                            closeMenu();
                                        }}
                                        className={`
                                        rounded-sm
                                        px-3
                                        py-3
                                        text-sm
                                        font-semibold
                                        transition-colors
                                        hover:bg-superficie
                                        hover:text-primario
                                        ${isActive
                                                ? 'bg-superficie text-blanco'
                                                : 'text-texto-secundario'
                                            }
                                    `}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}

                            <Button
                                variant="brand"
                                rounded="sm"
                                size="normal"
                                fullWidth
                                className="mt-3"
                                onClick={() => {
                                    closeMenu();
                                    goToContact();
                                }}
                            >
                                Hablemos →
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;