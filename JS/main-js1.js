/**
 * Khối 1:
 * + Tiền lương nhân viên;
 * + Số ngày đi làm;
 * + Tiền lương nhận được;
 * 
 * Khối 2:
 * + B1: Lấy giá trị của id daySal khi nhập vào
 * + B2: Lấy giá trị của id workDay khi nhập vào
 * + B3: Tính tiền lương của nhân viên:
 *      salary = daySal * workDay;
 * + B4: Gán giá trị tiền lương vào id txtSalary để thể hiện trên HTML
 * + B5: Gán sự kiện onlick vào button id là btnSalary
 * 
 * Khối 3:
 * Tiền lương tháng của nhân viên
 */

function monthSalary(){
    var number1 = document.getElementById("daySal").value;
    var number2 = document.getElementById("workDay").value;
    console.log(number1,number2);
    salary = number1 * number2;
    console.log(salary);
    document.getElementById("txtSalary").innerHTML = salary;
}
document.getElementById("btnSalary").onclick = monthSalary;