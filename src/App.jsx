import React from 'react'
import { 
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import BusinessCard from './pages/BusinessCard'
import DefaultLayout from './layout/DafaultLayout'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<DefaultLayout />} >
            <Route path='/' element={<Dashboard />} />
            <Route path='/businesscard' element={<BusinessCard />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}