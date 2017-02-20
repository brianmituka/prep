var moringaStudent = {
    firstName: "Charlie",
    lastName: "Obina",
    level: 1,
    track: ["Ruby","JavaScript","Rails"],
    enrollmentStatus: true
  };
  console.log(moringaStudent.firstName);
  console.log(moringaStudent.level);
  console.log(moringaStudent.track);
  console.log(moringaStudent);
  document.write(moringaStudent);
  var dog = {};
dog.name = "puppy"
dog.age = 5
dog.colors = ["brown","black","white"]
dog.colors.push("grey")
dog.howl = function() { console.log("Aaaaaaaaaaaoooooooooooo!") }
dog.humanYears = function() {return this.age * 7}
