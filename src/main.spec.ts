import {parse} from "./main"

describe("range parser should", () => {

    test('translate hello world', () => {
        expect(parse("Hello world")).toEqual("Hola mundo")
    })
})


