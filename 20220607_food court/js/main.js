//toggle hidden menu
const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName('i')[0];

    if(toggle && navList){
        //add 추가, remove 제거, toggle: 추가/제거
        toggle.addEventListener('click',() =>{
            //toggle menu
            navList.classList.toggle('show-menu');
            //change toggle icon: bx-menu <-> bx-x-circle
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x-circle");
        });
    }
}
toggleMenu('nav-toggle', 'nav-list');
// function say(){
//     console.log('hello world1');
// }
// const say = function(){
//     console.log('hello world2');
// }
// const say = () => console.log('hello world3');
// say();
const addNow = (homeCardId) =>{
    //html -> js
    const homeCard = document.getElementById(homeCardId);

    //시간 -> index번째 식사가 선택되어야하는지 결정
    //조식 끝 : 8 : 00
    //중식 끝 : 13 : 00
    //석식 끝 : 17 : 50
    var now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    console.log(hour , minute);
    // index = hour%12;
    hour = 18;
    minute = 0;
    if(minute >= 50){
        hour = hour + 1;
    }else{
        hour = hour - 1;
    }
    if(hour >= 8 && hour <= 13){ //중식
        index=1;
    }else if(hour > 13 && hour <= 18){ //석식
        index=2;
    }else{
        index=0;
    }
    //homeCard에서 index번째 card에 new 클래스 추가
    let card =  homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');
}
addNow('home-card');