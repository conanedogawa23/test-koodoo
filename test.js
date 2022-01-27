const accountTypeChecker = (accountBalanceHistory) => {
    let isAmountDifferenceSame = true;
    if (accountBalanceHistory && accountBalanceHistory instanceof Array && accountBalanceHistory.length > 1) {
        let differentAmount = accountBalanceHistory[1].account.balance.amount - accountBalanceHistory[0].account.balance.amount;
        let accountBalanceHistoryLength = accountBalanceHistory.length - 1;
        // forEach can also be used but to simplify the reverse loop i used the for loop as i am assuming that array item is sort in ascendig manner by month number.
        for (let index = accountBalanceHistoryLength; index > 1; index--) {
            let diffAmount = accountBalanceHistory[index].account.balance.amount - accountBalanceHistory[index - 1].account.balance.amount;
            if (diffAmount === differentAmount) {
                isAmountDifferenceSame = true;
            } else {
                isAmountDifferenceSame = false;
            }
            // if isAmountDifferenceSame is not false then can break the loop
            if (!isAmountDifferenceSame) {
                break;
            }
        }
    }
    return isAmountDifferenceSame ? "B" : "A";
}

const accountBalanceHistory1 = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 450 },
        },
    }
];

const accountBalanceHistory2 = [];

const accountBalanceHistory3 = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 150 },
        },
    },
    {
        monthNumber: 1, // current month
        account: {
            balance: { amount: 400 },
        },
    },
    {
        monthNumber: 2, // current month
        account: {
            balance: { amount: 750 },
        },
    },
    {
        monthNumber: 3, // current month
        account: {
            balance: { amount: 1050 },
        },
    },
    {
        monthNumber: 3, // current month
        account: {
            balance: { amount: 1350 },
        },
    }
];

const accountBalanceHistory4 = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 50 },
        },
    },
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 100 },
        },
    }
];

const accountBalanceHistory5 = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 50 },
        },
    },
    {
        monthNumber: 1, // current month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // current month
        account: {
            balance: { amount: 150 },
        },
    }
];

let accountTypeCheckerResult = accountTypeChecker(accountBalanceHistory5);

console.log('accountTypeCheckerResult', accountTypeCheckerResult);
