
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
            <p className="text-[15px] text-signal-dark">{eyebrow}</p>
            <h1 className="balance mt-5 font-display text-[40px] leading-[1.1] text-ink sm:text-[48px]">
              {title}
            </h1>
            <p className="mt-4 text-[14px] text-ink-faint">
              Last updated {updated}
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
              {intro}
            </p>
          </div>

          <div className="mt-16 max-w-2xl space-y-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-[22px] text-ink">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="mt-3 text-[16px] leading-relaxed text-ink-soft"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[16px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
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