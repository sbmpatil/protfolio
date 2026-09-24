import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const education = [
  {
    school: 'Roosevelt University',
    location: 'Chicago, IL',
    degree: 'MS in Cybersecurity and Information Assurance',
    dates: 'Jan 2025 – May 2027 (expected)',
  },
  {
    school: 'Charles Darwin University',
    location: 'Australia',
    degree: "Bachelor's in Data Management and Visual Insight",
    dates: 'Jan 2021 – May 2024',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <SectionHeading tag="// about" title="About Me" />

      <Reveal>
        <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Graduate student in Cybersecurity and Information Assurance at
          Roosevelt University in Chicago with a background in data management
          and analytics. Hands-on experience from a cybersecurity internship
          and extensive lab work in identity and access management, network
          security, and cloud security. Focused on security monitoring,
          incident detection, and defending systems.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 100}>
            <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap className="size-5" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Education
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {edu.school}
              </h3>
              <p className="text-sm text-muted-foreground">{edu.location}</p>
              <p className="mt-3 text-sm text-foreground/90">{edu.degree}</p>
              <p className="mt-1 font-mono text-xs text-accent">{edu.dates}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
