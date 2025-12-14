export const allItems = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}`
}));
allItems[Symbol.iterator] = function* (visibleItems){
    let length = this.length
    let loop = Math.ceil(length/visibleItems)
    for(let i=2;i<=loop;i++){
    
        yield  this.slice(0,i*visibleItems)
      
    }
}


