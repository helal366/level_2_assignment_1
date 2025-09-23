{
  //
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  const getDayType = (day: Day): string => {
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
  
  //to get log: ts-node src/7_problemSeven.ts

}
