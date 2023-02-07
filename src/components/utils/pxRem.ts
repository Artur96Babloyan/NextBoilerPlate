// Pixel to rem converter for inline styles, works on an array of numbers, as well as individual.

const rem = (value: number | number[]) => {
    if(typeof value === "object") {
        let converted:string[] = [];
        value.forEach(i => {
            const calc:string = i / 16+'rem';
            converted.push(calc);
        });
        return converted;
    }
    else
    return value / 16+'rem';
};

export default rem;