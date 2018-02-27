/*
 * 난수 생성기
 */
var generateNumber = function(length) {
	var numStr = '1';
	var plusNumStr = '1';
	
	for(var i=0; i<length; i++){
		numStr += '0';
		if(i != length -1){
			plusNumStr += '0';
		}
	}
	var result = Math.floor(Math.random()*parseInt(numStr))+Math.floor(Math.random()*parseInt(plusNumStr));
	if(result > parseInt(numStr)) {
		result = result - parseInt(plusNumStr);
	}
	return result;
}

/*
 * timestamp formatting to see for user;
 * @Author sys970717
 */
var getTimeRate = function(milliseconds) {
	var time = new Date(milliseconds);
	// 시간 변환 부분
	var year = time.getFullYear();
    var month = leadingZeros(time.getMonth()+1, 2);
    var date = leadingZeros(time.getDate(), 2);

    var hour = leadingZeros(time.getHours(), 2);
    var minute = leadingZeros(time.getMinutes(), 2);
    var second = leadingZeros(time.getSeconds(), 2);
    
    var today = timeLog("", 'YMDhmd');
    var last_day = dateFormat(year, month, date, hour, minute, second, 'YMDhmd', "");
    console.log("getTimeRate >> "+last_day);
    var return_day = "";
    
    if(today.substring(0,8) > last_day.substring(0,8)) {
    	var minusDate = today.substring(0,8) - last_day.substring(0,8);
    	if(minusDate === 1) {
    		return_day = '어제';
    	} else {
    		return_day = dateFormat(year, month, date, hour, minute, second, 'YMD', "-");
    	}
    } else {
    	if(last_day.substring(8,10) > 12) {
    		return_day = '오후 '+dateFormat(year, month, date, hour, minute, second, 'hm', ":");
    	} else {
    		return_day = '오전 '+dateFormat(year, month, date, hour, minute, second, 'hm', ":");
    	}
    }
    
    return return_day;
    
}

/*
 * this function dateFormat
 * @Author sys970717
 */
var dateFormat = function(year, month, date, hour, minute, second, format, delimiter) {
	var returnData = "";
	switch(format) {
    case 'YMD' :
        returnData = year+delimiter+month+delimiter+date;
    break;
    case 'YMDhmd' :
        returnData = year+delimiter+month+delimiter+date;
        if(delimiter !== '') {
            returnData += hour+':'+minute+':'+second;
        } else {
            returnData += hour+minute+second;
        }
    break;
    case 'hmd' :
        if(delimiter !== '') {
            returnData = hour+':'+minute+':'+second;
        } else {
            returnData = hour+minute+second;
        }
    break;
    case 'hm' :
        if(delimiter !== '') {
            returnData = hour+':'+minute;
        } else {
            returnData = hour+minute;
        }
    break;
	}
    
	return returnData;
}

// 오토 스크롤 기능.
function autoScroll() {
	window.scrollTo(0,document.getElementsByClassName('chat')[0].offsetHeight);
}

// 한국어가 달려 출력될 수 있도록 개발.
function getTimeH(date) {
	var year = date.substring(0,4);
	var month = date.substring(4,6);
	var day = date.substring(6,8);
	
	var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
	var today = new Date(year+"-"+month+"-"+day).getDay();
	var today_label = week[today];
	
	return year+"년 "+month+"월 "+day+"일 "+today_label;
}