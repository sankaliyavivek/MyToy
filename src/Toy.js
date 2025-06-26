// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registrastion from './Registrastion'
import Catalog from './Catalog'
import Delivery from './Delivery'
import About from './About'
import Contacts from './Contacts'
import Webisite from './Webisite'
import WoodenToy from './WoodenToy'
import Stuffed from './Stuffed'
import View1 from './View1'
import OpenYou from './OpenYou'
import WoodenToyView from './WoodenToyView'
import StuffedToyView from './StuffedToyView'
import LoginForm from './LogInpage'


function Toy() {

  
  return (
    <div>
     <BrowserRouter >
     <Routes>
      <Route path='/' element={<Webisite></Webisite>}></Route>
        <Route path='/catalog' element={<Catalog></Catalog>}></Route>
        <Route path='/delivery' element={<Delivery></Delivery>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contacts' element={<Contacts></Contacts>}></Route>
        <Route path='/vivek' element={<Registrastion></Registrastion>}></Route>
        <Route path='/log' element={<LoginForm></LoginForm>}></Route>
        <Route path='/wooden' element={<WoodenToy></WoodenToy>}></Route>
        <Route path='/stuffed' element={<Stuffed></Stuffed>}></Route>
        <Route path='/view/:vid' element={<WoodenToyView></WoodenToyView>}></Route>
        <Route path='/all/:eid' element={<View1></View1>}></Route>
        <Route path='/view2/:sid' element={<StuffedToyView></StuffedToyView>}></Route>
        <Route path='/openyou' element={<OpenYou></OpenYou>}></Route>
      </Routes> 
     </BrowserRouter>
    
    </div>
  )
}

export default Toy
