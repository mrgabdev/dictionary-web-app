import { SearchBar } from '@/word/SearchBar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  )
}
