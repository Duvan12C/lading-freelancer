
import { Button } from '@/components/ui/Button';
import { FiArrowUpRight, FiChevronDown, FiMail } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import { FaWhatsapp } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm('mvzerejk');
    return (
        <section
            id="contacto"
            className="
                    relative
                    isolate
                    overflow-hidden
                    bg-fondo
                    pt-32
                    sm:pt-36
                    lg:pt-40

                    before:pointer-events-none
                    before:absolute
                    before:left-1/2
                    before:top-[-7rem]
                    before:z-0
                    before:h-56
                    before:w-[150%]
                    before:-translate-x-1/2
                    before:rounded-[50%]
                    before:bg-blanco">
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
                {/* Columna izquierda */}
                <div className="max-w-xl">
                    <h3 className="text-lg font-bold text-primario uppercase">
                        Contacto
                    </h3>
                    <h1 className="text-4xl font-bold leading-tight text-blanco sm:text-5xl">
                        ¿Tienes un idea o un
                        <br />
                        sistema que quieres mejorar?
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-relaxed text-texto-secundario sm:text-lg">
                        Cuentame sobre tu proyecto o el desafio que quieres resolver.
                        Te responderé lo antes posible con una propuesta clara,
                        alineada a tus objetivos y necesidades.
                    </p>

                    <div className="mt-30 flex  flex-col  gap-10">
                        <Card className='flex gap-5' borderWidth="none">
                            <>
                                <Card
                                    animation="lift"
                                    width="size-16"
                                    height="size-16"
                                    borderColor="borde-morado"
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
                                    <FaWhatsapp className="size-9" />
                                </Card>
                                <div className="flex flex-col gap-2">
                                    <span className="text-blanco text-xl font-bold">
                                        WhatsApp
                                    </span>
                                    <span className="text-texto-secundario ">
                                        Hablemos por este medio y resolvamos tus dudas
                                    </span>
                                </div>
                            </>
                        </Card>

                        <Card className='flex gap-5' borderWidth="none">
                            <>
                                <Card
                                    animation="lift"
                                    width="size-16"
                                    height="size-16"
                                    borderColor="borde-morado"
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
                                    <FiMail className="size-9" />
                                </Card>
                                <div className="flex flex-col gap-2">
                                    <span className="text-blanco text-xl font-bold">
                                        Correo electrónico
                                    </span>
                                    <span className="text-texto-secundario">
                                        Enviame un mensaje y te responderé pronto.
                                    </span>
                                </div>
                            </>
                        </Card>
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="w-full">
                    <Card
                        animation="fade-up"
                        width="w-full"
                        borderColor="borde-morado"
                        hoverBorderColor="primario"
                        rounded="xl"
                        className="bg-superficie/40 p-6 sm:p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="nombre"
                                    className="mb-2 block text-base text-blanco"
                                >
                                    Nombre
                                </label>

                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="
                                            h-12
                                            w-full
                                            rounded-md
                                            border
                                            border-borde
                                            bg-superficie
                                            px-4
                                            text-blanco
                                            outline-none
                                            transition-colors
                                            focus:border-primario
                                            focus:ring-2
                                            focus:ring-primario/20
                                        "
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="correo"
                                    className="mb-2 block text-base text-blanco"
                                >
                                    Correo electrónico
                                </label>

                                <input
                                    id="correo"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="
                                        h-12
                                        w-full
                                        rounded-md
                                        border
                                        border-borde
                                        bg-superficie
                                        px-4
                                        text-blanco
                                        outline-none
                                        transition-colors
                                        focus:border-primario
                                        focus:ring-2
                                        focus:ring-primario/20
                                    "
                                />
                                <ValidationError
                                    prefix="Correo"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="tipo-proyecto"
                                    className="mb-2 block text-base text-blanco"
                                >
                                    Tipo de proyecto
                                </label>

                                <div className="relative">
                                    <select
                                        id="tipo-proyecto"
                                        name="tipoProyecto"
                                        defaultValue=""
                                        required
                                        className="
                                                h-12
                                                w-full
                                                appearance-none
                                                rounded-md
                                                border
                                                border-borde
                                                bg-superficie
                                                px-4
                                                pr-12
                                                text-blanco
                                                outline-none
                                                transition-colors
                                                focus:border-primario
                                                focus:ring-2
                                                focus:ring-primario/20
                                            "
                                    >
                                        <option value="" disabled>
                                            Selecciona una opción
                                        </option>

                                        <option value="pagina-web">
                                            Página web o landing page
                                        </option>

                                        <option value="sistema-web">
                                            Sistema web a medida
                                        </option>

                                        <option value="app-movil">
                                            Aplicación móvil
                                        </option>

                                        <option value="integracion">
                                            Integración o automatización
                                        </option>
                                    </select>

                                    <FiChevronDown
                                        className="
                                            pointer-events-none
                                            absolute
                                            right-4
                                            top-1/2
                                            size-5
                                            -translate-y-1/2
                                            text-blanco
                                        "
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="mensaje"
                                    className="mb-2 block text-base text-blanco"
                                >
                                    Cuéntame brevemente tu idea
                                </label>

                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    rows={5}
                                    required
                                    className="
                                        w-full
                                        resize-none
                                        rounded-md
                                        border
                                        border-borde
                                        bg-superficie
                                        px-4
                                        py-3
                                        text-blanco
                                        outline-none
                                        transition-colors
                                        focus:border-primario
                                        focus:ring-2
                                        focus:ring-primario/20
                                    "
                                />
                                <ValidationError
                                    prefix="Mensaje"
                                    field="mensaje"
                                    errors={state.errors}
                                />
                            </div>

                            <Button
                                type="submit"
                                fullWidth
                                disabled={state.submitting}
                                icon={<FiArrowUpRight />}
                                iconPosition="right"
                            >
                                {state.submitting
                                    ? 'Enviando...'
                                    : 'Solicitar cotización'}
                            </Button>

                            {state.succeeded && (
                                <p className="text-center text-sm text-primario-claro">
                                    ¡Solicitud enviada correctamente! Te responderé pronto.
                                </p>
                            )}

                            <ValidationError errors={state.errors} />
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;