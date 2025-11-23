export const filtredProducts = (products, category, sort, search, price)=>{
   if(!products) return [];

   return products

   // filter category
   .filter(product => {
      if(category === "All") return true;
      return product.category === category
   })
   // filter price
   .filter(product => product.price <= price)
   // filter search
   .filter(product => product.nameKey.toLowerCase().includes(search.toLowerCase().trim()))
   // filter sort
   .sort((a,b)=>{
    if(sort === "Price: Low To High") return  a.price - b.price;
    if(sort === "Price: High To Low") return  b.price - a.price;
    return 0;
   })
}