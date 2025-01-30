import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair text-primary mb-6 animate-fadeIn">
              Villa Gourmet
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Uma experiência gastronômica única em cada prato
            </p>
            <Link
              to="/cardapio"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              Ver Cardápio
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-secondary mb-12 text-center">
            Pratos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.id}
                className="dish-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-playfair text-secondary mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600">{dish.description}</p>
                  <p className="text-primary font-semibold mt-2">R$ {dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const featuredDishes = [
  {
    id: 1,
    name: "Risoto de Funghi",
    description: "Arroz arbóreo com mix de cogumelos frescos e parmesão",
    price: "68,00",
    image: "https://images.unsplash.com/photo-1673421161165-c4b5b0489aef?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Filé ao Molho Madeira",
    description: "Filé mignon grelhado com molho madeira e batatas rústicas",
    price: "89,00",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Salmão Grelhado",
    description: "Salmão fresco grelhado com legumes da estação",
    price: "78,00",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1000&auto=format&fit=crop",
  },
];

export default Index;