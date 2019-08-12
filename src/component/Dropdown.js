import Stats from './Stats.js'

export default (element, dataJson) => {
  let el = document.querySelector(element)
  let template = `
    <div class="col-12 card_dropdown">
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select a player...
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                ${dataJson.map((item, index) => {
                  return `
                    <a class="dropdown-item" href="#!${index}">
                      ${item.player.name.last}, ${item.player.name.first}
                    </a>
                  `
                }).join('')}
            </div>
        </div>
    </div>
  `
  el.innerHTML = template

  Stats('#render-stats', dataJson, 0)

  let dropdownItems = document.querySelectorAll('a.dropdown-item')
  for (let objectId = 0; objectId < dropdownItems.length; objectId++) {
    dropdownItems[objectId].addEventListener('click', function(event) {
      Stats('#render-stats', dataJson, this.href.split('#!')[1])
    })
  }
}