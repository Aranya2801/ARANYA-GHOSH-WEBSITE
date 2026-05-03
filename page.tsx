import { SectionLabel, SectionHeading, Tag, ResearchBadge } from '@/components/ui'
import { FadeUp, StaggerList, StaggerItem, PageTransition } from '@/components/ui/motion'
import { RESEARCH_WORKS, INTERESTS } from '@/lib/data'

export default function ResearchPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative px-6 md:px-12 py-20 border-b border-white/7 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,109,255,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(57,229,160,0.05) 0%, transparent 70%)' }} />
        <FadeUp>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.9] text-white mb-3">
            Research<br /><span className="text-gradient-research">Universe</span>
          </h1>
          <p className="font-mono text-xs text-text-muted tracking-wider">
            AI · ML · Deep Learning · Signal Processing · Medical AI · Autonomous Systems
          </p>
        </FadeUp>
      </section>

      <div className="px-6 md:px-12 py-12 space-y-16">

        {/* PhD Vision */}
        <FadeUp delay={0.05}>
          <SectionLabel color="research">vision</SectionLabel>
          <SectionHeading>PhD Journey & Long-Term Goal</SectionHeading>
          <div className="relative bg-bg-2 border border-white/7 p-8 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top left, rgba(155,109,255,0.08), transparent 60%)' }} />
            <p className="text-sm text-text-muted leading-[1.9] relative z-10 max-w-3xl">
              My long-term goal is to pursue a{' '}
              <strong className="text-research-lavender">PhD in Computer Science / Artificial Intelligence / Data Science</strong>.
              Every research decision I've made — from choosing internships at IIT-KGP and IIIT Nagpur to
              preparing for GATE — has been a deliberate step toward this destination. At Rutgers, I plan
              to engage deeply with faculty research groups, pursue RA/TA positions, and build the research
              record required for a top-tier PhD program.
            </p>
            <p className="text-sm text-text-muted leading-[1.9] relative z-10 max-w-3xl mt-4">
              My core belief:{' '}
              <strong className="text-research-lavender">AI is the most transformative technology of our time</strong>,
              and I want to be at its frontier — not just as a user, but as a builder and discoverer.
              I am actively seeking{' '}
              <strong className="text-research-green">research collaborations, RA/TA opportunities</strong>, and
              PhD program mentors in AI/ML/Data Science.
            </p>
          </div>
        </FadeUp>

        {/* GATE Milestone */}
        <FadeUp delay={0.08}>
          <SectionLabel color="research">milestone</SectionLabel>
          <SectionHeading>GATE 2026</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/7 border border-white/7">
            <div className="bg-bg-2 p-8">
              <div className="font-mono text-[10px] text-research-violet tracking-widest uppercase mb-2">
                // Data Science & AI
              </div>
              <div className="font-serif text-7xl font-black text-diary-gold leading-none mb-2">AIR 3</div>
              <div className="font-mono text-xs text-text-muted leading-relaxed">
                Score: 81.33 / 100 (998 normalised)<br />
                Top 0.01% &nbsp;·&nbsp; 100,000+ candidates
              </div>
            </div>
            <div className="bg-bg-2 p-8">
              <div className="font-mono text-[10px] text-research-violet tracking-widest uppercase mb-2">
                // CS & IT
              </div>
              <div className="font-serif text-7xl font-black text-research-lavender leading-none mb-2">AIR 147</div>
              <div className="font-mono text-xs text-text-muted leading-relaxed">
                Score: 73.89 / 100 (863 normalised)<br />
                Top 0.1% nationally
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Research Experience */}
        <FadeUp delay={0.1}>
          <SectionLabel color="research">research experience</SectionLabel>
          <SectionHeading>Internships & Research Work</SectionHeading>
          <StaggerList className="flex flex-col gap-px bg-white/7 border border-white/7">
            {RESEARCH_WORKS.map((r) => (
              <StaggerItem key={r.id}>
                <div className={`bg-bg-2 hover:bg-bg-3 transition-colors p-6
                                 border-l-3 border-l-transparent hover-accent-research
                                 ${r.type === 'published' ? 'border-l-research-green' :
                                   r.type === 'conference' ? 'border-l-research-violet' :
                                   'border-l-diary-gold'}`}>
                  <ResearchBadge type={r.type}>{r.badge}</ResearchBadge>
                  <h4 className="font-serif text-xl font-bold text-white mb-1 leading-snug">{r.title}</h4>
                  <div className="font-mono text-xs text-research-lavender mb-3">
                    {r.institution} · {r.period}
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{r.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.tools.map(t => <Tag key={t} color="research">{t}</Tag>)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </FadeUp>

        {/* Research Interests */}
        <FadeUp delay={0.1}>
          <SectionLabel color="research">interests</SectionLabel>
          <SectionHeading>Research Interests</SectionHeading>
          <StaggerList className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/7 border border-white/7">
            {INTERESTS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-bg-2 hover:bg-bg-3 transition-colors p-5
                                border-b-2 border-b-transparent hover:border-b-research-violet group">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <div className="text-sm text-text-DEFAULT font-medium mb-1
                                  group-hover:text-research-lavender transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-text-muted leading-relaxed">{item.sub}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </FadeUp>

        {/* Connect */}
        <FadeUp delay={0.1}>
          <SectionLabel color="research">collaborate</SectionLabel>
          <SectionHeading>Research Connections</SectionHeading>
          <div className="bg-bg-2 border border-white/7 p-8">
            <p className="text-sm text-text-muted leading-[1.9] mb-6 max-w-2xl">
              I am actively seeking{' '}
              <strong className="text-research-lavender">research collaborations, RA/TA opportunities</strong>, and
              PhD program mentors in AI/ML/Data Science. Open to connecting with faculty, researchers, and
              professionals working at the frontier of intelligent systems.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://linkedin.com" target="_blank"
                 className="inline-flex items-center gap-2 font-mono text-[12px] text-research-green
                            border border-research-green bg-research-green/7 px-4 py-2
                            hover:bg-research-green/15 transition-colors">
                → Connect on LinkedIn
              </a>
              <a href="mailto:aranya@example.com"
                 className="inline-flex items-center gap-2 font-mono text-[12px] text-text-muted
                            border border-white/13 px-4 py-2
                            hover:border-research-violet hover:text-research-lavender transition-colors">
                → Email me
              </a>
              <a href="https://github.com" target="_blank"
                 className="inline-flex items-center gap-2 font-mono text-[12px] text-text-muted
                            border border-white/13 px-4 py-2
                            hover:border-white/30 hover:text-white transition-colors">
                → GitHub
              </a>
            </div>
          </div>
        </FadeUp>

      </div>

      <footer className="border-t border-white/7 px-6 md:px-12 py-5 flex justify-between items-center
                         font-mono text-[11px] text-text-muted">
        <span>aranyaghosh.org — 🔬 Research</span>
        <span className="text-research-violet">PhD aspirant · AI frontier</span>
      </footer>
    </PageTransition>
  )
}
