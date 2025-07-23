export interface Product {
    id:string | number;
    title:string;
    description:string;
    price:number;
    images:string[]
    imageCover:string;
    onSale:boolean;
    quantity:number;
    
}
