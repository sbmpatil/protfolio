import { FolderGit2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    title: 'Active Directory & IAM Lab',
    description:
      'Built and managed user accounts and groups in Active Directory, automated user provisioning with PowerShell on Windows Server and Linux, and applied access control policies.',
    tags: ['Active Directory', 'PowerShell', 'Windows Server', 'Linux'],
  },
  {
    title: 'Cloud Security Architecture Study',
    description:
      'Coursework for Cloud Computing and Security (CSIA 409): analyzed Zero Trust Architecture, SASE, CASB, key lifecycle management, and disaster recovery planning.',
    tags: ['Zero Trust', 'SASE', 'CASB', 'Cryptography'],
  },
  {
    title: 'Endpoint & Network Security Labs',
    description:
      'Hands-on labs hardening Windows with Local Security Policy, configuring File History backups, analyzing wireless networks with WifiInfoView, and testing VPN and privacy tools.',
    tags: ['Windows Security', 'Network Analysis', 'Hardening'],
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-border bg-muted/40"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading tag="// projects" title="Projects & Labs" />

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <FolderGit2
                  className="size-6 text-accent"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
