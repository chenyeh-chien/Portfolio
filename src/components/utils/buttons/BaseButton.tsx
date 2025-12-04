import { clsx } from "clsx"

export default function BaseButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={clsx(
        "bg-(--button-bg) text-(--button-color) text-xs",
        "px-5 py-2 rounded-full",
        "hover:cursor-pointer"
      )}>
      {children}
    </button>
  )
}