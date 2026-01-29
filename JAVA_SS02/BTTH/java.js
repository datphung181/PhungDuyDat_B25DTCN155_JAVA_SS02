let userName = "";
let userRole = prompt("Nhập chức của bạn:\n1. admin\n2. student");

userRole = userRole?.trim().toLowerCase();

let moneyAccount = 36000;
let hasCard = true;
let allowance = "";
let overdue = +prompt("Nhập số ngày quá hạn (0 - 10):");

if (userRole !== "admin" && userRole !== "student") {
    userRole = "guest";
    hasCard = false;
    alert("Hello GUEST! Bạn chỉ có thể đọc tại chỗ.");
} else {
    userName = prompt("Nhập tên người dùng")?.trim();
    alert(
        userRole === "admin"
            ? "Chào admin, bạn có toàn quyền!"
            : "Chào sinh viên, bạn có thể mượn sách!"
    );
}

if (hasCard && moneyAccount > 0 && userRole !== "guest") {
    allowance = "Được phép mượn";
    alert("Được phép mượn sách");
} else {
    allowance = "Không được phép mượn";
    alert("Không đủ điều kiện mượn sách");
}

let fineAmount = 0;
let statusMessage = "";

if (overdue <= 0) {
    statusMessage = "Cảm ơn đã trả đúng hạn!";
} else if (overdue <= 5) {
    fineAmount = overdue * 5000;
    statusMessage = `Quá hạn ${overdue} ngày`;
} else if (overdue <= 10) {
    fineAmount = overdue * 10000;
    statusMessage = `Quá hạn ${overdue} ngày`;
} else {
    fineAmount = 200000;
    statusMessage = `Quá hạn ${overdue} ngày - Tài khoản bị khóa`;
}

const result = `
Người dùng: ${userName || "Ẩn danh"}
Quyền hạn: ${userRole}
Kết quả mượn: ${allowance}
Tình trạng: ${statusMessage}
Tiền phạt: ${fineAmount} VNĐ
`;

console.log(result);
alert(result);
