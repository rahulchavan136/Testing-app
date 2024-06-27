import {sum, sub} from './sum'

test("testing sum",()=>{
    expect(sum(10,20).toBe(30))
})

test("testing sum",()=>{
    expect(sub(50,20).toBe(30))
})


test("multiply 3 by 4 equals 12", () => {
    expect(multiply(3, 4)).toBe(12);
});

test("divide 10 by 2 equals 5", () => {
    expect(divide(10, 2)).toBe(5);
});

test("divide 10 by 0 returns 'Infinity'", () => {
    expect(divide(10, 0)).toBe('Infinity');
});
