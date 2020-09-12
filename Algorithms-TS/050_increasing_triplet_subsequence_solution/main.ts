function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;

    let i: number = 0,
        f: number = Infinity,
        s: number = Infinity;

    while (nums.length > i) {
        if (nums[i] > s) return true;
        else if (nums[i] < s && nums[i] > f) s = nums[i];
        else if (nums[i] < f) f = nums[i];
        i++;
    }
    return false;
}
