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



 








