/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Heart, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

const JOKE_IMAGE = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"; // Placeholder logic, will explain in summary
// Using the artifacts logic - standard patterns suggest I should reference the uploaded images

/// Mock Product Data
const PRODUCTS = [
  { id: 1, name: "Verveine do Cerrado by DUDU", price: "R$ 1.250,00", category: "Fragrances", image: "/input_file_1.png" },
  { id: 2, name: "Smartphone Ribeiro Pro Max - Sold Edition", price: "R$ 12.999,00", category: "Electronics", image: "/input_file_2.png" },
  { id: 3, name: "Heritage Denim Jacket by Lipao", price: "R$ 2.400,00", category: "Apparel", image: "/input_file_3.png" },
  { id: 4, name: "Premium BBQ Master Set (Lusca Design)", price: "R$ 5.800,00", category: "Home", image: "/input_file_4.png" },
  { id: 5, name: "The 'Nicolas' Sunglasses Edition", price: "R$ 3.100,00", category: "Accessories", image: "/input_file_5.png" },
  { id: 6, name: "Rafinha Wireless Charger (Marble)", price: "R$ 890,00", category: "Electronics", image: "/input_file_6.png" },
];

const TEAM = [
  { name: "DUDU", role: "CEO & Chief Enthusiast", image: "/input_file_1.png" },
  { name: "Sold", role: "Head of Logistics (Churrasco)", image: "/input_file_2.png" },
  { name: "Lipao", role: "Creative Director", image: "/input_file_3.png" },
  { name: "Lusca", role: "VP of Quality Control", image: "/input_file_4.png" },
  { name: "Nicolas", role: "Senior Stylist", image: "/input_file_5.png" },
  { name: "Rafinha", role: "Global Ambassador", image: "/input_file_6.png" },
  { name: "Julio", role: "Chairman of the Board", image: "/input_file_7.png" },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const triggerJoke = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
    setClickCount(prev => prev + 1);
    
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#000000', '#ffffff', '#FFD700', '#FF4500']
    });
  };

  useEffect(() => {
    // If it's a mobile device, show a welcome toast after 2s
    const timer = setTimeout(() => {
      console.log("Loja carregada com sucesso.");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Promo Bar */}
      <div className="bg-black text-white text-[10px] uppercase tracking-widest py-2 text-center">
        Frete Grátis para todo o Brasil em pedidos acima de R$ 5.000,00
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={triggerJoke} className="block lg:hidden">
            <Menu size={20} />
          </button>
          <a href="#" onClick={triggerJoke} className="text-xl font-bold tracking-tighter uppercase">RIBEIRO®</a>
          <div className="hidden lg:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-gray-500">
            <a href="#" onClick={triggerJoke} className="hover:text-black transition-colors">Novidades</a>
            <a href="#" onClick={triggerJoke} className="hover:text-black transition-colors">Coleções</a>
            <a href="#" onClick={triggerJoke} className="hover:text-black transition-colors">Sobre</a>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <button onClick={triggerJoke} className="hidden sm:block hover:text-gray-600 transition-colors">
            <Search size={20} />
          </button>
          <button onClick={triggerJoke} className="hover:text-gray-600 transition-colors">
            <User size={20} />
          </button>
          <button onClick={triggerJoke} className="hover:text-gray-600 transition-colors">
            <Heart size={20} />
          </button>
          <button onClick={triggerJoke} className="flex items-center gap-2 hover:text-gray-600 transition-colors">
            <ShoppingBag size={20} />
            <span className="text-xs font-bold">({clickCount})</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Gustavo Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img src="/input_file_0.png" alt="Gustavo Ribeiro" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 mb-4 block">Limited Edition 2026</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 uppercase leading-none drop-shadow-2xl">
            GUSTAVO RIBEIRO<br />
            <span className="text-gray-400">COLLECTION</span>
          </h1>
          <button 
            onClick={triggerJoke}
            className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-3 mx-auto group shadow-xl"
          >
            Explorar Coleção <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </header>

      {/* Features */}
      <section className="py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <Truck size={24} strokeWidth={1.5} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1">Entrega Mundial</p>
              <p className="text-sm text-gray-500">Logística premium para sua residência</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <ShieldCheck size={24} strokeWidth={1.5} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1">Qualidade Garantida</p>
              <p className="text-sm text-gray-500">Curadoria exclusiva por Gustavo Ribeiro</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <RotateCcw size={24} strokeWidth={1.5} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1">Devolução Ribeiro</p>
              <p className="text-sm text-gray-500">30 dias para mudar de ideia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight uppercase">Peças Essenciais</h2>
            <p className="text-gray-400 text-sm mt-2">Design atemporal focado na excelência do cotidiano.</p>
          </div>
          <button onClick={triggerJoke} className="text-xs font-bold uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            Ver Todos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={triggerJoke}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white px-2 py-1 text-[8px] font-bold uppercase tracking-widest shadow-sm">
                  Exclusivo
                </div>
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold uppercase py-3 px-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap shadow-xl">
                  Adicionar ao Carrinho
                </button>
              </div>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">{product.category}</p>
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Team Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">The Ribeiro Board</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">A elite por trás da curadoria mais exclusiva do hemisfério sul. Especialistas em churrasco, design e estilo de vida.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="text-center group" onClick={triggerJoke} role="button">
                <div className="aspect-square bg-gray-900 overflow-hidden mb-4 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800 p-2">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop";
                    }}
                  />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest leading-tight">{member.name}</h4>
                <p className="text-[10px] text-gray-500 uppercase mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 italic">RIBEIRO®</h2>
            <p className="text-gray-400 text-sm max-w-xs mb-8">
              Definindo o padrão Ribeiro desde 1990. Qualidade, ousadia e um toque de luxo cotidiano.
            </p>
            <div className="flex gap-4">
              <button onClick={triggerJoke} className="p-2 border border-gray-100 hover:bg-black hover:text-white transition-all"><Instagram size={16} /></button>
              <button onClick={triggerJoke} className="p-2 border border-gray-100 hover:bg-black hover:text-white transition-all"><Twitter size={16} /></button>
              <button onClick={triggerJoke} className="p-2 border border-gray-100 hover:bg-black hover:text-white transition-all"><Facebook size={16} /></button>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest mb-6">Ajuda</h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-500 uppercase tracking-wider">
              <li><button onClick={triggerJoke} className="hover:text-black">Envios</button></li>
              <li><button onClick={triggerJoke} className="hover:text-black">Devoluções</button></li>
              <li><button onClick={triggerJoke} className="hover:text-black">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest mb-6">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-tighter">Assine para receber convites exclusivos do Ribeiro.</p>
            <div className="flex items-center border-b border-black py-2">
              <input type="email" placeholder="ENDEREÇO DE E-MAIL" className="bg-transparent text-[10px] outline-none flex-1 uppercase tracking-tighter" />
              <button onClick={triggerJoke}>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-widest text-gray-400 font-medium">
          <p>© 2026 RIBEIRO COLLECTION. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <button onClick={triggerJoke}>Privacidade</button>
            <button onClick={triggerJoke}>Termos</button>
          </div>
        </div>
      </footer>

      {/* JOKE MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-crosshair" 
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative bg-white w-full max-w-lg overflow-hidden flex flex-col shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black text-white hover:bg-gray-800 transition-colors"
                id="close-modal-btn"
              >
                <X size={20} />
              </button>

              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img 
                  src="/input_file_0.png" 
                  alt="FELIZ ANIVERSÁRIO GUSTAVO!" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 text-center bg-black text-white">
                <motion.h2 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-4xl font-extrabold tracking-tighter uppercase mb-4"
                >
                  FELIZ ANIVERSÁRIO GUSTAVO RIBEIRO!
                </motion.h2>
                <p className="text-gray-400 text-sm uppercase tracking-widest leading-relaxed">
                  Você acaba de ganhar 0% de desconto em toda a loja!<br />
                  <span className="text-white font-bold block mt-4">PEGADINHA DO TIME RIBEIRO!</span>
                </p>
                
                <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center gap-2 flex-wrap">
                  {TEAM.map((m, i) => (
                    <span key={i} className="text-[8px] bg-gray-900 border border-gray-800 px-2 py-1 rounded-full text-gray-500 font-bold uppercase tracking-tighter">
                      {m.name}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="mt-8 w-full bg-white text-black py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all outline-none"
                >
                  FECHAR E TENTAR COMPRAR DE NOVO
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
