let left_operand = 30;
let right_operand = 40;
let operators = "-";
let ans;
switch(operators){
    case "+" :
        ans = left_operand + right_operand;
        break;
    case "-" :
        ans = left_operand - right_operand;
        break;
    case "*":
        ans = left_operand * right_operand;
        break
    case "/":
        ans = left_operand / right_operand;
        break;
    default:
        ans = NaN;
    }

console.log(ans);
