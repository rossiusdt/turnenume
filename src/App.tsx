import Header from './components/Header';
import EventHero from './components/EventHero';
import TicketSelector from './components/TicketSelector';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <EventHero />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="lg:hidden">
              <TicketSelector />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/descricao.jpg"
                alt="Descrição do Evento"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <TicketSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
