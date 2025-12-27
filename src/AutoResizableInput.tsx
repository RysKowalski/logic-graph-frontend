import { useEffect, useRef, useState } from "react"

export default function AutoResizableInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const mirrorRef = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState<string>("")

  useEffect((): void => {
    if (!inputRef.current || !mirrorRef.current) return
    mirrorRef.current.textContent = value || " "
    inputRef.current.style.width = `${mirrorRef.current.offsetWidth}px`
  }, [value])

  return (
    <>
      <input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ boxSizing: "content-box" }}
      />
      <span
        ref={mirrorRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "pre",
          font: "inherit",
          padding: "2px",
        }}
      />
    </>
  )
}
