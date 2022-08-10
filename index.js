// Code your solution in this file!

//when we give a number to someValue parameter like (43) is greater than (42), so else excuted an returns (1)
//(43-42=1), and also for  (34) it's less than (42) that's why if being excuted (42-34=8)
//first
function distanceFromHqInBlocks(someValue) {
    if (someValue < 42) {
        return (42 - someValue);
    }
    else {
        return (someValue - 42);
    }
}

//we invoke first function incide the second function to calculate the result then multiply by 264.
//second
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

/*
//or 
 if (someValue < 42) {
 return (42 - someValue) * 264;
}  else {
    return (someValue - 42) * 264;}
*/

//third
function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return ((destination - start) * 264);    
    }
    else
    return ((start - destination) * 264);
   
}
return ((start - destination) * 264);
//forth
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;

    } if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02;

    } else if (distance >= 2000 && distance <= 2500) {
        return 25;

    } else  {
        return "cannot travel that far";
    }
}