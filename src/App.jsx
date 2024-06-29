import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from './components/Container'
import Heading from './components/Heading'
import Input from './components/Input'
import React from 'react'
import Buttons from './components/Buttons'
function App() {

  return (
    <>
      <Heading/>
      <Container>
        <Input/>
        <Buttons/>
      </Container>
    </>
  )
}

export default App
