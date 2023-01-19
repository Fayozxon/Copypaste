'use strict';
// HTML Elements
let styles = document.getElementsByClassName('style');

let text = document.getElementById('text');
let iterationNum = document.getElementById('iterationNum');
let actionBtn = document.getElementById('actionBtn');

function checkInputs() {
    if (iterationNum.value && text.value && iterationNum.value <= 10000) {
        iterateText();
    } else if (text.value && iterationNum.value > 10000) {
        alert('Son 10,000 dan katta bo\'la olmaydi!');
    } else {
        alert('So\'z va qaytarilishlar sonini kiritganingizga ishonch hosil qiling!');
    }
}

function iterateText() {
    let text0 = '';
    for (let i = 1; i <= iterationNum.value; i++) {
        text0 += (`${text.value}\n`);
    }
    styles[0].querySelector('.style-0').textContent = text0;
    
    let text1 = '';
    for (let i = 1; i <= iterationNum.value; i++) {
        text1 += (`${text.value} ${i}\n`);
    }
    styles[1].querySelector('.style-1').textContent = text1;
    
    let text2 = '';
    for (let i = 1; i <= iterationNum.value; i++) {
        text2 += (`${i} ${text.value}\n`);
    }
    styles[2].querySelector('.style-2').textContent = text2;
    text.value = '';
}

iterateText();
actionBtn.addEventListener('click', checkInputs);

// Styles Copy Scripts
for (let i = 0; i < styles.length; i++) {
    let btn = styles[i].querySelector('.style-btn-'+i);
    btn.addEventListener('click', function() {
        styles[i].querySelector('.style-'+i).select();
        document.execCommand('copy');

        btn.classList.add('active');
        btn.addEventListener('animationend', function() {
            btn.classList.remove('active');
        })
    });
}