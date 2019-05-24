import { Attribute } from "./attribute";
import { ICharacterTrait } from "./traits";

export class Skill implements ICharacterTrait {
    category: string = 'Skill';
    name: string = '';
    attribute: Attribute | undefined;
    requiresSpecialization: boolean = false;
    difficulty: SkillDifficulty = SkillDifficulty.VeryHard;
    isWildcard: boolean = false;
    description: string = '';
    classification: SkillClassification = SkillClassification.Knowledge;

    getEffectiveLevel(pointsSpent: number): number {
        throw new Error("Method not implemented.");
    }
}

enum SkillDifficulty {
    Easy,
    Average,
    Hard,
    VeryHard
}

enum SkillClassification {
    Knowledge,
    Combat
}