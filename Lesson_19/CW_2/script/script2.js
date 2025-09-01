function User(name, age) {
     this.name = name;
     this.age = age;

        User.prototype.info = function () {
            return `${this.name}, ${this.age}`;
 }
};
