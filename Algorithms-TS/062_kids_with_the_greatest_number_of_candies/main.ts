function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const results: boolean[] = [];
    let max: number = 0;
    let cm: number = 0;

    for (let i = 0; candies.length > i; i++) {
        max = Math.max(candies[i], max);
    }

    for (let i = 0; candies.length > i; i++) {
        cm = candies[i] + extraCandies;
        if (cm >= max) results.push(true);
        else results.push(false);
    }

    return results;
}
