'use strict';
//global access to my elements
let firstImageElement = document.getElementById('first-image');
let secondImageElement = document.getElementById('second-image');
let thirdImageElement = document.getElementById('third-image');
let container = document.getElementById('first-sec');
//initiliazation my variables
let counts = 0;
let Attempts = 25;
let firstIndex;
let secondIndex;
let thirdIndex;
let arrOfnames = [];
let arrOfVotes = [];
let arrOfShown = [];
let arraOfPrevvalue=[];
let arrofNewvalues=[];
//creating a const function
function BusCatalog(name, imgsrc) {
  this.name = name;
  this.imgsrc = imgsrc;
  this.votes = 0;
  this.shown =0;
  BusCatalog.Images.push(this);
  arrOfnames.push(this.name);
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
function genrateindex() {
  return Math.floor(Math.random() * BusCatalog.Images.length);
}
//display images function
function renderimages()
{
  arraOfPrevvalue=[firstIndex,secondIndex,thirdIndex];
//   console.log('prev values',arraOfPrevvalue);
  firstIndex = genrateindex();
  secondIndex = genrateindex();
  thirdIndex = genrateindex();
  arrofNewvalues=[firstIndex,secondIndex,thirdIndex];
  console.log('before while newvalues',arrofNewvalues);
  while(firstIndex===arraOfPrevvalue[0] ||firstIndex===arraOfPrevvalue[1] || firstIndex===arraOfPrevvalue[2] )
  {
    firstIndex=genrateindex();

  }
  while(secondIndex===arraOfPrevvalue[0] ||secondIndex===arraOfPrevvalue[1] || secondIndex===arraOfPrevvalue[2] || secondIndex === firstIndex)
  {
    secondIndex=genrateindex();

  }
  while(thirdIndex===arraOfPrevvalue[0] ||thirdIndex===arraOfPrevvalue[1] || thirdIndex===arraOfPrevvalue[2] || thirdIndex === secondIndex || thirdIndex === firstIndex)
  {
    thirdIndex=genrateindex();
  }
  arrofNewvalues=[firstIndex,secondIndex,thirdIndex];
  console.log('after while new values',arrofNewvalues);
//   console.log(BusCatalog.Images[firstIndex]);
  firstImageElement.src = BusCatalog.Images[firstIndex].imgsrc;
  BusCatalog.Images[firstIndex].shown++;
  secondImageElement.src = BusCatalog.Images[secondIndex].imgsrc;
  BusCatalog.Images[secondIndex].shown++;
  thirdImageElement.src = BusCatalog.Images[thirdIndex].imgsrc;
  BusCatalog.Images[thirdIndex].shown++;
}
renderimages();

//click event
container.addEventListener('click',handleClicking);

//handling event function
function handleClicking(event)
{
  counts++;
  if (counts <= Attempts)
  {
    if (event.target.id === 'first-image')
    {
      BusCatalog.Images[firstIndex].votes++;
    }
    else if (event.target.id === 'second-image')
    {
      BusCatalog.Images[secondIndex].votes++;
    }
    else if (event.target.id === 'third-image')
    {
      BusCatalog.Images[thirdIndex].votes++;
    }
    else
    {
      alert('Please click on one of the images shown below');
      counts--;
    }
    renderimages();
  }else{
    let buttonreport=document.getElementById('buttonrepor');
    buttonreport.addEventListener('click', generatelist);
    container.removeEventListener('click',handleClicking);
  }
}

function generatelist() {

  let Rresults = document.getElementById('Rresults');
  Rresults.innerHTML = '';
  for (let i = 0; i <BusCatalog.Images.length; i++)
  {
    arrOfVotes.push(BusCatalog.Images[i].votes);
    arrOfShown.push(BusCatalog.Images[i].shown);
    console.log(arrOfVotes);
    let li = document.createElement('li');
    Rresults.appendChild(li);
    let Per=(100)*(BusCatalog.Images[i].votes)/(counts-1);
    li.textContent = ` ${BusCatalog.Images[i].name} has ${BusCatalog.Images[i].votes} votes and has a percentage of being clicked when shown of ${Per} %, and it has been shown ${BusCatalog.Images[i].shown} times`;

  }
  chart();
}
function chart()
{
  let ctx = document.getElementById('myChart');
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: arrOfnames,
      datasets: [{
        label: 'Votes',
        data: arrOfVotes,
        backgroundColor: [
          'rgba(255, 0, 0, 2)',
        ],
        borderWidth: 1
      },{
        label:'# of Shown',
        data: arrOfShown,
        backgroundColor:[
          'rgb(100,150,250)'
        ],
        borderWidth: 1
      }]
    }
  });
}

