
function tinhLaiSuat() {
    let soTienVay= prompt("Mày muốn vay bao nhiêu: ");
    soTienVay=parseInt(soTienVay);
    let laiSuat= prompt("Rồi lãi suất một năm là bao nhiêu(%): ");
    laiSuat= parseInt(laiSuat);
    let nam= prompt("Vay mấy năm rồi: ");
    nam= parseInt(nam);
    let laiSuatDon= soTienVay*(laiSuat/100)*nam;
    let tongCong= soTienVay+laiSuatDon;
    alert("Số tiền lãi là " +laiSuatDon+ "VND .Nên là mày thiếu ngân hàng tổng cộng " + tongCong + "VND. Này thì ham cá độ :))")
}