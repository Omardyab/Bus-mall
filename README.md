# Bus-mall

Credits Omar dyab
Big thanks to :
Sally, Hanaa, and Yazan for their help im improving my code and get it done :).
for the  second part I would liek to thank Israa as well for her help :). 

To be checked: button :) 

what i learand in this lab 
Two random images displaying that are not the same.
keep tracking what users have chosen.
An event listener is needed. 

event.target.id
left.image.id

getting the images inside javascript globally.
let rightimageelement=document.getelemetnbyid('rightimage');

let maxatt=25;
let counts=0; 
function Goat(name,src)
{this.name=name;
this.src=src;
this.clicks=0;
allimages.push(this);
//or another way
Goat.allimages.push(this);
}
allimages=[]; //our array of objects; 
Goat.prototype.allimages=[]; // all shared only for the const and not globally, and its better to use this when having more templates
 

//insatances:
firstimage=new Goat('cruisin-goat', '../ src of image');

any number multiplied by 1= any number 
any number multiplied by less than 1= less than any number

Great tips:
The header is always better to be shared all over your pages.
we use this if we have a prototype.

Remaining questions:
-why we did not have this.source? 
its not a prototype
-Clicking outside an image would create a problem with the number of shown images and would affect the analysis
-Shown images have one more extar value as its counting the last image which should not be included  in the analysis 

 
