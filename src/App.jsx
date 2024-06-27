import './App.css'
import enviar from './assets/mandar.png'
import { useState } from 'react'
 
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
          <h1>Transcrição e Tradução Gênica</h1>
          <p>A transcrição e tradução gênica são processos fundamentais para a expressão gênica. A <h3 style={{backgroundColor: transcricao ? "#2d2d2d" : "white", transition: ".5s"}}>{transcricao}</h3> é a primeira etapa, onde o DNA é copiado para formar uma molécula de RNA mensageiro (mRNA). Este processo ocorre no núcleo das células e é mediado pela enzima RNA <h3 style={{backgroundColor: poli ? "#2d2d2d" : "white", transition: ".5s"}}>{poli}</h3>. O mRNA resultante é então processado e transportado para o citoplasma. </p>
          <br />
          <p>Na tradução, o mRNA serve como molde para a síntese de proteínas. Este processo ocorre nos <h3 style={{backgroundColor: ribo ? "#2d2d2d" : "white", transition: ".5s"}}>{ribo}</h3>, que leem a sequência de nucleotídeos do mRNA e, com a ajuda do RNA transportador (tRNA), traduzem essa sequência em uma cadeia de aminoácidos, formando uma proteína funcional. A sequência específica de nucleotídeos no mRNA determina a ordem dos aminoácidos na proteína, o que, por sua vez, determina sua estrutura e função.</p>
          <br />
          <p>Esses processos são essenciais para a regulação da atividade celular e o funcionamento correto dos organismos vivos.</p>
       
 
 
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