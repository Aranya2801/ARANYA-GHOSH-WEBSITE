import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/** Renders trusted-or-not Markdown safely: raw HTML is never rendered. */
export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-aranya">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children: c }) => {
            const external = !!href && /^https?:\/\//.test(href)
            return (
              <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                {c}
              </a>
            )
          },
          // eslint-disable-next-line @next/next/no-img-element
          img: ({ src, alt }) => <img src={typeof src === 'string' ? src : undefined} alt={alt ?? ''} loading="lazy" />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
