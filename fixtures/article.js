/* sources:
- https://youtu.be/Bv_5Zv5c-Ts
- https://en.wikipedia.org/ 
*/

articleList = [
  {
    title: 'Syntax Parser',
    summary: "A program that reads your code and determines what it does and if it's grammar is valid",
    body: "The traditional grammatical exercise of parsing, sometimes known as clause analysis, involves breaking down a text into its component parts of speech with an explanation of the form, function, and syntactic relationship of each part. This is determined in large part from study of the language's conjugations and declensions, which can be quite intricate for heavily inflected languages. To parse a phrase such as 'man bites dog' involves noting that the singular noun 'man' is the subject of the sentence, the verb 'bites' is the third person singular of the present tense of the verb 'to bite', and the singular noun 'dog' is the object of the sentence. Techniques such as sentence diagrams are sometimes used to indicate relation between elements in the sentence.",
    slug: 'syntax-parser'
  },
  {
    title: 'lexical environment',
    summary: "Where something sits physically in the code you write",
    body: "The specification of a programming language often includes a set of rules, the lexical grammar, which defines the lexical syntax. The lexical syntax is usually a regular language, with the grammar rules consisting of regular expressions; they define the set of possible character sequences (lexemes) of a token. A lexer recognizes strings, and for each kind of string found the lexical program takes an action, most simply producing a token.",
    slug: 'lexical-environment'
  },
  {
    title: 'execution context',
    summary: "A wrapper to help manage the code that is running",
    body: "Execution in computer and software engineering is the process by which a computer or virtual machine executes the instructions of a computer program. Each instruction of a program is a description of a specific action to be carried out in order for a specific problem to be solved; as instructions of a program and therefore the actions they describe are being carried out by an executing machine, specific effects are produced in accordance to the semantics of the instructions being executed.",
    slug: 'execution-context'
    },
  {
    title: 'expression',
    summary: "A block of code that results in a value",
    body: "An expression in a programming language is a combination of one or more constants, variables, operators, and functions that the programming language interprets (according to its particular rules of precedence and of association) and computes to produce ('to return', in a stateful environment) another value. This process, as for mathematical expressions, is called evaluation.",
    slug: 'expression'
  },
  {
    title: 'arguments',
    summary: "Values you give your program that affect how it runs",
    body: "In computer programming, a parameter or a formal argument, is a special kind of variable, used in a subroutine to refer to one of the pieces of data provided as input to the subroutine. These pieces of data are the values of the arguments (often called actual arguments or actual parameters) with which the subroutine is going to be called/invoked. An ordered list of parameters is usually included in the definition of a subroutine, so that, each time the subroutine is called, its arguments for that call are evaluated, and the resulting values can be assigned to the corresponding parameters.",
    slug: 'arguments'
  },
  {
    title: 'object literal',
    summary: "name/value pairs separated by commas and surrounded by curly braces",
    body: "In computer science, a literal is a notation for representing a fixed value in source code. Almost all programming languages have notations for atomic values such as integers, floating-point numbers, and strings, and usually for booleans and characters; some also have notations for elements of enumerated types and compound values such as arrays, records, and objects. An anonymous function is a literal for the function type.",
    slug: 'object-literal'
  },
  {
    title: 'callback function',
    summary: "A function passed to some other function, which we assume will be invoked at some point",
    body: "In computer programming, a callback, also known as a 'call-after' function, is any executable code that is passed as an argument to other code that is expected to call back (execute) the argument at a given time. This execution may be immediate as in a synchronous callback, or it might happen at a later time as in an asynchronous callback. Programming languages support callbacks in different ways, often implementing them with subroutines, lambda expressions, blocks, or function pointers.",
    slug: 'callback-function'
  }
]

module.exports = articleList;