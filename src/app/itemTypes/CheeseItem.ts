import { CustomItem } from "./CustomItem";
import { Item } from "../Item";

export class CheeseItem implements CustomItem {
 
    readonly maxQuality = 50;

    constructor(
        private _item: Item
    ) {}

    updateQuality(): void {
       this.increaseQuality();

        if (this._item.sellIn < 0) {
            this.increaseQuality();
        }
    }

    updateSellIn(): void {
        this.item.sellIn--;
    }

    get item(): Item {
        return this._item;
    }

    private increaseQuality() {
        if (this.item.quality < this.maxQuality) {
            this.item.quality++
        }
    }
}