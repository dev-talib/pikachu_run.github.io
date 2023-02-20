var audio_bg = new Audio('game-sound/bg_score.mp3');
    var audio_jump = new Audio('game-sound/quick-jump.wav');
    var audio_blast = new Audio('game-sound/blast.wav');
    const parentBody = document.getElementById("game");
    const bomb = document.getElementById("bomb");
    const restart_btn = document.getElementById("restart_btn");
    restart_btn.style.display = "none";
    let score = 0;
    let state = "running";
    audio_bg.play();

    function restart(){
      window.location.reload();
    }
    
    function jump() {
      if(character.classList != "jump-animation"){
        audio_jump.play();
        character.classList.add("jump-animation");
      }
      setTimeout(function(){
        character.classList.remove("jump-animation"); 
      },500);
    }

    document.onkeydown = function (e) {
      jump();
    };


    document.ontouchstart = function (e) {
      jump();
    };

  setInterval(()=>{
   const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('bottom')); 
   const blockLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue('left'));
   const pikachu =  document.getElementById("pikachu");

   if(blockLeft < 300 && blockLeft > 200 && characterTop < 200){
       state = "stopped";
       audio_bg.pause();
       audio_blast.play();
       bomb.style.display ="none";
       pikachu.src="img/blast.gif";
       setTimeout(function(){
        pikachu.src="img/rip.png";
      },2000);

      setTimeout(function(){
        restart_btn.style.display = "block";
      },2500);
   }
   
  }, 50);

  setInterval(()=>{
    if(state === "running"){
     score = score + 1;
     document.getElementById("score").innerHTML = score;
    } 
  }, 1000)