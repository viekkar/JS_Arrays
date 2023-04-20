

class A {
    showij(i, j) {
      this.i = i;
      this.j = j;
  
      document.write("i=" + this.i + "<br>");
      document.write("j=" + this.j + "<br>");
    }
  }
  
  class B extends A {
    showk(k) {
      this.k = k;
      document.write("k=" + this.k + "<br>");
    }
  
    sum() {
      let z = this.i + this.j;
      document.write("sum is: " + z);
    }
  }
  
  let bo = new B();
  bo.showij(10, 20);
  bo.showk(30);
  bo.sum();


