DOM = {
    bu: document.getElementById("go"),
    rtext: document.getElementById("rtext"),
    rtext2: document.getElementById("rtext2"),
    rtext3: document.getElementById("rtext3"),
}
for (let i=1 ; i<=7 ;i++) {
    DOM["i".concat(i)] = document.getElementById("i".concat(i))
    DOM["i".concat(i)].addEventListener("input",function(){
        DOM["i".concat(i)].value = DOM["i".concat(i)].value.substr(DOM["i".concat(i)].value.length-1,1)
        if (!(DOM["i".concat(i)].value=="")){
            DOM["i".concat((i+1)%7 || 7)].focus()
        }
    })

}

function getNumber() {
    str = ""
    for (let i=1 ; i<=7 ;i++) {
        let a = DOM["i".concat(i)].value 
        str = str.concat(a)
    }
    return Number(str)
}
function getDigit(i){
    return Number(DOM["i".concat(i)].value)
}

let wordKeys = [false,
    [//1
        "am now going to",//5
        "will now",//1
        "am about to",//2
        "am gonna",//3
        "am going to"//4
    ],
    [//2
        "broadcast",//3
        "send",//1
        "transfer",//2
    ],
    [//3
        "take your numbers and",//0
        "your number",//1
        "your numbers",//2
        "these digits",//3
        "take your number and",//4
    ],
    [//4
        "to Steve.",//0
        "to my friend, Steve.",//1
        "to my friend.",//2
        "to my friend, Stephen.",//3
        "to Stephen.",//4
    ],
    [//5
        "Okay,",
        "Alright,",
        "Steve,",
    ],
    [//6
        "you ready",
        "you good"
    ],
    [//7
        "?",
        "bro?",
        "dude?",
        "man?",
    ],
    [//8
        "Marvelous.",
        "Fantastic.",
        "Wonderful.",
        "Spectacular.",
        "Remarkable.",
        "Terrific.",
        "Splendid.",
        "Great.",
        "Perfect.",
        "Phenomenal.",
    ],
    [//9
        "I am",
        "I'm",
    ],
    [//10
        "emitting",
        "sending",
        "releasing",
    ],
    [//11
        "the signal",
        "the number",
    ],

]

DOM.bu.addEventListener("click",function(){
    console.log(getNumber())

    let prefixes = []
    let sentence1 = ["I"]
    let suffixes = []
    let sentence2 = []

    //word 1
    let d1 = getDigit(1)
    let d2 = getDigit(2)
    let d3 = getDigit(3)
    let d4 = getDigit(4)
    let d5 = getDigit(5)
    let d6 = getDigit(6)
    let d7 = getDigit(7)

    if (d1 > 5 || d1 ==0) {
        prefixes.push("okay")
    }
    sentence1.push(wordKeys[1][d1%5])

    let them =""
    if ((d3 % 5 || 5)>=4){
        sentence1.push(wordKeys[3][d3%5])
        them = ((d3%5==4 ) && " it") || " them"
    }


    if (d2 >3){
        prefixes.push("alright")
    }
    sentence1.push(wordKeys[2][d2%3].concat(them) )
    
    
    if (d3 >5 || d3==0){
        prefixes.push("so")
    }
    if ((d3 % 5 || 5)<4){
        sentence1.push(wordKeys[3][d3%5])
    }
    
    if (d4 > 5  ||d4==0){
        sentence1.push("across the room")
    }
    sentence1.push(wordKeys[4][d4%5])
    if (d2 >6){
        sentence1.push("*sigh*")
    }

    sentence1.push(wordKeys[5][(Math.ceil(d5/3)-1)])


    
    if (d2==0){
        sentence1.push(wordKeys[6][1])
    }else{
        sentence1.push(wordKeys[6][0])
    }

    sentence1.push(wordKeys[7][d5 && (Math.floor(d5%3) + 1)])


    DOM.rtext.innerHTML =  prefixes.join(", ").concat(", ").concat(
        sentence1.join(" ")
    )

    DOM.rtext2.innerHTML = (["Sure.", "Totally.","You bet."])[Math.floor(Math.random()*3)]

    sentence2.push(wordKeys[8][d6%10])
    if (d7 >5 || 0) {
        sentence2.push(wordKeys[9][1])
    }else {
        sentence2.push(wordKeys[9][0])
    }

    if (d7==1 || d7==2 || d7==6 || d7==7) {
        sentence2.push(wordKeys[10][0])
        if (d7==1 || d7==6){
            sentence2.push(wordKeys[11][0])
        }else if (d7==2 || d7==7){
            sentence2.push(wordKeys[11][1])
        }
    }else if (d7==3 || d7==4 || d7==8 || d7==9) {
        sentence2.push(wordKeys[10][1])
        if (d7==3|| d7==8){
            sentence2.push(wordKeys[11][0])
        }else if (d7==4|| d7==9){
            sentence2.push(wordKeys[11][1])   
        }
    }else{
        sentence2.push(wordKeys[10][2])
        if (d7==5){
            sentence2.push(wordKeys[11][0])
        }else if (d7==0){
            sentence2.push(wordKeys[11][1])

        }
    }
    sentence2.push(" now.")
    DOM.rtext3.innerHTML =  sentence2.join(" ")
})