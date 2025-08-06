// Hàm kiểm tra và chuyển chuỗi thành số
function toNumber(value: number | string): number | null {
    // Nếu là chuỗi thì chuyển thành số thực bằng parseFloat, nếu là số thì giữ nguyên
    const num = typeof value === 'string' ? parseFloat(value) : value;
    // Nếu không thể chuyển thành số (NaN) thì trả về null, ngược lại trả về số
    return isNaN(num) ? null : num;
}

// Hàm cộng
function add(a: number | string, b: number | string): number | string {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    // Nếu 1 trong 2 không hợp lệ (null) thì trả về thông báo lỗi
    if (num1 === null || num2 === null) {
        return "Không hợp lệ";
    }
    // Nếu hợp lệ, trả về kết quả phép cộng
    return num1 + num2;
}

// Hàm trừ
function subtract(a: number | string, b: number | string): number | string {
    const num1 = toNumber(a);
    const num2 = toNumber(b);

    if (num1 === null || num2 === null) {
        return "Không hợp lệ";
    }

    return num1 - num2;
}

// Hàm nhân
function multiply(a: number | string, b: number | string): number | string {
    const num1 = toNumber(a);
    const num2 = toNumber(b);

    if (num1 === null || num2 === null) {
        return "Không hợp lệ";
    }

    return num1 * num2;
}

// Hàm chia
function divide(a: number | string, b: number | string): number | string {
    const num1 = toNumber(a);
    const num2 = toNumber(b);

    if (num1 === null || num2 === null) {
        return "Không hợp lệ";
    }
     // Nếu chia cho 0 thì báo lỗi
    if (num2 === 0) {
        return "Không được chia cho 0";
    }

    return num1 / num2;
}


console.log("Cộng:", add("10", "5"));           
console.log("Trừ:", subtract(20, "8"));         
console.log("Nhân:", multiply("2", 5));         
console.log("Chia:", divide("100", "abc"));     
console.log("Chia:", divide("100", "0"));      
