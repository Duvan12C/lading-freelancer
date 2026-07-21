
import Card from '@/components/ui/Card';
import { IoCodeSlash } from "react-icons/io5";
import landingPage from '@/assets/landing-page.svg';
import systemDashboard from '@/assets/system-dashboard.svg';
import mobileApp from '@/assets/mobile-app.svg';
import automationIntegrations from '@/assets/automation-integrations.svg';
import { MdPhoneIphone } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";

const services = [
    {
        id: 1,
        title: 'Proyecto para empresa consultora',
        description: 'Desarrollo de sistemas rubustos y escalables adaptaos a tus procesos. Panales de adminsitracion, roles, reportes y más.',
        img: landingPage,
        icon: IoCodeSlash
    },
    {
        id: 2,
        title: 'Páginas web y lading pages',
        description: 'Sitios rapidos, modernos y enfocados en comvertir visitantes en clientes. Diseño responsivo y optimizado para SEO',
        img: systemDashboard,
        icon: RiPagesLine
    },
    {
        id: 3,
        title: 'Aplicaciones móviles',
        description: 'Apps nativas y multiplataforma con experiencias fluidas, integradas con tus servicios y listas para crear contenido',
        img: mobileApp,
        icon: MdPhoneIphone
    },
    {
        id: 4,
        title: 'Integraciones y automatizacion',
        description: 'Conoce tus herramientas y datos para automatizar tareas, reducir errores y ahorrar tiempo en tu negocio.',
        img: automationIntegrations,
        icon: IoMdSettings
    },
];

const Services = () => {
    return (
        <section id="servicios">
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
            >
                {/* Columna izquierda */}
                <div className="max-w-xl">
                    <h3 className="text-lg font-bold text-primario uppercase">
                        Servicios
                    </h3>
                    <h1
                        className="
                            text-4xl
                            font-bold
                            leading-tight
                            text-fondo
                            sm:text-5xl
                        "
                    >
                        Sistemas digitales
                        <br />
                        para tu negocio.
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
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {
                        services.map((service) => (
                            <Card
                                animation="lift-scale"
                                key={service.id}
                                width="w-full"
                                height="min-h-44"
                                borderColor="borde-morado"
                                hoverBorderColor="primario"
                                rounded="lg"
                                className="relative bg-blanco-suave p-5 sm:p-6">
                                <Card
                                    borderColor="primario"
                                    rounded="md"
                                    width="size-14"
                                    height="size-14"
                                    className="
                                            absolute
                                            left-5
                                            top-5
                                            flex
                                            size-12
                                            items-center
                                            justify-center
                                            bg-primario
                                            text-blanco
                                            sm:left-6
                                            sm:top-6
                                            sm:size-14">
                                    {service.icon && (
                                        <service.icon className="size-7 sm:size-8" />
                                    )}
                                </Card>

                                {/* Texto: inicia después del ícono y tiene ancho limitado */}
                                <div className="ml-16 pr-1 sm:ml-20 sm:max-w-[14rem]">
                                    <h3 className="text-lg font-bold text-fondo">
                                        {service.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-oscuro">
                                        {service.description}
                                    </p>
                                </div>

                                <img src={service.img}
                                    alt=""
                                    aria-hidden="true"
                                    className="
                                        absolute
                                        bottom-5
                                        right-5
                                        hidden
                                        h-35
                                        w-auto
                                        object-contain
                                        sm:block
                                    "
                                />
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;