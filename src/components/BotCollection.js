import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, setBotArmy, botArmy, dischargeBot}) {

  const botElements = bots.map(bot => {
    return (
      <BotCard key={bot.id} bot={bot} setBotArmy={setBotArmy} botArmy={botArmy} dischargeBot={dischargeBot}/>
    )
  })
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {botElements}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
