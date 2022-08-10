document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("canvas");
    console.log(canvas)
    var ctx = canvas.getContext('2d');

    function Rectangle() {
        this.draw = function () {
            ctx.fillStyle = "lightgreen";
            ctx.fillRect(0, 0, 700, 300);
            ctx.strokeStyle = 'green'
            ctx.stroke();
            return ctx;
        }
    }

    function Triangle() {
        this.draw = function () {
            ctx.beginPath();
            ctx.moveTo(25, 243);
            ctx.lineTo(353, 243);
            ctx.lineTo(189, 0);
            ctx.lineTo(25, 243);
            ctx.fillStyle = "lightblue";
            ctx.strokeStyle = 'blue'
            ctx.stroke();
            ctx.fill();
        }
    }

    let rectangle = new Rectangle()
    rectangle.draw()

    let triangle = new Triangle()
    triangle.draw()
})


