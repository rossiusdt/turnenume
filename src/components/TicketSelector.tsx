import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface TicketOption {
  id: string;
  name: string;
  price: number;
  checkoutUrl: string;
}

const ticketOptions: TicketOption[] = [
  {
    id: 'pista',
    name: 'SETOR PISTA',
    price: 137.00,
    checkoutUrl: 'https://seguro.seguro-checarseguranca.shop/api/public/shopify?product=2006076622223&store=20060'
  },
  {
    id: 'premium',
    name: 'SETOR PREMIUM',
    price: 187.00,
    checkoutUrl: 'https://seguro.seguro-checarseguranca.shop/api/public/shopify?product=2006046874839&store=20060'
  }
];

export default function TicketSelector() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'pista': 0,
    'premium': 0
  });

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta)
    }));
  };

  const totalTickets = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  const handleCheckout = () => {
    const selectedTickets = Object.entries(quantities).filter(([_, qty]) => qty > 0);

    if (selectedTickets.length === 0) return;

    const ticketId = selectedTickets[0][0];
    const quantity = selectedTickets[0][1];
    const ticket = ticketOptions.find(t => t.id === ticketId);

    if (ticket?.checkoutUrl) {
      const url = new URL(ticket.checkoutUrl);
      url.searchParams.set('quantity', quantity.toString());
      window.location.href = url.toString();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <p className="text-gray-700 font-medium mb-6">Escolha uma opção</p>

      <div className="space-y-3 mb-6">
        {ticketOptions.map((ticket) => (
          <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <div className="mb-3">
              <h3 className="font-bold text-gray-900 text-sm mb-1">{ticket.name}</h3>
              <p className="text-lg font-bold text-gray-900">
                R$ {ticket.price.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(ticket.id, -1)}
                disabled={quantities[ticket.id] === 0}
                className="w-9 h-9 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <Minus className="w-4 h-4 text-gray-700" />
              </button>
              <span className="w-10 text-center font-semibold text-gray-900">{quantities[ticket.id]}</span>
              <button
                onClick={() => updateQuantity(ticket.id, 1)}
                className="w-9 h-9 rounded-md bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleCheckout}
        disabled={totalTickets === 0}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg transition-colors"
      >
        {totalTickets > 0 ? 'Finalizar Compra' : 'Selecione um Ingresso'}
      </button>
    </div>
  );
}
