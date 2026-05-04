import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactoMR = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '¿En qué podemos ayudarte?',
        mensaje: '',
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
        }, 1800);
    };



    const asuntos = [
        '¿En qué podemos ayudarte?',
        'Video Institucional',
        'Video Publicitario',
        'Contenido para Social Media',
        'Animación 2D/3D',
        'Fotografía Profesional',
        'Producción con Drones',
        'Otro',
    ];

    return (
        <section className="w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white">
            <div className="max-w-5xl mx-auto">

                {/* Layout principal */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Columna izquierda */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-center gap-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-aston tracking-tight leading-tight">
                            ¿Cuánto cuesta un proyecto como este?
                        </h2>
                        <p className="text-white/70 font-normal text-sm md:text-base leading-relaxed">
                            La pregunta del millón. Pero no te preocupes, no cuesta millones, pero sin duda te ayudará a generarlos. Todos los proyectos que creamos son 100&nbsp;% personalizados, por lo que es importante definir ciertos factores para ofrecer un presupuesto preciso, como tus objetivos, la ubicación del estudio, el tipo de negocio, entre otros.
                            <br /><br />
                            ¡Demos vida al proyecto!
                            <br />
                            Platiquemos...
                        </p>
                    </div>

                    {/* Columna derecha — Formulario */}
                    <div className="w-full bg-neutral-950 border p-5 border-neutral-800 rounded-2xl lg:w-3/5">
                        {sent ? (
                            <div className="flex flex-col items-center justify-center h-full gap-6 py-20 text-center">
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center border-2"
                                    style={{ borderColor: '#80b67d', color: '#80b67d', backgroundColor: '#80b67d20' }}
                                >
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-aston">¡Mensaje enviado!</h3>
                                <p className="text-white/50 text-sm max-w-xs">
                                    Nos pondremos en contacto contigo muy pronto. ¡Gracias por escribirnos!
                                </p>
                                <button
                                    onClick={() => { setSent(false); setFormData({ nombre: '', email: '', telefono: '', asunto: '¿En qué podemos ayudarte?', mensaje: '' }); }}
                                    className="mt-2 text-sm text-white/40 hover:text-white transition-colors duration-300 underline underline-offset-4"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                {/* Nombre */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-xs font-medium uppercase tracking-widest">
                                        Nombre <span className="text-[#c5362e]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        required
                                        placeholder="Nombre completo"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-xs font-medium uppercase tracking-widest">
                                        Email <span className="text-[#c5362e]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Correo electrónico"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
                                    />
                                </div>

                                {/* Teléfono */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-xs font-medium uppercase tracking-widest">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        placeholder="+00 000 000 0000"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600"
                                    />
                                </div>

                                {/* Asunto */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-xs font-medium uppercase tracking-widest">
                                        Asunto <span className="text-[#c5362e]">*</span>
                                    </label>
                                    <select
                                        name="asunto"
                                        required
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-300 focus:border-neutral-600 appearance-none cursor-pointer"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff40' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                                    >
                                        {asuntos.map((a, i) => (
                                            <option key={i} value={a} className="bg-neutral-900">{a}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Mensaje */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-xs font-medium uppercase tracking-widest">
                                        Mensaje <span className="text-[#c5362e]">*</span>
                                    </label>
                                    <textarea
                                        name="mensaje"
                                        required
                                        placeholder="Platíquenos..."
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        rows={4}
                                        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-neutral-600 resize-none"
                                    />
                                </div>

                                {/* Botón submit */}
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="mt-2 w-full relative text-white font-montserrat font-semibold text-sm px-6 py-4 rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60"
                                    style={{
                                        border: '2px solid transparent', background: 'linear-gradient(#111, #111) padding-box,  border-box',

                                    }}
                                >
                                    {sending ? (
                                        <>
                                            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                            </svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar mensaje
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>

                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactoMR;