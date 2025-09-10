import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')





// scan element
function scanElement(pos1,pos2){
    // pos 1 = hr y position
    // pos 2 = elemenet y position
    console.log(pos1 >= pos2)
    return pos1 >= pos2
}

const hr = document.getElementById('scanner')
const headerhr = document.getElementById('header-hr')
let intros = document.querySelectorAll('.para')
window.onscroll = () => {
for(let i = 0; i < intros.length; i++){
    let ypos = intros[i].getBoundingClientRect().y;
    let bottomypos = ypos + intros[i].clientHeight;
    let hrpos = hr.getBoundingClientRect().y
    let headerhrpos = headerhr.getBoundingClientRect().y + 90
    // scanning between scanner-hr & top element - DOWN
    if(intros[i].classList.contains('hidden')){
        if(scanElement(hrpos,ypos)){
            intros[i].classList.remove('hidden')
            intros[i].classList.add('appear')
        }
    }
    // scanning between header-hr & bottom element - DOWN
    if(scanElement(headerhrpos,bottomypos)){
            intros[i].classList.remove('hidden')
            intros[i].classList.remove('appear')
            intros[i].classList.add('disappear')
    }

    // scanning between header-hr & bottom element - UP
    if(intros[i].classList.contains('disappear')){
        if(!scanElement(headerhrpos,bottomypos)){
            intros[i].classList.remove('disappear')
            intros[i].classList.add('hidden')
            intros[i].classList.add('appear')
        }
    }
}
}