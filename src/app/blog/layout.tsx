import { clsx } from "clsx"
import BlogMenu from "@/components/server/Blog/BlogMenu";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: 三層架構
  // 網頁上:
  // 左: 架構
  // 中: content
  // 右: sidebar

  // MOBILE:
  // 全部: content
  // 架構/內容重點 放在上面點開
  return (
    <div className="flex gap-1">
      <div className="fixed top-0 pt-16">
        <div
          className={clsx(
            "hidden sticky top-0 h-[calc(100vh-4rem)] overflow-x-hidden overflow-y-auto",
            "z-10 border-r border-[#E3E3DE] lg:max-w-80 lg:block"
          )}>
          <aside
            className={clsx(
              "px-4 h-screen bg-white",
            )}>
            <BlogMenu />
          </aside>
        </div>
      </div>
      {children}
    </div>
  )
}



