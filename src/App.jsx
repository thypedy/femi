import 'bootstrap/dist/css/bootstrap.min.css';
import imagemr from './img/asdasda.png'
import Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import './App.css'

function App() {

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary alinha">
      <h1>Noticias Feminicidio <img className='tamanho' src={imagemr} alt="" /></h1>
    </Navbar>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Notícia 1</Accordion.Header>
        <Accordion.Body>
        O município de São paulo tem como crescimento de casos de feminicidio desde 2015
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Notícia 2</Accordion.Header>
        <Accordion.Body>
        O maior casos de feminicidios é no municipio de São Paulo, com o total de 232 casos
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Notícia 3</Accordion.Header>
        <Accordion.Body>
        A DP com a maior quantidade de casos é a de Capão Redondo
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Notícia 4</Accordion.Header>
        <Accordion.Body>
        As vitimas são em maior número cadastrados com a cor de pele branca, com 606 casos
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Notícia 5</Accordion.Header>
        <Accordion.Body>
        O ano de 2022 teve o maior número de vítimas, com 195
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </>
  )
}

export default App
