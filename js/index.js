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

        requestAnimationFrame(rander);


      };
    
      //风力
      var wind_spd,noise,PM25=60,PM10=60,tmp,hum;
    $.ajax({
        url:"https://free-api.heweather.com/s6/weather/now?location=116.40,39.9&key=e4495549270f4719b5cf50a6c94c0b57",
        methon:"get",
        success:function(res){
            noise = 5;
            tmp = res.HeWeather6[0].now.tmp;
            hum = res.HeWeather6[0].now.hum;
            wind_spd = res.HeWeather6[0].now.wind_spd;
            $(".top-left span").text(tmp);
            $(".top-right span").text(hum);
            $(".wind-title span").text(wind_spd);
            $(".noise-title span").text(noise);
            $(".middle-num span").text(PM25);
            $(".middle-bottom span").text(PM10);
            drawFeng(wind_spd);
            drawNoise(noise);
        }
    })
    // $.ajax({
    //     url:"https://free-api.heweather.com/s6/air/now?location=116.40,39.9&key=e4495549270f4719b5cf50a6c94c0b57",
    //     success:function(res){
    //         PM25 = 5;
    //         PM10 = 
    //         wind_spd = res.HeWeather6[0].now.wind_spd;
    //         $(".wind-title span").text(wind_spd);
    //         $(".noise-title span").text(noise);
    //         drawFeng(wind_spd);
    //         drawNoise(noise);
    //     }
    // })

      
      function drawFeng(wind_spd){
        for(let i = $(".wind li").length-1;i>$(".wind li").length-1 - wind_spd;i--){
            $(".wind li").eq(i).addClass("active");
        }
      }
      function drawNoise(noise){
        for(let i = $(".noise li").length-1;i>$(".noise li").length-1 - noise;i--){
            console.log(i)
            $(".noise li").eq(i).addClass("active");
        }  
      }

    var endAngle = PM25*Math.PI*1.5 /500 - Math.PI*1.25; //最终PM值
    var tmpAngle = -Math.PI*1.25; //动画中PM值
 
    drawBottom();

    rander();
   
    

    


})