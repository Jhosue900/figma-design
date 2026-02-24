import grupoLogo from '../../images/About/LOGOGWP.png'

function GroupSection() {
    const cards = [
        {
            id: 1,
            tag: 'Filosofía',
            title: '"Lograr que la gente conserve sus empleos y logre sus sueños"',
            description: 'Esto significa ayudar a los empresarios a consolidar y crecer sus negocios. ¡Y realmente nos encanta trabajar con personas que comparten esta misma filosofía!',
            gradient: 'linear-gradient(90deg, #531715 0%, #312731 35%, #202f42 70%, #12364c 100%)',
            //                                  ↑ rojo vivo    ↑ rojo oscuro   ↑ casi negro
            titleSize: 'text-[17px] sm:text-[19px]',
            titleStyle: 'italic',
        },
        {
            id: 2,
            tag: 'Nuestra Visión',
            title: 'Nuestra Visión',
            description: 'Convertirnos en la agencia de marketing más confiable y rentable, donde cada empresa, grande o pequeña, tenga las herramientas para prosperar al nivel que lo desee.',
            gradient: 'linear-gradient(90deg, #12364c 0%, #104247 35%, #1c463c 70%, #264732 100%)',
            //                                  ↑ teal vivo    ↑ teal oscuro
            titleSize: 'text-[20px] sm:text-[22px]',
            titleStyle: 'normal',
        },
        {
            id: 3,
            tag: 'Nuestra Misión',
            title: 'Nuestra Misión',
            description: 'Crear estrategias que conecten negocio y propósito, ayudando a las empresas a crecer de forma consciente, generando estabilidad y oportunidades para que más personas puedan construir el futuro que desean.',
            gradient: 'linear-gradient(90deg, #264732 0%, #2e482d 35%, #3e4826 70%, #4b481f 100%)',
            //                                  ↑ verde vivo   ↑ verde oscuro
            titleSize: 'text-[20px] sm:text-[22px]',
            titleStyle: 'normal',
        },
    ];

    return (
        <section className="w-full bg-black py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* Logo Grupo WeProm */}
                <div className="flex flex-col items-center mb-10 sm:mb-14">
                    {/* Reemplaza esto con tu imagen: */}
                    <img src={grupoLogo} alt="Grupo WeProm" className="h-32 sm:h-20 lg:h-44 w-auto mb-4" />
                </div>

                {/* Logos de empresas del grupo */}
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mb-14 sm:mb-20 opacity-60">
                    <span className="font-montserrat text-white text-[18px] sm:text-[22px] font-light tracking-wide">
                        +keting<br />
                        <span className="text-[11px] tracking-widest text-white/50">for business</span>
                    </span>
                    <span className="font-montserrat text-white text-[20px] sm:text-[26px] font-light tracking-wide italic">
                        Cypron
                        <span className="text-[11px] block tracking-wider text-white/50 not-italic">Production & Media</span>
                    </span>
                    <span className="font-montserrat text-white text-[22px] sm:text-[28px] font-light tracking-widest">
                        XER
                        <span className="inline-block w-4 h-4 rounded-full border border-white/60 mx-0.5 align-middle" />
                        Y
                        <span className="text-[10px] block tracking-widest text-white/40 normal-case">investigación y análisis</span>
                    </span>
                </div>

                {/* Título grande */}
                <h2 className="font-aston text-[44px] sm:text-[68px] lg:text-[90px] text-white leading-[1.0] tracking-tight mb-10 sm:mb-14">
                    Nuestro Principal Objetivo
                </h2>

                {/* Cards 3 columnas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="rounded-2xl p-6 sm:p-7 flex flex-col gap-4 min-h-[280px] sm:min-h-[340px]"
                            style={{ background: card.gradient, border: '1px solid rgba(255,255,255,0.08)' }}
                        >
                            {/* Título */}
                            <h3
                                className={`font-montserrat font-bold text-white leading-snug ${card.titleSize} ${card.titleStyle === 'italic' ? 'italic' : ''
                                    }`}
                            >
                                {card.title}
                            </h3>

                            {/* Descripción */}
                            <p className="font-montserrat text-white/70 text-[13px] sm:text-[14px] leading-relaxed mt-auto">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default GroupSection;