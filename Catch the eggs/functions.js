// 設定遊戲所需要的 function 

// 籃子移動
$(document).on('mousemove', function (e) {
    // console.log(e.pageX)

    // 滑鼠位置設定置中 "calc(" + e.pageX + "px - 5% - 65px")
    basket.css('left', "calc(" + e.pageX + "px - 5% - 65px")
    // basket.css('left', e.pageX)
})

// 雞蛋掉落
function egg_down(egg) {

    egg_current_position = parseInt(egg.css('top')) // 得到雞蛋當下Y軸位置 top:18%;
    // console.log(egg_current_position)
    egg.css('top', egg_current_position + speed) // 前一次雞蛋位置，每次往下移動 (speed = +2) = 得到雞蛋向下更新位置(top) => 顯示: 135 - 137 - 139...
}

// 雞蛋掉落碰撞到地板的狀態
function check_egg_hits_floor(egg) {
    if (collision(egg, floor)) {
        show_bulls_eye(egg)    //顯示破掉雞蛋
        decrement_life()       // 扣生命值
        return true
    }
    return false
}

// 將雞蛋設置到初始位置
function set_egg_to_initial_position(egg) {
    egg.css('top', egg_initial_position)
}

// 設定雞蛋掉落到地板 顯示破掉雞蛋
function show_bulls_eye(egg) {
    bullseye_num = egg.attr('data-bullseye')
    if (egg.css('background-image') == 'url("./egg3.png")') {
        $('#bullseye' + bullseye_num).css('background-image', 'url("./egg5.png")')
    } else {
        $('#bullseye' + bullseye_num).css('background-image', 'url("./egg4.png")')
    }
    // $('#bullseye' + bullseye_num).css('background-image', 'url("./egg5.png")')  // 測試 圖片顯示是否正常
    $('#bullseye' + bullseye_num).show()  // 出現破掉的蛋
    hide_bulls_eye(bullseye_num)
}

// 設定破掉雞蛋的顯示時間 0.5秒
function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide()
    }, 500)
}

// 扣生命值
function decrement_life() {
    life--
    life_span.text(life)  // life_span = $('#life')
}

// 設定雞蛋掉落到籃子裡
function check_egg_hits_basket(egg) {
    if (collision(egg, basket)) {
        egg_top = parseInt(egg.css('top'))
        if (egg_top < basket_top) {     //basket_top = container_height - basket_height,
            if (egg.css('background-image') == 'url("./egg3.png")') {
                // console.log(123)  // 測試 圖片是否進判斷中
                flag = false    // false = 金雞蛋  ，原本宣告為 flag = true 因此一般情況下是 flag = true ，遇到金雞蛋改成 false (若增加第三種蛋，可將 true/false 改成數字 if(flag = 1或2或3...){執行...}  )
            }
            update_score()      // 更新分數
        }
        return true
    }
    return false
}

// 設定更新分數機制
function update_score() {
    // console.log(flag)
    if (flag) {       // 如果 正常情況下 flag = true => 執行 score++
        score++
    } else {
        score += 5    // 金雞蛋在 flag = false 的情況下 => 執行 score += 5
        flag = true   // 執行完後，將 flag 轉變回 flag = true 的正常情況 
    }
    // if / else 可以寫成 switch..


    // 設定每一次加快速度 (score % 數字越小一開始越快 === 0)
    if (score % 8 === 0 && speed <= max_speed) {
        speed++
    }

    score_span.text(score)    // Score:顯示加分  score_span = $('#score')
    score_1.text(score)       // 籃子旁邊顯示加分
}

function stop_the_game() {
    cancelAnimationFrame(anim_id)
    restart.slideDown()
}

// 重新開始遊戲
restart.click(function () {
    location.reload()
})









