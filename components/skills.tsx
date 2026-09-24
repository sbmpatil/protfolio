import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const groups = [
  {
    label: 'Security Operations',
    items: [
      'Threat Detection',
      'Incident Response Fundamentals',
      'Log Analysis',
      'Malware Types',
      'Network Attacks',
    ],
  },
  {
    label: 'Identity & Access',
    items: [
      'Active Directory',
      'PowerShell User Provisioning',
      'Access Control Models',
      'Local Security Policy (secpol.msc)',
    ],
  },
  {
    label: 'Cloud Security',
    items: [
      'AWS (S3, Lambda)',
      'Zero Trust Architecture',
      'SASE',
      'SD-WAN',
      'CASB',
      'Disaster Recovery Planning',
    ],
  },
  {
    label: 'Cryptography & PKI',
    items: [
      'Encryption',
      'Key Lifecycle Management',
      'Public Key Infrastructure',
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      'Windows Server',
      'Linux',
      'Git',
      'Python',
      'Tableau',
      'Power BI',
      'Excel',
      'Jupyter Notebook',
    ],
  },
  {
    label: 'Data',
    items: ['Data Analysis', 'Data Visualization'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <SectionHeading tag="// skills" title="Skills & Toolkit" />

      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 100}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="font-mono text-sm text-accent">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-foreground/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
