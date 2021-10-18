import { titles, socialNetworks } from './data.js'

const insert = title => document.getElementById(title.id).innerHTML = title.text

titles.forEach( insert )

const pattern = (value, index) => `<li id="${index}"><a href="${value.url}" target="_blank">${value.name}</a></li>`

const order = (socialNetwork1, socialNetwork2) => {
  if (socialNetwork1.name.length < socialNetwork2.name.length) return 1
  
  if (socialNetwork1.name.length > socialNetwork2.name.length) return -1
  
  return 0
}

insert({ id:'socialNetworks',text: socialNetworks.sort( order ).map( pattern ).join('') })
