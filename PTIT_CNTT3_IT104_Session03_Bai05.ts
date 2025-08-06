let firstName: string = "john";
let lastName: string = "doe";

// Hàm viết hoa chữ cái đầu
function capitalize(str: string): string {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Kiểm tra và chuẩn hóa tên
firstName = capitalize(firstName);
lastName = capitalize(lastName);

// Ghép tên đầy đủ
let fullName: string = `${firstName} ${lastName}`;

// In kết quả
console.log(fullName);  
