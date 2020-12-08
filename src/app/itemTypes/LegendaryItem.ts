import { CustomItem } from "./CustomItem";
import { Item } from "../Item";

export class LegendaryItem implements CustomItem {
    
    readonly maxQuality = 50;

    constructor(
        private _item: Item
    ) {}

    updateQuality(): void {
        this.item.quality = this.item.quality;
    }

    updateSellIn(): void {
        this.item.sellIn = this.item.sellIn;
    }

    get item(): Item {
        return this._item;
    }
}