const students = [
    { id: 14, name: "deepJol" },
    { id: 21, name: "nisaSoda" },
    { id: 51, name: "moyuri" },
    { id: 25, name: "sabnur" },
];
const name = students.map((s) => s.name);
const ids = students.map((s) => s.id);
const bigger = students.filter((s) => s.id > 40);
console.log(bigger);