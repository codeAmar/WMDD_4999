// this file contain the code for lambda addition function deployed on AWS
exports.handler = function (event, context, callback) {
    console.log("value2 = " + event.key2);
    console.log('lambda loading');
    let numberOne = Number(event.numberOne);
    let numberTwo = Number(event.numberTwo);
    let sum = numberOne + numberTwo;
    callback(null, sum);
    // or 
    // callback("some error type"); 
}