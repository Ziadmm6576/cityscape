import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Leaf,
  Trees,
  Sprout,
  Flower2,
  BrickWall,
  Droplets,
  Scissors,
  Menu,
  X,
  Upload,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants / Content
---------------------------------------------------------------- */
const PHONE_DISPLAY = '+1 (555) 214-0187'
const PHONE_TEL = '+15552140187'
const EMAIL = 'hello@cityscap.com'
const AREA = 'Metro area & suburbs'
const HOURS = 'Mon–Sat · 7:00–18:00'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_FULL = [
  {
    icon: Trees,
    title: 'Landscape Design',
    text: 'Scaled plans, planting schedules and 3D concepts drawn for your exact site — from narrow townhouse yards to full commercial frontages.',
  },
  {
    icon: Sprout,
    title: 'Lawn & Turf',
    text: 'New sod, seeding and soil renovation for lawns that stay dense and green through city heat, foot traffic and dry spells.',
  },
  {
    icon: Flower2,
    title: 'Planting & Gardens',
    text: 'Trees, shrubs and perennial beds chosen for your light, soil and climate — layered to look good in every season.',
  },
  {
    icon: BrickWall,
    title: 'Hardscaping & Patios',
    text: 'Stone patios, paths, retaining walls and raised planters, built on proper bases so they stay level for decades.',
  },
  {
    icon: Droplets,
    title: 'Irrigation & Lighting',
    text: 'Smart drip and sprinkler systems plus low-voltage landscape lighting, zoned and tuned so nothing is over- or under-watered.',
  },
  {
    icon: Scissors,
    title: 'Seasonal Maintenance',
    text: 'Pruning, mulching, leaf clearance and fertilising on a fixed schedule — one crew that knows your garden by name.',
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-primary/10'
            : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-5 w-5 text-white" strokeWidth={2.4} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition" />
            </span>
            <span
              className={`font-display font-bold tracking-tight text-lg ${
                scrolled ? 'text-ink' : 'text-white'
              } transition-colors`}
            >
              Cityscap
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Get a quote
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-deep/90 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-ink">Cityscap</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-divider/40"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Get a quote
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })
      gsap.from('.hero-line-2', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100dvh] w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Modern home with a landscaped lawn at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/85 via-deep/50 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      </div>

      {/* Decorative floating leaves (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] animate-float" style={{ animationDelay: '0s' }}>
          <span className="block h-3 w-2 rounded-tl-full rounded-br-full bg-primary-light/70 rotate-12" />
        </div>
        <div className="absolute top-[55%] right-[10%] animate-float" style={{ animationDelay: '1.5s' }}>
          <span className="block h-2.5 w-1.5 rounded-tl-full rounded-br-full bg-accent/60 -rotate-12" />
        </div>
        <div className="absolute top-[40%] right-[26%] animate-float" style={{ animationDelay: '3s' }}>
          <span className="block h-2 w-1.5 rounded-tl-full rounded-br-full bg-white/40 rotate-45" />
        </div>
        <div className="absolute top-[32%] right-[6%] animate-float" style={{ animationDelay: '4.2s' }}>
          <span className="block h-2 w-1 rounded-tl-full rounded-br-full bg-primary-light/50 -rotate-45" />
        </div>
      </div>

      {/* Top frame */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-4xl pt-24 pb-16">
          <p className="hero-meta font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/60 mb-8">
            Landscape design · Build · Care
          </p>
          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl">
              Landscapes built for the city.
            </span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-primary-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              Grown to last.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            Rooftop terraces, courtyards, lawns and front yards, designed, built and
            looked after by one crew for 15+ years.
            <span className="text-white"> One plan. One crew. No loose ends.</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-4 rounded-full shadow-2xl shadow-primary/40"
            >
              Book a free site visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-7 py-4 rounded-full"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Design Shuffler
---------------------------------------------------------------- */
function DesignShuffler() {
  const items = [
    { tag: 'Rooftop', label: 'Terrace garden with planters & lighting', meta: '120 m²' },
    { tag: 'Courtyard', label: 'Stone courtyard with native planting', meta: '85 m²' },
    { tag: 'Front yard', label: 'Low-water, street-facing garden', meta: '60 m²' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.meta}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{
                    background: idx < 24 - offset * 6 ? '#2E7D4F' : '#E0E2DC',
                  }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Grounds Watch (signature: falling leaves)
---------------------------------------------------------------- */
const LEAF_PALETTES = {
  green: ['#A8D5A2', '#5FA36A', '#2E7D4F'],
  rust: ['#EDB07F', '#C4622D', '#A04E22'],
  gold: ['#EBD27F', '#C9A13B', '#9C7A22'],
}

// Grass blades along the ground line
const GRASS_PATH = Array.from({ length: 50 })
  .map((_, i) => {
    const x = i * 4
    const h = 3 + ((i * 7) % 5)
    return `M${x} 12 L${x + 1.6} ${12 - h} L${x + 3.2} 12 Z`
  })
  .join(' ')

function FallingLeaves() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(7)

  const statuses = [
    { text: 'All beds healthy · monitoring', label: 'Thriving', tone: 'emerald' },
    { text: 'Leaf fall detected · zone 3', label: 'Tending', tone: 'accent' },
    { text: 'Crew pruning · north terrace', label: 'Pruning', tone: 'primary' },
    { text: 'New beds in · 24 perennials', label: 'Planting', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Planting') {
          setCount((c) => c + 1)
        }
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  // Leaves drifting down from the branch
  const leaves = [
    { left: '12%', delay: '0.0s', dur: '3.2s', size: 15, tone: 'green', sway: '1.9s' },
    { left: '24%', delay: '1.4s', dur: '3.6s', size: 12, tone: 'rust', sway: '2.3s' },
    { left: '37%', delay: '0.7s', dur: '3.4s', size: 17, tone: 'gold', sway: '2.1s' },
    { left: '50%', delay: '2.0s', dur: '3.0s', size: 13, tone: 'green', sway: '1.7s' },
    { left: '63%', delay: '1.0s', dur: '3.7s', size: 16, tone: 'rust', sway: '2.4s' },
    { left: '75%', delay: '2.3s', dur: '3.3s', size: 12, tone: 'green', sway: '2.0s' },
    { left: '87%', delay: '0.4s', dur: '3.5s', size: 15, tone: 'gold', sway: '2.2s' },
  ]

  // Soil ripples where leaves land
  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald' ? 'text-emerald-700' :
    status.tone === 'accent' ? 'text-accent-dark' :
    'text-primary-dark'
  const toneDot =
    status.tone === 'emerald' ? 'bg-emerald-600' :
    status.tone === 'accent' ? 'bg-accent' :
    'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{
        background: 'linear-gradient(180deg, #F1F7EA 0%, #DDEDD0 70%, #C3DDB0 100%)',
      }}
    >
      {/* Soft light blobs (canopy atmosphere) */}
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/50 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Leaf className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2.2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark">
            Grounds watch
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
            sites today
          </span>
        </div>
      </div>

      {/* Branch at top with leaf clusters */}
      <svg
        className="absolute left-3 right-3 top-9 h-5"
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
      >
        {/* Limb */}
        <path
          d="M0 10 C 70 6, 140 14, 210 10 S 340 6, 400 11"
          fill="none"
          stroke="#6B4A2E"
          strokeOpacity="0.7"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Twigs + leaf clusters */}
        {[60, 152, 248, 340].map((x, i) => (
          <g key={x}>
            <path
              d={`M${x} 10 L${x + (i % 2 ? -8 : 8)} ${i % 2 ? 3 : 17}`}
              stroke="#6B4A2E"
              strokeOpacity="0.55"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <ellipse cx={x - 7} cy="6" rx="7" ry="3.2" fill="#2E7D4F" fillOpacity="0.75" />
            <ellipse cx={x + 7} cy="14" rx="7" ry="3.2" fill="#5FA36A" fillOpacity="0.7" />
            <ellipse cx={x + 2} cy="4" rx="5" ry="2.4" fill={i % 2 ? '#C4622D' : '#7DBF8E'} fillOpacity="0.7" />
          </g>
        ))}
      </svg>

      {/* Falling leaf field */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {leaves.map((l, i) => {
          const [light, mid, dark] = LEAF_PALETTES[l.tone]
          return (
            <svg
              key={i}
              className="absolute top-0"
              style={{
                left: l.left,
                width: `${l.size}px`,
                height: `${Math.round(l.size * 1.5)}px`,
                animation: `rain-fall ${l.dur} cubic-bezier(0.45,0.05,0.55,0.95) ${l.delay} infinite`,
                filter: 'drop-shadow(0 1px 2px rgba(31,92,57,0.25))',
                transform: 'translateX(-50%)',
              }}
              viewBox="0 0 24 36"
            >
              <defs>
                <linearGradient id={`leaf-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={light} />
                  <stop offset="50%" stopColor={mid} />
                  <stop offset="100%" stopColor={dark} />
                </linearGradient>
              </defs>
              <g
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  animation: `leaf-sway ${l.sway} ease-in-out ${l.delay} infinite alternate`,
                }}
              >
                {/* Leaf blade */}
                <path
                  d="M12 2 C 21 9, 22 23, 12 34 C 2 23, 3 9, 12 2 Z"
                  fill={`url(#leaf-${i})`}
                />
                {/* Midrib + veins */}
                <path
                  d="M12 5 L12 32 M12 13 L7.5 9.5 M12 13 L16.5 9.5 M12 20 L7 16 M12 20 L17 16 M12 27 L8.5 23.5 M12 27 L15.5 23.5"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.55"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          )
        })}
      </div>

      {/* Grass line */}
      <svg
        className="absolute bottom-9 left-3 right-3 h-3"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
      >
        <path d={GRASS_PATH} fill="#2E7D4F" fillOpacity="0.5" />
        <line x1="0" y1="11.5" x2="200" y2="11.5" stroke="#1F5C39" strokeOpacity="0.45" strokeWidth="1" />
      </svg>

      {/* Ripples where leaves settle */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-accent/50"
            style={{
              left: r.left,
              width: '4px',
              height: '4px',
              animation: `rain-ripple 2.4s ease-out ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === 'accent' && (
              <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />
            )}
          </span>
          <span
            key={status.text}
            className={`font-mono text-[10px] truncate ${toneText}`}
            style={{ animation: 'rain-fadein 0.35s ease-out' }}
          >
            {status.text}
          </span>
        </div>
        <span
          className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}
        >
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes leaf-sway {
          from { transform: rotate(-32deg) translateX(-3px); }
          to   { transform: rotate(32deg) translateX(3px); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Cursor Scheduler (Site visit)
---------------------------------------------------------------- */
function SiteVisitScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0) // 0..4
  const activeDay = 2

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  // Compute cursor position
  const cursorPos = (() => {
    switch (step) {
      case 0:
        return { x: 8, y: 110, opacity: 0 }
      case 1:
        return { x: 60, y: 60, opacity: 1 }
      case 2:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4:
        return { x: 130, y: 130, opacity: 1 }
      default:
        return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Week 14 · April
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          Site visit
        </span>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                : 'bg-background text-ink'
            }`}
          >
            <span className={`font-mono text-[9px] ${step >= 3 && idx === activeDay ? 'text-white/70' : 'text-muted'}`}>{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 7}</span>
          </div>
        ))}
      </div>

      {/* Save button */}
      <button
        tabIndex={-1}
        aria-hidden="true"
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4
            ? 'bg-accent text-white scale-[1.02] shadow-md shadow-accent/30'
            : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Site visit booked' : 'Pick a day'}
      </button>

      {/* Animated cursor */}
      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? 'scale(0.85)' : 'scale(1)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3L19 12L12 13L9 20L5 3Z"
            fill="#1A1A1A"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Design',
      heading: 'Landscape Design',
      sub: 'Drawn for your exact site',
      text: 'Rooftops, courtyards and front yards each get a scaled plan, a planting schedule and a fixed budget before a single shovel goes in.',
      Component: DesignShuffler,
    },
    {
      eyebrow: '02 / Care',
      heading: 'Seasonal Care',
      sub: 'Year-round, on schedule',
      text: 'Pruning, leaf clearance, feeding and irrigation checks on a fixed rota. The same crew every visit, so your garden only ever gets better.',
      Component: FallingLeaves,
    },
    {
      eyebrow: '03 / Visit',
      heading: 'Free Site Visit',
      sub: 'Booked in two clicks',
      text: 'Pick a day that suits you. We walk the space, measure light and soil, and leave you with honest options and a clear quote.',
      Component: SiteVisitScheduler,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ What we do best
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three disciplines.
            <span className="block font-serif italic font-medium text-primary-dark mt-1">
              One living plan.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {card.eyebrow}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>

              {/* Interactive artifact */}
              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">
                  {card.heading}
                </h3>
                <p className="font-serif italic text-primary-dark text-sm mt-1">
                  {card.sub}
                </p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp — animated counter (intersection observer)
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
              setCount(Math.floor(target * eased))
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(target)
              }
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars — Three numbers that define Cityscap
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01',
      title: 'Experience',
      target: 15,
      suffix: '+',
      label: 'years in the city',
      desc: 'Fifteen seasons of rooftops, courtyards and street-front gardens. We know what thrives between buildings — and what doesn’t.',
    },
    {
      n: '02',
      title: 'Portfolio',
      target: 850,
      suffix: '+',
      label: 'landscapes completed',
      desc: 'Homes, offices, restaurants and residential blocks. Every one designed, built and handed over by our own crew.',
    },
    {
      n: '03',
      title: 'Response',
      target: 48,
      suffix: 'h',
      label: 'site visit to quote',
      desc: 'Walk the site with us and you’ll have a fixed, itemised quote within two working days. No vague estimates.',
    },
  ]

  return (
    <section id="approach" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Intro */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-dark mb-5">
              ╱ Our approach
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              The numbers behind
              <span className="block font-serif italic font-medium text-primary-dark">every garden.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Three figures that describe how we work. Not marketing — just what we deliver, season after season.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Top meta */}
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {p.n} / {p.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              {/* Massive number with counter */}
              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[5.5rem] sm:text-[8rem] lg:text-[7rem] xl:text-[8.5rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">
                  {p.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-dark mt-5">
                {p.label}
              </p>

              {/* Description */}
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">
                {p.desc}
              </p>

              {/* Animated baseline */}
              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{
                    animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite`,
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Survey & Design',
      tagline: 'We read the site first.',
      text: 'We walk the space with you, map sun, shade, drainage and soil, then turn it into a scaled design and a fixed quote. No hidden extras, no guesswork.',
      image:
        'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Allium flowers in a layered garden bed',
      meta: 'Step 1 / Survey',
    },
    {
      num: '02',
      title: 'Build & Plant',
      tagline: 'Rooted, not rushed.',
      text: 'Our own crew prepares the ground, lays stone, installs irrigation and plants every bed to plan — with daily photo updates so you always know where things stand.',
      image:
        'https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=1200&q=80',
      alt: 'Hands preparing soil for new planting',
      meta: 'Step 2 / Build',
    },
    {
      num: '03',
      title: 'Care & Seasons',
      tagline: 'We stay for the seasons.',
      text: 'A finished garden is the start of the relationship. Our maintenance plans keep everything pruned, fed and watered so it matures exactly as designed.',
      image:
        'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=1200&q=80',
      alt: 'Gardener pruning an evergreen shrub',
      meta: 'Step 3 / Care',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
          ╱ How we work
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-dark">
            No surprises.
          </span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              {/* Left content */}
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                    {step.meta}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Cityscap Method
                  </span>
                </div>

                <div className="my-10 sm:my-12">
                  <span className="font-display font-extrabold text-[6rem] sm:text-[10rem] leading-none text-primary/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary-dark text-2xl sm:text-3xl mt-3">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
                  {step.text}
                </p>
              </div>

              {/* Right visual */}
              <div className="lg:col-span-2 relative overflow-hidden min-h-[260px] lg:min-h-full bg-deep">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">
                    Step {step.num}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {step.num} / Cityscap
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   All Services Grid (full list of 6 services)
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ Everything we do</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Everything outdoors,
              <span className="block font-serif italic font-medium text-primary-light">
                one crew.
              </span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            Residential and commercial projects of every size, from a single courtyard to a full building frontage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.03] transition-colors duration-500 relative"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary-light group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: 'Licensed & insured',
      text: 'Fully licensed landscape contractor with liability cover on every job, so your property and our crew are always protected.',
    },
    {
      Icon: Award,
      title: 'Certified horticulturists',
      text: 'Our designers and crew leads hold professional horticulture and arboriculture certifications — plants chosen by people who know them.',
    },
    {
      Icon: Clock,
      title: '15+ years in the city',
      text: 'Fifteen years of building gardens between buildings. Every plant carries a 12-month warranty and every build a 5-year one.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ Why clients trust us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            More than a mow and go.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white border border-divider rounded-4xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-700 ease-out shadow-sm ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30"
          >
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    message: '',
  })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Simulated submission
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    const images = Array.from(newFiles).filter((f) => f.type.startsWith('image/'))
    setFiles((prev) => [...prev, ...images].slice(0, 5))
  }

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading + info */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
              ╱ Contact
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Let’s grow
              <span className="block font-serif italic font-medium text-primary-dark">
                something together.
              </span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Tell us about your space and what you’d like it to become. We’ll get back to you within one working day to book a free site visit.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    Call us
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    Email
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    Service area
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    {AREA}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    Hours
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    {HOURS}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-dark mb-2">
                Your data
              </p>
              <p className="text-sm text-muted leading-relaxed">
                We only use your details to respond to this enquiry. Photos of your property stay private,
                and we never share your information with third-party marketers.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5"
            >
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Name"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <Field
                      label="ZIP / Postal code"
                      value={form.zip}
                      onChange={(v) => setForm({ ...form, zip: v })}
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block"
                    >
                      Your project *
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Rooftop terrace, new lawn, patio, regular maintenance… tell us a little about the space."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  {/* File upload zone */}
                  <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-primary', '!bg-primary/5')
                    }}
                    onDragLeave={() => {
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                    }}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors"
                  >
                    <input
                      type="file"
                      multiple
                      id="file-up"
                      className="hidden"
                      onChange={(e) => {
                        handleFiles(e.target.files)
                        e.target.value = ''
                      }}
                      accept="image/*"
                    />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">
                        Attach photos of your space
                      </p>
                      <p className="text-xs text-muted mt-1">
                        Click or drag images here (max 5)
                      </p>
                    </label>
                    {files.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {files.map((f, i) => (
                          <span
                            key={`${f.name}-${i}`}
                            className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs pl-3 pr-1.5 py-1.5 rounded-full font-mono"
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="ml-0.5 rounded-full p-0.5 hover:bg-primary/20 transition"
                              aria-label={`Remove ${f.name}`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                      We reply within one working day. Fields marked * are required.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">
                    Thanks — we’ve got it.
                  </h3>
                  <p className="text-muted max-w-md mx-auto">
                    We’ll be in touch within one working day to book your free site visit.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  const id = `field-${label.toLowerCase().replace(/[^a-z]+/g, '-')}`
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/25 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        {/* Top: big tagline */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Urban landscapes,
            <span className="font-serif italic font-medium text-primary-light block">
              crafted to last.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">
              Cityscap — landscape design, build and care across the {AREA.toLowerCase()}.
            </p>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-lg">Cityscap</span>
            </div>
            <p className="font-serif italic text-white/70 text-lg max-w-xs">
              Green space, built between buildings.
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mt-3">
              Licensed and insured landscape contractor with 15+ years designing, building and caring for city gardens.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-white/65 hover:text-primary-light transition text-sm"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              <li><a href="#approach" className="text-white/65 hover:text-primary-light transition text-sm">Approach</a></li>
              <li><a href="#process" className="text-white/65 hover:text-primary-light transition text-sm">Process</a></li>
              <li><a href="#contact" className="text-white/65 hover:text-primary-light transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="text-white/65 hover:text-primary-light transition text-sm">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-white/65 hover:text-primary-light transition text-sm">
                  {EMAIL}
                </a>
              </li>
              <li className="text-white/65 text-sm">{AREA}</li>
              <li className="text-white/65 text-sm">{HOURS}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              Crews in the field · Booking this season
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-primary-light transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary-light transition">
              Terms
            </Link>
            <span>© 2026 Cityscap</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after fonts/images load to recalc positions
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
