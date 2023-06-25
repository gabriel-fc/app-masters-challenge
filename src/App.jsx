import { useEffect, useState } from 'react'
// import './App.css'
import { Button, Alert } from '@mui/material'
import Loader from './components/Loader'
import GamesGrid from './components/GamesGrid'
import RequestArea from './components/RequestArea'



function App() {
  const [games, setGames] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [statusCode, setStatusCode] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")
  const apiURL = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data"
  const devMail = "insert_email@here.com"

  useEffect(()=>{
    if((statusCode > 199 && statusCode < 300 ) || statusCode == 0) setErrorMessage("")
    else if(statusCode > 499) setErrorMessage("O servidor fahou em responder, tente recarregar a página")
    else setErrorMessage("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde")
  }, [statusCode])


  function requestGames() {
    setIsLoading(true)
    console.log("teste request")
    fetch(apiURL, {
      method: "GET",
      headers: {
        "dev-email-address": devMail
      }
    })
      .then(response => {
        setStatusCode(response.status)
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setGames(data)
        console.log("response:" + data)
      })
      .catch(error => {
        setIsLoading(false)
        setGames({})
        console.log("data error after api request: " + error.message)
      })
  }


  return (
    <>
      {isLoading ?
        <Loader /> : (statusCode > 199 && statusCode < 300) ?
          <GamesGrid games={games} /> :
          <RequestArea statusCode={statusCode} onClickFunc = {requestGames}/>
      }
    </>
  )
}

export default App