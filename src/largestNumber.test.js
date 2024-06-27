import findLargestNumber from "./largestNumber";

test('findLargestNumber should return the largest number among given numbers', () => {
    
    expect(findLargestNumber(42, 78, 55)).toBe(78);

    expect(findLargestNumber(-5, -2, -10)).toBe(-2);

    expect(findLargestNumber(10, 10, 10)).toBe(10);

});
