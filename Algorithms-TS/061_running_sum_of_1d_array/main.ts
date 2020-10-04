function runningSum(nums: number[]): number[] {
    const results: number[] = [];
    let i = 0,
        j = 0,
        temp = 0;

    while (nums.length > i) {
        if (i >= j) {
            temp += nums[j];
            j++;
        } else {
            results.push(temp);
            temp = 0;
            i++;
            j = 0;
        }
    }

    return results;
}
