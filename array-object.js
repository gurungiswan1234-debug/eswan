let ProductInfo = {
    productName: "Product 1",
    productPrice: 100,
    productQuantity: 10,
    productDescription: "Product 1 Description",
    productImage: "Product 1 Image",
    productCategory: "Product 1 Category",
    productBrand: "Product 1 Brand",
    productRating: 4.5,
    productReviews: 100,
    productStock: 100,
    productCreatedAt: "2021-01-01",
    productUpdatedAt: "2021-01-01",
    availableStores: ["Store 1", "Store 2", "Store 3"]
}
console.log(ProductInfo.availableStores);
console.log(ProductInfo.availableStores[0]);
console.log(ProductInfo);
delete ProductInfo.productPrice;
ProductInfo.legend= "Eswan"
console.log(ProductInfo);


//Array of objects
let allProducts = [
    {name:"iphone 11", price:12000, quantity: 10},
    {name:"iphone 12", price:22000, quantity: 20},
    {name:"iphone 13", price:32000, quantity: 30}
]
console.log(allProducts);
console.log(allProducts[0]);
console.log(allProducts[0].name);


const provinceList = [
    {provinceId:1, name:"Koshi", nepName: "Koshi", districtCount:14},
    {provinceId:2, name:"Madesh", nepName: "Madesh", districtCount:13},
    {provinceId:3, name:"Bagmati", nepName: "Bagmati", districtCount:12},
    {provinceId:4, name:"Gandaki", nepName: "Gandaki", districtCount:11},
    {provinceId:5, name:"Lumbini", nepName: "Lumbini", districtCount:10},
    {provinceId:6, name:"Karnali", nepName: "Karnali", districtCount:9},
    {provinceId:7, name:"Sudurpashchim", nepName: "Sudurpashchim", districtCount:8}
]

