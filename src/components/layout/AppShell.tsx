import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppShell() {
  return (
    <div className="relative min-h-dvh pb-20 md:pb-0">
      <Header />
      <Outlet />
      <Footer />
      <BottomNav />
    </div>
  )
}
