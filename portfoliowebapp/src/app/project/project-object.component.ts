export class Project {
  // Fields
  id: number;
  name: String;
  image: String;
  hyperLink: String;

  // Constructor
  constructor(id: number, name: String, image: String, hyperLink: String){
    this.id = id;
    this.name = name;
    this.image = image;
    this.hyperLink = hyperLink;
  }
}
