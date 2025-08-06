let strValue: string = "2";  
let numValue: number = 2;   

console.log(String(strValue) == Number(numValue));   
console.log(String(strValue) === Number(numValue));  
/*
  Giải thích:
  - Với toán tử == (so sánh lỏng), JavaScript/TypeScript sẽ **chuyển đổi kiểu ngầm**:
    => "2" (string) sẽ được chuyển sang số 2 để so sánh với 2 (number) → kết quả là true.
  
  - Với toán tử === (so sánh chặt), JavaScript/TypeScript sẽ **so sánh cả kiểu và giá trị**:
    => "2" là string, còn 2 là number → khác kiểu → kết quả là false.
*/