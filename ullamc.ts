class Engineer extends Individual {
  private experience: number;

  constructor(name: string, age: number, experience: number) {
    super(name, age);
    this.experience = experience;
  }

  public getExperience(): number {
    return this.experience;
  }

  public work(project: Project): void {
    console.log(`${this.name} is working on ${project.getName()}`);
  }
}
