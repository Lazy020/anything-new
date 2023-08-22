import { useState, FormEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/calc.png'

/*
Calculo: alccol/gasolina
Se resultado menor 0.7 comepnsa Álcool */

interface resultadoP{
  titulo: string;
  gasolina: string | number;
  alcool: string | number;
}
 function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [resultado, setResultado] = useState <resultadoP>()

  function calculo(event: FormEvent) {
    event.preventDefault();
    let conta = (alcoolInput/gasolinaInput)
    console.log(conta)
  if(conta <= 0.7){
    setResultado({
      titulo:"Compensa usar Álcool",
      gasolina: formataMoeda(gasolinaInput),
      alcool: formataMoeda(alcoolInput)
    })
  }else {
      setResultado({
        titulo:"Compensa usar Gasolina",
        gasolina: formataMoeda(gasolinaInput),
        alcool: formataMoeda(alcoolInput)
      })
    }
  }
  function formataMoeda(valor:number){
    let valorFormatado = valor.toLocaleString(pt-br,
    {
      style: "currency",
      currency: "BRL"
    })
    return valorFormatado;
    }
  }
 




export default App
