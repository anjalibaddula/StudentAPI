const test = require("node:test");
const assert = require("node:assert");

test("Student API test", () => {
    let students = [
        { id: 1, name: "Rahul" }
    ];

    assert.equal(students.length, 1);
    assert.equal(students[0].name, "Rahul");
});