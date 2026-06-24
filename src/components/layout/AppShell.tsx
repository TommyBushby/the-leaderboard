import { Outlet, useLocation } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppShell() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={isHome ? 'rwc-app rwc-app--home' : 'relative min-h-dvh pb-20 md:pb-0'}>
      {!isHome ? <Header /> : null}
      <Outlet />
      {!isHome ? <Footer /> : null}
      <BottomNav />
    </div>
  )
}
