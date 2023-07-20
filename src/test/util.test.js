import { isEventValue } from '../util/validation/isEventValue';
import { isIDPattern } from '../util/validation/isIDPattern';
import { isPWPattern } from '../util/validation/isPWPattern';
import { isNumber } from '../util/validation/isNumber';
import { isString } from '../util/validation/isString';
describe('isEventValue function', () => {
    test('잘못 된 값을 줄 때 에러를 제대로 보여주는지 확인', () => {
        const state = {
            id: 1,
            eventName: 'Event 1',
            plan: 'Plan 1',
            end: '2023-07-16',
            state: true
        };

        expect(() => {
            isEventValue(state);
        }).toThrowError('[ERROR] This state is missing the following keys: eventContent, plan, end');
    });

    test('값안의 잘못 된 값을 줄 때 에러를 제대로 보여주는지 확인', () => {
        const state = {
            id: 1,
            eventName: 'Event 1',
            plan: {
                data : 10
            },
            end: {
                date : "2023-07-24",
                time : "09:30"
            },
            state: true
        };

        expect(() => {
            isEventValue(state);
        }).toThrowError(`[ERROR] This state is missing the following keys: eventContent, plan's date, plan's time`);
    });

    test('제대로 된 값을 줄 경우 작동하는지 확인', () => {
        const state = {
            id: 1,
            eventName: 'Event 1',
            eventContent: 'Content 1',
            plan: {
                date : {
                    from : "2023-07-23",
                    to : "2023-07-24"
                },
                time : {
                    from : "03:30",
                    to : "10:30"
                },
            },
            end: {
                date : "2023-07-24",
                time : "09:30"
            },
            state: true,
        };
        expect(isEventValue(state)).toEqual(state);
    });
});

describe('isIDPattern function', () => {
    test('아이디 형식에 맞지 않을 경우 에러를 표시하는지 확인', () => {
        const id = "qwer_1234힣";
        expect(isIDPattern(id)).toBeFalsy();
    });

    test('아이디 형식에 맞을 경우 에러를 표시하는지 확인', () => {
        const id = "qwer1234";
        expect(isIDPattern(id)).toEqual(id);
    })
});

describe('isPWPattern function', () => {
    test('패스워드의 형식에 맞지 않을 경우 에러를 표시하는지 확인', () => {
        const pw = "123힣_123";
        expect(isPWPattern(pw)).toBeFalsy();
    });

    test('패스워드의 특수문자를 확인하는 테스트', () => {
        const pw = "_2q"; //_
        expect(isPWPattern(pw)).toBeFalsy();
    });

    test('패스워드의 형식에 맞을 경우 잘 반환하는지 확인', () => {
        const pw = "qwer!123"; //정해진 특수문자로만 가능함
        expect(isPWPattern(pw)).toEqual(pw);
    });
});

describe('isNumber function', () => {
    test('숫자가 아닐 경우 에러를 표출하는지 확인', () => {
        const val = 'string';
        expect(() => isNumber(val)).toThrowError('[ERROR] This value is not a number.');
    });

    test('숫자일 경우 true값을 반환하는지 확인', () => {
        const val = 123;
        expect(isNumber(val)).toBe(true);
    });
});

describe('isString function', () => {
    test('문자가 아닐 경우 에러를 표출하는지 확인', () => {
        const val = 1234;
        expect(() => isString(val)).toThrowError('[ERROR] This value is not a string.');
    });

    test('문자일 경우 true값을 반환하는지 확인', () => {
        const val = '1234';
        expect(isString(val)).toBe(true);
    });
});