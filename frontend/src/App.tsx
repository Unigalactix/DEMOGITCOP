import { useState } from 'react'

type Op = 'add' | 'sub' | 'mul' | 'div'

export default function App() {
  const [a, setA] = useState<string>('')
  const [b, setB] = useState<string>('')
  const [op, setOp] = useState<Op>('add')
  const [result, setResult] = useState<string>('')
  const [error, setError] = useState<string>('')

  function calculate() {
    setError('')
    const aTrim = a.trim()
    const bTrim = b.trim()
    if (aTrim === '' || bTrim === '') {
      setError('Both inputs are required')
      setResult('')
      return
    }
    const av = parseFloat(aTrim)
    const bv = parseFloat(bTrim)
    if (Number.isNaN(av) || Number.isNaN(bv)) {
      setError('Please enter valid numbers')
      setResult('')
      return
    }
    try {
      let r: number
      switch (op) {
        case 'add': r = av + bv; break
        case 'sub': r = av - bv; break
        case 'mul': r = av * bv; break
        case 'div':
          if (bv === 0) throw new Error('Division by zero')
          r = av / bv; break
        default: r = NaN
      }
      setResult(String(r))
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      setError(msg)
      setResult('')
    }
  }

  return (
    <div style={{ maxWidth: 520, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Calculator (Multi-Language Frontend)</h1>
      <p>This frontend runs on GitHub Pages and performs the calculation client-side.</p>

      <div style={{ display: 'grid', gap: 12 }}>
        <label>
          A:
          <input type="number" step="any" value={a} onChange={e => setA(e.target.value)} style={{ marginLeft: 8 }} placeholder="e.g., 12.5" />
        </label>
        <label>
          B:
          <input type="number" step="any" value={b} onChange={e => setB(e.target.value)} style={{ marginLeft: 8 }} placeholder="e.g., 3" />
        </label>
        <label>
          Operation:
          <select value={op} onChange={e => setOp(e.target.value as Op)} style={{ marginLeft: 8 }}>
            <option value="add">Addition (Node.js)</option>
            <option value="sub">Subtraction (.NET)</option>
            <option value="mul">Multiplication (Java)</option>
            <option value="div">Division (Python)</option>
          </select>
        </label>
        <button onClick={calculate} disabled={a.trim() === '' || b.trim() === ''}>Calculate</button>
      </div>

      <div style={{ marginTop: 16 }}>
        {error && <div style={{ color: 'crimson' }}>Error: {error}</div>}
        {result !== '' && <div>Result: <strong>{result}</strong></div>}
      </div>

      <hr style={{ margin: '24px 0' }} />
      <details>
        <summary>About the multi-language backends</summary>
        <p>
          The repository includes CLI tools for each language that mirror these operations:
        </p>
        <ul>
          <li>Node.js addition: <code>scripts/run-addition.ps1</code></li>
          <li>.NET subtraction: <code>scripts/run-subtraction.ps1</code></li>
          <li>Java multiplication: <code>scripts/run-multiplication.ps1</code></li>
          <li>Python division: <code>scripts/run-division.ps1</code></li>
        </ul>
        <p>
          For GitHub Pages, the operations run client-side for a static deployment. If you want the frontend to call the language-specific tools, you can host them behind HTTP endpoints and update the frontend to call those APIs.
        </p>
      </details>
    </div>
  )
}
