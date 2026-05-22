'use client'

/**
 * Header — N3 left-rail chapter spine.
 *
 * Replaces the legacy N1 horizontal beam with a vertical column of pinned
 * index cards down the left edge. Each card is a numbered chapter (CH_01…)
 * with the same pin-bolt + brick palette as the rest of the wall. Below the
 * chapter stack sits a short "PRESENT" cluster (Services, eGym, Press,
 * Contact), then a painted-red "TRAIN" stamp at the rail foot.
 *
 * Reads as: a long-document spine, not a marketing nav.
 *
 *   Desktop (≥ lg) → fixed left rail, 96px wide, full viewport height.
 *   Mobile  (< lg) → small "CH" stamp top-right opens a right-side sheet.
 *
 * Scroll-spy: an IntersectionObserver with a -40%/-40% rootMargin makes the
 * "current" chapter the one passing through the viewport's vertical midline.
 */

import { useState, useEffect, useRef, useCallback, forwardRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* ────────────────────────────────────────────────────────────────────────── */
/*  Chapter map — actual numerals + titles from components/story/*.tsx.        */
/*  - CH_01 The Weight    → id="story"        (TheWeight)                     */
/*  - CH_02 The Forge     → no id on section  (TheForge → indexed lookup)     */
/*  - CH_03 I Am A Warrior→ no id on section  (TheWarrior → indexed lookup)   */
/*  Two of three chapter shells don't pass an id to ChapterShell, and editing  */
/*  the story components is out-of-scope for this change. The rail falls back  */
/*  to ordered <section> lookup for those chapters at mount time.              */
/* ────────────────────────────────────────────────────────────────────────── */

type ChapterEntry = {
  numeral: string
  title: string
  /** Hash id if the section has one; null → resolve by document order. */
  anchor: string | null
  /** 0-based index of the matching <section> on the homepage. */
  sectionIndex: number
}

const CHAPTERS: ChapterEntry[] = [
  { numeral: '01', title: 'The Weight',     anchor: '#story',        sectionIndex: 1 },
  { numeral: '02', title: 'The Forge',      anchor: '#forge',        sectionIndex: 2 },
  { numeral: '03', title: 'I Am A Warrior', anchor: '#warrior',      sectionIndex: 3 },
]

type PresentEntry = {
  label: string
  anchor: string
}

const PRESENT: PresentEntry[] = [
  { label: 'OFFER',   anchor: '#services' },
  { label: 'TEMPLE',  anchor: '#egym' },
  { label: 'PRESS',   anchor: '#press' },
  { label: 'CONTACT', anchor: '#contact' },
]

const TRAIN_ANCHOR = '#contact'

/* ────────────────────────────────────────────────────────────────────────── */

export default function Header() {
  const pathname = usePathname()
  const isInteriorPage =
    pathname?.startsWith('/blog/') || pathname?.startsWith('/press/')
  const toHref = useCallback(
    (hash: string) => (isInteriorPage ? `/${hash}` : hash),
    [isInteriorPage]
  )

  /* ── Scroll-spy ───────────────────────────────────────────────────────── */
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    // SSR-safe: only run on the client.
    if (typeof window === 'undefined') return
    // Scroll-spy only makes sense on the homepage (where the chapter sections
    // exist). Interior pages get a quiet rail with no active state.
    if (isInteriorPage) return

    // Build the watch list: chapter sections (by id OR by index) plus the
    // PRESENT cluster (all by id).
    const sections: HTMLElement[] = []

    // Chapters — id-first, fall back to ordered <section> lookup.
    const allSections = Array.from(document.querySelectorAll('main section'))
    CHAPTERS.forEach((ch) => {
      if (ch.anchor) {
        const el = document.getElementById(ch.anchor.slice(1))
        if (el) {
          el.dataset.railKey = ch.anchor
          sections.push(el)
          return
        }
      }
      const el = allSections[ch.sectionIndex] as HTMLElement | undefined
      if (el) {
        // Synthetic key so the rail can match active state without an id.
        el.dataset.railKey = `ch-${ch.numeral}`
        sections.push(el)
      }
    })

    // PRESENT cluster.
    PRESENT.forEach((p) => {
      const el = document.getElementById(p.anchor.slice(1))
      if (el) {
        el.dataset.railKey = p.anchor
        sections.push(el)
      }
    })

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most centered in the viewport's mid-band.
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        // Sort by intersection ratio descending — closest to the centre wins.
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0].target as HTMLElement
        const key = top.dataset.railKey
        if (key) setActiveId(key)
      },
      {
        // -40% top / -40% bottom collapses the trigger band to the middle 20%
        // of the viewport, so the active chapter is whichever one is passing
        // through the optical centre. Clean, no jitter on slow scroll.
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isInteriorPage])

  /* ── Active-state helpers ─────────────────────────────────────────────── */
  const chapterKey = (ch: ChapterEntry) => ch.anchor ?? `ch-${ch.numeral}`

  /* ── Mobile sheet state ───────────────────────────────────────────────── */
  const [sheetOpen, setSheetOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  // Body scroll lock + Escape-to-close + return focus to trigger on close.
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!sheetOpen) return

    // Capture ref values at effect-start time so the cleanup uses the same
    // node the effect saw (react-hooks/exhaustive-deps lint rule).
    const triggerEl = triggerRef.current
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setSheetOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)

    // Focus the close button (first focusable) inside the sheet for a11y.
    const firstFocusable = sheetRef.current?.querySelector<HTMLElement>(
      'button, a'
    )
    firstFocusable?.focus()

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', handleKey)
      // Return focus to the trigger on close.
      triggerEl?.focus()
    }
  }, [sheetOpen])

  /* ── Render ───────────────────────────────────────────────────────────── */
  return (
    <header role="banner">
      {/* ───── DESKTOP RAIL (≥ lg) ──────────────────────────────────────── */}
      <RailColumn
        chapters={CHAPTERS}
        present={PRESENT}
        toHref={toHref}
        trainHref={toHref(TRAIN_ANCHOR)}
        activeId={activeId}
        chapterKey={chapterKey}
      />

      {/* ───── MOBILE TRIGGER + SHEET (< lg) ────────────────────────────── */}
      <MobileTrigger
        ref={triggerRef}
        onClick={() => setSheetOpen(true)}
        open={sheetOpen}
      />

      <MobileSheet
        ref={sheetRef}
        open={sheetOpen}
        chapters={CHAPTERS}
        present={PRESENT}
        toHref={toHref}
        trainHref={toHref(TRAIN_ANCHOR)}
        activeId={activeId}
        chapterKey={chapterKey}
        onClose={() => setSheetOpen(false)}
      />
    </header>
  )
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  Desktop rail                                                            */
/* ──────────────────────────────────────────────────────────────────────── */

