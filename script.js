var son = +prompt("Yoshingizni kiriting")
if (son < 18) {
    alert("Yoshsiz, o'qishingiz kerak.")
} else if (son >= 18 && son < 50) {
    alert("Ishlashingiz kerak")
} else if (son < 59 && son >= 50) {
    alert("Yaqinda pensiyaga chiqasiz")
} else if (son >= 59 && son < 150) {
    alert("Pensiyanerga o'xshaysiz, hali tirik bo'lsangiz")
} else {
    alert("Nimadir noto'g'ri ketganga o'xshaydi")
}

var num = +prompt("Misolni yeching: 5*5=?")
if (num == 25) {
    console.log("Sizning javob to'g'ri-" + num);
} else {
    console.log("Sizning javob noto'g'ri-" + num + " To'g'ri javob: 25");
}

var num2 = +prompt("Misolni yeching: 81/9=?")
if (num2 == 9) {
    console.log("Sizning javob to'g'ri-" + num2);
} else {
    console.log("Sizning javob noto'g'ri-" + num2 + " To'g'ri javob: 9");
}

var num3 = +prompt("Misolni yeching: 6+10=?")
if (num3 == 16){
    console.log("Sizning javob to'g'ri-" + num3);
}else{
    console.log("Sizning javob noto'g'ri-" + num3 + " To'g'ri javob: 16");
}

var cen1 = +prompt("1-sonni kiriting")
var cen2 = +prompt("2-sonni kiriting")
var cen3 = +prompt("3-sonni kiriting")
if (cen1 < cen2 && cen2 < cen3 || cen1 > cen2 && cen2 > cen3) {
    console.log("O'rta qiymat-" + cen2);
}else if(cen2 < cen1 && cen1 < cen3 || cen2 > cen1 && cen1 > cen3){
    console.log("o'rta qiymat-" + cen1);
}else if(cen1 < cen3 && cen3 <cen2 || cen1 > cen3 && cen3 > cen2){
    console.log("o'rta qiymat-" + cen3);
}