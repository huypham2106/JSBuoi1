/**
 * Khối 1:
 * Số thứ nhất
 * Số thứ hai
 * Số thứ ba
 * Số thứ tư
 * Số thứ năm
 * 
 * Khối 2:
 * +B1: Nhập giá trị cho số thứ nhất, thứ hai, thứ ba, thú 4 và thứ năm;
 * +B2: Gán giá trị 5 cho biến thứ 6
 * +B3: Tính trung bình cộng của 5 số được nhập vào
 * +B4: Gán sự kiện click cho button   
 * 
 * khối 3:
 * Số trung bình cộng của 5 số được nhập vào
 */

function AveraNum(){
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    var num6 = 5;
    console.log(num1,num2,num3,num4,num5);

    sumNum = (Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5))/num6;
    console.log(sumNum);

    document.getElementById("txtAver").innerHTML = sumNum;
}
document.getElementById("btnAver").onclick = AveraNum;