const districtList = [
    // Province 1 - Koshi
    { districtId: 1, name: "Bhojpur", provinceId: 1 },
    { districtId: 2, name: "Dhankuta", provinceId: 1 },
    { districtId: 3, name: "Ilam", provinceId: 1 },
    { districtId: 4, name: "Jhapa", provinceId: 1 },
    { districtId: 5, name: "Khotang", provinceId: 1 },
    { districtId: 6, name: "Morang", provinceId: 1 },
    { districtId: 7, name: "Okhaldhunga", provinceId: 1 },
    { districtId: 8, name: "Panchthar", provinceId: 1 },
    { districtId: 9, name: "Sankhuwasabha", provinceId: 1 },
    { districtId: 10, name: "Solukhumbu", provinceId: 1 },
    { districtId: 11, name: "Sunsari", provinceId: 1 },
    { districtId: 12, name: "Taplejung", provinceId: 1 },
    { districtId: 13, name: "Terhathum", provinceId: 1 },
    { districtId: 14, name: "Udayapur", provinceId: 1 },
  
    // Province 2 - Madhesh
    { districtId: 15, name: "Bara", provinceId: 2 },
    { districtId: 16, name: "Dhanusha", provinceId: 2 },
    { districtId: 17, name: "Mahottari", provinceId: 2 },
    { districtId: 18, name: "Parsa", provinceId: 2 },
    { districtId: 19, name: "Rautahat", provinceId: 2 },
    { districtId: 20, name: "Saptari", provinceId: 2 },
    { districtId: 21, name: "Sarlahi", provinceId: 2 },
    { districtId: 22, name: "Siraha", provinceId: 2 },
  
    // Province 3 - Bagmati
    { districtId: 23, name: "Bhaktapur", provinceId: 3 },
    { districtId: 24, name: "Chitwan", provinceId: 3 },
    { districtId: 25, name: "Dhading", provinceId: 3 },
    { districtId: 26, name: "Dolakha", provinceId: 3 },
    { districtId: 27, name: "Kathmandu", provinceId: 3 },
    { districtId: 28, name: "Kavrepalanchok", provinceId: 3 },
    { districtId: 29, name: "Lalitpur", provinceId: 3 },
    { districtId: 30, name: "Makwanpur", provinceId: 3 },
    { districtId: 31, name: "Nuwakot", provinceId: 3 },
    { districtId: 32, name: "Ramechhap", provinceId: 3 },
    { districtId: 33, name: "Rasuwa", provinceId: 3 },
    { districtId: 34, name: "Sindhuli", provinceId: 3 },
    { districtId: 35, name: "Sindhupalchok", provinceId: 3 },
  
    // Province 4 - Gandaki
    { districtId: 36, name: "Baglung", provinceId: 4 },
    { districtId: 37, name: "Gorkha", provinceId: 4 },
    { districtId: 38, name: "Kaski", provinceId: 4 },
    { districtId: 39, name: "Lamjung", provinceId: 4 },
    { districtId: 40, name: "Manang", provinceId: 4 },
    { districtId: 41, name: "Mustang", provinceId: 4 },
    { districtId: 42, name: "Myagdi", provinceId: 4 },
    { districtId: 43, name: "Nawalpur", provinceId: 4 },
    { districtId: 44, name: "Parbat", provinceId: 4 },
    { districtId: 45, name: "Syangja", provinceId: 4 },
    { districtId: 46, name: "Tanahun", provinceId: 4 },
  
    // Province 5 - Lumbini
    { districtId: 47, name: "Arghakhanchi", provinceId: 5 },
    { districtId: 48, name: "Banke", provinceId: 5 },
    { districtId: 49, name: "Bardiya", provinceId: 5 },
    { districtId: 50, name: "Dang", provinceId: 5 },
    { districtId: 51, name: "Eastern Rukum", provinceId: 5 },
    { districtId: 52, name: "Gulmi", provinceId: 5 },
    { districtId: 53, name: "Kapilvastu", provinceId: 5 },
    { districtId: 54, name: "Parasi", provinceId: 5 },
    { districtId: 55, name: "Palpa", provinceId: 5 },
    { districtId: 56, name: "Pyuthan", provinceId: 5 },
    { districtId: 57, name: "Rolpa", provinceId: 5 },
    { districtId: 58, name: "Rupandehi", provinceId: 5 },
  
    // Province 6 - Karnali
    { districtId: 59, name: "Dailekh", provinceId: 6 },
    { districtId: 60, name: "Dolpa", provinceId: 6 },
    { districtId: 61, name: "Humla", provinceId: 6 },
    { districtId: 62, name: "Jajarkot", provinceId: 6 },
    { districtId: 63, name: "Jumla", provinceId: 6 },
    { districtId: 64, name: "Kalikot", provinceId: 6 },
    { districtId: 65, name: "Mugu", provinceId: 6 },
    { districtId: 66, name: "Salyan", provinceId: 6 },
    { districtId: 67, name: "Surkhet", provinceId: 6 },
    { districtId: 68, name: "Western Rukum", provinceId: 6 },
  
    // Province 7 - Sudurpashchim
    { districtId: 69, name: "Achham", provinceId: 7 },
    { districtId: 70, name: "Baitadi", provinceId: 7 },
    { districtId: 71, name: "Bajhang", provinceId: 7 },
    { districtId: 72, name: "Bajura", provinceId: 7 },
    { districtId: 73, name: "Dadeldhura", provinceId: 7 },
    { districtId: 74, name: "Darchula", provinceId: 7 },
    { districtId: 75, name: "Doti", provinceId: 7 },
    { districtId: 76, name: "Kailali", provinceId: 7 },
    { districtId: 77, name: "Kanchanpur", provinceId: 7 }
  ];

const localDevCommitteeList = [
    const localDevCommitteeList = [
        //level 1
        { districtId: 1, localDevCommitteeId: 1, name: "Ilam Municipality", ward: 12 },
        { districtId: 1, localDevCommitteeId: 2, name: "Deumai Municipality", ward: 9 },
        { districtId: 1, localDevCommitteeId: 3, name: "Mai Municipality", ward: 10 },
        { districtId: 1, localDevCommitteeId: 4, name: "Suryodaya Municipality", ward: 14 },
        { districtId: 1, localDevCommitteeId: 5, name: "Chulachuli Rural Municipality", ward: 6 },
        { districtId: 1, localDevCommitteeId: 6, name: "Fakfokthum Rural Municipality", ward: 7 },
        { districtId: 1, localDevCommitteeId: 7, name: "Mangsebung Rural Municipality", ward: 6 },
        { districtId: 1, localDevCommitteeId: 8, name: "Mai Jogmai Rural Municipality", ward: 6 },
        { districtId: 1, localDevCommitteeId: 9, name: "Rong Rural Municipality", ward: 8 },
        { districtId: 1, localDevCommitteeId: 10, name: "Sandakpur Rural Municipality", ward: 5 }, 

        //level 2
    ];
]
