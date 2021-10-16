const rewire = require("rewire")
const DB = rewire("./DB")
const parseJSON = DB.__get__("parseJSON")
const checkStatus = DB.__get__("checkStatus")
const search = DB.__get__("search")
// @ponicode
describe("parseJSON", () => {
    test("0", () => {
        let callFunction = () => {
            parseJSON({ json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            parseJSON({ json: () => "\"{\"x\":5,\"y\":6}\"" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            parseJSON({ json: () => "\"[3,\"false\",false]\"" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            parseJSON({ json: () => "\"{\"x\":[10,null,null,null]}\"" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            parseJSON(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("checkStatus", () => {
    test("0", () => {
        let callFunction = () => {
            checkStatus({ status: 300, statusText: "esa" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            checkStatus({ status: 250.0, statusText: "wad" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            checkStatus({ status: 500, statusText: "wad" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            checkStatus({ status: 250.0, statusText: "esa" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            checkStatus({ status: 400, statusText: "wad" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            checkStatus(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("search", () => {
    test("0", () => {
        let callFunction = () => {
            search("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            search("DELETE FROM Projects WHERE pid = %s", "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            search("UNLOCK TABLES;", "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            search("UPDATE Projects SET pname = %s WHERE pid = %s", "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            search(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
