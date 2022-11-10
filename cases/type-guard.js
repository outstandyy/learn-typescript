/**
 * A type guard is a TypeScript technique used to get information about the type of `a` variable, usually within a conditional block.
 * Type guards are regular functions that return a boolean,
 * taking a type and telling TypeScript if it can be narrowed down to something more specific.
 * Type guards have the unique property of assuring that the value tested is of a set type depending on the returned boolean.
 *
 * Types of type guards:
 *  1. `instanceof`
 *  2. `typeof`
 *  3. `in`
 *  4. `===`
 *  5. custom type guard
 */
var Necklace = /** @class */ (function () {
    function Necklace(brand, kind) {
        this.brand = brand;
        this.kind = kind;
    }
    return Necklace;
}());
var accessory = new Necklace('choker', 'TASAKI');
if (Accessory instanceof bracelet) {
    console.log(Accessory.year);
}
