'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Use next/navigation
import Image from 'next/image';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Defina um efeito para garantir que o código só execute no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const searchItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/QuemSomos' },
    { name: 'Duvidas', path: '/Duvidas' },
    { name: 'cadastro', path: '/cadastro' },
    { name: 'login', path: '/login' },
    { name: 'mapa', path: '/MapaInterativo' },
    { name: 'Status', path: '/StatusLinhas' },
    { name: 'Comercios', path: '/Comercios' },
    { name: 'assistente', path: '/Chatbot' },
  ];

  const handleSearch = () => {
    if (!isClient) return; // Evita erro no lado do servidor

    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) {
      alert('Por favor, digite algo para pesquisar.');
      return;
    }

    console.log('Buscando por:', trimmedQuery);

    const result = searchItems.find((item) =>
      item.name.toLowerCase().includes(trimmedQuery)
    );

    if (result) {
      router.push(result.path);
    } else {
      alert('Nenhum resultado encontrado.');
    }
  };

  return (
    <div className="flex items-center">

      <input
        className="border-2 rounded-2xl pl-3 mt-6 
            ml-2 border-gray-500 bg-[#D9D9D9] p-1.5 text-black bg-no-repeat bg-right cursor-pointer w-full sm:w-80 md:w-46 md:p-1 lg:w-100 lg:p-1.5"
        placeholder="O que você deseja?"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />

      <button
        onClick={handleSearch}
        className="ml-2 h-10 w-10 sm:w-10 sm:h-10 md:w-12 md:h-10 lg:w-12 lg:h-10 p-2 bg-gray-300 rounded-lg flex items-center justify-center mt-6"
      >
        <Image src="/assets/lupa-cinza.svg" alt="Buscar" width={20} height={20} />
      </button>
    </div>
  );
};

export default SearchBar;