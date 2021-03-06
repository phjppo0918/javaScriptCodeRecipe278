const totalTime = 10000; //10s
const oldTime = Date.now();

const timerId = setInterval(() => {
	const currentTime = Date.now();
	//시간 차를 구함
	const diff = currentTime - oldTime;
	
	//남은 밀리초 계산
	const remainMSec = totalTime - diff;
	const remainSec = Math.ceil(remainMSec / 1000);
	
	let label = `남은 시간 ${remainSec} 초`;
	
	//0초 이하 처리 작업
	if(remainMSec <= 0) {
		//타이머를 종료
		clearInterval(timerId);
		
		//타이머 종료를 표시
		label = '종료';
		
	}
	
	//화면에 표시
	document.querySelector('#log').innerHTML = label;
}, 1000);