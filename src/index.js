 import './index.scss'
 import Card from './component/Card.js'


fetch(`https://api.myjson.com/bins/hzm2r`)
    .then(resp => resp.json())
    .then(playerStats => Card('#app', playerStats))



