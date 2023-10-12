function wineTheWords(){ document.getElementById("hpbd-text").style.color = 'orangered';
                        document.getElementById("disappear").style.display = 'none';
                        setTimeout(() => {
  elements = document.getElementsByClassName('important-words');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color="green";
    }
}, 14103);
}
