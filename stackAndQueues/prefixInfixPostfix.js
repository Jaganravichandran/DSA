// Prefix, Infix, Postfix conversion

// Prefix => the operations are before the operands. Eg: *+pq-mn
// Infix => Every operations are in-between the operands. Eg: (p+g)*(m-n)
// Postfix => the operations are after the operands. Eg: pg+mn-*

// convert Infix to Postfix -> check infixToPostfix.js in stackAndQueues folder

// Steps
// 1) traverse the infix expression
// 2) if the character is operand, add it to ans
// 3) if the character is "(", push it to stack
// 4) if the character is ")", pop all until "(" is found in the stack
// 5) after traversing, pop remaining characters from the stack to ans
// 6) return ans

// convert Infix to Prefix -> check infixToPrefix.js in stackAndQueues folder

// Steps
// 1) reverse the string and swap parentheses ( -> ), ) -> (
// 2) infix to postfix under some controlled condition
// 3) reverse the ans

// convert Postfix to infix -> check postfixToInfix.js in stackAndQueues folder

// steps
// 1) traverse postfix expression from left to right
// 2) if the character is operand (a-z, A-Z, 0-9), push it onto the stack
// 3) if the character is operator (+, -, *, /, ^) then
// pop top two elements from the stack
// form infix expression => exp = (t2 + operator(current char) + t1)
// push this new expression onto the stack
// 4) after traversal, return stack.pop() because stack which will contain only one element.

// convert Prefix to infix -> check pretfixToInfix.js in stackAndQueues folder

// steps
// 1) traverse prefix expression from right to left
// 2) if the character is operand (a-z, A-Z, 0-9), push it onto the stack
// 3) if the character is operator (+, -, *, /, ^) then
// pop top two elements from the stack
// form infix expression => exp = (t1 + operator(current char) + t2)
// push this new expression onto the stack
// 4) after traversal, return stack.pop() because stack which will contain only one element.

// convert postfix to prefix -> check postfixToPrefix.js in stackAndQueues folder

// steps
// 1) traverse postfix expression from left to right
// 2) if the character is operand (a-z, A-Z, 0-9), push it onto the stack
// 3) if the character is operator (+, -, *, /, ^) then
// pop top two elements from the stack
// form prefix expression => exp = operator(current char) + t2 + t1
// push this new expression onto the stack
// 4) after traversal, return stack.pop() because stack which will contain only one element.

// convert prefix to postfix -> check prefixToPostfix.js in stackAndQueues folder

// steps
// 1) traverse prefix expression from right to left
// 2) if the character is operand (a-z, A-Z, 0-9), push it onto the stack
// 3) if the character is operator (+, -, *, /, ^) then
// pop top two elements from the stack
// form postfix expression => exp = t1 + t2 + operator(current char)
// push this new expression onto the stack
// 4) after traversal, return stack.pop() because stack which will contain only one element.
