let bookName = prompt("Nhap ten sach cua ban");
let lendUser = prompt("Nhap ten nguoi muon");
let rating = +prompt("nhap muc do yeu thich cua ban 1 - 5");

bookName = bookName.trim();
lendUser = lendUser.trim();
rating = Math.floor(rating);

if (rating == 5 || rating == 4) {
    alert("day la cuon sach yeu thich cua ban, hay doc ngay");
} 
else if (rating == 3) {
    alert("sach nay kha on , co the muon");
} 
else if (rating == 2 || rating == 1) {
    alert("sach nay ban co the can nhac muon lai sau");
} 
else {
    alert("co su nham lan nao do roi");
}


