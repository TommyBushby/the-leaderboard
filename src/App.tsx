import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { BracketPage } from './pages/BracketPage'
import { HomePage } from './pages/HomePage'
import { RulesPage } from './pages/RulesPage'
import { StandingsPage } from './pages/StandingsPage'

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/bracket', element: <BracketPage /> },
      { path: '/standings', element: <StandingsPage /> },
      { path: '/rules', element: <RulesPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
