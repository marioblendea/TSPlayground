export class FindIndexWithEqualProbability {
    static get(arr: number[], v: number) {
        let result: number = -1;
        let count: number = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== v) continue;

            ++count;
            if (Math.floor((Math.random() * count)) === 0) {
                result = i;
            }
        }

        return result;
    }
}