class Person {
  constructor(name, age, gender, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
  }

  describePerson() {
    console.log(
      `This person is called ${this.name} and weighs ${this.weight} kgs`
    );
  }
}

const kev = new Person("kevin", 20, "male", 70);

kev.describePerson();

