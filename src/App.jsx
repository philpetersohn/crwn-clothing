import { Route, Routes } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './routes/home/navigation/navigation.component'

const Shop = () => {
  return <h2>Im the shop page</h2>
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
