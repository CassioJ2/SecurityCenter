function ServiceCard({ icon: Icon, title, points }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="mb-5 inline-flex rounded-xl bg-brand-50 p-3 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
        <Icon aria-hidden="true" size={24} />
      </div>
      <h3 className="font-heading text-2xl font-bold text-brand-900">{title}</h3>
      <ul className="mt-5 space-y-3 text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-accent-500" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ServiceCard;
