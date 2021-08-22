import rewire from "rewire"
const registerServiceWorker = rewire("./registerServiceWorker")
const registerValidSW = registerServiceWorker.__get__("registerValidSW")
// @ponicode
describe("registerValidSW", () => {
    test("0", () => {
        let callFunction: any = () => {
            registerValidSW("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            registerValidSW("https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            registerValidSW("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            registerValidSW("https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            registerValidSW("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            registerValidSW("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("registerServiceWorker.unregister", () => {
    test("0", () => {
        let callFunction: any = () => {
            registerServiceWorker.unregister()
        }
    
        expect(callFunction).not.toThrow()
    })
})
