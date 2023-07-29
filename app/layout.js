"use client"
import './globals.css'
import '../node_modules/bulma/css/bulma-rtl.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/header/Navbar'
import { Inter } from 'next/font/google'
import { store } from './store/store'
//import { Providers } from './store/provider'
import { useSelector, Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  
  title: 'Vena Restaurant',
  description: 'To order and reserve online',
}
export default function RootLayout({ children }) {
  //const showCart = useSelector((state) => state.cartWindow.cartWindowIsOpen)
  return (
    
      <html lang="en">
        <body className={inter.className}> 
          <Provider store={store}>
            <Navbar/>
          
            {children}
          </Provider>
        </body>
      </html>
    
  )
}


