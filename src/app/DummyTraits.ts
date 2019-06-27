import { PurchasedCharacterTrait } from "./models/traits";
import { AttributeType, Attribute } from "./models/attribute";
import { Advantage } from "./models/advantage";

export const ATTRIBUTES: Attribute[] = [
    Object.assign(new Attribute(), { name: 'Strength', abbrev: 'ST', cost: 10, type: AttributeType.Primary, description: '' }),
    Object.assign(new Attribute(), { name: 'Dexterity', abbrev: 'DX', cost: 20, type: AttributeType.Primary, description: '' }),
    Object.assign(new Attribute(), { name: 'Intelligence', abbrev: 'IQ', cost: 20, type: AttributeType.Primary, description: '' }),
    Object.assign(new Attribute(), { name: 'Health', abbrev: 'HT', cost: 10, type: AttributeType.Primary, description: '' }),
];

export const ADVANTAGES: Advantage[] = [
    Object.assign(new Advantage(), { name: 'Daredevil', cost: 15, type: Advantage }),
    Object.assign(new Advantage(), { name: 'High Pain Threshold', cost: 15, type: Advantage }),
]

export const PURCHASED = {
    "Strength" : Object.assign(new PurchasedCharacterTrait(), {trait: ATTRIBUTES[0], pointsSpent: 0, effectiveLevel: 0}),
    "Dexterity" : Object.assign(new PurchasedCharacterTrait(), {trait: ATTRIBUTES[1], pointsSpent: 0, effectiveLevel: 0}),
    "Intelligence" : Object.assign(new PurchasedCharacterTrait(), {trait: ATTRIBUTES[2], pointsSpent: 0, effectiveLevel: 0}),
    "Health" : Object.assign(new PurchasedCharacterTrait(), {trait: ATTRIBUTES[3], pointsSpent: 0, effectiveLevel: 0}),
    "Daredevil" : Object.assign(new PurchasedCharacterTrait(), {trait: ADVANTAGES[0], pointsSpent: 0, effectiveLevel: 0}),
    "High Pain Threshold" : Object.assign(new PurchasedCharacterTrait(), {trait: ADVANTAGES[1], pointsSpent: 0, effectiveLevel: 0}),
}