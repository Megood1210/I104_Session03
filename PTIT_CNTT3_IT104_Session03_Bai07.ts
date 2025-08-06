let input: string = "hello world";

// Tạo một đối tượng để đếm số lần xuất hiện của từng ký tự
let charCount: { [key: string]: number } = {};

// Duyệt qua từng ký tự trong chuỗi input
for (let char of input) {
     // Nếu ký tự đã tồn tại trong đối tượng charCount thì tăng số lượng lên 1
    // Nếu chưa có thì khởi tạo giá trị ban đầu là 1
    charCount[char] = (charCount[char] || 0) + 1;
}

// Lọc ra các ký tự chỉ xuất hiện đúng 1 lần
let result: string = "";
// Duyệt lại chuỗi ban đầu để giữ đúng thứ tự
for (let char of input) {
     // Nếu ký tự chỉ xuất hiện đúng 1 lần
    if (charCount[char] === 1) {
        result += char;  // Thêm ký tự đó vào chuỗi kết quả
    }
}
// In kết quả
console.log(result);
