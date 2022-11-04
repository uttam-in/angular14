export class Product {
    id: number | undefined;
    name: string | undefined;
    quantity: number | undefined;
    itemcost: number | undefined;
    totalCost!: number;
}