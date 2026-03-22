function HighlightCard({ icon: Icon, title, text }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-lg bg-brand-50 p-2.5 text-brand-700">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl font-bold text-brand-900">{title}</h3>
      <p className="mt-2 text-slate-700">{text}</p>
    </article>
  );
}

export default HighlightCard;
