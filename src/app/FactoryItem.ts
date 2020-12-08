import { BackstageItem } from "./itemTypes/BackstageItem";
import { CheeseItem } from "./itemTypes/CheeseItem";
import { ConjuredItem } from "./itemTypes/ConjuredItem";
import { CustomItem } from "./itemTypes/CustomItem";
import { Item } from "./Item";
import { LegendaryItem } from "./itemTypes/LegendaryItem";
import { NormalItem } from "./itemTypes/NormalItem";

export class FactoryItem {
    
    constructor(
        private item: Item
    ) {}

    create(): CustomItem {
        if (this.item.name === 'Aged Brie') {
            return new CheeseItem(this.item);
        }

        if (this.item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            return new BackstageItem(this.item);
        }

        if (this.item.name === 'Sulfuras, Hand of Ragnaros') {
            return new LegendaryItem(this.item);
        }

        if (this.item.name === 'Conjured Mana Cake') {
            return new ConjuredItem(this.item);
        }

        return new NormalItem(this.item);
    }
}