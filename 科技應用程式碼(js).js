function nightButton() {
  document.body.style.backgroundColor = "#8F4586";
  document.body.style.color = "#FFFAF4";
  document.getElementById("header").style.backgroundColor = "#B87070";
}

function dayButton() {
  document.body.style.backgroundColor = "#FFECF5";
  document.body.style.color = "black";
  document.getElementById("header").style.backgroundColor = "#D2E9FF";
}

function func1() {
  var a = document.createElement("img");
  a.src = "https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.15752-9/281822647_1675993546132949_1362563047383806563_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=v09FRunwauQAX_Blnjq&_nc_ht=scontent.ftpe4-1.fna&oh=03_AVJhokegcPlfsN6nFB8ItFCXklxBS0Aa3XnQvYJjW5EwaQ&oe=62CD9DE8";
  var b = document.getElementById("morning");
  b.appendChild(a);
  document.getElementById("next").style.display = "block";
}

function func2() {
  var a = document.getElementById("happy");
  a.style.display = "block";
}

function func3() {
  var a = document.getElementById("happy");
  a.style.display = "none";
  var b = document.getElementById("angry");
  b.style.display = "none";
}

function func4() {
  var b = document.getElementById("angry");
  b.style.display = "block";
}

function func5() {
  swal("測驗說明", "總共有四題，三題選擇，一題是非(含五小題)\n測出的好脾氣指數越高代表你脾氣越好喲!\n(好脾氣指數會從0開始計算)");
}

var x = 0;
function func6() {
  x -= 2;
  swal({
    title: "好脾氣指數-2",
    icon: "error",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game2";
  });
}

function func7() {
  x--;
  swal({
    title: "好脾氣指數-1",
    icon: "error",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game2";
  });
}

function func8() {
  swal({
    title: "好脾氣指數+0",
    icon: "success",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game2";
  });
}

function func9() {
  x++;
  swal({
    title: "好脾氣指數+1",
    icon: "success",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game2";
  });
}

function func10() {
  x += 2;
  swal({
    title: "好脾氣指數+2",
    icon: "success",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game2";
  });
}

function func11() {
  x -= 2;
  swal({
    title: "好脾氣指數-2",
    icon: "error",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game3";
  });
}

function func12() {
  x--;
  swal({
    title: "好脾氣指數-1",
    icon: "error",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game3";
  });
}

function func13() {
  x++;
  swal({
    title: "好脾氣指數+1",
    icon: "success",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game3";
  });
}

function func14() {
  x += 3;
  swal({
    title: "好脾氣指數+3",
    icon: "success",
    text: "您真善良",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game3";
  });
}

function func15() {
  x -= 2;
  swal({
    title: "好脾氣指數-2",
    icon: "error",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game4";
  });
}

function func16() {
  x--;
  swal({
    title: "好脾氣指數-1",
    icon: "error",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game4";
  });
}

function func17() {
  swal({
    title: "好脾氣指數+0",
    icon: "success",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game4";
  });
}

function func18() {
  x++;
  swal({
    title: "好脾氣指數+1",
    icon: "success",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game4";
  });
}

function func19() {
  x += 2;
  swal({
    title: "好脾氣指數+2",
    icon: "success",
    buttons: {
      A: {
        text: "下一題",
        value: ""
      },
    },
  }).then((value) => {
    location.href = "#game4";
  });
}

function func20() {
  window.alert("按O表示會生氣(-1)，按X表示不會生氣(+1)");
}

function func21() {
  x--;
  count++;
  if (count <= 6) {
    switch (count) {
      case 2:
        i.innerHTML = "2.在群組問重要事情但被已讀不回(或直接不讀)";
        break;
      case 3:
        i.innerHTML = "3.被另一半劈腿";
        break;
      case 4:
        i.innerHTML = "4.被冤枉(ex:偷東西)";
        break;
      case 5:
        i.innerHTML = "5.被尷尬(ex:問問題沒人理你)";
        break;
      case 6:
        location.href = "#name";
        break;
    }
  }
}

var i = document.getElementById("Q");
var count = 1;
function func22() {
  x++;
  count++;
  if (count <= 6) {
    switch (count) {
      case 2:
        i.innerHTML = "2.在群組問重要事情但被已讀不回(或直接不讀)";
        break;
      case 3:
        i.innerHTML = "3.被另一半劈腿";
        break;
      case 4:
        i.innerHTML = "4.被冤枉(ex:偷東西)";
        break;
      case 5:
        i.innerHTML = "5.被尷尬(ex:問問題沒人理你)";
        break;
      case 6:
        location.href = "#name";
        break;
    }
  }
}



function func23() {
	var a = document.getElementById("t");
  a.style.display = "block";
}

function func24() {
	var a = document.getElementById("t");
  a.style.display = "none";
}
function func25() {
	var b = document.getElementById("f");
  b.style.display = "block";
}
function func26() {
  var b = document.getElementById("f");
  b.style.display = "none";
}

function func27() {
  var name = document.getElementById("nameinput").value;
  document.getElementById("result1").innerHTML = name + "，你的好脾氣指數是" + x;
  var guess = document.getElementById("input").value;
  document.getElementById("result2").innerHTML = "你原先預估的分數是" + guess;
  if (guess < x) {
    document.getElementById("result3").innerHTML = "結論:你的脾氣比想像中好!";
  } else if (guess === x) {
    document.getElementById("result3").innerHTML = "結論:你真了解自己!";
  } else {
    document.getElementById("result3").innerHTML = "結論:你的脾氣比想像中差!";
  }
}
