import { useNavigate } from 'react-router-dom';

const PlanTable = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="px-4 md:px-16 py-6 border-b">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          className="h-8 md:h-12"
        />
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-sm text-gray-500 mb-2">PASO 2 DE 3</p>
        <h1 className="text-3xl font-medium mb-8">Selecciona el plan ideal para ti</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Plan Básico */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <div className="bg-gradient-to-r from-blue-700 to-purple-600 text-white p-4 rounded-t-lg mb-4">
              <h2 className="text-xl font-bold">Básico</h2>
              <p>720p</p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Precio mensual</p>
                <p className="text-xl font-bold">$ 3.000</p>
              </div>

              <div>
                <p className="text-gray-600">Calidad de audio y video</p>
                <p>Buena</p>
              </div>

              <div>
                <p className="text-gray-600">Resolución</p>
                <p>720p (HD)</p>
              </div>

              <div>
                <p className="text-gray-600">Dispositivos compatibles</p>
                <p>TV, computadora, teléfono, tablet</p>
              </div>

              <div>
                <p className="text-gray-600">Dispositivos de descarga</p>
                <p>1</p>
              </div>
            </div>
          </div>

          {/* Plan Estándar */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <div className="bg-gradient-to-r from-blue-700 to-purple-600 text-white p-4 rounded-t-lg mb-4">
              <h2 className="text-xl font-bold">Estándar</h2>
              <p>1080p</p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Precio mensual</p>
                <p className="text-xl font-bold">$ 5.000</p>
              </div>

              <div>
                <p className="text-gray-600">Calidad de audio y video</p>
                <p>Óptima</p>
              </div>

              <div>
                <p className="text-gray-600">Resolución</p>
                <p>4k (Ultra HD) + HDR</p>
              </div>

              <div>
                <p className="text-gray-600">Audio espacial (Sonido inmersivo)</p>
                <p>Incluido</p>
              </div>

              <div>
                <p className="text-gray-600">Dispositivos compatibles</p>
                <p>TV, computadora, teléfono, tablet</p>
              </div>

              <div>
                <p className="text-gray-600">Dispositivos de descarga</p>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 mb-4">
          La disponibilidad del contenido en HD (720p), Full HD (1080p) depende de tu servicio de internet y del dispositivo en uso. No todo el contenido está disponible en todas las resoluciones.
        </p>

        <p className="text-sm text-gray-500 mb-8">
          Solo las personas que viven contigo pueden usar tu cuenta. Puedes ver Netflix en 2 dispositivos al mismo tiempo con el plan Estándar y en 1 con el plan Básico.
        </p>

        <button
          onClick={() => navigate('/signup/payment')}
          className="w-full bg-red-600 text-white py-4 rounded font-semibold hover:bg-red-700 transition"
        >
          Siguiente
        </button>
      </main>
    </div>
  );
};

export default PlanTable; 