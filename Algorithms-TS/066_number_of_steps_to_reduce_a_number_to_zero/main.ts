function numberOfSteps(num: number): number {
    let counter: number = 0;

    const reduceToZero = (n: number): number => {
        if (n <= 0) return counter;
        counter++;
        return n % 2 === 0 ? reduceToZero(n / 2) : reduceToZero(n - 1);
    };

    return reduceToZero(num);
}
