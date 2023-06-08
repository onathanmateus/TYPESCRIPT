function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    console.log(`Olá, ${firstName} ${lastName}, tudo bem ?`);
  }
  console.log(`Olá, ${firstName}, tudo bem ?`);
}

console.log(advancedGreeting("Nathan", "Mateus"));
console.log(advancedGreeting("João"));
