/**
 * Khối 1:
 * + Số nguyên dương có 2 chữ số (n)
 * + Số hàng chục
 * + Số hàng đơn vị
 * 
 * Khối 2:
 * +B1: Gán giá trị cho số nguyên dương nhập vào
 * 
 * +B2: Lập cộng thức để lấy được hàng chục ten
 *      
 * +B3: Lập cộng thức để lấy được hàng đơn vị unit
 *      
 * +B4: Tính tổng và hiển thị kết quả
 * 
 * +B5: Gắn sự kiện click cho button
 *      
 * Khối 3:
 * + Tổng của 3 chữ số từ biến n
 */

function SumInput(){
    var n = document.getElementById("input").value;
    var ten = Math.floor(n/10);
    var unit = Math.floor(n%10);
    console.log(n,ten,unit);
    sum = unit + ten;
    console.log(sum);
    document.getElementById("InputSum").innerHTML = sum;
}
document.getElementById("btnInput").onclick = SumInput;