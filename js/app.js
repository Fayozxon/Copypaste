'use strict';
// Theme Switcher
function changeTheme(matches) {
    if (matches) {
        document.body.classList.add('dark');
        themeSwitcherBtn.classList.add('active');
      } else {
        document.body.classList.remove('dark');
        themeSwitcherBtn.classList.remove('active');
      }
}

let themeSwitcherBtn = document.getElementById('themeSwitcherBtn');
themeSwitcherBtn.addEventListener('click', (e) => {
    document.body.classList.toggle('dark');
    themeSwitcherBtn.classList.toggle('active');
});

changeTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',({ matches }) => {
  changeTheme(matches);
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


// Copy Function
function copyIt(txtInput) {
    txtInput.select();
    txtInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txtInput.value);
    // txtInput.select();
    // txtInput.setSelectionRange(0, 99999);
    // txtInput.execCommand('copy');
}

// Copy Text
document.querySelector('#copyBtn').addEventListener('click', async () => {
    try {
        await copyIt(document.querySelector('#copyBoxText'));
    } catch (err) {
        alert(`Xatolik: ${err}`);
    }
});

// Sharing Scripts
const shareData = {
    title: 'COPY1PASTE',
    text: 'So\'z va gaplarni, turli usulda, istalgancha takrorlang!',
    url: 'https://copy1paste.netlify.app'
}

const shareBtn = document.querySelector('#shareBtn');

shareBtn.addEventListener('click', async () => {
    try {
        await navigator.share(shareData);
    } catch (err) {
        alert(`Error: ${err}`);
    }
});