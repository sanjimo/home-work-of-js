//conversion - 01  feet to inches

function feetToInches(feet) {
    const inches = feet * 12;
    return inches;
}

const result = feetToInches(5);
console.log('The conversion of feet into inches is : ', result);


//conversion - 02 centimeter to meter

function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}

const output = centimeterToMeter(10);
console.log('The conversion of centimeter into meter is : ', output);


//page requirements calculation

function pageRequirements(book1, book2, book3) {
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    const totalPages = (book1 * book1Page) + (book2 * book2Page) + (book3 * book3Page);
    return totalPages;
}

const totalPages = pageRequirements(3, 7, 9);
console.log('Total Pages needed : ', totalPages);

//largest name from my friend list

function bestFriend(friends) {
    let largestName = friends[0];
    for (const friend of friends) {
        if (friend.length > largestName.length) {
            largestName = friend;
        }
    }
    return largestName;
}

const largestFriendName = bestFriend(['sanjida', 'saleha', 'rubaiyaat', 'momo', 'mim', 'priya']);
console.log('The largest name from my friend list is : ', largestFriendName);


//only positive value is allowed to stay

function onlyPositive(numbers) {
    let positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
        else {
            break;
        }
    }
    return positiveNumbers;
}

const positiveNumbers = onlyPositive([10, 20, 30, 40, 0, -90, 60, 70]);
console.log("The positive numbers are : ", positiveNumbers);

//problem-01 seer to mon

//function consist one input parameter.

function seerToMon(seer) {
    if (seer == 0) {
        return 'Error : Please input some value';
    }
    else if (seer < 0) {
        return 'Error : Please input some positive value';
    }
    else {
        const mon = seer / 40;
        return mon;
    }
}

//if the value of the parameter is positive then function will return the result as mon.

//if the value of the parameter is zero or negative then the function will return an error message.

const resultInMon = seerToMon(9);
console.log(resultInMon);



//problem-02 total sales

//function consist 3 parameters, i.e, shirts, pants and shoes.

function totalSales(shirts, pants, shoes) {
    const perShirtCost = 100;
    const perPantCost = 200;
    const perShoeCost = 500;

    //if all the parameters are contains positive value then the function will return the total cost.
    if (shirts >= 0 && pants >= 0 && shoes >= 0) {
        const totalCost = shirts * perShirtCost + pants * perPantCost + shoes * perShoeCost;
        return totalCost;
    }
    //if all or any parameter contain negative value then the function will return an error message.
    else {
        if (shirts < 0 && pants < 0 && shoes < 0) {
            return 'Error : Please input the positive amount of shirts, pants and shoes';
        }
        else if (shirts < 0 && pants < 0) {
            return 'Error : Please input the positive amount of shirts and pants';
        }
        else if (shirts < 0 && shoes < 0) {
            return 'Error : Please input the positive amount of shirts and shoes';
        }
        else if (pants < 0 && shoes < 0) {
            return 'Error : Please input the positive amount of pants and shoes';
        }
        else if (shirts < 0) {
            return 'Error : Please input the positive amount of shirts';
        }
        else if (pants < 0) {
            return 'Error : Please input the positive amount of pants';
        }
        else {
            return 'Error : Please input the positive amount of shoes';
        }
    }

}

const totalCost = totalSales(1, 2, 3);
console.log(totalCost);

//problem-03 delivery cost

//function consist one input parameter.

function deliveryCost(shirts) {
    const cost = [100, 80, 50];
    //(1-100) per shirt cost 100tk, (101-200) per shirt cost 80tk, (more than 201) per shirt cost 50tk.
    let totalDeliveryCost = 0;

    if (shirts <= 0) {
        return 'Error : Please input a positive value more than zero';
    }
    else if (shirts <= 100) {
        return totalDeliveryCost += cost[0] * shirts;
    }
    else if (shirts <= 200) {
        return totalDeliveryCost += (cost[0] * 100) + (cost[1] * (shirts - 100));
    }
    else {
        return totalDeliveryCost += (cost[0] * 100) + (cost[1] * 100) + (cost[2] * (shirts - 200));
    }
}

const totalDeliveryCost = deliveryCost(3);
console.log(totalDeliveryCost);

//problem-04 perfect friend

//function consist one parameter which accept an array of names.

function perfectFriend(friends) {

    let perfectName = '';

    //if the input array is empty function will return an error message.
    if (friends.length <= 0) {
        return 'Error : Please input some names in your array.'
    }
    else {
        for (const friend of friends) {
            while (friend.length == 5) {
                //if a name which length is 5 found it assigned into perfectName and break the loop.
                perfectName = friend;
                break;
            }
        }
        //if perfectName length is 5 then it return the name.
        if (perfectName.length == 5) {
            return perfectName;
        }
        //if there is no name which length is 5 it return an error message.
        else {
            return 'Error : there is no perfect name in this array which lenght is 5'
        }
    }
}

const perfectName = perfectFriend(['momo', 'mim', 'priya', 'sanjida', 'rup']);
console.log(perfectName);