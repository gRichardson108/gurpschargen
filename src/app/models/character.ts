import { Attribute } from "./attribute"
import { Skill } from "./skill";
import { Advantage } from "./advantage";

export class Character {
    id: number | undefined;
    name: string = '';
    attributes: Attribute[] = [];
    advantages: Advantage[] = [];
    skills: Skill[] = [];
}