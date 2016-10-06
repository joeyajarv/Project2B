/**
 *   @author Jarvenpaa, Josiah (josiahjarvenpaa@live.com)
 *   @version 0.0.2
 *   @summary Salary.js code || created: 10.05.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

const CURRENT_YEAR = 2016;

let continueResponse;
let numPolicyNumber, numCustomerBirthYear, numPremiumDueDateDay, numPremiumDueDateMonth, numPremiumDueDateYear, numAtFaultAccidents, numCustomerAge, totalBill;
let customerFirstName, customerLastName;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setNumPolicyNumber();
        setCustomerFirstName();
        setCustomerLastName();
        setNumCustomerBirthYear();
        setNumCustomerAge();
        setNumPremiumDueDateMonth();
        setNumPremiumDueDateDay();
        setNumPremiumDueDateYear();
        setNumAtFaultAccidents();
        setTotalBill();
        printTotalBill();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse(); //improper recursion
        }
    } else {
        continueResponse = 1;
    }
}

function setNumPolicyNumber() {
    numPolicyNumber = Math.floor((Math.random() * 10000) + 1);  //JavaScript random number 1 - 10000
}

function setCustomerFirstName() {
    customerFirstName = PROMPT.question(`\nPlease enter customer's first name: `);
}

function setCustomerLastName() {
    customerLastName = PROMPT.question(`\nPlease enter customer's last name: `);
}

function setNumCustomerBirthYear() {
    const MIN_BIRTHYEAR = 1900,
        MAX_BIRTHYEAR = 2002;
    numCustomerBirthYear = Number(PROMPT.question(`\nPlease enter customer's year of birth in XXXX format: `));
    if (numCustomerBirthYear < MIN_BIRTHYEAR || numCustomerBirthYear > MAX_BIRTHYEAR || isNaN(numCustomerBirthYear)) {
        console.log(`${numCustomerBirthYear} is an incorrect value. Please try again.`);
        return setNumCustomerBirthYear();
    }
}

function setNumCustomerAge() {
    numCustomerAge = Number(CURRENT_YEAR - numCustomerBirthYear);
}

function setNumPremiumDueDateMonth() {
    const MIN_PREMIUMDUEDATEMONTH = 1,
        MAX_PREMIUMDUEDATEMONTH = 12;
    numPremiumDueDateMonth = PROMPT.question(`\nPlease enter premium due date month in XX format: `);
    if (numPremiumDueDateMonth < MIN_PREMIUMDUEDATEMONTH || numPremiumDueDateMonth > MAX_PREMIUMDUEDATEMONTH || isNaN(numPremiumDueDateMonth)) {
        console.log(`${numPremiumDueDateMonth} is an incorrect value. Please try again.`);
        return setNumPremiumDueDateMonth();
    }
}

function setNumPremiumDueDateDay() {
    const MIN_PREMIUMDUEDATEDAY = 1,
        MAX_PREMIUMDUEDATEDAY = 31;
    numPremiumDueDateDay = Number(PROMPT.question(`\nPlease enter premium due date day in XX format: `));
    if (numPremiumDueDateDay < MIN_PREMIUMDUEDATEDAY || numPremiumDueDateDay > MAX_PREMIUMDUEDATEDAY || isNaN(numPremiumDueDateDay)) {
        console.log(`${numPremiumDueDateDay} is an incorrect value. Please try again.`);
        return setNumPremiumDueDateDay();
    }
}

function setNumPremiumDueDateYear() {

    const MIN_PREMIUMDUEDATEYEAR = 2015,
        MAX_PREMIUMDUEDATEYEAR = 2025;
    numPremiumDueDateYear = Number(PROMPT.question(`\nPlease enter premium due date year in 20XX format: `));
    if (numPremiumDueDateYear < MIN_PREMIUMDUEDATEYEAR || numPremiumDueDateYear > MAX_PREMIUMDUEDATEYEAR || isNaN(numPremiumDueDateYear)) {
        console.log(`${numPremiumDueDateYear} is an incorrect value. Please try again.`);
        return setNumPremiumDueDateYear();
    }
}

function setNumAtFaultAccidents() {
    const MIN_NUMATFAULTACCIDENTS = 0,
        MAX_ATFAULTACCIDENTS = 10;
    numAtFaultAccidents = Number(PROMPT.question(`\nPlease enter customer's number of at-fault accidents: `));
    if (numAtFaultAccidents < MIN_NUMATFAULTACCIDENTS || numAtFaultAccidents > MAX_ATFAULTACCIDENTS || isNaN(numAtFaultAccidents)) {
        console.log(`${numAtFaultAccidents} is an incorrect value. Please try again.`);
        return setNumAtFaultAccidents();
    }
}

function setTotalBill() {
    totalBill = 0;
    const BASE_PRICE = 100,
        YOUNG_DRIVER_FEE = 20,
        MIDDLE_AGE_DRIVER_FEE = 10,
        OLD_AGE_DRIVER_FEE = 30;
    if (numCustomerAge > 0) {
        if (numCustomerAge > 0 && numCustomerAge < 15) {
            totalBill = BASE_PRICE + numAtFaultAccidents * 50;
        } else if (numCustomerAge >= 15 && numCustomerAge <30) {
            totalBill = BASE_PRICE + YOUNG_DRIVER_FEE + numAtFaultAccidents * 50;
        } else if (numCustomerAge >= 30 && numCustomerAge < 45) {
            totalBill = BASE_PRICE + MIDDLE_AGE_DRIVER_FEE + numAtFaultAccidents * 50;
        } else if (numCustomerAge >= 45 && numCustomerAge < 60) {
            totalBill = BASE_PRICE + numAtFaultAccidents * 50;
        } else {
            totalBill = BASE_PRICE + OLD_AGE_DRIVER_FEE + numAtFaultAccidents * 50;
        }
    }
}

function printTotalBill() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${customerLastName}'s bill: \$${totalBill}. Customer Poilicy #: ${numPolicyNumber}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}