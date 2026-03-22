function SectionTitle({ eyebrow, title, description, centered = false, light = false }) {
  return (
    <header className={centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      {eyebrow ? (
        <p
          className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
            light
              ? 'border border-white/30 bg-white/10 text-white'
              : 'border border-brand-100 bg-white text-brand-700'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-brand-900'
        }`}
      >
        {title}
      </h2>
      {description ? <p className={`mt-4 text-lg ${light ? 'text-slate-200' : 'text-slate-600'}`}>{description}</p> : null}
    </header>
  );
}

export default SectionTitle;
