
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import AppRoutes from './routes'
import Footer from './components/footer'

function App() {
  

  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
