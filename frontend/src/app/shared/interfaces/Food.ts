// create the food model
export class Food{
    // notice ! means => required, ? means => optional
    id!:string;
    name!: string;
    description?: string;
    price!:number;
    type?:string[];
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
    tags?: string[]
}