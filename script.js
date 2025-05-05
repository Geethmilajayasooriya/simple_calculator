let firstSave;
let op;
function fn0()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+0;
}
function fn1()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+1;
}
f
function fn2()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+2;
}
function fn3()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+3;
}
function fn4()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+4;
}
function fn5()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+5;
}
function fn6()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+6;
}
function fn7()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+7;
}
function fn8()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+8;
}
function fn9()
{
   let previous = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= previous+9;
}

function erase()
{
   let previous = document.getElementById("finalans").innerHTML;
   let pree = previous.slice(0,-1);
   document.getElementById("finalans").innerHTML= pree;
}



function plus()
{
   firstSave = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= 0;
     op = "add";
}
function minus()
{

    firstSave = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= 0;
    op = "subs";
}

function mult()
{
   
   firstSave = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= 0;
    op = "multiple";
}

function division()
{
   
   firstSave = document.getElementById("finalans").innerHTML;
   document.getElementById("finalans").innerHTML= 0;
    op = "div";
}

function equal()
{
   let secondSave = document.getElementById("finalans").innerHTML; 
   if(op == "add")
        {
         document.getElementById("finalans").innerHTML= parseInt(firstSave)+ parseInt(secondSave);

        }
    else if(op == "div")
         {
          document.getElementById("finalans").innerHTML= parseInt(firstSave)/parseInt(secondSave);
 
         }
      else if   (op == "subs")
         {
          document.getElementById("finalans").innerHTML= parseInt(firstSave)-parseInt(secondSave);
 
         }
        else if  (op == "multiple")
         {
          document.getElementById("finalans").innerHTML= parseInt(firstSave)*parseInt(secondSave);
 
         }

         else 
         {
            document.getElementById("finalans").innerHTML="invalid"  ;
         }
}

function allclear()
{
   document.getElementById("finalans").innerHTML=0  ;
   op == 0;
   
   
}