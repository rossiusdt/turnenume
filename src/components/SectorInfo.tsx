import { Wine } from 'lucide-react';

export default function SectorInfo() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Setores</h2>

      <div className="space-y-6">
        {/* CAMAROTE OPEN BAR */}
        <div className="border-2 border-amber-400 rounded-lg p-6 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-400 rounded-lg">
              <Wine className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">SETOR CAMAROTE OPEN BAR</h3>
          </div>

          <p className="text-lg font-semibold text-amber-700 mb-3">
            A experiência mais premium do evento, pensada para quem quer curtir com máximo conforto, exclusividade e bebida liberada do início ao fim.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            No Camarote Open Bar, você aproveita um ambiente reservado, com visão privilegiada do palco e um serviço completo de bebidas selecionadas, garantindo uma experiência diferenciada em todos os momentos.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Além disso, o setor oferece acesso exclusivo ao camarim, com a oportunidade de tirar fotos com o Filipe Ret, tornando sua experiência ainda mais inesquecível.
          </p>

          <div className="bg-white/50 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">🍹 Open Bar incluso:</p>
            <ul className="text-gray-700 space-y-1">
              <li>• Heineken</li>
              <li>• Xeque-Mate</li>
              <li>• Vodka Absolut</li>
              <li>• Gin Tanqueray</li>
              <li>• Whiskey Red Label</li>
              <li>• Red Bull</li>
              <li>• Água</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Viva o evento com mais estilo, sem filas, com benefícios exclusivos e toda a comodidade que só o camarote oferece.
          </p>
        </div>
      </div>
    </div>
  );
}
