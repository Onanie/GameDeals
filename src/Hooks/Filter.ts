

export default function filter(option:string, list:any[]){
    console.log('filter option: ' + option);

    switch(option){
        case "dealRating":{
          list.sort((a, b) => (Number(a.dealRating) > Number(b.dealRating)) ? 1 : -1)
        break;
        }

        case "onSale":{
            list.filter(item => {
                return item.isOnSale === '1';
              });
            
            break;
        }

        case "salePrice":{
            list.sort((a, b) => (Number(a.salePrice) > Number(b.salePrice)) ? 1 : -1)
            break;
        }
default:
return list;
    }
    return list;
}