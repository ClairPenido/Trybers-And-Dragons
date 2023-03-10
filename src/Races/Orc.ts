import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;
  static instance = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.instance += 1;
  }

  public static createdRacesInstances(): number {
    return Orc.instance;
  }
}

export default Orc;