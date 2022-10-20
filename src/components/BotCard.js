import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, setBotArmy , botArmy, dischargeBot}) {

  const onAddBot = () => {
    if (!botArmy.find(aBot => aBot.id === bot.id) && botArmy.length < 4){
      setBotArmy([...botArmy, bot])
    }
    else setBotArmy(botArmy.filter(aBot => aBot.id !== bot.id))
  }

  const handleDelete = () => {
    dischargeBot(bot.id)
  }

  const showX = () => {
    if (!botArmy.find(aBot => aBot.id === bot.id)) {
      return (
        <span>
              <div className="ui center aligned segment basic">
                <button
                  className="ui mini red button"
                  onClick={handleDelete}
                >
                  x
                </button>
              </div>
            </span>
      )
    }
  }
  

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={onAddBot}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          {
            showX()
          }
        </div>
      </div>
    </div>
  );
}

export default BotCard;
