import { Mail, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from '@/lib/site'

const channels = [
  {
    label: 'Email',
    value: 'patilshubham9624@outlook.com',
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: LINKEDIN_URL,
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/sbmpatil',
    href: GITHUB_URL,
    icon: GithubIcon,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-muted/40"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading tag="// contact" title="Let's connect" />

        <Reveal>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Open to entry-level SOC Analyst and Security Analyst opportunities,
            including part-time roles.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((channel, i) => {
            const Icon = channel.icon
            const external = channel.label !== 'Email'
            return (
              <Reveal key={channel.label} delay={i * 100}>
                <a
                  href={channel.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex h-full items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {channel.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </p>
                    <p className="mt-1 truncate text-sm text-foreground group-hover:text-accent">
                      {channel.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
