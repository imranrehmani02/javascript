/**
 * Datatypes:- 
 * 1) Primitive:-    (Pracheen) 
 *      Number:-    1,2.3,63.932
*       String :-  "ratlam"
        Boolean:- true/false


        2)  Non Primitive:- 
            Object:-  {"key": value};
            Array:-  [1,'aman',6.3, false]
            Function:-  function abc(){}
            Stack:-  Stack[]
                    stack.push();
                    stack.pop();
            Map:-  keyed data items
                        {key: value};

            Symbol:- let Symbol()


        3)  Other concepts
            Null:-   let i = null;
            NAN:-    let j = false;
            Undefined   let k
 */

            // String
            var a = "hello"
            console.log(a)  // hello


            // Number
            var b = 23;
            var c = 56.89;
            console.log(b) // 23
            console.log(c) // 56.89


            // Boolean
            var d = false;
            var e = true;
            console.log(d) // false
            console.log(e) // true


            // Object
            var f = {
                'integer': 56,
                'float': 78.36,
                'string': "Advance JS",
                'boolean': true
            }

            console.log(f)      // Print Object
            console.log(f.string)      // "Advance JS"
            console.log(f.float)      // 78.36



            // Array
            var g = ['ABC', 569, 85.69, false];
            console.log(g)   // print array
            console.log(g[0])   // 'ABC'
            console.log(g[2])   // 85.69    


            // Null
            var h = null;
            console.log(h)      // null



            // NaN
            var i = isNaN("Check Not a number");   // true
            var j = isNaN(25);  // false
            var k = isNaN('25');  // false
            var l = isNaN('2k15');  // true
            
            console.log("'Check Not a number':- ",i) // true
            console.log("25:- ",j) // false
            console.log("'25':- ",k) // false
            console.log("'2k15':- ",l) // true


            // Undefined
            var k;
            console.log(k)      // Undefined