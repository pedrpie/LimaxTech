import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Reproduz cada linha de `lines` como se estivesse sendo digitada em um
 * terminal: primeiro o "comando" (prompt) aparece letra a letra, depois a
 * "resposta" (output) é revelada de uma vez, e passa-se para a próxima linha.
 * Roda uma única vez por montagem do componente.
 */
export default function Terminal({ lines }) {
  const reduced = prefersReducedMotion()
  const [committedLines, setCommittedLines] = useState(
    reduced ? lines.map(({ prompt, output }) => ({ prompt, output })) : [],
  )
  const [pendingPrompt, setPendingPrompt] = useState('')
  const [isFinished, setIsFinished] = useState(reduced)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return undefined

    let lineIndex = 0
    let charIndex = 0

    const typePrompt = () => {
      const currentLine = lines[lineIndex]
      charIndex += 1
      setPendingPrompt(currentLine.prompt.slice(0, charIndex))

      if (charIndex < currentLine.prompt.length) {
        timeoutRef.current = setTimeout(typePrompt, 34 + Math.random() * 40)
      } else {
        timeoutRef.current = setTimeout(commitLine, 260)
      }
    }

    const commitLine = () => {
      const currentLine = lines[lineIndex]
      setCommittedLines((prev) => [...prev, { prompt: currentLine.prompt, output: currentLine.output }])
      setPendingPrompt('')
      lineIndex += 1
      charIndex = 0

      if (lineIndex < lines.length) {
        timeoutRef.current = setTimeout(typePrompt, 420)
      } else {
        setIsFinished(true)
      }
    }

    timeoutRef.current = setTimeout(typePrompt, 300)

    return () => clearTimeout(timeoutRef.current)
  }, [lines])

  return (
    <div className="terminal corner-frame">
      <div className="terminal-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="terminal-title">limax@sites</span>
      </div>
      <div className="terminal-body">
        {committedLines.map((line) => (
          <div key={line.prompt}>
            <div className="terminal-line">
              <span className="prompt">$</span> {line.prompt}
            </div>
            <div className="terminal-line out">{line.output}</div>
          </div>
        ))}

        {!isFinished && (
          <div className="terminal-line">
            <span className="prompt">$</span> {pendingPrompt}
            <span className="cursor" />
          </div>
        )}

        {isFinished && (
          <div className="terminal-line">
            <span className="prompt">$</span> <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  )
}
