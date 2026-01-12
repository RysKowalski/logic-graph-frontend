import { useEffect, useRef, useState } from "react"


type InputArgs = {
  id?: string
  placeholder?: string
  minLength?: number
  visualizeSpaces?: boolean
}

export default function AutoResizableInput({ id = "", placeholder = "", minLength = 0, visualizeSpaces = false }: InputArgs) {
  const inputRef = useRef<HTMLInputElement>(null)
  const mirrorRef = useRef<HTMLSpanElement>(null)

  const [value, setValue] = useState<string>("")
  const [focused, setFocused] = useState<boolean>(false)

  const displayValue: string = focused
    ? value
    : value.replace(/ /g, "␣")

  useEffect((): void => {
    if (!inputRef.current || !mirrorRef.current) return

    mirrorRef.current.textContent = displayValue || " "
    inputRef.current.style.width = `${Math.max(mirrorRef.current.offsetWidth, minLength)}px`
  }, [displayValue])

  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        ref={inputRef}
        value={displayValue}
        onChange={(e): void => setValue(e.target.value)}
        onFocus={(): void => setFocused(true)}
        onBlur={(): void => setFocused(!visualizeSpaces)}
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

