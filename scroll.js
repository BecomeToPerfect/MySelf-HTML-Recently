$(document).ready(function (argument) {

/*  소스 코드 변경 --> https://webisfree.com/2014-11-25/[jquery]-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-scroll()*/
	$(document).scroll(function (argument) {
		var Ascroll =$(window).scrollTop();/*window 창에서 스크롤 위치 값*/
	if (Ascroll>0) {
		document.getElementById('Menu_bar').style["boxShadow"] = "5px 5px 5px #3f3f3f"
	}
	else if (Ascroll==0){
		document.getElementById('Menu_bar').style["boxShadow"] = ""/*없애기 위해 비워둠*/
	}
	})
});