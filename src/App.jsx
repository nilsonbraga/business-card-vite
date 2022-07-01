import React from 'react'
import { 
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import BusinessCardPage from './pages/BusinessCardPage'
import DefaultLayout from './layout/DafaultLayout'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<DefaultLayout />} >
            <Route path='/' element={<Dashboard />} />
            <Route path='/businesscardpage' element={<BusinessCardPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}