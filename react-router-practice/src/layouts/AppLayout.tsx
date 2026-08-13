import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div className="shell">
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
