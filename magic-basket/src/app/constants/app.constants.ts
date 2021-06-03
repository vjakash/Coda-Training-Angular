export interface Item{
    name:string;
    type:ItemType;
    id:number;
}
export enum ItemType{
    Fruit='fruit',
    Vegetable='vegetable',
    Other='other'
}