import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Landing from './pages/Landing'
import Story from './pages/Story'
import Reach from './pages/Reach'
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import Preferences from './pages/Preferences'
import Catalog from './pages/Catalog'
import ItemView from './pages/ItemView'
import History from './pages/History'
import Overview from './pages/Overview'
import Missing from './pages/Missing'
// @ts-ignore: CSS module declarations not present in this project
import './App.css'

const App = () => {
  return (
    <Routes>
      {/* Every child route renders inside AppLayout's <Outlet /> */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Landing />} />
        <Route path="story" element={<Story />} />
        <Route path="reach" element={<Reach />} />

        <Route path="signin" element={<SignIn />} />
        <Route path="account" element={<Account />} />
        <Route path="preferences" element={<Preferences />} />

        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:itemId" element={<ItemView />} />

        <Route path="history" element={<History />} />
        <Route path="overview" element={<Overview />} />

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App
