$(function(){
  
    function drawBottom(){

      

        var PMcanvas01 = $(".PMcanvas")[0];
        var cans=PMcanvas01.getContext("2d");
        
        //画圆
        cans.beginPath();
        cans.arc(128,128,110,-Math.PI*1.25,Math.PI*0.25);
        cans.strokeStyle = '#012d57';
        cans.lineWidth = 8;
        cans.stroke();
        cans.closePath();
        cans.beginPath();
        cans.arc(128,128,99,-Math.PI*1.25,Math.PI*0.25);
        cans.strokeStyle = '#012d57';
        cans.lineWidth = 4;
        cans.stroke();
        cans.closePath();
    }

    
    var rander = function(){
        var PMcanvas01 = $(".PMcanvas-color")[0];
        var cans=PMcanvas01.getContext("2d");

        if(tmpAngle >= endAngle){
          return;
        }else if(tmpAngle + 0.01 > endAngle){
          tmpAngle = endAngle;
        }else{
          tmpAngle += 0.01;
        }
        cans.clearRect(0, 0, 234, 234);


        //画圆
        cans.beginPath();
        cans.arc(128,128,110,-Math.PI*1.25,tmpAngle );
        cans.strokeStyle = '#0488e2';
        cans.lineWidth = 8;
        cans.stroke();
        cans.closePath();
        cans.beginPath();
        cans.arc(128,128,99,-Math.PI*1.25,tmpAngle );
        cans.strokeStyle = '#0488e2';
        cans.lineWidth = 4;
        cans.stroke();
        cans.closePath();


        window.requestAnimationFrame = window.requestAnimationFrame||function (fn) {return setTimeout(fn,1000/60)}
    window.cancelAnimationFrame = window.cancelAnimationFrame ||clearTimeout;

    window.requestAnimationFrame(rander);
      };
    
      //风力
      var wind_spd = 7,noise = 3,PM25=60,PM10=60,tmp = 26,hum = 27;

      $(".top-left span").text(tmp);
      $(".top-right span").text(hum);
      $(".wind-title span").text(wind_spd);
      $(".noise-title span").text(noise);
      $(".middle-num span").text(PM25);
      $(".middle-bottom span").text(PM10);
      drawFeng(wind_spd);
      drawNoise(noise);
      
      function drawFeng(wind_spd){
        for(var i = $(".wind li").length-1; i>$(".wind li").length-1-wind_spd; i--){
            $(".wind li").eq(i).addClass("active");
            
        }
      }
      function drawNoise(noise){
        for(var i = $(".noise li").length-1; i>$(".noise li").length-1 - noise; i--){
            $(".noise li").eq(i).addClass("active");
        }  
      }

    var endAngle = PM25*Math.PI*1.5 /500 - Math.PI*1.25; //最终PM值
    var tmpAngle = -Math.PI*1.25; //动画中PM值
 
    drawBottom();

    rander();
   
    

    


})