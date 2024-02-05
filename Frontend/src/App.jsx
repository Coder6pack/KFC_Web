import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import DetailPage from './pages/DetailPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import PaymentPage from './pages/PaymentPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Quenmk from './components/Password/Quenmk'
export default function App() {
  return (
    <div>
      <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/menu/:id/detail' element={<DetailPage />} />
        <Route path='/shopping-cart' element={<ShoppingCartPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/resetpassword' element={<Quenmk/>}/>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer/>
      </div>
    </div>
  )
}
