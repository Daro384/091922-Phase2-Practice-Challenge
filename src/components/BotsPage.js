import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [allBots, setAllBots] = useState([])
  const [botArmy, setBotArmy] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:8002/bots", ).then(resp => resp.json())
    .then(bots => setAllBots(bots))
  }, [])

  const dischargeBot = (id) => {
    fetch("http://localhost:8002/bots/" + id, {method:"DELETE"})
    .then(resp => resp.json())
    .then(() => {
      setAllBots(allBots.filter(bot => bot.id !== id))
      setBotArmy(botArmy.filter(bot => bot.id !== id))
    })
  }

  return (
    <div>
      <YourBotArmy setBotArmy={setBotArmy} botArmy={botArmy}/>
      <BotCollection bots={allBots} setBotArmy={setBotArmy} botArmy={botArmy} dischargeBot={dischargeBot}/>
    </div>
  )
}

export default BotsPage;
