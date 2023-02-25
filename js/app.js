'use strict';
// Theme Switcher
let themeSwitcherBtn = document.getElementById('themeSwitcherBtn');
themeSwitcherBtn.addEventListener('click', (e) => {
    document.body.classList.toggle('dark');
    themeSwitcherBtn.classList.toggle('active');
});

// Indicating Element Scripts
let tryItBtns = document.querySelectorAll('.try-it-btn');
for (let i = 0; i < tryItBtns.length; i++) {
    tryItBtns[i].addEventListener('click', () => {
        let box = document.querySelector('.input-box');
        box.classList.add('transform-animation');
        setTimeout(() => {
            box.classList.remove('transform-animation');
        }, 1000);
    });
}
let guideBtn = document.querySelector('.guide-btn');
guideBtn.addEventListener('click', () => {
    let box = document.querySelector('.guide-frame');
        box.classList.add('transform-animation');
        setTimeout(() => {
            box.classList.remove('transform-animation');
        }, 1000);
});

// Copy Function
function copyIt(txtInput) {
    txtInput.select();
    txtInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txtInput.value);
}

// Playground Scripts
let textForIteration = document.getElementById('textForIteration'),
    iterationNumber = document.getElementById('iterationNumber'),

    numBtns = document.getElementsByClassName('num-btn');
    
// Iteration Number Scripts
function setNum(num) {
    iterationNumber.value = num;
}

let nums = [10,100,1000];
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', () => {
        setNum(nums[i]);
    });
}

// Settings Scripts
let addNewLine = true,
    addNumAfter = true,
    addNumBefore = false;

document.getElementById('addNewLineToggle').addEventListener('click', () => {
    if (addNewLine) {
        addNewLine = false;
    } else {
        addNewLine = true;
    }
});
document.getElementById('addNumAfterToggle').addEventListener('click', () => {
    if (addNumAfter) {
        addNumAfter = false;
    } else {
        addNumAfter = true;
    }
});
document.getElementById('addNumBeforeToggle').addEventListener('click', () => {
    if (addNumBefore) {
        addNumBefore = false;
    } else {
        addNumBefore = true;
    }
});

// Text Iteration Scripts
function iterateText(txt, num, nextText) {
    let res = '',
        newLine = '';

    if (addNewLine) {
        newLine = '\n';
    }
    if (addNumAfter && addNumBefore) {
        for (let i = 1; i <= num; i++) {
            res += `${i} ${txt} ${i}${nextText} ${newLine}`;
        }
        return res;
    } else if(addNumAfter) {
        for (let i = 1; i <= num; i++) {
            res += `${txt} ${i}${nextText} ${newLine}`;
        }
        return res;
    } else if (addNumBefore) {
        for (let i = 1; i <= num; i++) {
            res += `${i} ${txt} ${nextText} ${newLine}`;
        }
        return res;
    } else {
        for (let i = 1; i <= num; i++) {
            res += `${txt} ${nextText} ${newLine}`;
        }
    }

    return res;
}

// Checking Inputs
function checkInputs() {
    let txt = textForIteration.value,
        num = iterationNumber.value,
        nextText = document.querySelector('#nextTextForIteration').value;

    if ((!txt || num == 0) && !(typeof num === 'number') || !(num <= 10000)) {
        alert('Maydonlarni to\'g\'ri to\'ldirilganiga ishonch hosil qiling!');
        return;
    }

    document.querySelector('#copyBoxText').textContent = iterateText(txt, num, nextText);

    document.querySelector('#copyBoxTitle').textContent = `${iterationNumber.value} marta "${textForIteration.value}"`;
    iterateText();

    textForIteration.value = '';
}

// Iteration
let iterateBtn = document.getElementById('iterateBtn');
iterateBtn.addEventListener('click', checkInputs);

// Copy Text
document.querySelector('#copyBtn').addEventListener('click', () => {
    copyIt(document.querySelector('#copyBoxText'));
});

// Share Button Scripts
let shareLink = document.createElement('input');
shareLink.value = 'https://copy1paste.netlify.app';

document.querySelector('#shareBtn').addEventListener('click', () => {
    copyIt(shareLink);
});