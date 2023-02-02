const imamap = new Map();
imamap.set("car", "vroom");
imamap.set("cat", "meow");

for (const [key, value] of imamap) {
    console.log(`${key} says ${value}`);
}

const aSet = new Set();
aSet.add(1);
aSet.add(2);
aSet.has(2);

aSet.delete(1);
aSet.size;
aSet.add(3);

for (const item of aSet) {
    console.log(item);
}
