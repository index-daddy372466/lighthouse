import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')





// scan element
function scanElement(pos1,pos2){
    // pos 1 = hr y position
    // pos 2 = elemenet y position
    return pos1 >= pos2
}

const hr = document.getElementById('scanner')
const headerhr = document.getElementById('header-hr')
let intros = document.querySelectorAll('.para')
/*  ------------------------------------------------------ window onscroll ------------------------------------------------------ */
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


} // window on scroll end
/*  ------------------------------------------------------ window onscroll ------------------------------------------------------ */


/*  ------------------------------------------------------ window onmosuemove onclick ------------------------------------------------------ */
window.addEventListener('mousemove',mousemoveEvent)
window.addEventListener('touchmove',mousemoveEvent)
window.addEventListener('click',clickTarget)

    let tip1 = document.createElement('hr')
    let tip2 = document.createElement('hr') 
    let tip3 = document.createElement('hr') 
    let tip4 = document.createElement('hr') 

    tip1.classList.add('hr-tip')
    tip2.classList.add('hr-tip')
    tip3.classList.add('hr-tip')
    tip4.classList.add('hr-tip')

    tip1.classList.add('tip1')
    tip2.classList.add('tip2')
    tip3.classList.add('tip3')
    tip4.classList.add('tip4')


    tip1.classList.add('no-pointer')
    tip2.classList.add('no-pointer')
    tip3.classList.add('no-pointer')
    tip4.classList.add('no-pointer')

    document.body.append(tip1)
    document.body.append(tip2)
    document.body.append(tip3)
    document.body.append(tip4)


function mousemoveEvent(e){
        let pos = {x:e.clientX||e.changedTouches[0]['clientX'],y:(e.clientY||e.changedTouches[0]['clientY'])}
    tip1.style.left = pos.x + "px"
    tip1.classList.add('hr-active-tip1')
    tip2.style.top = pos.y + "px"
    tip2.classList.add('hr-active-tip2')
    tip3.style.left = pos.x + "px"
    tip3.classList.add('hr-active-tip3')
    tip4.style.top = pos.y + "px"
    tip4.classList.add('hr-active-tip4')
}

function clickTarget(e){
        let pos = {x:e.clientX||e.changedTouches[0]['clientX'],y:e.clientY||e.changedTouches[0]['clientY']}
    tip1.style.left = pos.x + "px"
    tip1.classList.toggle('hr-active-tip1-ext')
    tip2.style.top = pos.y + "px"
    tip2.classList.toggle('hr-active-tip2-ext')
    tip3.style.left = pos.x + "px"
    tip3.classList.toggle('hr-active-tip3-ext')
    tip4.style.top = pos.y + "px"
    tip4.classList.toggle('hr-active-tip4-ext')

    setTimeout(()=> {
        tip1.classList.remove('hr-active-tip1-ext')
        // tip1.style.left = document.body.clientWidth/2 + "px"
        tip1.style.left = pos.x + "px"
        tip2.classList.remove('hr-active-tip2-ext')
        tip2.style.top = pos.y + "px"
        tip3.classList.remove('hr-active-tip3-ext')
        // tip3.style.left = document.body.clientWidth/2 + "px"
        tip3.style.left = pos.x + "px"
        tip4.classList.remove('hr-active-tip4-ext')
        tip4.style.top = pos.y + "px"

    },250)
}



// window on mousemove end
/*  ------------------------------------------------------ window onmosuemove onclick ------------------------------------------------------ */