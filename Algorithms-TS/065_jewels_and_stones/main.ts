var numJewelsInStones = function (J: string, S: string): number {
    const jewels: string[] = J.split("");
    const stones: string[] = S.split("");

    let i: number = 0;
    let j: number = 0;
    let currJ: string = "";
    let currS: string = "";
    let count: number = 0;

    while (jewels.length > i) {
        currJ = jewels[i];
        currS = stones[j];

        if (currJ === currS) count++;

        j++;
        if (j >= stones.length) {
            i++;
            j = 0;
        }
    }

    return count;
}
