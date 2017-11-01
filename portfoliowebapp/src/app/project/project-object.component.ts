export class Project {
  // Fields
  id: number;
  name: String;
  image: String;
  hyperLink: String;
  description: String

  // Constructor
  constructor(id: number, name: String, image: String, hyperLink: String, description: String){
    this.id = id;
    this.name = name;
    this.image = image;
    this.hyperLink = hyperLink;
    this.description = description;
  }
}
