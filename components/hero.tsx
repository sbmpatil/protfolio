import { ArrowRight, Mail } from 'lucide-react'
import { TypingTerminal } from '@/components/typing-terminal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,212,170,0.10),transparent)]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-5 py-28">
        <p className="font-mono text-sm text-accent">// hello, world</p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Shubham Patil
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground/90 md:text-xl">
          Aspiring SOC Analyst{' '}
          <span className="text-muted-foreground">|</span> Cybersecurity
          Graduate Student
        </p>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Monitoring, detecting, and defending — building a career in blue team
          security.
        </p>

        <div className="mt-8">
          <TypingTerminal />
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View My Work
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
