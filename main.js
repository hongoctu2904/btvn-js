/** bài 1 tính tiền lương nhân viên
 * mô hình 3 khối
 * Đầu vào 
 * -lương ngày 100000
 * - số ngày làm: 24
 * Xử lý 
 * -  tính lương: lương ngày nhân số ngày làm
 * Đầu ra
 * - xuất lương
 */
let luongNgay = 100000;
let soNgayLam = prompt("nhấp số ngày làm: ")
let tongLuong = 0;
tongLuong = luongNgay * soNgayLam;
let result = "tongLuong:"  + tongLuong;
console.log(result);
 
/**bài 2 tính giá trị trung bình    
 * mô hình 3 khối
 * đầu vào
 * - num-1
 * - num-2
 * - num-3
 * - num-4
 * - num-5
 * xử lý
 * - tạo biến 5 chữ số
 * - tính trung bình rồi chia cho 5
 * đầu ra
 * -giá trị trung bình của 5 số chia cho 5
 */

let num_1 = 1;
let num_2 = 2;
let num_3 = 3;
let num_4 = 4;
let num_5 = 5;
num_1 = Number(num_1);
num_2 = Number(num_2);
num_3 = Number(num_3);
num_4 = Number(num_4);
num_5 = Number(num_5);
average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;
let resultAverage = "Trung bình của 5 số: " + average;
console.log(resultAverage);

/** bài 3 quy đổi tiền
 * đầu vào 
 * - 1usd = 23.500 vnd
 * xử lý
 * - quy đổi usd sang vnd
 * - người dùng nhập số tiền usd
 * đầu ra 
 * - số tiền được quy đổi ra vnd
 */
const exchangeRate = 23500;
let usAmount = prompt("nhập số tiền cần quy đổi");
let vndAmount = usAmount * exchangeRate;
let quydoi = ("Số tiền được quy đổi ra vnd là:" + vndAmount);
console.log(quydoi);
/** Bai 4 tính diện tích chu vi hình chữ nhật
 * đầu vào
 * - Nhập chiều dài của hình chữ nhật (length).
 * - Nhập chiều rộng của hình chữ nhật (width).
 * xử lý
 * - tính diện tích hình chứ nhật bằng công thức length * width
 * - tích chu vi hình chữ nhật bằng công thức (length + width)*2
 * đầu ra 
 * - xuất ra diện tích hình chữ nhật
 * - xuất ra chu vi hình chữ nhật
 */
let width = 20;
let length = 10;
let dientich = width * length;
let chuvi = (width + length) * 2;
dientich = ("diện tích hình chữ nhật là:" + dientich);
chuvi = ("chu vi hình chữ nhật là:" + chuvi);
console.log(dientich);
console.log(chuvi);

/** bài 5 tính tổng 2 kí số
 * đầu vào 
 * - nhập một  số có 2 chữ số
 * xử lý
 * - tách chữ số hàng chục 
 * - tách chữ số hàng đơn vị
 * - tính tổng 2 chữ số
 * đầu ra
 * - xuất ra tổng của 2 chữ số
 */
let Num = prompt("nhập vào số có 2 chữ số");
let hangchuc =Math.floor(Num / 10);
let hangdonvi = Num % 10;
let sum = hangchuc + hangdonvi;
sum = ("tổng 2 chữ số là: "  +sum)
console.log(sum);

