const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
.then(()=> console.log("Connection Successfully "))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const orderSchema = new Schema({
    item : String , 
    price : Number 
});
const Order = mongoose.model("Order" , orderSchema) ;
const CustomerSchema = new Schema({
    name : String , 
    orders : [  
        {   
            type : Schema.Types.ObjectId ,
            ref : "Order"
            
        }
    ]
}); 

CustomerSchema.post("findOneAndDelete" , async (customer)=>{
    if(customer.orders.length){
        let res = await Order.deleteMany({_id : {$in : customer.orders }}) ;
        console.log("Orders are also deleted ", res);
    }
});
const Customer = mongoose.model("Customer" , CustomerSchema) ;

const addCustomer = async()=> {
    let customer1 = new Customer({
        name : "Samarth" ,
    }
    );
    let order1 = await Order.findOne({item : "Book"});
    let order2 = await Order.findOne({item : "Pen"});   
    customer1.orders.push(order1);
    customer1.orders.push(order2);
    let result = await customer1.save() ; 
    console.log(result);
};
// addCustomer() ;
const showCustomer = async()=> {
    let result = await Customer.find().populate("orders") ; 
    console.log(result[0]);
};
// showCustomer() ;
const delCust = async()=> {
    let data = await Customer.findByIdAndDelete("68dfb20f45f058755e965b32") ;
    console.log(data);
};
delCust();
// const addOrders = async()=> {   
//     await Order.insertMany([
//         {item : "Book" , price : 200} ,
//         {item : "Pen" , price : 20} ,
//         {item : "Laptop" , price : 50000} ,
//         {item : "Mobile" , price : 20000} 
//     ]);
//     let result = await Order.find() ; 
//     console.log(result);
// }
// addOrders() ;