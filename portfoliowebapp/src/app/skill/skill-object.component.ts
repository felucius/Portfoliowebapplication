export class Skill{
  // Fields
  id: number;
  name: String;
  image: String;
  framework: String;

  // Constructor
  constructor(id: number, name: String, image: String, framework: String){
    this.id = id;
    this.name = name;
    this.image = image;
    this.framework = framework;
  }
}
