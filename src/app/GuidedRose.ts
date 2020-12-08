import { FactoryItem } from "./FactoryItem";
import { Item } from "./Item";

export class GildedRose {

    constructor(
        private items: Item[]
    ) {}

    updateQuality(): Item[] {
        const updatedItems: Item[] = this.items.map((item: Item) => {
            const customItem = new FactoryItem(item).create();
            customItem.updateSellIn();
            customItem.updateQuality();

            return customItem.item;
        })

        return updatedItems;
    }
}