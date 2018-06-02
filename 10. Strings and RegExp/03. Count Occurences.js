function countOccurrences(target, text) {
    let counter = 0;
    let index = -1;
    while ((index = text.indexOf(target,index+1)) > 0)
        counter++;

    return counter;
}

console.log(countOccurrences('the', 'The quick brown fox jumps over the lay dog.'));
console.log();
console.log(countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));