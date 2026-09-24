import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const roles = [
  {
    title: 'Cybersecurity Analyst Intern',
    company: 'KasperFintech X',
    location: 'Chicago, IL',
    dates: 'Jun 2025 – Aug 2025',
    points: [
      'Supported security monitoring and incident detection workflows within a blue team environment.',
      'Analyzed logs and alerts to identify suspicious activity and reinforce defensive controls.',
    ],
  },
  {
    title: 'Data & Cloud Intern',
    company: 'LocX',
    location: '6 months',
    dates: '2024',
    points: [
      'Worked with AWS (S3, Lambda, CodeCommit) and Git to build and manage cloud data workflows.',
      'Delivered analytics and dashboards using Tableau, Power BI, Excel, and Jupyter Notebook.',
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading tag="// experience" title="Experience" />

        <ol className="relative ml-3 border-l border-border">
          {roles.map((role, i) => (
            <Reveal as="li" key={role.company} delay={i * 100} className="mb-10 pl-8 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full border-2 border-accent bg-background" />
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {role.dates}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {role.company} · {role.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
