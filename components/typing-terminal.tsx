'use client'

import { useEffect, useState } from 'react'

const FULL = '> status: seeking entry-level SOC / Security Analyst roles'

export function TypingTerminal() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= FULL.length) return
    const t = setTimeout(() => setCount((c) => c + 1), 45)
    return () => clearTimeout(t)
  }, [count])

  return (
    <div className="w-full max-w-xl rounded-lg border border-border bg-card/70 shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f56]" />
        <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="size-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          soc-console
        </span>
      </div>
      <div className="px-4 py-3.5 font-mono text-sm text-accent">
        <span aria-live="polite">{FULL.slice(0, count)}</span>
        <span className="cursor-blink ml-0.5 inline-block text-accent">▋</span>
      </div>
    </div>
  )
}
