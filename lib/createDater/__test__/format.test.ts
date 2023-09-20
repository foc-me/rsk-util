import provider from "../src/daterProvider"
import format from "../src/format"

describe("dater format", () => {
    it("test 1695019785071", () => {
        const dater = provider(new Date(1695019785071))
        expect(format(dater, "")).toBe("")
        expect(format(dater, "YYYY")).toBe("2023")
        expect(format(dater, "YY")).toBe("23")
        expect(format(dater, "MMMM")).toBe("September")
        expect(format(dater, "MMM")).toBe("Sep")
        expect(format(dater, "MM")).toBe("09")
        expect(format(dater, "M")).toBe("9")
        expect(format(dater, "DD")).toBe("18")
        expect(format(dater, "D")).toBe("18")
        expect(format(dater, "ddd")).toBe("Monday")
        expect(format(dater, "dd")).toBe("Mon")
        expect(format(dater, "d")).toBe("1")
        expect(format(dater, "HH")).toBe("14")
        expect(format(dater, "H")).toBe("14")
        expect(format(dater, "hh")).toBe("02")
        expect(format(dater, "h")).toBe("2")
        expect(format(dater, "mm")).toBe("49")
        expect(format(dater, "m")).toBe("49")
        expect(format(dater, "SSS")).toBe("071")
        expect(format(dater, "ss")).toBe("45")
        expect(format(dater, "s")).toBe("45")
        expect(format(dater, "A")).toBe("PM")
        expect(format(dater, "a")).toBe("pm")
        expect(format(dater, "ZZ")).toBe("+0800")
        expect(format(dater, "Z")).toBe("+08:00")
        expect(format(dater, "YYYY-MM-DD")).toBe("2023-09-18")
        expect(format(dater, "HH:mm:ss:SSS")).toBe("14:49:45:071")
    })
    it("test 0", () => {
        const dater = provider(new Date(0))
        expect(format(dater, "")).toBe("")
        expect(format(dater, "YYYY")).toBe("1970")
        expect(format(dater, "YY")).toBe("70")
        expect(format(dater, "MMMM")).toBe("January")
        expect(format(dater, "MMM")).toBe("Jan")
        expect(format(dater, "MM")).toBe("01")
        expect(format(dater, "M")).toBe("1")
        expect(format(dater, "DD")).toBe("01")
        expect(format(dater, "D")).toBe("1")
        expect(format(dater, "ddd")).toBe("Thursday")
        expect(format(dater, "dd")).toBe("Thu")
        expect(format(dater, "d")).toBe("4")
        expect(format(dater, "HH")).toBe("08")
        expect(format(dater, "H")).toBe("8")
        expect(format(dater, "hh")).toBe("08")
        expect(format(dater, "h")).toBe("8")
        expect(format(dater, "mm")).toBe("00")
        expect(format(dater, "m")).toBe("0")
        expect(format(dater, "SSS")).toBe("000")
        expect(format(dater, "ss")).toBe("00")
        expect(format(dater, "s")).toBe("0")
        expect(format(dater, "A")).toBe("AM")
        expect(format(dater, "a")).toBe("am")
        expect(format(dater, "ZZ")).toBe("+0800")
        expect(format(dater, "Z")).toBe("+08:00")
        expect(format(dater, "YYYY-MM-DD")).toBe("1970-01-01")
        expect(format(dater, "HH:mm:ss:SSS")).toBe("08:00:00:000")
    })
})