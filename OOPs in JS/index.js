// class a 
// {
// show()
// {

//     document.write("Hello i am in a class...");
// }

// }

// let ao = new a();
// ao.show();

// let ao2 = new A();


class A {

    hello()
    {
        document.write("HEllo im method");
    }

    constructor(x, y)

          {

             let z = x + y;
               document.write("Hello im a contructor " + z + "<br>");

          }


}

let obj = new A(2,4);
obj.hello();