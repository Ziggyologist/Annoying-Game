let currentScore=0;
let playing=false;
let shape1;
let shape2;
const matchButton=document.getElementById("match");

const shapes = [
    {color: "#C71585", width: 250, height:169},
    {color: "#C71585", width: 220, height:166},
    {color: "#FF1493", width: 300, height:169},
    {color: "#FF1493", width: 190, height:200},
    {color: "#FFE4B5", width: 210, height:210},
    {color: "#FFE4B5", width: 240, height:145},
    {color: "#FF1493", width: 280, height:200},
    {color: "#C71585", width: 244, height:170},
    {color: "#E6E6FA", width: 200, height:240},
    {color: "#E6E6FA", width: 250, height:175},
]

const selectRandomShape= () => {
    const randomNum = Math.floor(Math.random()*shapes.length);
    const RandomSelection = shapes[randomNum];
    return RandomSelection;
}

const repeatRandomShape= () => {
    setInterval(()=> {
        matchButton.disabled=false;
        shape1= selectRandomShape();
        shape2= selectRandomShape();

        const shape1Styles =    `width:${shape1.width+"px"};
                                background:${shape1.color};
                                height:${shape1.height+"px"};`

        const shape2Styles =    `width:${shape2.width+"px"};
                                background:${shape2.color};
                                height:${shape2.height+"px"};`

        document.getElementById("shape1").style.cssText=shape1Styles;
        document.getElementById("shape2").style.cssText=shape2Styles;

    }, 1000);
};
// start game
document.getElementById("play").onclick= () => {
    playing= true;
//disable play button when playing
document.getElementById("play").disabled=true;
    repeatRandomShape();
}
//compare
document.getElementById("match").onclick=()=> {
    matchButton.disabled=true;
    if(playing) {
        if(Object.is(shape1,shape2)) {
            currentScore++;
            document.getElementById("score").innerHTML=currentScore;
        } else {
            currentScore--;
            document.getElementById("score").innerHTML=currentScore;
        }
    };
    if(currentScore==5) {
        alert("This game was super easy, barely an inconvenience");
}


}




// TEMPLATE LITERALS example
// var name="teo";
// console.log(`hello, my dear ${name}`);
// var otherName=`jksadsajaskldasdjkasdjasd
// iasdsadsdksdlsdasdosdiaksdaslsdksdsdlskdldkd
// asd
// fassds`
// console.log(`Practic randurile de mai sus is separate direct, fara ca eu sa fac
// ceva anume pe alt rand ${otherName}`);





