var numberOfDrumButtom = document.querySelectorAll(".drum").length;

for( let i=0; i<numberOfDrumButtom; i++){
     document.querySelectorAll(".drum")[i].addEventListener('click',
     function (){ //anonymous function
          console.log(this);
          var buttonInnerHTML=this.innerHTML;
          console.log(buttonInnerHTML);
          makesound(buttonInnerHTML);
          makeanimation(buttonInnerHTML);
     }
     
     )
}


document.addEventListener('keypress',
     function (event){
          console.log(event);
          console.log(event.key);
          makesound(event.key);
          makeanimation(event.key);
     }
);
function makesound(key)
{
    switch(key)
    {
        case 's':
            var tom1 = new Audio('Assets/Music/tom-1.mp3');
            tom1.play();
        break;
        case 'r':
            var tom1 = new Audio('Assets/Music/tom-2.mp3');
            tom1.play();
        break;
        case 'g':
            var tom1 = new Audio('Assets/Music/tom-3.mp3');
            tom1.play();
        break;
        case 'm':
            var tom1 = new Audio('Assets/Music/tom-4.mp3');
            tom1.play();
        break;
        case 'p':
            var tom1 = new Audio('Assets/Music/snare.mp3');
            tom1.play();
        break;
        case 'd':
            var tom1 = new Audio('Assets/Music/crash.mp3');
            tom1.play();
        break;
        case 'n':
            var tom1 = new Audio('Assets/Music/kick-bass.mp3');
            tom1.play();
        break;
    }
}

function makeanimation(currentkey){
        var activeButton = document.querySelector("."+currentkey);
        activeButton.classList.add("pressed");

        setTimeout(
            function(){
                activeButton.classList.remove("pressed");
            }   
        ,100);
}

