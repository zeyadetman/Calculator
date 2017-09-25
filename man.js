var result = 0;
var viewed = "";
var finish = false;
var oper = "";
var dontclickce = false;
var f = false;

function operation(op) {
    if ((viewed * 1 != NaN || viewed != '0' || viewed != 0) && !isNaN($('.result').html() * 1) && f == true) {
        if (finish) dontclickce = true;
        finish = false;
        if (op == 'ac') {
            result = 0;
            viewed = '';
            op = '0';
            oper = '';
            $(".result").html("0");
            $(".operations").html("0");
        } else if (op == 'ce' && !dontclickce) {
            viewed = viewed.slice(0, viewed.length - $('.result').html().length);
            op = '0';
            oper = op;
            $(".result").html("0");
            $(".operations").html(viewed);
        } else if (op == 'equal') {
            let ans = getResult(viewed);
            viewed += `=${ans}`;
            $(".operations").html(viewed);
            $(".result").html(ans);
        } else if (!dontclickce) {
            viewed += op;
            oper = op;
            $(".result").html(oper);
            $(".operations").html(viewed);
            oper = "";
        }
        dontclickce = false;
    }
}

function getNum(num) {
    f = true;
    if (finish == false) {
        if (oper * 1 != NaN) {
            viewed += num;
            oper += num;
            dontclickce = false;
        }
        $(".result").html(oper);
    }
    $(".operations").html(viewed);
}

//61*3+6
var result = 0;

function getResult(str) {
    //12+4+2
    var checker = false;
    var v1 = "",
        v2 = "",
        pp = "";
    var numbers = [];
    var opers = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i] * 1)) {
            v1 += str[i];
        } else if (isNaN(str[i] * 1)) {
            numbers.push(v1 * 1);
            opers.push(str[i]);
            v1 = "";
        }
    }
    numbers.push(v1 * 1);
    //console.log(numbers, opers);
    result = numbers[0];
    for (let j = 1; j < numbers.length; j++) {
        if (opers[j - 1] === "+") { result += numbers[j]; } else if (opers[j - 1] === "-") { result -= numbers[j]; } else if (opers[j - 1] === "*") { result *= numbers[j]; } else if (opers[j - 1] === "/") { result /= numbers[j]; }
    }

    //console.log(result);
    finish = true;
    return result;
}