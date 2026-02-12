export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div><br/><br/>
      <h1 className="ml-4 text-white">Cargando....</h1>
    </div>
  );
}
