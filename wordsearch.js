const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    // for each column index
    const verticalJoin = letters[0].map((_, colIndex) =>
        // get the letter at that index for each row into an array then join them
        letters.map(row => row[colIndex]).join('')
    );
    
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
    for (let l of verticalJoin){
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch