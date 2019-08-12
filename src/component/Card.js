import Dropdown from './Dropdown.js'

export default (element, dataJson) => { 
  let el = document.querySelector(element)
  let template = `
    <div class="container card">
      <div class="row">
          <div class="col-12 col-md-4 offset-md-4">
              <div class="card">
                  <!-- DROPDOWN -->
                    <div id="render-dropdown"></div>
                  <!--// DROPDOWN -->
                  <!-- CARD -->
                    <div id="render-stats"></div>
                  <!--// CARD -->
              </div>
          </div>
      </div>
  </div>
  `
  el.innerHTML = template
  
  Dropdown('#render-dropdown', dataJson.players)
}

