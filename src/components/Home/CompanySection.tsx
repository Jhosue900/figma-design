import CIRCLES from '../../images/Company/CIRCLESECTION5.png'

function CompanySection() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-18 pb-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col items-end">
        <h1 className="font-aston text-[80px] font-normal mb-6 leading-[1.1] tracking-tight-custom text-white text-right max-w-2xl">
          Somos una empresa enfocada en Resultados
        </h1>

        <p className="font-montserrat text-soft-gray text-[20px] font-normal mb-4 leading-[1.4] max-w-7xl text-right">
          Creamos planes basados en tus objetivos, logrando resultados de crecimiento a corto, mediano y largo plazo.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <img
          src={CIRCLES}
          alt="Network of top brands"
          className="w-full h-auto max-w-3xl"
        />
      </div>
    </section>
  );
}

export default CompanySection;