#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \tCURRENCY_CONVERTER\n"))

//Define the list of currencies and their exchange rate
const exchange_rate:any = {
    USD : 1 , //base currency
    EUR: 0.92,//Euro
    GBP: 0.78,//British pound
    AED:3.67,//united Arab Emarates Dirham
    TRY:32.23,//Turkish Lira
    HKD:7.81,//Hong Kong Dollar
    BDT:117.4,//Bangladesh Taka Tk.
    KWD:0.306,//Kuwaiti Dinar K.D
    SAR:3.75,//Saudi Riyal
    PKR : 278,//pakistan
};
//prompt the user to select currencies to convert from and to
let useranswer = await inquirer.prompt([
    {
        name:"from_currency",
        message:"Select the currency to convert from",
        type:"list",
    choices:["USD","EUR","GBP","AED","TRY","HKD","BDT","KWD","SAR","PKR"]        
},
{
    name:"to_currency",
    message:"Select the currency to convert into",
    type:"list",
    choices:["USD","EUR","GBP","AED","TRY","HKD","BDT","KWD","SAR","PKR"]  
},
{
    name:"amount",
    message:"Enter the amount to convert",
    type:"number"
}

])
//perform currency conversion by using formula
let from_amount = exchange_rate [useranswer.from_currency];//dynamic approach
let to_amount = exchange_rate[useranswer.to_currency];
let amount = useranswer.amount
//formula of conversion
let base_amount = amount / from_amount
let convertedamount = base_amount * to_amount
//display the converted amount
console.log(`Converted amount = ${chalk.green(convertedamount.toFixed(2))}`);



