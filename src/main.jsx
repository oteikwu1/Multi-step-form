import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddsOn from './components/AddsOn'
import Summary from './components/Summary'
import { FormProvider } from './components/FormContext'

createRoot(document.getElementById('root')).render(
   <StrictMode>
 <BrowserRouter>
 <FormProvider >
   <Routes>
  <Route path="/" element={<PersonalInfo />}/>
  <Route path="/addons" element={<AddsOn />} />
  <Route path="/plan" element={<SelectPlan />} />
  <Route path="summary"  element={<Summary />}/>
  </Routes>
 </FormProvider>
 </BrowserRouter>
  </StrictMode>
)
