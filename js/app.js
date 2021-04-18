'use strict';

//global access to my elements
let firstImageElement = document.getElementById('first-image');
let secondImageElement = document.getElementById('second-image');
let thirdImageElement = document.getElementById('third-image');
let buttonreport=document.getElementById('buttonrepor');
//initiliazation my variables
let counts = 0;
let Attempts = 25;
let firstIndex;
let secondIndex;
let thirdIndex;

//creating a const function
function BusCatalog(name, imgsrc) {
  this.name = name;
  this.imgsrc = imgsrc;
  this.votes = 0;
  this.shown =0;
  BusCatalog.Images.push(this);
}

BusCatalog.Images = [];
//creating my objects
new BusCatalog('bag', 'assets/bag.jpg');
new BusCatalog('banana', 'assets/banana.jpg');
new BusCatalog('bathroom', 'assets/bathroom.jpg');
new BusCatalog('boots', 'assets/boots.jpg');
new BusCatalog('breakfast', 'assets/breakfast.jpg');
new BusCatalog('bubble', 'assets/bubblegum.jpg');
new BusCatalog('Chair', 'assets/chair.jpg');
new BusCatalog('Cthulhu', 'assets/cthulhu.jpg');
new BusCatalog('Dog', 'assets/dog-duck.jpg');
new BusCatalog('Dragon', 'assets/dragon.jpg');
new BusCatalog('Pen', 'assets/pen.jpg');
new BusCatalog('Pet-sweet', 'assets/pet-sweep.jpg');
new BusCatalog('scissors', 'assets/scissors.jpg');
new BusCatalog('Shark', 'assets/shark.jpg');
new BusCatalog('Sweep', 'assets/sweep.png');
new BusCatalog('Tauntaun', 'assets/tauntaun.jpg');
new BusCatalog('Unicorn', 'assets/unicorn.jpg');
new BusCatalog('Usb', 'assets/usb.gif');
new BusCatalog('Water-can', 'assets/water-can.jpg');
new BusCatalog('Wine-glass', 'assets/wine-glass.jpg');

//random function
console.log(BusCatalog.Images);
function genrateindex() {
  return Math.floor(Math.random() * BusCatalog.Images.length);
}
//display images function
function renderimages() {
  firstIndex = genrateindex();
  secondIndex = genrateindex();
  thirdIndex = genrateindex();
  while (firstIndex === secondIndex || thirdIndex === secondIndex || thirdIndex === firstIndex) {
    firstIndex = genrateindex();
    secondIndex = genrateindex();
  }

  console.log(firstIndex);
  console.log(secondIndex);
  console.log(thirdIndex);

  // eslint-disable-next-line indent
  firstImageElement.src = BusCatalog.Images[firstIndex].imgsrc;
  secondImageElement.src = BusCatalog.Images[secondIndex].imgsrc;
  thirdImageElement.src = BusCatalog.Images[thirdIndex].imgsrc;
}
renderimages();

//click event
firstImageElement.addEventListener('click', handleClicking);
secondImageElement.addEventListener('click', handleClicking);
thirdImageElement.addEventListener('click', handleClicking);
buttonreport.addEventListener('click', generatelist);
// button.addEventListener('click',handlebutton);
//handling event function
function handleClicking(event) {
  counts++;
  if (counts <= Attempts) {
    if (event.target.id === 'first-image') {
      BusCatalog.Images[firstIndex].votes++;
      BusCatalog.Images[secondIndex].shown++;
      BusCatalog.Images[thirdIndex].shown++;
    }
    else if (event.target.id === 'second-image') {
      BusCatalog.Images[secondIndex].votes++;
      BusCatalog.Images[firstIndex].shown++;
      BusCatalog.Images[thirdIndex].shown++;
    }
    else if (event.target.id === 'third-image') {
      BusCatalog.Images[thirdIndex].votes++;
      BusCatalog.Images[firstIndex].shown++;
      BusCatalog.Images[firstIndex].shown++;
    }
    renderimages();
  }
  else {
    // console.log('working fine');
    firstImageElement = removeEventListener('click', handleClicking);
    secondImageElement = removeEventListener('click', handleClicking);
    thirdImageElement = removeEventListener('click', handleClicking);
  }
  // console.log(BusCatalog);
  // console.log(this.votes);
  // console.log(BusCatalog.Images);
}

// function handlebutton(event)
// {
//   if (event.target.id === 'button')
//   {
//     generatelist();

//   }
// }
function generatelist() {
  let Rresults = document.getElementById('Rresults');
  Rresults.innerHTML = '';
  for (let i = 0; i < BusCatalog.Images.length; i++) {
    let li = document.createElement('li');
    Rresults.appendChild(li);
    let Per=(100)*(BusCatalog.Images[i].votes)/(counts-1);
    li.textContent = ` ${BusCatalog.Images[i].name} has ${BusCatalog.Images[i].votes} votes and has a percentage of being clicked when shown of ${Per} %`;
    if(Per >=70)
    {
      li.textContent=`WOW the visitor gave ${BusCatalog.Images[i].name} a very high rating and its ${Per}% :)`;
    }
    if(Per <=0)
    {
      li.textContent=`Oops !!, the visitor did not choose at all ${BusCatalog.Images[i].name} and it has a very bad rating of ${Per}%`;
    }
  }

}


