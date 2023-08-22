let score =JSON.parse(localStorage.getItem
    ('score')) || {
        wins:0,
        losses:0,
        ties:0,
    };
updateScoreElements();
   
////start play game/////
          
    function playGame(playerMove){  
        const computerMove =pickComputerMove();            
        let = result='';       
        if(playerMove === 'Sniper' &&  computerMove ==='Sniper'){
            sniperTie();           
        }else if(playerMove === 'Sniper' && computerMove ==='grunt soldier' || playerMove === 'grunt soldier' && computerMove ==='Sniper'){
            sniperWinVsGrunt();
        }else if(playerMove === 'Sniper' && computerMove ==='soldier miner' || playerMove === 'soldier miner' && computerMove ==='Sniper'){
            sniperWinVsMiner();
        }else if(playerMove === 'Sniper' && computerMove ==='Bazooka soldier' || playerMove === 'Bazooka soldier' && computerMove ==='Sniper'){
            sniperWinVsBazooka();  
        }else if(playerMove === 'Sniper' && computerMove ==='tank' || playerMove === 'tank' && computerMove ==='Sniper'){
                tankWinVsSniper();        
        }else if(playerMove === 'Sniper' && computerMove ==='Attack Dog' || playerMove === 'Attack Dog' && computerMove ==='Sniper'){
                dogWinVsSniper();                    
        }else if (playerMove === 'Attack Dog' && computerMove ==='Attack Dog'){   
            dogTie();
        }else if(playerMove === 'Attack Dog' && computerMove ==='grunt soldier' || playerMove === 'grunt soldier' && computerMove ==='Attack Dog'){
            dogWinVsGrunt();           
        }else if(playerMove === 'Attack Dog' && computerMove ==='soldier miner' || playerMove === 'soldier miner' && computerMove ==='Attack Dog'){
            dogWinVsMiner();
        }else if(playerMove === 'Bazooka soldier' && computerMove ==='Bazooka soldier'){
            bazookaTie();
        }else if(playerMove === 'Bazooka soldier' && computerMove ==='tank' || playerMove === 'tank' && computerMove ==='Bazooka soldier'){
            bazookaWinVsTank();
        }else if(playerMove === 'Bazooka soldier' && computerMove ==='soldier miner' || playerMove === 'soldier miner' && computerMove ==='Bazooka soldier'){
            bazookaWinVsMiner();       
        }else if(playerMove === 'Bazooka soldier' && computerMove ==='Attack Dog' || playerMove === 'Attack Dog' && computerMove ==='Bazooka soldier'){
            dogWinVsBazooka();                    
        }else if(playerMove === 'tank' && computerMove ==='tank'){
            tankTie();
        }else if(playerMove === 'tank' && computerMove ==='grunt soldier' || playerMove === 'grunt soldier' && computerMove ==='tank'){
            tankWinVsGrunt();
        }else if(playerMove === 'tank' && computerMove ==='Attack Dog' || playerMove === 'Attack Dog' && computerMove ==='tank'){
            tankWinVsDog();
        }else if(playerMove === 'tank' && computerMove ==='soldier miner' || playerMove === 'soldier miner' && computerMove ==='tank'){
            minerWinVsTank();                   
        }else if(playerMove === 'soldier miner' && computerMove ==='soldier miner'){
            minerTie();                    
        }else if(playerMove === 'grunt soldier' && computerMove ==='grunt soldier'){
            gruntTie();
        }else if(playerMove === 'grunt soldier' && computerMove ==='soldier miner' || playerMove === 'soldier miner' && computerMove ==='grunt soldier'){
            gruntWinVsMiner();
        }else if(playerMove === 'grunt soldier' && computerMove ==='Bazooka soldier' || playerMove === 'Bazooka soldier' && computerMove ==='grunt soldier'){
            gruntWinVsBazooka();
        }
        
        /* compute Win*/ 
        function youWin(){
            if (score.wins >=5) {
                openPopupWin();
            }else if(score.losses >=5){
                openPopupLose();
            }
        } 
        youWin();
        
       
        /* pick which video to play */
    
        if(playerMove=== 'tank'){ 
            if( computerMove ===  'grunt soldier'  || 
                computerMove ===  'Sniper'         ||
                computerMove ===  'Attack Dog'){  
                    result='You win';
                }else if(computerMove=== 'soldier miner'||
                          computerMove ===  'Bazooka soldier'){
                    result='You Loose';          
    
                }else if(computerMove==='tank'){
                    result='Tie'; 
                }  
        }else if(playerMove=== 'soldier miner'){
                if( computerMove ===  'grunt soldier'  ||
                    computerMove ===  'tank'           ||
                    computerMove ===  'Attack Dog'){
                result='You win';   
                }else if(computerMove==='Sniper' ||
                        computerMove ===  'Bazooka soldier'){
                result='You Loose';   
                }else if(computerMove=== 'soldier miner'){
                result='Tie'; 
                }                
        }else if (playerMove ==='grunt soldier'){
                if( computerMove ===  'soldier miner'  ||
                    computerMove ===  'Bazooka soldier'){
                result='You win';
                }else if(computerMove === 'tank' ||
                    computerMove ===  'Sniper'  ||
                    computerMove ===  'Attack Dog' ){ 
                result = 'You Loose'; 
    
                }else if(computerMove==='grunt soldier'){
                    result='Tie'; 
                }  
        }else if (playerMove ==='Sniper'){
                if( computerMove ===  'grunt soldier'  ||
                    computerMove ===  'Bazooka soldier'  ||
                    computerMove ===  'soldier miner'){
                result='You win';
                }else if(computerMove === 'tank' ||                    
                    computerMove ===  'Attack Dog' ){ 
                result = 'You Loose';     
                }else if(computerMove==='Sniper'){
                    result='Tie'; 
                }  
        }else if (playerMove ==='Attack Dog'){
                if( computerMove ===  'grunt soldier'  ||
                    computerMove ===  'Sniper'  || 
                    computerMove ===  'Bazooka soldier'){
                result='You win';
                }else if(computerMove === 'soldier miner' ||
                    computerMove ===  'tank' ){ 
                result = 'You Loose';     
                }else if(computerMove==='Attack Dog'){
                    result='Tie'; 
                }                  
        }else if (playerMove ==='Bazooka soldier'){
                if( computerMove ===  'tank'  ||
                    computerMove ===  'grunt soldier'  ||
                    computerMove ===  'soldier miner'){
                result='You win';
                }else if(computerMove === 'Sniper' ||
                    computerMove ===  'Attack Dog' ){ 
                result = 'You Loose';     
                }else if(computerMove==='Bazooka soldier'){
                    result='Tie'; 
                }  
         }        
       
        if(result === 'You win'){
            score.wins  += 1;    
        }else if (result === 'You Loose'){
            score.losses += 1;
        }else if(result === 'Tie'){
            score.ties += 1;
        }

        //local storarge//
        
       localStorage.setItem('score', JSON.stringify(score));       
       updateScoreElements();   
       document.querySelector('.js-result').innerHTML= result;
       document.querySelector('.js-moves').innerHTML= `You PIcked ${playerMove} VS Computer Picked  ${computerMove}`         
    }

 /** show result  at the side*/
    
    function updateScoreElements(){
        
        document.querySelector('.js-score')
        .innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties} `;    
    }

    /////computer picks  cards///
     
        function pickComputerMove(){
        const randomNunmber=Math.random(); 
        let computerMove='';
        
        if(randomNunmber >= 0 && randomNunmber < 1/6 )
        {
        computerMove ='grunt soldier';
        } 
        else if (randomNunmber >= 1/6 && randomNunmber < 2/6 )
        {
            computerMove ='soldier miner';
        }
        else if (randomNunmber >= 2/6 && randomNunmber < 3/6 )
        {
            computerMove ='Sniper';
        }
        else if (randomNunmber >= 3/6 && randomNunmber < 4/6 )
        {
            computerMove ='Bazooka soldier';
        }
        else if (randomNunmber >= 4/6 && randomNunmber < 5/6 )
        {
            computerMove ='Attack Dog';
        }
                else if (randomNunmber >= 5/6 && randomNunmber < 1 )
        {
            computerMove ='tank';
        }
    
        return computerMove ;
    }
    
    // onclick listner//
    
    document.querySelector('.soldier-grunt')
    .addEventListener('click', () => {
        playGame('grunt soldier');
    });
    
    document.querySelector('.soldier-miner')
    .addEventListener('click', () => {
        playGame('soldier miner');
    });
    
    document.querySelector('.Tank')
    .addEventListener('click', () => {
        playGame('tank');
    });   
    
    document.querySelector('.soldier-sniper')
    .addEventListener('click', () => {
        playGame('Sniper');
    });

    document.querySelector('.attack-dog')
    .addEventListener('click', () => {
        playGame('Attack Dog');
    });

    document.querySelector('.soldier-bazooka')
    .addEventListener('click', () => {
        playGame('Bazooka soldier');
    });

    //resset function//
    document.querySelector('.reset-button')
    .addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElements();        
    });
    
    // function for video change/////
    
    function dogWinVsSniper(){                
        const video = document.getElementById('change-video');
        video.src = 'objects/dogwinvssniper.mp4';
    }
    function tankWinVsSniper(){
        const video = document.getElementById('change-video');
        video.src = 'objects/tankwinvssniper.mp4';
    }
    function sniperTie(){
        const video = document.getElementById('change-video');
        video.src = 'objects/snipertie.mp4';
    }
    function sniperWinVsBazooka(){
        const video = document.getElementById('change-video');
        video.src = 'objects/sniperwinvsbazooka.mp4';
    }
    function sniperWinVsGrunt(){
        const video = document.getElementById('change-video');
        video.src ='objects/sniperwinvsgrunt.mp4';
    }
    function sniperWinVsMiner(){
        const video = document.getElementById('change-video');
        video.src = 'objects/sniperwinvsminer.mp4';
    }
    function dogWinVsGrunt(){
        const video = document.getElementById('change-video');
        video.src = 'objects/dogwinvsgrunt.mp4';
    }
    function tankWinVsDog(){
        const video = document.getElementById('change-video');
        video.src = 'objects/tankwinvsdog.mp4';
    }
    function tankWinVsGrunt(){
        const video = document.getElementById('change-video');
        video.src = 'objects/tankwinvsgrunt.mp4';
    }    
    function minerWinVsTank(){
        const video = document.getElementById('change-video');
        video.src = 'objects/minerwinvstank.mp4';
    }
    function gruntWinVsMiner(){
        const video = document.getElementById('change-video');
        video.src = 'objects/gruntwinvsminer.mp4';
    }
    function tankTie(){
        const video = document.getElementById('change-video');
        video.src = 'objects/tanktie.mp4';
    }
    function bazookaWinVsTank(){
        const video = document.getElementById('change-video');
        video.src = 'objects/bazookawinvstank.mp4';
    }

    function gruntTie(){
        const video = document.getElementById('change-video');
        video.src = 'objects/grunttie.mp4';
    }
    function gruntWinVsBazooka(){
        const video = document.getElementById('change-video');
        video.src = 'objects/gruntwinvsbazooka.mp4';
    }
    function dogTie(){
        const video = document.getElementById('change-video');
        video.src = 'objects/dogtie.mp4';
    }
    function dogWinVsMiner(){
        const video = document.getElementById('change-video');
        video.src = 'objects/dogwinvsminer.mp4';
    }
    function dogWinVsBazooka(){
        const video = document.getElementById('change-video');
        video.src = 'objects/dogwinvsbazooka.mp4';
    }
    function minerTie(){
        const video = document.getElementById('change-video');
        video.src = 'objects/minertie.mp4';
    }
    function bazookaWinVsMiner(){
        const video = document.getElementById('change-video');
        video.src = 'objects/bazookawinvsminer.mp4';
    }    
    function bazookaTie(){
        const video = document.getElementById('change-video');
        video.src = 'objects/bazookatie.mp4';
    }

/////pop up change video//
    let popup = document.getElementById("pop-up-div");
    function openPopup(){
        popup.classList.add("open-pop-up-div"); 
    }
    function closepopup(){
        popup.classList.remove("open-pop-up-div"); 
    }    

/////pop up for Win//

    let popupWin = document.getElementById("pop-up-div-win");
    function openPopupWin(){
        popupWin.classList.add("open-pop-up-div-win"); 
    }
    function closepopupWin(){
        popupWin.classList.remove("open-pop-up-div-win");      
    }
    
//   popup for lose
let popupLose = document.getElementById("pop-up-lose");
    function openPopupLose(){
        popupLose.classList.add("open-pop-up-lose"); 
    }
    function closepopupLose(){
        popupLose.classList.remove("open-pop-up-lose"); 
    }

