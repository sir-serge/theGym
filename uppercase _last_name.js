function combineNames(...names) {
    if (names.length === 1) {
        return names[0].toUpperCase();
    }
    
    const firstName = names.slice(0, -1);
    console.log(firstName)
    const lastName = names[names.length - 1].toUpperCase();
    
    return [...firstName, lastName].join(' ');
}

console.log(combineNames('David')); // 'David'
console.log(combineNames('blue')); // 'David'
console.log(combineNames('John', 'Doe')); // 'John DOE'
console.log(combineNames('Jean', 'Marie', 'Vianney')); // 'Jean Marie VIANNEY'
console.log(combineNames('Neymar', 'Silva', 'Santos', 'Junior')); // 'Neymar Silva Santos JUNIOR'
