const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {a,b} = obj.numbers;


// [arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});