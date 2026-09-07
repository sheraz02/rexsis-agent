type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <>
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-signal-dark text-[15px]">{eyebrow}</p>
            <h1 className="balance font-display text-ink mt-5 text-[40px] leading-[1.1] sm:text-[48px]">
              {title}
            </h1>
            <p className="text-ink-faint mt-4 text-[14px]">Last updated {updated}</p>
            <p className="text-ink-soft mt-6 text-[17px] leading-relaxed">{intro}</p>
          </div>

          <div className="mt-16 max-w-2xl space-y-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-ink text-[22px]">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-ink-soft mt-3 text-[16px] leading-relaxed">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="text-ink-soft flex gap-3 text-[16px] leading-relaxed">
                        <span className="bg-ink-faint mt-2.5 h-1 w-1 shrink-0 rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
