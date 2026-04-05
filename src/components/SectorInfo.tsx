import { Crown, Zap } from 'lucide-react';

export default function SectorInfo() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Setores</h2>

      <div className="space-y-6">
        {/* ÁREA VIP */}
        <div className="border-2 border-amber-400 rounded-lg p-6 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-400 rounded-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">ÁREA VIP</h3>
          </div>

          <p className="text-lg font-semibold text-amber-700 mb-3">
            A experiência mais completa do evento.
          </p>

          <p className="text-gray-700 leading-relaxed">
            A Área VIP oferece open bar e open food, garantindo conforto e exclusividade do início ao fim.
            Além disso, você terá acesso exclusivo ao camarim para tirar fotos com os cantores, banheiros
            privativos e uma vista privilegiada do palco, vivendo cada momento de perto e com total comodidade.
          </p>
        </div>

        {/* FRONT STAGE */}
        <div className="border-2 border-blue-400 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-400 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">FRONT STAGE</h3>
          </div>

          <p className="text-lg font-semibold text-blue-700 mb-3">
            Energia máxima e proximidade com o show.
          </p>

          <p className="text-gray-700 leading-relaxed">
            No Front Stage, você fica colado ao palco, com uma vista privilegiada para curtir cada detalhe
            das apresentações. O setor também conta com banheiros exclusivos, proporcionando mais conforto
            durante o evento.
          </p>
        </div>
      </div>
    </div>
  );
}
