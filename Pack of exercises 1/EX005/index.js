function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log("Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem ?"));
    }
    console.log("Ol\u00E1, ".concat(firstName, ", tudo bem ?"));
}
console.log(advancedGreeting("Nathan", "Mateus"));
console.log(advancedGreeting("João"));
