import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import Error from './pages/Error/Error'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        </Route>
        <Route path="*" element={<Error />} />
    </Routes>
  )
}
