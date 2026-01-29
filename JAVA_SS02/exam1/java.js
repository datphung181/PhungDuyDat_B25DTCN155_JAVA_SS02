let bookName = prompt("Nhap ten sach cua ban");
const currentYear = new Date().getFullYear();
let bookYear = prompt("Nhap nam xuat ban");


if (Number(currentYear) == Number(bookYear)) {
    alert("Day la sach moi!");
} else if ((Number(currentYear) - Number(bookYear)) <= 5) {
    alert("Sach nay kha moi!");
} else {
    alert("Day la sach cu");
}