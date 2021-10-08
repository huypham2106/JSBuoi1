/**
 * Khối 1:
 * Chiều dài hình chữ nhật
 * Chiều rộng hình chữ nhật

 * 
 * Khối 2:
 * +B1: Gán xuất giá trị khi nhập chiều dài và chiều rộng
 * +B2: Gán giá trị 2
 * +B3: Lập công thức tính chu vi và diện tích
 * +B4: Gán sự kiện click cho Button     
 * 
 * khối 3:
 *  Chu vi hình chữ nhật
 * Diện tích hình chữ nhật
 */
function rectangularCal(){
    var num1 = document.getElementById("length").value;
    var num2 = document.getElementById("width").value;
    var num3 = 2;
    console.log(num1,num2);
    perimeter = (Number(num1) + Number(num2)) * num3;
    area = Number(num1) * Number(num2);
    console.log(perimeter);
    document.getElementById("perimeter").innerHTML = perimeter;
    document.getElementById("area").innerHTML = area;
}
document.getElementById("btnCal").onclick = rectangularCal;