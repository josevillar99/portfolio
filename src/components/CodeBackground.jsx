import { useEffect, useRef } from 'react'
import './CodeBackground.css'

const SNIPPETS = [
  'const build = (idea) => ship(idea);',
  'function useAsync(fn) { return fn().then(ok); }',
  'export default function App() {',
  '  return <Portfolio theme="dark" />;',
  '}',
  'git commit -m "feat: parallax bg"',
  'npm run dev -- --host',
  'const [state, setState] = useState(0);',
  'for (const p of projects) render(p);',
  'interface Project { name: string; url: string }',
  '=> useEffect(() => { subscribe(); }, []);',
  'class Vector2D { constructor(x, y) {} }',
  'SELECT * FROM ideas WHERE shipped = true;',
  'docker? no. just node & vite.',
  'try { deploy(); } catch (e) { fix(e); }',
  'const sum = (a, b) => a + b;',
  '#include <stdio.h>',
  'print("hello, world")',
  'fn main() { println!("rust!"); }',
  'curl -s api.dev/status | jq .',
  '.container { display: grid; gap: 1rem; }',
  'const api = axios.create({ baseURL });',
  'export const theme = { color: "#7dfacb" };',
  'while (learning) { keepBuilding(); }',
  'type Props = { children: ReactNode };',
  'const debounce = (fn, ms) => { ... };',
  '@media (max-width: 768px) { ... }',
  'return items.map(i => <Card key={i.id} />);',
]

function buildColumn(seed, lineCount) {
  const lines = []
  for (let i = 0; i < lineCount; i++) {
    lines.push(SNIPPETS[(seed + i * 7) % SNIPPETS.length])
  }
  return lines
}

function CodeColumn({ seed, lineCount = 24 }) {
  const lines = buildColumn(seed, lineCount)
  const text = [...lines, ...lines].join('\n')
  return <pre className="code-column__text">{text}</pre>
}

export default function CodeBackground() {
  const layerRefs = useRef([])

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        layerRefs.current.forEach((el, i) => {
          if (!el) return
          const speed = [0.05, 0.12, 0.22][i] ?? 0.1
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`
        })
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="code-bg" aria-hidden="true">
      <div className="code-bg__vignette" />
      <div className="code-bg__layer code-bg__layer--back" ref={(el) => (layerRefs.current[0] = el)}>
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <CodeColumn key={n} seed={n * 3} lineCount={40} />
        ))}
      </div>
      <div className="code-bg__layer code-bg__layer--mid" ref={(el) => (layerRefs.current[1] = el)}>
        {[0, 1, 2, 3, 4].map((n) => (
          <CodeColumn key={n} seed={n * 5 + 2} lineCount={32} />
        ))}
      </div>
      <div className="code-bg__layer code-bg__layer--front" ref={(el) => (layerRefs.current[2] = el)}>
        {[0, 1, 2, 3].map((n) => (
          <CodeColumn key={n} seed={n * 9 + 1} lineCount={26} />
        ))}
      </div>
    </div>
  )
}
