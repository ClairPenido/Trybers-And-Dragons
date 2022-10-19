import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  energyType: EnergyType;
  static instance = 0;
    
  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.instance += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.instance;
  }
}

export default Ranger;