function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <header className={centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg text-slate-600">{description}</p> : null}
    </header>
  );
}

export default SectionTitle;
