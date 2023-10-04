import Navbar from '@/components/Navbar'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
        <Navbar />
        <main>{children}</main>
    </div>
  )
}
