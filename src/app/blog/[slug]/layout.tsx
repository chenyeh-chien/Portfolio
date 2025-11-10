import { clsx } from "clsx"

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div 
      className={clsx(
        "min-h-screen w-full h-full bg-[#151617] overflow-auto"
      )}>
      {children}
    </div>
  )
}



