const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 200, size: 50, color: "red" };
let enemy = { x: 500, y: 200, size: 50, color: "blue" };

function drawBoxer(boxer) {
    ctx.fillStyle = boxer.color;
    ctx.fillRect(boxer.x, boxer.y, boxer.size, boxer.size);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoxer(player);
    drawBoxer(enemy);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") player.y -= 10;
    if (e.key === "ArrowDown") player.y += 10;
    if (e.key === " ") enemy.x -= 20; // punch action
});

setInterval(update, 50);
