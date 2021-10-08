/**
 * Khối 1:
 * Số tiền USD
 * Tỉ giá quy đổi: 23,500
 * Số tiền Việt Nam đồng
 * 
 * Khối 2:
 * +B1: Nhập giá trị cho số tiền USD:
 *      usdMoney.value
 * +B2: Tính số tiền Việt Nam đồng quy đổi:
 *      vietMoney = usdMoney * 23,500;
 * +B3: Gán sự kiện click cho Button     
 * 
 * khối 3:
 * Số tiền Việt Nam đồng quy đổi
 */

function moneyTrans(){
    var num1 = document.getElementById("usdMoney").value;
    var num2 = 23500;
    console.log(num1,num2);
    vietNamMoney = num1 * num2;
    console.log(vietNamMoney);
    document.getElementById("vietMoney").innerHTML = new Intl.NumberFormat('vn-VN').format(vietNamMoney); 
}
document.getElementById("btnVietMoney").onclick = moneyTrans;