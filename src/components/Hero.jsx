export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-20 border-b border-white/10">
      <div>
        <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
          Odoo Software Engineer
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Soni Marko
          <span className="block text-cyan-400">Nathanniel Tannady</span>
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          ERP Developer specialized in Odoo ecosystem with strong experience in Python,
          PostgreSQL, JavaScript, and cloud technologies.
        </p>
      </div>
    </section>
  );
}
