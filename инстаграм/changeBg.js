// Получаем кнопку из HTML
let changeColor = document.getElementById('blackBg');

let changeTheme = document.getElementById('blackfon');


// Если она есть, то выполняем код
if(changeColor != null) {
  // Вешаем обработчик события
  changeColor.onclick = function(el) {

    // Обращаемся к текущей вкладке
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Выполняем скрипт
      chrome.tabs.executeScript(
        tabs[0].id, // Указываем эту вкладку
        // Указываем код, что сработает на этой странице
        {code: 'document.body.style.overflow = "";document.getElementsByClassName("RnEpo  _Yhr4    ")[0].style.display = "none"; '}
      );
    })
  }
}



 




$(document).ready(function  smenaFona() {
  var elems=document.getElementsByClassName("                     Igw0E   rBNOH        eGOV_         _4EzTm                                                                                    L-sTb            HcJZg              ")
  for(var i=0; i<elems.length; i++)elems[i].style.backgroundColor = "black";
  
  
  
  document.getElementsByClassName("_lz6s Hz2lF ")[0].style.backgroundColor = "black";
  
  document.getElementsByClassName("SCxLW  o64aR  ")[0].style.backgroundColor = "black";
  
  document.getElementsByClassName("v9tJq AAaSh ")[0].style.backgroundColor = "black";
  
  document.getElementsByClassName("                     Igw0E     IwRSH      eGOV_         _4EzTm               KokQV                                                                                               ")[0].style.backgroundColor = "black";
  
  document.getElementsByClassName("_8Rna9  _3Laht pC2e0 ")[0].style.backgroundColor = "black";
  
  document.getElementsByClassName("rhpdm")[0].style.color = "white";
  
  document.getElementsByClassName("-vDIg")[0].style.color = "white";
  
  document.getElementsByClassName("_7UhW9       fKFbl yUEEX   KV-D4              fDxYl     ")[0].style.color = "white";
  
  document.getElementsByClassName("g47SY  ")[0].style.color = "white";
  
  var elems=document.getElementsByClassName("k9GMp  ")
  for(var i=0; i<elems.length; i++)elems[i].style.color = "white";
  
  var elems=document.getElementsByClassName("g47SY   ")
  for(var i=0; i<elems.length; i++)elems[i].style.color = "white";
  
  var elems=document.getElementsByClassName("xil3i  ")
  
  for(var i=0; i<elems.length; i++)elems[i].style.color = "#25acd4";
  var elems=document.getElementsByClassName("yLUwa  ")
  
  for(var i=0; i<elems.length; i++)elems[i].style.color = "#25acd4";
  var elems=document.getElementsByClassName("notranslate  ")
  
  for(var i=0; i<elems.length; i++)elems[i].style.color = "#25acd4";
  
  var storie=document.getElementsByClassName("eXle2 ")
  for(var i=0; i<storie.length; i++)storie[i].style.color = "white";
  
  var elems=document.getElementsByClassName("_9VEo1 ")
  
  for(var i=0; i<elems.length; i++)elems[i].style.color = "white";
  document.getElementsByClassName("s4Iyt")[0].src = "https://shufweb.ru/wp-content/webp-express/webp-images/uploads/2020/11/12222.png.webp"
  document.getElementsByClassName("s4Iyt")[0].style.maxHeight = "100%";
  document.getElementsByClassName("s4Iyt")[0].style.maxWidth = "100%";
  document.getElementsByClassName("s4Iyt")[0].style.borderRadius = "40px";

  document.getElementsByClassName("_97aPb wKWK0")[0].style.backgroundColor = "black";
  } 
);

smenaFona();



