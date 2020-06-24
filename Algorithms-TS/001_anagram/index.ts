interface helperObjectType {
    [letter: string]: number;
}

const isAnagramValid = (s1: string, s2: string) => {
    // if both strings has the same length. We continue
    if (s1.length != s2.length) return false;

    // if both strings are the same. We stop.
    if (s1 == s2) return true;

    // declare helpers to save each variable
    let h1: helperObjectType = {};
    let h2: helperObjectType = {};

    // Iterate first string and save how many letters exists
    // First we convert the string one to lowercase
    const t1 = s1.toLowerCase();
    for (let i = 0; i < t1.length; i++) {
        // O(n)
        const currLetter = t1[i];
        const letterExists = h1[currLetter] && h1[currLetter] > 0 ? true : false;
        (letterExists) ? h1[currLetter]++ : h1[currLetter] = 1;
    }

    // Iterate second string and save how many letter exists
    // First we convert the string two to lowercase
    const t2 = s2.toLowerCase();
    for (let j = 0; j < t2.length; j++) {
        // O(n)
        const currLetter = t2[j];
        const letterExists = h2[currLetter] && h2[currLetter] > 0 ? true : false;
        (letterExists) ? h2[currLetter]++ : h2[currLetter] = 1;
    }

    // Iterate one of the object created.
    for (const k in h1) {
        // O(n)
        // if the letter exists. Continue
        if (!h1[k] || !h2[k]) return false;

        // If counter of characters are the same. Continue
        if (h1[k] != h2[k]) return false;
    }

    // Return true
    return true;
};

export default isAnagramValid;