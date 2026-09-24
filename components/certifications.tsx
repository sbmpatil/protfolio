import { BadgeCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-5xl px-5 py-20 md:py-28"
    >
      <SectionHeading tag="// certifications" title="Certifications" />

      <Reveal>
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
                <BadgeCheck className="size-6 text-accent" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  CompTIA Security+ (SY0-701)
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
                  In Progress
                </p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent">
              <span className="size-2 animate-pulse rounded-full bg-accent" />
              Studying
            </span>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>Progress</span>
              <span className="text-accent">60%</span>
            </div>
            <div
              className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="CompTIA Security+ study progress"
            >
              <div className="h-full w-[60%] rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
