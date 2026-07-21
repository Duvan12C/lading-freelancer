import { FiCode, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Card from '@/components/ui/Card';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-borde bg-fondo">
            <div
                className="
                    mx-auto
                    grid
                    max-w-7xl
                    gap-6
                    px-6
                    py-6
                    text-texto-secundario
                    md:grid-cols-[1fr_auto_1fr]
                    md:items-center
                    lg:px-8
                "
            >
                {/* Descripción */}
                <div className="flex items-center gap-3 md:justify-self-start">
                    <Card
                        borderColor="borde-morado"

                        width="size-12"
                        height="size-12"
                        className="
                            flex
                            items-center
                            justify-center
                            bg-superficie/30
                            text-primario
                        "
                    >
                        <FiCode className="size-6" />
                    </Card>

                    <p className="max-w-64 text-sm leading-relaxed">
                        Desarrollo de soluciones digitales a medida para empresas
                        y emprendedores.
                    </p>
                </div>

                {/* Copyright */}
                <p className="text-center text-sm">
                    © {currentYear} Todos los derechos reservados.
                </p>

                {/* Redes */}
                <div className="flex justify-center gap-3 md:justify-self-end">
                    <a
                        href="https://github.com/Duvan12C"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <Card
                            animation="lift"
                            width="size-10"
                            height="size-10"
                            borderColor="borde"
                            hoverBorderColor="primario"
                            rounded="md"
                            className="
                                flex
                                items-center
                                justify-center
                                bg-superficie/30
                                text-primario
                            "
                        >
                            <FaGithub className="size-5" />
                        </Card>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/duvan-ernesto-castellanos-gonzalez/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Card
                            animation="lift"
                            width="size-10"
                            height="size-10"
                            borderColor="borde"
                            hoverBorderColor="primario"
                            rounded="md"
                            className="
                                flex
                                items-center
                                justify-center
                                bg-superficie/30
                                text-primario
                            "
                        >
                            <FaLinkedinIn className="size-5" />
                        </Card>
                    </a>

                    <a
                        href="mailto:iduvangonzalez.13@gmail.com"
                        aria-label="Correo electrónico"
                    >
                        <Card
                            animation="lift"
                            width="size-10"
                            height="size-10"
                            borderColor="borde"
                            hoverBorderColor="primario"
                            rounded="md"
                            className="
                                flex
                                items-center
                                justify-center
                                bg-superficie/30
                                text-primario
                            "
                        >
                            <FiMail className="size-5" />
                        </Card>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;