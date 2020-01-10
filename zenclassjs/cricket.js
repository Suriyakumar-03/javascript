 
        var arr1=[]
        var strike1Score=[]
        var over1=[]
        var over2=[]
        var over3=[]
        var score=0
        var count=0
           function strike1(){
            if(count<18){
             let b = Math.floor((Math.random()*7))
             arr1.push(b)
             score=score+b
             console.log(arr1) 
              count+=1
            document.getElementById("strike1runs")=b;
            document.getElementById("runs1")=score;

           }
            else if(count<=6){
              over1.push(score);
             }
          else if((count>6)&&count<=12){
            over2.push(score);
          }
          else if((count>12)&&count<=18){
            over3.push(score);
          }
localStorage.strike1=over1;
localStorage.strike2=over2;
localStorage.strike3=over3;
        }
 
        var arr2=[]
        var strike2Score=[]
        var over4=[]
        var over5=[]
        var over6=[]
        var score1=0
        var count1=0
           function strike2(){
            if(count2<18){
             let c = Math.floor((Math.random()*7))
             arr2.push(c)
             score1=score1+c
             console.log(arr2) 
              count1+=1
            document.getElementById("strike1runs")=c;
            document.getElementById("runs1")=score1;

           }
            else if(count1<=6){
              over4.push(score1);
             }
          else if((count1>6)&&count1<=12){
            over5.push(score);
          }
          else if((count1>12)&&count1<=18){
            over6.push(score1);
          }
localStorage.strike1=over4;
localStorage.strike2=over5;
localStorage.strike3=over6;
        }

<button type="button" id="strike1runs" onclick="strike1()">team1score</button>