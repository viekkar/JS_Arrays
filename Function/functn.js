/*function Information(name, city) {


  document.write("Your name is :" + name + "<br>");
  document.write("Your are stayed in :" + city + "<br>");
}

Information("akshay", "Mumbai");
Information("saroj", "Pune");
Information("dhumal", "selu");*/

function sum(english, maths, science) {
  var s = english + maths + science;
  return s;
}

function percentage(total) {
  var per = (total / 300) * 100;
  document.write(per + "%");
}

var p = sum(78, 78, 89);

percentage(p);
