let userName = prompt("Nhap ten cua ban:").trim();
let bookName = prompt("Nhap ten sach:").trim();
let bookStatus = prompt("Nhap status (co san / da muon / khong co san):").trim().toLowerCase();
let dateLend = +prompt("Nhap so ngay muon:");
let hasCard = prompt("Ban co the thu vien khong? (yes/no)").toLowerCase() === "yes";


if (bookStatus === "co san") {
    if (hasCard) {
        console.log("ban co the muon sach nay...");
    } else {
        console.log("sach nay khong muon duoc.... khong co the thu vien");
    }
} 
else if (bookStatus === "da muon") {
    if (dateLend < 30) {
        if (hasCard) {
            console.log("sach dang duoc muon ");
        } else {
            console.log("the thu vien khong co...");
        }
    } else {
     
        console.log("thoi gian muon qua lau");
    }
} 
else if (bookStatus === "khong co san") {
    console.log("sach nay hien tai khong co....");
} 
else {
  
    console.log("khong hop le...");
}