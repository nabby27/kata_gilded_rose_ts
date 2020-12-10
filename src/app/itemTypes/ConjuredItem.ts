import { CustomItem } from "./CustomItem";
import { Item } from "../Item";

export class ConjuredItem implements CustomItem {
    readonly maxQuality = 50;

    constructor(
        private _item: Item
    ) { }

    updateQuality(): void {
        this.decreaseQuality();
        this.decreaseQuality();

        if (this.item.sellIn < 0) {
            this.decreaseQuality();
            this.decreaseQuality();
        }
    }

    updateSellIn(): void {
        this.item.sellIn--;
    }

    get item(): Item {
        return this._item;
    }

    private decreaseQuality() {
        if (this.item.quality > 0) {
            this.item.quality--
        }
    }
}