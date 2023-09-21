setInterval(setClock, 100);

const hourHand = document.querySelector('[data-hand-hour]');
const minuteHand = document.querySelector('[data-hand-minute]');
const secondHand = document.querySelector('[data-hand-second]');
const box = document.querySelector('.       box');

function setClock() {

    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

document.addEventListener('mousemove', function(e){
    box.style.left = e.pageX + 'px'
    box.style.top = e.pageY + 'px';

})

function App() {
    alert( `Hello I am ${name} and I am Fullstack devoloper`);

    function Skills(){
        let Skills = [
            'HTML',
            'CSS',
            'JavaScript',
            'React'
        ];

        for(let i =0; i < Skills.length; i++) {
            alert(`You have a skills ${Skills[i]}`)
        }
    }
    Skills();

    function Age() {
        let age = prompt('How old are you?');
        
        if(age < 18) {
            alert('Exactly age Learing IT')
        }else if(age > 18) {
            alert('Supper age learning IT')
        }
    }
    Age();
}

App(name = 'Axatmirzo');