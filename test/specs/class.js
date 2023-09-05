let  a = 5

class Sample
{
    constructor()
    {
        this.b= a
    }
    demo()
    {
        console.log(a);
        console.log(a+5);
    }

}
let s = new Sample()
s.demo()
console.log(s.b);