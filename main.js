// !1. Array reduce vasitesi ile asagidaki arrayde nece neferin "Vote" etdiyini qaytarin. Meselen 4 neferde "
// !voted:true " dursa return elesin 4.

// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//   ];
  
//   let totalVoted = voters.reduce((acc, current) => {
//     if (current.voted) {
//       return acc + 1;
//     } else {
//       return acc;
//     }
//   }, 0);
  
//   console.log(totalVoted);
  
//! 2. Array reduce vasitesile asagidaki arrayin qiymetleri cemini qaytarin:

// let wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// // Array.reduce() metodu istifadə edərək məhsul qiymətlərinin cəmini hesablamaq
// let totalPrice = wishlist.reduce((total, product) => total + product.price, 0);

// console.log("Wishlist-in ümumi qiyməti:", totalPrice);



//! 3.Daxil olunmuş string ən uzun sözü tapan function yazin.
//! string : 'Web Development Tutorial';
//! Output : 'Development'

// function uzunSozuTap(string) {

//     let sozler = string.split(' ');
//     let uzunSoz = '';
  

//     for (let i = 0; i < sozler.length; i++) {

//         if (sozler[i].length > uzunSoz.length) {
//             uzunSoz = sozler[i];
//         }
//     }
  
//     return uzunSoz;
// }

// let string = 'Web Development Tutorial';
// let enUzunSoz = uzunSozuTap(string);
// console.log("Ən uzun söz:", enUzunSoz);

// !4.Sətirdə hər sözün ilk hərfini böyük hərflə yazmaq üçün JavaScript funksiyasını yazın. 
// !console.log(capitalize_Words('js string exercises')); 
// !Output:"Js String Exercises"

// function capitalizeWords(string) {
//     let soz = string.split(' ');
//     for (let i = 0; i < soz.length; i++) {
//         soz[i] = soz[i].charAt(0).toUpperCase() + soz[i].slice(1).toLowerCase();
//     }
//     return soz.join(' ');
// }

// let verilenString = 'js string exercises';
// let yekun = capitalizeWords(verilenString);
// console.log(yekun); 




//!5.Verilmish stringdən müəyyən sayda sözə kəsmək üçün JavaScript funksiyasını yazın. 
// !console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); 
// !Output :"The quick brown fox"


// function truncate(string, sozSayi) {
//     let sozler = string.split(' ');

//     if (sozler.length > sozSayi) {
//         sozler = sozler.slice(0, sozSayi);
//     }sozSayi
//     return sozler.join(' ');
// }

// let verilenString = 'The quick brown fox jumps over the lazy dog';
// let sozSayi = 4;
// let yekun = truncate(verilenString, sozSayi);
// console.log(yekun);

  