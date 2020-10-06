function defangIPaddr(address: string): string {
    const addressSplit: string[] = address.split("");
    let currAdd: string;

    for (let i = 0; addressSplit.length > i; i++) {
        currAdd = addressSplit[i];
        if (currAdd === ".") addressSplit[i] = "[.]";
    }

    return addressSplit.join("");
}
