
// 呼叫遊戲 function
$(function () {

    the_game = function () {
        // console.log(123)  // 測試

        // 雞蛋1 掉落循環
        if (check_egg_hits_floor(egg1) || check_egg_hits_basket(egg1)) {     // 如果 (雞蛋掉落碰撞到地板) 和 (雞蛋掉落到籃子中)

            // 隨機掉下金雞蛋或是普通蛋
            randon_num = Math.round(Math.random() * 2)
            if (randon_num % 2 == 0) {
                egg1.css('background-image', "url('./egg3.png')")
            } else {
                egg1.css('background-image', "url('./egg2.png')")
            }
            // console.log(egg1.css('background-image'))                     // 測試 換圖片

            set_egg_to_initial_position(egg1)                                // 回到初始位置 => set_egg_to_initial_position(egg1)
        } else {
            egg_down(egg1)                                                   // 如果沒有 雞蛋就持續掉落
        }

        // 雞蛋2
        if (check_egg_hits_floor(egg2) || check_egg_hits_basket(egg2)) {

            randon_num = Math.round(Math.random() * 2)
            if (randon_num % 2 == 0) {
                egg2.css('background-image', "url('./egg3.png')")
            } else {
                egg2.css('background-image', "url('./egg2.png')")
            }

            set_egg_to_initial_position(egg2)
        } else {
            egg_down(egg2)
        }

        // 雞蛋3
        if (check_egg_hits_floor(egg3) || check_egg_hits_basket(egg3)) {

            randon_num = Math.round(Math.random() * 2)
            if (randon_num % 2 == 0) {
                egg3.css('background-image', "url('./egg3.png')")
            } else {
                egg3.css('background-image', "url('./egg2.png')")
            }

            set_egg_to_initial_position(egg3)
        } else {
            egg_down(egg3)
        }


        // 生命值-結束遊戲
        if (life > 0) {
            anim_id = requestAnimationFrame(the_game)
            // cancelAnimationFrame(anim_id)
        } else {
            stop_the_game()
        }
    }

    anim_id = requestAnimationFrame(the_game)
})