import { ICharacterTrait } from "./traits";

export class Advantage implements ICharacterTrait{
    name: string = '';
    description: string = '';
    category: string = '';
    cost: number = 0;
    levelled: boolean = false;
    selfControlRoll: number = 0;
    type: AdvantageType | undefined;
    isMental: boolean = false;
    isPhysical: boolean = false;
    isSocial: boolean = false;
    isExotic: boolean = false;
    isSupernatural: boolean = false;

    getEffectiveLevel(pointsSpent: number): number {
        if (this.levelled){
            return Math.floor(pointsSpent/this.cost);
        } else {
            return pointsSpent > this.cost ? 1 : 0;
        }
    }
}

enum AdvantageType {
    Advantage = 'Advantage',
    Disadvantage = 'Disadvantage',
    Perk = 'Perk',
    Quirk = 'Quirk'
}