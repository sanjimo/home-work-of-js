const names = ['priya', 'mim', 'momo', 'rupa', 'simu', 'maimuna', 'mim', 'momo', 'rupa', 'priya', 'simu', 'simu', 'mim'];

function removeDuplicate(names) {
    const unique = [];
    for (const name of names) {
        if (unique.indexOf(name) == -1) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);