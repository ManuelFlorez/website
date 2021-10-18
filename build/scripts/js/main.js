import { titles, socialNetworks } from './data.js'

const insert = title => document.getElementById(title.id).innerHTML = title.text

titles.forEach( insert )

const pattern = (value, index) => `<li id="${index}">${value.name}</li>`

insert({ id:'socialNetworks', text: socialNetworks.map( pattern ).join('') })
