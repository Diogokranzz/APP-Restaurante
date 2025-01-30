import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toast } from "../components/ui/use-toast";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha mockada para demonstração
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Login realizado com sucesso",
        description: "Bem-vindo à área administrativa",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Erro no login",
        description: "Senha incorreta",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-2xl font-playfair text-secondary mb-6 text-center">
                Área Administrativa
              </h1>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Senha</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-playfair text-secondary mb-8">
            Dashboard Financeiro
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-playfair text-secondary mb-4">
                Resumo do Mês
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Receitas</span>
                  <span className="text-green-600 font-semibold">R$ 85.432,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Despesas</span>
                  <span className="text-red-600 font-semibold">R$ 52.147,00</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold">Lucro</span>
                  <span className="text-primary font-semibold">R$ 33.285,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-playfair text-secondary mb-4">
                Últimas Transações
              </h2>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                    <span
                      className={`font-semibold ${
                        transaction.type === "entrada"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      R$ {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const transactions = [
  {
    id: 1,
    description: "Vendas do dia",
    amount: "4.527,00",
    type: "entrada",
    date: "27/03/2024",
  },
  {
    id: 2,
    description: "Fornecedor de carnes",
    amount: "2.850,00",
    type: "saida",
    date: "26/03/2024",
  },
  {
    id: 3,
    description: "Vendas do dia",
    amount: "3.980,00",
    type: "entrada",
    date: "25/03/2024",
  },
];

export default Admin;