import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf } from 'lucide-react'

export default function LegalLayout({ eyebrow, title, updated, sections }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-background">
      <div className="noise-overlay" />
      <div className="absolute inset-x-0 top-0 h-80 grid-bg opacity-70 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="flex items-center justify-between mb-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-5 w-5 text-white" strokeWidth={2.4} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition" />
            </span>
            <span className="font-display font-bold tracking-tight text-lg text-ink">Cityscap</span>
          </Link>
          <Link
            to="/"
            className="lift-on-hover inline-flex items-center gap-1.5 text-sm font-medium text-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
          ╱ {eyebrow}
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
          {title}
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-6">
          Last updated · {updated}
        </p>

        <div className="mt-14 space-y-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-ink mb-3">
                <span className="font-mono text-xs text-primary-dark mr-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.heading}
              </h2>
              <p className="text-muted leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-20 pt-8 border-t border-divider font-mono text-[10px] uppercase tracking-widest text-muted">
          © 2026 Cityscap Landscaping · hello@cityscap.com
        </p>
      </div>
    </div>
  )
}
