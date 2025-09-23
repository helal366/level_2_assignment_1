{
    //
    var Day = void 0;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    var getDayType = function (day) {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend";
            default:
                return "Weekday";
        }
    };
    console.log(getDayType(Day.Friday));
    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Wednesday));
    console.log(getDayType(Day.Sunday));
    console.log(getDayType(Day.Saturday));
    //
}
