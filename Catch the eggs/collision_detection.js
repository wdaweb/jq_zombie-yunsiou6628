// 檢測 是一個簡單函數
// 當傳遞給 diff 時會返回，檢測是否碰撞


// 有使用 collision => 雞蛋掉落碰撞到地板 和 雞蛋掉落到籃子中
// collision($div1, $div2) => (collision(egg, floor)) 和 (collision(egg, basket))
function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;

    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}