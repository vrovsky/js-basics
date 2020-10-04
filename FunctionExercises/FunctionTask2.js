const Circle = {
    radius: 2,
    get area(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}
console.log(Circle.area);