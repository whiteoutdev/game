import {Attribute} from '../../../../framework/stats/attributes/Attribute';

export function checkAttributeNameAndBase(attribute: Attribute, name: string, base: number): void {
    expect(attribute.name).toBe(name);
    expect(attribute.base).toBe(base);
    expect(attribute.getBaseValue()).toBe(base);
}
