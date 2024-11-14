import { Link, useNavigate } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

const PaymentForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profiles');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="px-4 md:px-16 py-6 border-b">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="h-8 md:h-12"
          />
        </Link>
      </header>

      <main className="max-w-lg mx-auto px-4 py-12">
        <p className="text-sm text-gray-500 mb-2">PASO 3 DE 3</p>
        <h1 className="text-3xl font-medium mb-6">Configura tu tarjeta de crédito o débito</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Número de tarjeta"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Fecha de vencimiento"
              className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
            />
            <div className="relative">
              <input
                type="text"
                placeholder="CVV"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
              />
              <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <input
            type="text"
            placeholder="Nombre en la tarjeta"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
          />

          <div className="bg-gray-50 p-4 rounded">
            <div className="flex justify-between items-center mb-1">
              <span>$ 9.699 al mes (sin impuestos incluidos)</span>
              <button type="button" className="text-blue-600 hover:underline">
                Cambiar
              </button>
            </div>
            <span className="text-gray-600">Premium</span>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded font-semibold hover:bg-red-700 transition"
          >
            Iniciar membresía
          </button>
        </form>
      </main>
    </div>
  );
};

export default PaymentForm; 