import { Link, useNavigate } from 'react-router-dom';

interface EmailConfirmationProps {
  email: string;
}

const EmailConfirmation = ({ email }: EmailConfirmationProps) => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/signup/planform');
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
        <div>
          <p className="text-xs mb-2">PASO 1 DE 3</p>
          <h1 className="text-3xl font-medium mb-4">¡Hola de nuevo!</h1>
          <h2 className="text-xl mb-4">Suscribirte a Netflix es fácil.</h2>
          <p className="text-lg mb-4">Ingresa tu contraseña para comenzar a ver al instante.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-300 text-gray-700"
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-3 rounded bg-white border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded font-semibold hover:bg-red-700 transition"
            >
              Siguiente
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EmailConfirmation; 