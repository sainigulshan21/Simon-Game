let press = false;
let level = 0;
let userseq = [];
let gameseq = [];
var heigest = 0

document.addEventListener("dblclick", function () {
    if (press == false) {

        let h2 = this.querySelector("h2");
        level++;
        h2.innerText = `Level ${level}`;
        press = true;
        gameflash();
    }
})

let buttons = document.querySelectorAll(".box div")
for (ele of buttons) {
    ele.addEventListener("click", function (event) {
        setTimeout(function () {
            event.target.classList.toggle("flash2")
        }, 0)
        setTimeout(function () {
            event.target.classList.toggle("flash2")
        }, 200)
        userseq.push(event.target.classList.value)
        console.log("user is " + userseq)

        for (let i = 0; i < userseq.length; i++) {
            if (userseq[i] != gameseq[i]) {
                let h2 = document.querySelector("h2")
                h2.innerText = `Game Over! Your score is ${level - 1} -----------Dblclick anywhere to start again`;
                userseq = [];
                gameseq = [];
                press = false;
                if(heigest<level){heigest=level-1}
                let h4 = document.querySelector("h4")
                h4.innerText = `Heighest Score is ${heigest}`;
                level = 0;
                break;
            }

            if (userseq.length == gameseq.length) {
                let h2 = document.querySelector("h2")

                level++;
                h2.innerText = `Level ${level}`
                gameflash();
                userseq = [];

            }
        }


    })
}

function gameflash() {
    let colors = ["yellow", "red", "green", "blue"]
    let indx = Math.floor(Math.random() * 3)
    let rdcolor = colors[indx];
    let randomc = document.querySelector(`.${rdcolor}`);
    gameseq.push(rdcolor)
    setTimeout(function () {
        randomc.classList.toggle("flash")
    }, 250)
    setTimeout(function () {
        randomc.classList.toggle("flash")
    }, 600)
    console.log("game is " + gameseq)

}

let icon = document.querySelector(".fa-solid");
icon.addEventListener("click",function(){
    this.classList.toggle("ico");
     let b = document.querySelector(".c")
     b.classList.toggle("opa")
    //  console.log("hlo")
});
