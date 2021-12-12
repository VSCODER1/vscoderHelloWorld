let h;
let e;
let l;
let l2;
let o;
let w;
let o2;
let r;
let l3;
let d;
let space;
let exclamationMark;
let comma;

function theLetterH() {
    if(h === undefined) {
        return 'H';
    };
}

function theLetterE() {
    if(e === undefined) {
        return 'e';
    };
}

function theLetterL() {
    if(l === undefined) {
        return 'l';
    };
}

function theSecondLetterL() {
    if(l2 === undefined) {
        return 'l';
    };
}

function theLetterO() {
    if(o === undefined) {
        return 'o';
    };
}

function theLetterW() {
    if(w === undefined) {
        return 'W';
    };
}

function theSecondLetterO() {
    if(o2 === undefined) {
        return 'o';
    };
}

function theLetterR() {
    if(r === undefined) {
        return 'r';
    };
}

function theThridLetterL() {
    if(l3 === undefined) {
        return 'l';
    };
}

function theLetterD() {
    if(d === undefined) {
        return 'd';
    };
}

function theExclamationMark() {
    if(exclamationMark === undefined) {
        return '!';
    };
}

function theComma() {
    if(comma === undefined) {
        return ',';
    };
}

function sayHelloWorld(decide) {
    if(decide === true || decide === "yes" || decide === "mhm" || decide === "yuh") {
        let helloWorld = [
            h = theLetterH(),
            e = theLetterE(),
            l = theLetterL(),
            l2 = theSecondLetterL(),
            o = theLetterO(),
            comma = theComma(),
            [
                w = theLetterW(),
                o2 = theSecondLetterO(),
                r = theLetterR(),
                l3 = theThridLetterL(),
                d = theLetterD(),
                exclamationMark = theExclamationMark(),
            ]
        ]
        const [hLetter, eLetter, lLetter, secondLetterL, oLetter, commaMark, [wLetter, secondLetterO, rLetter, thirdLetterL, dLetter, exclamati0nMark]] = helloWorld;
        if(space === undefined) {
            space = "";
        };
        if(space === "") {
            space = " ";
        };
        window.console.log(hLetter + eLetter + lLetter + secondLetterL + oLetter + commaMark + space + wLetter + secondLetterO + rLetter + thirdLetterL + dLetter + exclamati0nMark);
    }
}

sayHelloWorld(true);