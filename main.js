// (1) 랜덤번호 지정
// (2) 유저가 번호를 입력한다 그리고 go 하는 버튼을 누름
// (3) 랜덤번호 < 유저번호 Down !
// (4) 랜덤번호 > 유저번호 Up !
// (5) Reset 버튼을 누르면, 게임이 리셋된다
// (6) 5번의 기회가 다 사용되면 게임이 끝난다 - 버튼이 disable
// (7) 유저가 1 ~ 100 밖에 숫자를 입력하는 경우, 알려준다. 기회는 깍지 않는다.
// (8) 유저가 이미 입력한 숫자를 입력하면, 알려준다. 기회는 깍지 않는다.

let randomNum = 1;
let inputNumber = document.querySelector('.number-area');
let gamePlayBtn = document.querySelector('.gamePlayBtn');
let noticeArea = document.querySelector('.notice-area');
let resetGameBtn = document.querySelector('.resetGameBtn');
let tryNumberArea = document.querySelector('.tryNumber-area');
let playChance = 5;
let gameOver = false;
let playNumArray = [];

gamePlayBtn.addEventListener('click', play);
resetGameBtn.addEventListener('click', reset);
inputNumber.addEventListener('focus', () => {
    inputNumber.value = '';
});

function pickRandom() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
}

pickRandom();

function play() {
    let playNum = inputNumber.value;

    if (playNum < 0 || playNum > 100) {
        noticeArea.textContent = '1 ~ 100 사이의 숫자를 입력하세요 :)';
        return;
    }

    if (playNumArray.includes(playNum)) {
        noticeArea.textContent = '이미 입력한 숫자 입니다.';
        return;
    }

    playChance--;
    tryNumberArea.textContent = `남은횟수 - ${playChance}`;

    if (playNum > randomNum) {
        noticeArea.textContent = 'Down !';
    } else if (playNum < randomNum) {
        noticeArea.textContent = 'Up !';
    } else {
        noticeArea.textContent = 'Right Answer !!';
    }

    playNumArray.push(playNum);
    console.log(playNumArray);

    if (playChance < 1) {
        gameOver = true;
    }

    if (gameOver) {
        gamePlayBtn.disabled = true;
    }
}

function reset() {
    pickRandom();
    noticeArea.textContent = '결과값이 출력 됩니다';
    playChance = 5;
    tryNumberArea.textContent = '남은횟수 - 5';
    inputNumber.value = '';
    gamePlayBtn.disabled = false;
}
