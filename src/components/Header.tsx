export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/sympla-logo.png" alt="Sympla" className="h-8" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-300">Fale com o produtor:</span>
            <span className="text-sm font-semibold text-white">ZERO31</span>
          </div>
        </div>
      </div>
    </header>
  );
}
