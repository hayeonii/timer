const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const btnStart = document.querySelector('.btn-start')
const btnReset = document.querySelector('.btn-reset')

// 시계 자릿수
function padFormat(num) {
    return num < 10? `0${num}` : num;
}

// min & sec 60 이상이면 시간 넘겨서 +1 -60

// 시계 업데이트
function setTimer() {
    const setHour = hour.value;
    const setMin = min.value;
    const setSec = sec.value;
    // console.log(setHour)
    // console.log(setMin)
    // console.log(setSec)

    const timer = setInterval(function() {
        
    }, 1000)
}

// 시계 일시정지
function pauseTimer() {

}

// 시계 삭제
function clearTimer() {
    clearInterval(timer);
}


btnStart.addEventListener('click', setTimer)
btnReset.addEventListener('click', clearTimer);