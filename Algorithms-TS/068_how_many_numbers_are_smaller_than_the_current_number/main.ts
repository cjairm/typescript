function smallerNumsThanCurrent(nums: number[]): number[] {
    const smallers: number[] = [];
    let i: number = 0,
        j: number = 0,
        ni: number = 0,
        nj: number = 0,
        count: number = 0;

    while (nums.length > i) {
        ni = nums[i];
        nj = nums[j];

        if (i !== j) if (ni > nj) count++;

        j++;
        if (j >= nums.length) {
            smallers.push(count);
            i++;
            j = 0;
            count = 0;
        }
    }

    return smallers;
}
