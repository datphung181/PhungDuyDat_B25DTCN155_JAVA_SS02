let bookName = prompt("Nhap ten sach cua ban:");
let bookStatus = +prompt("Nhap trang thai sach:\n1. Co san\n0. Da muon");
let bookYear = +prompt("Nhap nam xuat ban:");

let currentYear = new Date().getFullYear();
let age = currentYear - bookYear;

if (bookStatus === 1) {
    if (age <= 5) {
        alert("Sach nay moi va co san de muon");
    } else {
        alert("Sach nay co san nhung da lau nam");
    }
} else if (bookStatus === 0) {
    if (age <= 10) {
        alert("Sach nay da muon nhung kha moi, co the muon lai sau");
    } else {
        alert("Sach nay da muon va kha cu");
    }
} else {
    alert("Lua chon trang thai khong hop le!");
}
