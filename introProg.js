var btnsDiv = document.getElementsByClassName("optBtnDiv");
var btns = document.getElementsByClassName("optBtn");
var sec = document.getElementsByClassName("secTitle");


btnsDiv[1].onmouseover = function () { onBtnDivOver(event, 1) };
btnsDiv[2].onmouseover = function () { onBtnDivOver(event, 2) };
btnsDiv[3].onmouseover = function () { onBtnDivOver(event, 3) };
btnsDiv[4].onmouseover = function () { onBtnDivOver(event, 4) };
btnsDiv[5].onmouseover = function () { onBtnDivOver(event, 5) };

btnsDiv[1].onmouseout  = function () { onBtnDivOut(event, 1)  };
btnsDiv[2].onmouseout  = function () { onBtnDivOut(event, 2)  };
btnsDiv[3].onmouseout  = function () { onBtnDivOut(event, 3)  };
btnsDiv[4].onmouseout  = function () { onBtnDivOut(event, 4)  };
btnsDiv[5].onmouseout  = function () { onBtnDivOut(event, 5)  };


function onBtnDivOver(event, index) {
	btnsDiv[index].style.backgroundColor = "#5D4037";
	btns[index-1].style.border = "1px solid #5D4037";
}

function onBtnDivOut(event, index) {
	btnsDiv[index].style.backgroundColor = "#3e2723";
	btns[index-1].style.border = "1px solid #3e2723";
}


