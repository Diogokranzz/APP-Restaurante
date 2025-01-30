import Navbar from "../components/Navbar";

const Menu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair text-secondary mb-12 text-center">
            Nosso Cardápio
          </h1>

          {menuSections.map((section) => (
            <div key={section.title} className="mb-16">
              <h2 className="text-2xl font-playfair text-primary mb-8 text-center">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item) => (
                  <div key={item.name} className="dish-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-playfair text-secondary">
                          {item.name}
                        </h3>
                        <span className="text-primary font-semibold">
                          R$ {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const menuSections = [
  {
    title: "Entradas",
    items: [
      {
        name: "Carpaccio de Filé Mignon",
        description: "Finas fatias de filé mignon com molho de mostarda e alcaparras",
        price: "42,00",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Bruschetta Caprese",
        description: "Pão italiano grelhado com tomate, mozzarella e manjericão",
        price: "38,00",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Pratos Principais",
    items: [
      {
        name: "Risoto de Funghi",
        description: "Arroz arbóreo com mix de cogumelos frescos e parmesão",
        price: "68,00",
        image: "https://images.unsplash.com/photo-1644704170910-a0cdf183649b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Filé ao Molho Madeira",
        description: "Filé mignon grelhado com molho madeira e batatas rústicas",
        price: "89,00",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Sobremesas",
    items: [
      {
        name: "Petit Gateau",
        description: "Bolo quente de chocolate com sorvete de baunilha",
        price: "32,00",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Tiramisù",
        description: "Clássica sobremesa italiana com café e mascarpone",
        price: "28,00",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
];

export default Menu;
