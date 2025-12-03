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
    <div>
      {children}
    </div>
  )
}



