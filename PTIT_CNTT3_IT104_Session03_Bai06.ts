// Khai báo biến với kiểu dữ liệu cụ thể
let num1: number = 10;
let num2: number = 5;
let num3: number;

let num4: string = "10";
let num5: boolean = true;

// Thực hiện các phép toán giữa num1 và num2
num3 = num1 + num2;
console.log("Cộng:", num3); 

num3 = num1 - num2;
console.log("Trừ:", num3);

num3 = num1 * num2;
console.log("Nhân:", num3); 

num3 = num1 / num2;
console.log("Chia:", num3); 

// Thử cộng chuỗi với boolean
let result = num4 + num5;
console.log("Kết quả của num4 + num5:", result); 
/*
    Giải thích:
    num4 + num5 thực hiện ép kiểu ngầm định:
     -num4 là chuỗi "10"
     -num5 là boolean true
     -Trong phép cộng, nếu một trong hai toán hạng là chuỗi, TypeScript sẽ ép toán hạng còn lại thành chuỗi, rồi thực hiện nối chuỗi.
     -true bị ép thành chuỗi "true", kết quả là "10" + "true" là "10true"

*/
