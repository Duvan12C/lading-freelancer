import { motion } from 'motion/react';
import {
    FiCode,
    FiFileText,
    FiMessageCircle,
    FiPocket,
} from 'react-icons/fi';

const steps = [
    {
        number: '01',
        title: 'Cuéntame tu idea',
        description:
            'Hablamos sobre tu proyecto, objetivos y los desafíos que quieres resolver.',
        icon: FiMessageCircle,
    },
    {
        number: '02',
        title: 'Propuesta y planificación',
        description:
            'Te presento una propuesta clara con alcance, tiempos, costos y estrategia.',
        icon: FiFileText,
    },
    {
        number: '03',
        title: 'Desarrollo por etapas',
        description:
            'Construyo tu solución por etapas, con avances y retroalimentación continua.',
        icon: FiCode,
    },
    {
        number: '04',
        title: 'Entrega y seguimiento',
        description:
            'Entrego el proyecto listo para usar y te acompaño en los siguientes pasos.',
        icon: FiPocket,
    },
];

const HowWork = () => {
    return (
        <section id="como-trabajo">
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
                <div className="max-w-xl">
                    <h3 className="text-lg font-bold uppercase text-primario">
                        Cómo trabajo
                    </h3>

                    <h2
                        className="
                            text-4xl
                            font-bold
                            leading-tight
                            text-fondo
                            sm:text-5xl
                        "
                    >
                        Un proceso claro, desde tu idea hasta la entrega.
                    </h2>

                    <p
                        className="
                            mt-5
                            max-w-lg
                            text-base
                            leading-relaxed
                            text-texto-secundario
                            sm:text-lg
                        "
                    >
                        Trabajo de forma transparente y colaborativa para convertir
                        tus ideas en soluciones digitales que generan resultados.
                    </p>
                </div>

                {/* Versión escritorio */}
                <div className="relative mt-10 hidden lg:block">
                    {/* Línea gris de fondo */}
                    <div className="absolute left-[12.5%] right-[12.5%] top-7 h-px bg-borde" />

                    {/* Líneas moradas que aparecen paso a paso */}
                    {steps.slice(0, -1).map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute top-7 h-px origin-left bg-primario"
                            style={{
                                left: `${12.5 + index * 25}%`,
                                width: '25%',
                            }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.45 + index * 0.65,
                                duration: 0.45,
                                ease: 'easeOut',
                            }}
                        />
                    ))}

                    <div className="grid grid-cols-4 gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.article
                                    key={step.number}
                                    className="relative z-10 text-center"
                                    initial={{
                                        opacity: 0,
                                        y: 18,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.65,
                                        duration: 0.4,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <motion.div
                                        className="
                                            mx-auto
                                            flex
                                            size-14
                                            items-center
                                            justify-center
                                            rounded-md
                                            border
                                            border-primario-claro
                                            bg-blanco-suave
                                            text-2xl
                                            font-bold
                                            text-primario
                                        "
                                        initial={{ scale: 0.6 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.65,
                                            type: 'spring',
                                            stiffness: 340,
                                            damping: 16,
                                        }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    <motion.div
                                        className="
                                            mx-auto
                                            mt-5
                                            flex
                                            size-12
                                            items-center
                                            justify-center
                                            text-primario
                                        "
                                        initial={{
                                            opacity: 0,
                                            scale: 0.7,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.25 + index * 0.65,
                                            duration: 0.3,
                                        }}
                                    >
                                        <Icon className="size-11 stroke-[1.5]" />
                                    </motion.div>

                                    <h3 className="mt-4 text-lg font-bold text-fondo">
                                        {step.title}
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-56 text-sm leading-relaxed text-texto-secundario">
                                        {step.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                {/* Versión móvil */}
                <div className="mt-10 space-y-8 lg:hidden">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.article
                                key={step.number}
                                className="flex gap-4"
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.35,
                                }}
                            >
                                <div className="flex shrink-0 flex-col items-center">
                                    <div
                                        className="
                                            flex
                                            size-12
                                            items-center
                                            justify-center
                                            rounded-md
                                            border
                                            border-primario-claro
                                            bg-blanco-suave
                                            font-bold
                                            text-primario
                                        "
                                    >
                                        {step.number}
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="mt-2 h-16 w-px bg-primario" />
                                    )}
                                </div>

                                <div className="pb-4">
                                    <Icon className="size-9 text-primario" />

                                    <h3 className="mt-3 text-lg font-bold text-fondo">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-texto-secundario">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowWork;