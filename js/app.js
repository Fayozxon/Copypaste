'use strict';
// HTML Elements
let styles = document.getElementsByClassName('style');

let text = document.getElementById('text');
let iterationNum = document.getElementById('iterationNum');
let actionBtn = document.getElementById('actionBtn');

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
}

iterateText();
actionBtn.addEventListener('click', iterateText);

// Styles Copy Scripts
for (let i = 0; i < styles.length; i++) {
    styles[i].querySelector('.style-btn-'+i).addEventListener('click', function() {
        styles[i].querySelector('.style-'+i).select();
        document.execCommand('copy');
    });
}