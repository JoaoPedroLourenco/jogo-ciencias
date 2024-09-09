import './App.css'
import enviar from './assets/mandar.png'
import { useState } from 'react'

// import Confetti from 'react-confetti'
 
import {listaPalavras} from './data/ListaPalavras'
 
function App() {
 
  const [palavra, setPalavra] = useState("")
  const [transcricao, setTranscricao] = useState("")
  const [poli, setPoli] = useState("")
  const [ribo, setRibo] = useState("")
  const [palavras] = useState(listaPalavras)
 
  console.log(palavras)
 
  const handleSubmit = (e) => {
      setPalavra(e.target.value)
  }
 
  const checarPalavra = (e) => {
    e.preventDefault()
    if(palavra === "transcrição"){
      setTranscricao("transcrição")
    }
    else if(palavra === "polimerase"){
      setPoli("polimerase")
    }
    else if(palavra === "ribossomos"){
      setRibo("ribossomos")
    }
    else{
      setPalavra("")
    }
    setPalavra("")
  }
 
 
  return (
      <div className='App'>
        {/*<Confetti/>*/}
        <h1>Transcrição e Tradução Gênica</h1>
          <p>
            A tradução gênica é o processo no qual ocorre a síntese de uma cadeia polipeptídica. Ele se inicia quando ocorre o emparelhamento de um RNA transportador que transporta metionina com o códon de início de tradução localizado em um RNA mensageiro. 
          </p>
          <br />
          <p>
            Primeiramente, o ribossomo se une ao RNA mensageiro e ao RNA transportador inicial para iniciar a tradução. Em seguida, os aminoácidos são trazidos ao ribossomo pelos RNA transportadores e ligados entre si para formar uma cadeia. Finalmente, o polipeptídio completo é liberado para cumprir sua função na célula.   
          </p>

   <br />
          <p>
              Os genes bacterianos são frequentemente traduzidos em grupos chamado operons. Portanto, um RNAm bacteriano pode conter as sequências codificadoras de muitos genes. 
          </p>
 <br />

          <p>
          A transcrição gênica é a primeira etapa da expressão do gene. Envolve a cópia da sequência de DNA de um gene para produzir uma molécula de RNA. 
          </p>

<br />
          <p>
          Na transcrição, a sequência de DNA de um gene é copiada para fazer uma molécula de RNA. Essa etapa é chamada de transcrição pois envolve reescrever, ou transcrever, a sequência de DNA num "alfabeto" similar de RNA. Nos eucariontes, a molécula de RNA deve passar por um processamento para se tornar um RNA mensageiro maduro. 
          </p>
 <br />
          <p>
          Expressão gênica: processo pelo qual a informação hereditária contida em genes, utilizada para formar um produto gênico funcional, como proteínas ou RNA.
          </p>
<br /> 
          <p>
          Enzima polimerase: enzimas capazes de replicar uma fita de DNA.
          </p>
       
 
 
    <form onSubmit={checarPalavra}>
            <input
            type="text"
            placeholder="Insira uma palavra"
            value={palavra}
            onChange={handleSubmit}
            required/>
 
            <button style={{backgroundImage: `url(${enviar})`, backgroundSize: "30px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></button>
        </form>
 
    <h2>Criado pelos alunos do 3° MTEC-PI em Desenvolvimento de Sistemas</h2>
      </div>
  )
}
 
export default App