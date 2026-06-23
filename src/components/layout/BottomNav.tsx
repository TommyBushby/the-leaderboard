import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Home', end: true },
  { to: '/bracket', label: 'Bracket' },
  { to: '/standings', label: 'Standings' },
  { to: '/rules', label: 'Rules' },
]

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(env(safe-area-inset-bottom),12px)] md:hidden">
      <div className="grid w-full max-w-md grid-cols-4 gap-1 rounded-full border border-white/10 bg-black/80 px-2 py-2 backdrop-blur-xl">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex h-12 flex-col items-center justify-center rounded-full text-[9px] font-semibold uppercase tracking-wider ${
                isActive ? 'text-gradient-gold' : 'text-white/55'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
