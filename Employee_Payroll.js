/**
* UC1 Check Employee Present or not
*/
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is absent");
    return;
} else {
    console.log("Employee is present");
}

/**
* UC2 Calculating Employee Wage
*/{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

// UC6 daily wage using array
    let empDailyWageArray=new Array();
// UC3 write function for daily working hours

    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
   /**
 * UC4 Calculating wages for a month
 */
function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
   {
        let totalEmpHrs = 0;
        let totalWorkingDays = 0;
        /**
        * using while loop
        * UC5 Calculating wages till total woking hours 160 or max day 20 days
        */
        while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
           let empHrs= getWorkingHours(empCheck);
           totalEmpHrs+=empHrs;
           empDailyWageArray.push(calculateDailyWage(empHrs))
        }
        let empWage = calculateDailyWage(totalEmpHrs);
        console.log("UC6 -Total Days:" + totalWorkingDays + " Total Hours:" + totalEmpHrs + " Employee Wage:" + empWage);
        console.log(empDailyWageArray);
    }
}
//UC7a foreach
let totalWage=0;
function sum(dailyWage){
    totalWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("7 A -totalWage is" +totalWage);
//UC7a reduce method
function totalWages(sum, nextValue){
    return sum+nextValue;
}
    let sum1=empDailyWageArray.reduce(totalWage,0);
    console.log("7 A - totalWage is" +sum1);
    // UC7b using array map
let counter=0;
function mapDayDailyWage(dailyWage)  {
    counter++;
        return counter+"="+dailyWage;
}  
let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWageArray);
console.log("7B "+mapDayWithWageArray);

let fullTimeWage=function(dailyWage){
    return dailyWage.toString().includes("160");
}
let fullDayWageArr=mapDayWithWageArray.filter(fullTimeWage);
console.log("7C" +fullDayWageArr);

let fullDayWageFirstOccurence=mapDayWithWageArray.find(fullTimeWage);
console.log("7D" +fullDayWageFirstOccurence);

console.log("7E" +fullDayWageArr.every(fullTimeWage));



