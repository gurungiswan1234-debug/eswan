const query =async()=>{
    return {}
}

const login = async(username, password)=>{
try{
        const resolve = await query("")
        //synchronous 
        console.log("Resolve receive",resolve);
}
catch(exception)
{
    console.log("rejected promise receives",exception)
}
}
login ("username", "password")



const productDetails=[
    {Name: "Iphone", Price: 1000000, discount: 10},
    {Name: "samsung", Price: 300000, discount: 15},
    {Name: "xiaomi", Price: 500000, discount: 5},
    {Name: "sony", Price: 200000, discount: 20}
]

const getDiscountAmt =async(Price, discount)=>{
    return Price * discount/100;
}

const priceAfterDiscount = async(Price, DisAmt)=>{
    return Price - DisAmt;
}
const PrintProductDetails =(prod)=>{
    console.log(`Name: ${prod.Name}`);
    console.log(`Price: ${prod.Price}`);
    console.log(`discount in percentage: ${prod.discount}`);
    console.log(`discount amount: ${prod.DisAmt}`);
    console.log(`final price: ${prod.finalPrice}`);
    console.log(`****************************************`);

}

productDetails.map(async(prod)=>{
    prod.DisAmt = await getDiscountAmt(prod.Price, prod.discount);
    prod.finalPrice = await priceAfterDiscount(prod.Price, prod.DisAmt);
    await PrintProductDetails(prod)
})