class Inventory
{
     constructor(name,quantity,price)
    {
        this.product=name;
        this.productquantity=quantity;
        this.productprice=price;

    }


}
let obj1=new Inventory("Laptop",10,1200.50);
console.log(obj1.product);
console.log(obj1.productquantity);
console.log(obj1.productprice);
let obj2=new Inventory("mobile",20,8000.50);
console.log(obj2.product);
console.log(obj2.productquantity);
console.log(obj2.productprice);
