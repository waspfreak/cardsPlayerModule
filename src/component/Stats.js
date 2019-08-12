export default (element, dataJson, idPlayer=0) => {
  let dataPlayer = dataJson[idPlayer].player
  let dataStats = dataJson[idPlayer].stats
  
  // Stats Field
  let id = dataPlayer.id
  let realname = `${dataPlayer.name.last}, ${dataPlayer.name.first}`
  let position = dataPlayer.info.positionInfo
  let appearances = dataStats[6].value
  let goals = dataStats[0].value
  let assistances = dataStats[5].value
  let goalsPerMatch = dataStats[7].value / dataStats[8].value // Don't Know what do you want show here so i fake one
  let golaPerMatchFor=  Math.round( goalsPerMatch * 10 ) / 10;
  let passesPerMinute = dataStats[4].value / dataStats[2].value // Don't Know what do you want show here so i fake one
  let passesPerMinuteFor=  Math.round( passesPerMinute * 10 ) / 10;
  let el = document.querySelector(element)

  let template = `
    <div class="col-12 card_img">
        <img src="./../public/image/players/p${id}.png" alt="">
    </div>

    <div class="col-12 card_items">
        <span class="logo logo-p${id}"></span>
        <h3 class="player">${realname}</h3>
        <h4 class="position">${position}</h4>

        <ul class="list-group card-list-attributes">
            <li class="list-group-item">Appearances <span class="list-value">${appearances}</span></li>
            <li class="list-group-item">Goals <span class="list-value">${goals}</span></li>
            <li class="list-group-item">Assistances <span class="list-value">${assistances}</span></li>
            <li class="list-group-item">Goals per match <span class="list-value">${golaPerMatchFor}</span></li></li>
            <li class="list-group-item">Passes per minute <span class="list-value">${passesPerMinuteFor}</span></li></li>
        </ul>
    </div>
  `
  el.innerHTML = template
}