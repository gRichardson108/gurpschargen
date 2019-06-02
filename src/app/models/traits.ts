/**
 * Represents a trait (an Attribute, Advantage/Disadvantage, or Skill)
 * before it has been purchased, in an abstract form.
 */
export interface ICharacterTrait {
    name: string;
    description: string;
    abbrev?: string;
    category?: string;
    getEffectiveLevel(pointsSpent: number): number;
}

export class PurchasedCharacterTrait {
    trait: ICharacterTrait;
    pointsSpent: number;
    effectiveLevel: number;
}