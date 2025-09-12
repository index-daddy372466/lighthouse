import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
/*------------------------ mount app ------------------------ */
createApp(App).mount('#app')
/*------------------------ mount app ------------------------ */


// handle/update the time
const timer = document.getElementById('time-label');
setInterval(()=>{
    let currentTime = new Date().toTimeString().slice(0,9);
    timer.textContent = currentTime
},1000)

// scan element
function scanElement(pos1,pos2){
    // pos 1 = hr y position
    // pos 2 = elemenet y position
    return pos1 >= pos2
}

const hr = document.getElementById('scanner')
const headerhr = document.getElementById('header-hr')
const subheader = document.getElementById('subheader');
const header = document.querySelector('header')
let intros = document.querySelectorAll('.para')
let mouseparas = document.querySelectorAll('.mouse-pos-para')

intros.forEach((int,idx)=>{
    // console.log(int)
    let parent = int.parentElement;
        parent.classList.add('justify-center')
    
    // if(idx === intros.length - 1 || idx === 0){
    //     parent.classList.remove('justify-start')
    //     parent.classList.add('justify-center')
    // } else {
    //     parent.classList.add('justify-start')
    //     parent.classList.remove('justify-center')
    // }
})
/*  ------------------------------------------------------ window onscroll ------------------------------------------------------ */
let scrollTop = document.body.scrollTop
let currentTarget;

window.onscroll = () => {

// console.log(scrollTop)
// console.log(scrollY)

if(scrollY === scrollTop){
    headerhr.style.top = 173 + "px"
    // header.style.backgroundImage = 'linear-gradient(transparent,transparent)';
    // console.log("Absolute top")
    header.classList.remove('bg-black')
    header.style.background = 'transparent'
    header.classList.add('absolute')
    header.classList.remove('fixed')
}
if(scrollY > scrollTop){
    headerhr.style.top = subheader.getBoundingClientRect().y + subheader.clientHeight + 5 + "px"
    // header.style.backgroundImage = 'linear-gradient(#000,transparent 99%)';
    // console.log("Fixed Top")
    header.classList.add('bg-black')
    header.classList.add('fixed')
    header.classList.remove('absolute')
}

for(let i = 0; i < intros.length; i++){
    let ypos = intros[i].getBoundingClientRect().y;
    let bottomypos = ypos + intros[i].clientHeight;
    let hrpos = hr.getBoundingClientRect().y
    let headerhrpos = headerhr.getBoundingClientRect().y + 75
    // scanning between scanner-hr & top element - DOWN
    if(intros[i].classList.contains('hidden')){
        if(scanElement(hrpos,ypos)){
            currentTarget = i;
            intros[i].classList.add('isscanned')
            intros[i].classList.remove('hidden')
            intros[i].classList.add('appear')
            intros[i].parentElement.classList.add('bg-move')
            intros[i].parentElement.classList.remove('bg-original')
        }
    }
    // scanning between header-hr & bottom element - DOWN
    if(scanElement(headerhrpos,bottomypos)){
            intros[i].classList.remove('hidden')
            intros[i].classList.remove('appear')
            intros[i].classList.add('disappear')
            intros[i].parentElement.classList.add('bg-original')
            intros[i].parentElement.classList.remove('bg-move')

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
if(window.innerWidth > 870){
    window.addEventListener('mousemove',mousemoveEvent)
    window.addEventListener('touchmove',mousemoveEvent)
    window.addEventListener('click',clickTarget)
}

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
        let pos = {x:(e.pageX||Math.floor(e.changedTouches[0]['clientX'])),y:(e.pageY||Math.floor(e.changedTouches[0]['clientY']))}
    // update mouse para information (top right page)
    if(pos.y > headerhr.getBoundingClientRect().y){
        mouseparas.forEach(para => {
        if(para.id==='posX') para.textContent = 'X: ' + pos.x
        if(para.id==='posY') para.textContent = 'Y: ' + pos.y
    })

    tip1.style.left = pos.x + "px"
    tip1.classList.add('hr-active-tip1')
    tip2.style.top = (e.clientY||e.changedTouches[0]['clientY']) + "px"
    tip2.classList.add('hr-active-tip2')
    tip3.style.left = pos.x + "px"
    tip3.classList.add('hr-active-tip3')
    tip4.style.top = (e.clientY||e.changedTouches[0]['clientY']) + "px"
    tip4.classList.add('hr-active-tip4')
    }
}
function clickTarget(e){
    let pos = {x:e.pageX||e.changedTouches[0]['clientX'],y:e.pageY||e.changedTouches[0]['clientY']}
    if(pos.y > headerhr.getBoundingClientRect().y){
        tip1.style.left = pos.x + "px"
    tip1.classList.toggle('hr-active-tip1-ext')
    tip2.style.top = (e.clientY||e.changedTouches[0]['clientY']) + "px"
    tip2.classList.toggle('hr-active-tip2-ext')
    tip3.style.left = pos.x + "px"
    tip3.classList.toggle('hr-active-tip3-ext')
    tip4.style.top = (e.clientY||e.changedTouches[0]['clientY']) + "px"
    tip4.classList.toggle('hr-active-tip4-ext')

    setTimeout(()=> {
        tip1.classList.remove('hr-active-tip1-ext')
        // tip1.style.left = document.body.clientWidth/2 + "px"
        tip1.style.left = pos.x + "px"
        tip2.classList.remove('hr-active-tip2-ext')
        tip2.style.top = e.clientY + "px"
        tip3.classList.remove('hr-active-tip3-ext')
        // tip3.style.left = document.body.clientWidth/2 + "px"
        tip3.style.left = pos.x + "px"
        tip4.classList.remove('hr-active-tip4-ext')
        tip4.style.top = e.clientY + "px"

    },250)
    }
}

// window on mousemove end
/*  ------------------------------------------------------ window onmosuemove onclick ------------------------------------------------------ */