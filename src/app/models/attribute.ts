import { ICharacterTrait } from "./traits";

export class Attribute implements ICharacterTrait {
    name: string = '';
    abbrev: string = '';
    category?: string = '';
    cost: number = 0;
    type: AttributeType = AttributeType.Primary;
    description: string = '';

    getEffectiveLevel(pointsSpent: number): number {
        return Math.floor(pointsSpent/this.cost);
    }
}

export enum AttributeType {
    Primary,
    Secondary
}