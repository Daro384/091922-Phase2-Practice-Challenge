import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({setBotArmy, botArmy}) {
  const botElements = botArmy.map(bot => {
    return (
      <BotCard 
        key={bot.id} 
        bot={bot} 
        setBotArmy={setBotArmy} 
        botArmy={botArmy}
        fromBotArmy={true}
      />
    )
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botElements}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
