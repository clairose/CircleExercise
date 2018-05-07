class Circle {
    constructor(radius, number) {
        this.radius = radius;
        this.number = number;
    }
    calcArea() {
        let area = Math.PI * this.radius * this.radius;
        console.log(`The area of a circle with the radius ${this.radius} is ${area}.`);
        document.write(`The area of a circle with the radius ${this.radius} is ${area}.`);
        let circleCustom = document.getElementById(`circle${this.number}`);
        circleCustom.style.width = `${this.radius}px`;
        circleCustom.style.height = `${this.radius}px`;
        if (this.radius <= 300 && this.radius > 100) {
            circleCustom.style.backgroundColor = `pink`;
        } else if (this.radius < 100) {
            circleCustom.style.backgroundColor = `green`;
        } else {
            circleCustom.style.backgroundColor = `aqua`;
        }
        
    }
}
for (i=0; i<3; i++) {
    let input = prompt("Enter a radius for your circle.");
    let newcircle = new Circle(input, i);
    newcircle.calcArea();
}


