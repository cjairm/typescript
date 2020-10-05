var suffle = function (nums: number[], n: number): number[] {
    const x: number[] = nums.slice(0, n);
    const y: number[] = nums.slice(n);
    const result: number[] = [];
    let i: number = 0;
    let j: number = 0;

    while (x.length > i && y.length > j) {
        result.push(x[i]);
        result.push(y[j]);
        i++;
        j++;
    }

    while (x.length > i) {
        result.push(x[i]);
        i++;
    }

    while (y.length > j) {
        result.push(y[j]);
        j++;
    }

    return result;
};
