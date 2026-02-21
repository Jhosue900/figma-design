import CIRCLES from '../../images/Company/CIRCLESECTION5.png'

function CompanySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-18 pb-16 sm:pb-20 lg:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="flex flex-col items-start md:items-end order-last md:order-first">
        <h1 className="font-aston text-[42px] sm:text-[60px] lg:text-[80px] font-normal mb-4 sm:mb-6 leading-[1.1] tracking-tight-custom text-white text-left md:text-right max-w-2xl">
          Somos una empresa enfocada en Resultados
        </h1>

        <p className="font-montserrat text-soft-gray text-[16px] sm:text-[18px] lg:text-[20px] font-normal mb-4 leading-[1.4] max-w-2xl text-left md:text-right">
          Creamos planes basados en tus objetivos, logrando resultados de crecimiento a corto, mediano y largo plazo.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <img
          src={CIRCLES}
          alt="Network of top brands"
          className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-none lg:max-w-3xl"
        />
      </div>
    </section>
  );
}

export default CompanySection;