function RailColumn({
  chapters,
  present,
  toHref,
  trainHref,
  activeId,
  chapterKey,
}: {
  chapters: ChapterEntry[]
  present: PresentEntry[]
  toHref: (hash: string) => string
  trainHref: string
  activeId: string | null
  chapterKey: (ch: ChapterEntry) => string
}) {
  return (
    <nav
      aria-label="Chapter spine"
      className="hidden lg:flex fixed left-0 top-0 z-50 h-screen w-[var(--rail-w,96px)] flex-col items-center bg-brick-dark border-r border-mighty-shadow/60 shadow-rail"
    >
      {/* Wordmark — a small painted "RC" stamp, pinned at top */}
      <Link
        href="/"
        aria-label="Robin Carruthers — home"
        className="relative mt-4 mb-3 flex h-[64px] w-[68px] flex-col items-center justify-center painted-metal-red wearouts border-2 border-mighty-shadow rounded-sm shadow-pinned hover:brightness-110 transition-[transform,filter] motion-safe:hover:-translate-y-[1px]"
      >
        <span
          className="pin-bolt absolute -top-1.5 -left-1.5"
          style={{ width: 10, height: 10 }}
          aria-hidden="true"
        />
        <span
          className="pin-bolt absolute -top-1.5 -right-1.5"
          style={{ width: 10, height: 10 }}
          aria-hidden="true"
        />
        <span className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-rocky-paper/85 leading-none">
          EST
        </span>
        <span className="font-painted text-rocky-paper text-base uppercase leading-none mt-1">
          RC
        </span>
      </Link>

      {/* Divider — hairline, with a touch of mighty-shadow */}
      <div
        aria-hidden="true"
        className="h-px w-10 bg-mighty-shadow/40 mb-3"
      />

      {/* Chapter cards — scroll the column if it ever overflows. */}
      <ol className="flex flex-col items-center gap-2 px-2 overflow-y-auto overflow-x-hidden">
        {chapters.map((ch) => {
          const key = chapterKey(ch)
          const isActive = activeId === key
          const href = ch.anchor ? toHref(ch.anchor) : `#ch-${ch.numeral}`
          return (
            <li key={ch.numeral} className="relative">
              <Link
                href={href}
                aria-label={`Chapter ${ch.numeral} — ${ch.title}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative flex h-[56px] w-[64px] flex-col items-center justify-center rounded-sm border bg-brick text-rocky-paper shadow-pinned transition-[transform,box-shadow,filter] motion-safe:hover:-translate-y-[1px] hover:brightness-110 ${
                  isActive
                    ? 'border-mighty-red brightness-110'
                    : 'border-mighty-shadow/40'
                }`}
              >
                <span
                  className="pin-bolt absolute -top-1 -left-1"
                  style={{ width: 8, height: 8 }}
                  aria-hidden="true"
                />
                <span
                  className="pin-bolt absolute -top-1 -right-1"
                  style={{ width: 8, height: 8 }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-rocky-paper/70 leading-none">
                  CH
                </span>
                <span className="font-painted text-xl leading-none mt-1">
                  {ch.numeral}
                </span>
                {/* Active marker — small red dot pinned to the right edge */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-9px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-mighty-red shadow-[0_0_6px_rgba(164,39,31,0.85)]"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ol>

      {/* PRESENT divider */}
      <div className="mt-4 mb-2 px-2 text-center">
        <span
          className="font-mono text-[8px] font-bold uppercase tracking-[0.35em] text-rocky-paper/55"
          aria-hidden="true"
        >
          · PRESENT ·
        </span>
      </div>

      {/* Present-day cluster — single-line short cards */}
      <ol className="flex flex-col items-center gap-1.5 px-2 overflow-y-auto overflow-x-hidden">
        {present.map((p) => {
          const isActive = activeId === p.anchor
          return (
            <li key={p.anchor} className="relative">
              <Link
                href={toHref(p.anchor)}
                aria-label={p.label}
                aria-current={isActive ? 'true' : undefined}
                className={`relative flex h-[40px] w-[64px] items-center justify-center rounded-sm border bg-brick text-rocky-paper/85 shadow-pinned transition-[transform,box-shadow,filter] motion-safe:hover:-translate-y-[1px] hover:brightness-110 hover:text-rocky-paper ${
                  isActive
                    ? 'border-mighty-red brightness-110 text-rocky-paper'
                    : 'border-mighty-shadow/40'
                }`}
              >
                <span
                  className="pin-bolt absolute -top-1 -left-1"
                  style={{ width: 6, height: 6 }}
                  aria-hidden="true"
                />
                <span
                  className="pin-bolt absolute -top-1 -right-1"
                  style={{ width: 6, height: 6 }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] leading-none">
                  {p.label}
                </span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-9px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-mighty-red shadow-[0_0_6px_rgba(164,39,31,0.85)]"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ol>

      {/* Train CTA at rail foot — painted-red stamp anchor */}
      <a
        href={trainHref}
        aria-label="Train with Robin"
        className="relative mt-auto mb-4 flex h-[56px] w-[80px] items-center justify-center painted-metal-red wearouts border-2 border-mighty-shadow rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] hover:brightness-110 active:translate-y-[2px] active:shadow-[0_1px_0_-1px_rgba(0,0,0,0.85)] transition-[transform,box-shadow,filter]"
      >
        <span
          className="pin-bolt absolute -top-1.5 -left-1.5"
          style={{ width: 10, height: 10 }}
          aria-hidden="true"
        />
        <span
          className="pin-bolt absolute -top-1.5 -right-1.5"
          style={{ width: 10, height: 10 }}
          aria-hidden="true"
        />
        <span className="font-painted text-rocky-paper text-base uppercase tracking-wider">
          TRAIN
        </span>
      </a>
    </nav>
  )
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  Mobile trigger (top-right, painted-red stamp)                           */
/* ──────────────────────────────────────────────────────────────────────── */

type MobileTriggerProps = { onClick: () => void; open: boolean }

const MobileTrigger = forwardRef<HTMLButtonElement, MobileTriggerProps>(
  function MobileTrigger({ onClick, open }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        aria-label="Open chapter spine"
        aria-expanded={open}
        aria-controls="chapter-spine-sheet"
        className="lg:hidden fixed top-3 right-3 z-50 flex h-11 w-11 items-center justify-center painted-metal-red wearouts border-2 border-mighty-shadow rounded-sm shadow-pinned hover:brightness-110 active:translate-y-[1px] transition-[transform,filter]"
      >
        <span
          className="pin-bolt absolute -top-1 -left-1"
          style={{ width: 8, height: 8 }}
          aria-hidden="true"
        />
        <span
          className="pin-bolt absolute -top-1 -right-1"
          style={{ width: 8, height: 8 }}
          aria-hidden="true"
        />
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rocky-paper">
          CH
        </span>
      </button>
    )
  }
)

/* ──────────────────────────────────────────────────────────────────────── */
/*  Mobile sheet (right-side, full-height, slides in)                        */
/* ──────────────────────────────────────────────────────────────────────── */

type MobileSheetProps = {
  open: boolean
  chapters: ChapterEntry[]
  present: PresentEntry[]
  toHref: (hash: string) => string
  trainHref: string
  activeId: string | null
  chapterKey: (ch: ChapterEntry) => string
  onClose: () => void
}

const MobileSheet = forwardRef<HTMLDivElement, MobileSheetProps>(
  function MobileSheet(
    {
      open,
      chapters,
      present,
      toHref,
      trainHref,
      activeId,
      chapterKey,
      onClose,
    },
    ref
  ) {
    return (
      <>
      {/* Backdrop — covers MobileStickyCTA too because of z-40 + inset-0 */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`lg:hidden fixed inset-0 z-40 bg-mighty-shadow/70 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sheet — right-side, full-height (sits above the backdrop) */}
      <div
        ref={ref}
        id="chapter-spine-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Chapter spine"
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-[80vw] max-w-[320px] bg-brick-dark border-l border-mighty-shadow/60 shadow-rail flex flex-col transition-transform duration-200 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close + header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-mighty-shadow/60">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-rocky-paper/70">
            · Chapter Spine ·
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chapter spine"
            className="relative flex h-8 w-8 items-center justify-center border border-mighty-shadow/60 rounded-sm text-rocky-paper/85 hover:text-rocky-paper hover:bg-mighty-shadow/40 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chapter list */}
        <ol className="flex flex-col gap-2 px-4 py-4 overflow-y-auto">
          {chapters.map((ch) => {
            const key = chapterKey(ch)
            const isActive = activeId === key
            const href = ch.anchor ? toHref(ch.anchor) : `#ch-${ch.numeral}`
            return (
              <li key={ch.numeral}>
                <Link
                  href={href}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={onClose}
                  className={`relative flex items-center gap-3 px-3 py-3 rounded-sm border bg-brick text-rocky-paper shadow-pinned transition-colors ${
                    isActive
                      ? 'border-mighty-red'
                      : 'border-mighty-shadow/40'
                  }`}
                >
                  <span
                    className="pin-bolt absolute -top-1 -left-1"
                    style={{ width: 8, height: 8 }}
                    aria-hidden="true"
                  />
                  <span
                    className="pin-bolt absolute -top-1 -right-1"
                    style={{ width: 8, height: 8 }}
                    aria-hidden="true"
                  />
                  <span className="font-painted text-2xl leading-none text-rocky-paper">
                    {ch.numeral}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-rocky-paper/65">
                      CH_{ch.numeral}
                    </span>
                    <span className="font-painted text-rocky-paper text-base uppercase leading-tight">
                      {ch.title}
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}

          {/* PRESENT divider */}
          <li className="pt-3 pb-1 text-center" aria-hidden="true">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.35em] text-rocky-paper/50">
              · PRESENT ·
            </span>
          </li>

          {present.map((p) => {
            const isActive = activeId === p.anchor
            return (
              <li key={p.anchor}>
                <Link
                  href={toHref(p.anchor)}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={onClose}
                  className={`relative block px-3 py-3 rounded-sm border bg-brick text-rocky-paper shadow-pinned transition-colors ${
                    isActive
                      ? 'border-mighty-red'
                      : 'border-mighty-shadow/40'
                  }`}
                >
                  <span
                    className="pin-bolt absolute -top-1 -left-1"
                    style={{ width: 6, height: 6 }}
                    aria-hidden="true"
                  />
                  <span
                    className="pin-bolt absolute -top-1 -right-1"
                    style={{ width: 6, height: 6 }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.25em]">
                    {p.label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>

        {/* Train CTA — pinned at the sheet's bottom */}
        <div className="px-4 pb-5 pt-3 border-t border-mighty-shadow/60">
          <a
            href={trainHref}
            onClick={onClose}
            className="relative flex h-12 w-full items-center justify-center painted-metal-red wearouts border-2 border-mighty-shadow rounded-sm shadow-[0_3px_0_-1px_rgba(0,0,0,0.85)] active:translate-y-[2px] active:shadow-[0_1px_0_-1px_rgba(0,0,0,0.85)] transition-[transform,box-shadow]"
          >
            <span
              className="pin-bolt absolute -top-1.5 -left-1.5"
              style={{ width: 10, height: 10 }}
              aria-hidden="true"
            />
            <span
              className="pin-bolt absolute -top-1.5 -right-1.5"
              style={{ width: 10, height: 10 }}
              aria-hidden="true"
            />
            <span className="font-painted text-rocky-paper text-base uppercase tracking-wider">
              TRAIN WITH ROBIN
            </span>
          </a>
        </div>
      </div>
    </>
    )
  }
)
