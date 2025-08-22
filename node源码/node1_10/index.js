import fs from 'node:fs'
import { JSDOM } from 'jsdom'
const dom = new JSDOM(`<!DOCTYPE html><div id='app'></div>`)

const document = dom.window.document

const window = dom.window

fetch('https://api.thecatapi.com/v1/images/search?limit=50&page=2').then(res => res.json()).then(data => {
    const app = document.getElementById('app')
    data.forEach(item=>{
       const img =  document.createElement('img')
       img.src = item.url
       img.style.width = '200px'
       img.style.height = '200px'
       app.appendChild(img)
    })
    fs.writeFileSync('./index.html', dom.serialize())
})

