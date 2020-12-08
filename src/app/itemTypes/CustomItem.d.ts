import { Item } from "../Item";

export interface CustomItem {

    readonly maxQuality: number;
    item: Item;
    
    updateSellIn(): void;
    updateQuality(): void;
}