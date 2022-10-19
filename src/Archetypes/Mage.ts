import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  energyType: EnergyType;
  static instance = 0;
    
  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.instance += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.instance;
  }
}

export default Mage;