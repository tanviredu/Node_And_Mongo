console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT1_2);

// this is like tuple unpacking in python
// this is called arrau destructuring
const { PI , E , SQRT1_2 } = Math;
console.log(PI);
console.log(E);
console.log(SQRT1_2);

/*you can use the destructuring with the
* function too
* */

/* make a circle object directly*/
const circle = {
    label: 'cercilex',
    radius:2,
};

console.log(circle);

/*
* now we want to calculate the circle area
* and thee for we need a radius
* and we have a circle object
* we only use its radius property
* we make a function and when we pass the argument
* we pass the object and it will only take the radius
* */

const circle_area = ({radius})=>{
    return Math.PI*radius*radius;
}

console.log(circle_area(circle));


/*
* we can inhance the program
* with provding more information
* */



const circle_area_with_more = ({radius},precision)=> (Math.PI * radius * radius).toFixed(precision)

console.log(circle_area_with_more(circle,2));



/*
* more complex destructurign
* */

const [first,...other] = [10,23,34,34,434]
console.log(first);
console.log(other);

/*
*
* take property form other object
* and make another object
*
*
* */

const data = {
    'tmp1':500,
    'tmp2':500,
    'first_name':'tanvir',
    'last_name':' rahamn',
}

/*
* make a new object with the temperature
* */

const {tmp1,tmp2} = data;
