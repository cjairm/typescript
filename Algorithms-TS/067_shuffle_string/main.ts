function restoreString(s: string, indices: number[]): string {
    const newWord: string[] = [];
    let i: number = 0;

    while (i < s.length) {
        newWord[indices[i]] = s[i];
        i++;
    }

    return newWord.join("");
}
