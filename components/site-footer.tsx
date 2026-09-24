import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from '@/lib/site'

const socials = [
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: LinkedinIcon, external: true },
  { label: 'GitHub', href: GITHUB_URL, icon: GithubIcon, external: true },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: Mail, external: false },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Shubham Patil · Chicago, IL
        </p>
        <ul className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  aria-label={social.label}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
