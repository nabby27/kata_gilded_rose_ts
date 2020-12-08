import { CustomItem } from "./CustomItem";
import { Item } from "../Item";

export class BackstageItem implements CustomItem {
    
    readonly maxQuality = 50;

    constructor(
        private _item: Item
    ) {}

    updateQuality(): void {
        this.increaseQuality();

        if (this.item.sellIn < 11) {
            this.increaseQuality();
        }
        
        if (this.item.sellIn < 6) {
            this.increaseQuality();
        }

        if (this.item.sellIn < 0) {
            this.item.quality = 0;
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