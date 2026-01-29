let currentBooks = 0;

alert("1 : them 5 quyen\n 2 : Them 15 quyen \n 3 : them 36 quyen \n");
let caseChoice = prompt("Nhap so sach ban muon them");

switch (caseChoice) {
    case "1":
        console.log("Da them 5 quyen!");
        currentBooks = Number(currentBooks) + 5;
        break;

    case "2":
        console.log("Da them 15 quyen!");
        currentBooks = Number(currentBooks) + 15;
        break;

    case "3":
        console.log("Da them 36 quyen!");
        alert()
        currentBooks = Number(currentBooks) + 36;
        break;

    default:
        console.log("helo")
        break;
}

console.log(`Hien dang co ${currentBooks} quyen sach`);
if (currentBooks < 10) {
    console.log("thu vien co it sach");
    alert("thu vien co it sach")
} 

else if (currentBooks >= 10 && currentBooks <= 20) {
    console.log("thu vien co so luong sach vua du");
    alert("thu vien co so luong sach vua du");
} 

else {
    console.log("thu vien co nhieu sach");
    alert("thu vien co nhieu sach");
}