let bookName = prompt("Nhap ten sach cua ban");
let bookCatergory = prompt("Nhap the loai cua ban \n khoahoc \n lichsu \n vanhoc \n truyen")
let bookstatus = +prompt("Nhap tinh trang \n 0. da muon \n 1.van con ");
let statusValue = bookstatus;

bookCatergory = bookCatergory.trim()
bookCatergory = bookCatergory.toLowerCase();

if (bookCatergory == "khoahoc" || bookCatergory == "lichsu") {
    if (statusValue == "1") {
        console.log(`cuon sach ${bookName} co san trong thu vien`);
    } else {
        console.log(`cuon sach ${bookName} KHONG CON trong thu vien`);
    }


}

if (bookCatergory == "vanhoc" || bookCatergory == "truyen") {
    if (statusValue == "1") {
        console.log(`cuon sach ${bookName} co the doc de giai tri`);
    } else {
        console.log(`cuon sach ${bookName} KHONG CON trong thu vien`);
    }
}

