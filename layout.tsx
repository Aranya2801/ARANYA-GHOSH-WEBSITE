import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research — Aranya Ghosh',
  description: 'Published ML Researcher · IIT-KGP & IIIT-N Intern · Deep Learning · Computer Vision · NLP · PhD Aspirant',
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-16 bg-grid-research">
        {children}
      </div>
    </>
  )
}
