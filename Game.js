AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },
  },
  inite:function(){
    var duration=120;
    const timerE1=document.querySelector("#timer");
    this.startTimer(duration,timerE1)
  },

  update:function () {
    this.isCollided(this.data.elementId);
  },
  startTimer:function(duration,timerE1){
    var minutes;
    var seconds;
    setInterval(()=>{
      if(duration >= 0){
        minutes=parseInt(duration/60);
        seconds-parseInt(duration%60);
      if(minutes < 10){
        minutes="0"+minutes;
      }
      if(seconds < 10){
        seconds="0"+seconds;
      }
      timerE1.setAttribute("text",{
        value:minutes+":"+seconds,
      });
      duration-=1
      }
    },1000)
  },
  isCollided: function (elementId) {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#ring")) {
        console.log(elementId + " collision");
      } else if (elementId.includes("#hurdle")) {
        console.log("bird collision");
      }
    });
  },
});
