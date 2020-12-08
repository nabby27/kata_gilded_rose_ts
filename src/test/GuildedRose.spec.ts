import { Item } from '../app/Item';
import { GildedRose } from '../app/GuidedRose';

describe('Guilded Rose', function () {

    it('At the end of each day our system lowers quality and sellIn values for every item', function () {
        const gildedRose = new GildedRose([new Item('Any item', 3, 5), new Item('Any other item', 4, 3)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Any item", sellIn: 2, quality: 4 });
        expect(items[1]).toEqual({ name: "Any other item", sellIn: 3, quality: 2 });
    });

    it('Once the sell by date has passed, quality degrades twice as fast', function () {
        const gildedRose = new GildedRose([new Item('Any item', 0, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Any item", sellIn: -1, quality: 3 });
    });

    it('The quality of an item is never negative', function () {
        const gildedRose = new GildedRose([new Item('Any item', 0, 0)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Any item", sellIn: -1, quality: 0 });
    });

    it('"Aged Brie" actually increases in quality the older it gets', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 3, 0)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Aged Brie", sellIn: 2, quality: 1 });
    });

    it('"Aged Brie" increases the quality twice as fast once the expiration date has passed', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Aged Brie", sellIn: -1, quality: 7 });
    });

    it('The quality of an item is never more than 50', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 50)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Aged Brie", sellIn: -1, quality: 50 });
    });

    it('"Sulfuras", being a legendary item, never has to be sold or decreases in quality', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 3, 10)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Sulfuras, Hand of Ragnaros", sellIn: 3, quality: 10 });
    });

    it('"Backstage passes", like aged brie, increases in quality as its sellIn value approaches', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 14, quality: 6 });
    });

    it('"Backstage passes" quality increases by 2 when there are 10 days', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 9, quality: 7 });
    });

    it('"Backstage passes" quality increases by 2 when there are 10 days but it does not exceed 50', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 9, quality: 50 });
    });

    it('"Backstage passes" quality increases by 3 when there are 5 days', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 8 });
    });

    it('"Backstage passes" quality increases by 3 when there are 5 days but it does not exceed 50', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 50 });
    });

    it('"Backstage passes" quality drops to 0 after the concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: -1, quality: 0 });
    });

    it('"Sulfuras" is a legendary item and as such its Quality is 80 and it never alters', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 });
    });

    it('"Conjured" items degrade in quality twice as fast as normal items', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 5, 10)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Conjured Mana Cake", sellIn: 4, quality: 8 });
    });

    it('"Conjured" items degrade in quality twice as fast as normal items when the expiration date has passed', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 10)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Conjured Mana Cake", sellIn: -1, quality: 6 });
    });

    it('"Conjured" items degrade in quality twice as fast as normal items but is never negative', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 5, 1)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Conjured Mana Cake", sellIn: 4, quality: 0 });
    });

    it('"Conjured" items degrade in quality twice as fast as normal items when the expiration date has passed but is never negative', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 1)]);

        const items = gildedRose.updateQuality();

        expect(items[0]).toEqual({ name: "Conjured Mana Cake", sellIn: -1, quality: 0 });
    });
});
