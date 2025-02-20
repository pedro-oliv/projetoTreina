import './App.css'
import './MyCSS.css'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'

import { generatePDF } from './utils/GeneratePDF'

import {Button, Container} from 'react-bootstrap'
import MyNavBar from './components/MyNavBar/MyNavBar'
import Separator from './components/separator/separator'
import EditarPage from './pages/EditarPage/EditarPage.jsx'
import MyFooter from './components/MyFooter/MyFooter.jsx'
import ExibirPage from './pages/ExibirPage/ExibirPage.jsx'


function App() {

  const location = useLocation();

  const rotaBotao = location.pathname === '/exibir'

  return (
    <>
      <MyNavBar />
      <Separator />
      <Container id='bgl'>
        <Routes>
          <Route path='/'>
          <Route index element={<Navigate to="editar" replace />}></Route>
          <Route path="editar" element={<EditarPage />} exact={true}/>
          <Route path="exibir" element={<ExibirPage />}></Route>
          </Route>
        </Routes>
      </Container>

      { rotaBotao && (
            <Container className='mt-5' id='btn-pdf'>
            <Button onClick={() => generatePDF("bgl")}>Gerar PDF</Button>
          </Container>
      )}
      <Separator />
      <MyFooter className="justify-content-bottom" style={{width:"100%"}}/>
    </>
  )
}

function Mds(){
  return(
    <Router>
      <App />
    </Router>
  )
}


export default Mds
