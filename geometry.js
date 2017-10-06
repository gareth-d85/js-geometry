// rectangle function

function rectangle (width, hight) {
	return width * hight;
}
console.log(rectangle (5, 22));

// rectangular prism function

function recPrism (width, hight, length) {
	return width * hight * length;
}

console.log(recPrism(4.5, 12.5, 17.4));

// area of a circle function

function circle (radius) {
	return Math.PI * Math.pow(radius, 2);
}

console.log(circle(7.2));


// volume of sphere function

function sphere (radius) {
	return (3/4) * Math.PI * Math.pow(radius, 3);
}

console.log(sphere (7.2));
