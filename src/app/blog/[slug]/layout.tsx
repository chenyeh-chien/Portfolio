import { clsx } from "clsx"

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={clsx(
        "w-full h-full min-h-screen"
      )}>
      {children}
    </div>
  )
}



