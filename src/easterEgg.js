const gear = document.getElementsByClassName("logo-gear");
let count = 0;

function countUp() {
    count++

    if (count <= 8) {
        console.log(`CLICK!: ${count}/8`);
    }

    if (count === 8) {
        console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
        gearSpeedUp();
    }
}

function gearSpeedUp() {
    for (const argument of gear) {
        argument.style.animation = "rotate_img 0.1s linear infinite";
    }
}
