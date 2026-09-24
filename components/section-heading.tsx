import { Reveal } from '@/components/reveal'

export function SectionHeading({
  tag,
  title,
}: {
  tag: string
  title: string
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="font-mono text-sm text-accent">{tag}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
    </Reveal>
  )
}
