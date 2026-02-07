export const filtredProducts = (products, categoryKey, sort, search, price)=>{
   if(!products) return [];

   return products

   // filter category
   .filter(product => {
      if(categoryKey === "All") return true;
      return product.categoryKey === categoryKey
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