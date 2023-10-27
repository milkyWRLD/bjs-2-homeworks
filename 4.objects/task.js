function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = "";
    this.marks = [];
    this.excluded = "";
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName || undefined;
};

Student.prototype.addMarks = function (...marksToAdd) {
    if (!this.excluded) {
        this.marks.push(...marksToAdd);
    }
};

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    } else {
        const sum = this.marks.reduce((total, mark) => total + mark, 0);
        return sum / this.marks.length;
    }
};

Student.prototype.exclude = function (reason) {
    this.subject = undefined;
    this.marks = undefined;
    this.excluded = reason;
};
