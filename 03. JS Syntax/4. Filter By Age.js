function filterByAge(limitAge, name1, age1, name2, age2) {
    let person1 = {name:name1, age:age1}, person2 = {name:name2, age:age2};

    if (person1.age >= limitAge)
        console.log(person1);

    if (person2.age >= limitAge)
        console.log(person2);

}

//filterByAge(12, 'Ivan', 15, 'Asen', 9);