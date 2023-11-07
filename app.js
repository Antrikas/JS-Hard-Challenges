//function showRating(rating) {
//let ratings = "";
//for (let i = 0; i < Math.floor(rating); ++i){
  //  ratings = ratings + "*"
    //if (i !== Math.floor(rating) -1) {
      //  ratings = ratings + " "
    //}
//}
//if (!Number.isInteger(rating)){
  //  ratings = ratings + " .";
//}
//return ratings
//}

//console.log(showRating(4.5))

//function sortLowToHigh(numbers) {
  //  return numbers.sort((a, b) => b- a);
//}
    
    
    //console.log(sortLowToHigh([1, 5, 0, 10, 8]));
    
    //function sortHighToLow(numbers) {
      //  return numbers.sort((a, b) => {
        //    return b.price - a.price
       // });
    //}
        
        
      //  console.log(sortHighToLow([
        //    {id: 1, price: 50},
          //  {id: 1, price: 0},
            //{id: 1, price: 500}
        //])
       // );

async function postsByUser (userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    
    const result = await promise.json();

    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}

postsByUser (4);
