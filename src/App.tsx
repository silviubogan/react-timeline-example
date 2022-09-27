import React from "react";
import "./App.css";

// var example1 = [
//   {
//     type: "point",
//     year: -100, // = 100 BC
//     month: 5, // March
//     day: 27,
//     text: "Lorem ipsum event",
//     color: "#2d3436",
//   },
//   {
//     type: "point",
//     year: -98,
//     month: 5,
//     day: 27,
//     text: "Lorem ipsum event 2",
//     color: "#2d3436",
//   },
//   {
//     type: "point",
//     year: -40,
//     month: 8,
//     day: 3,
//     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
//     color: "#2d3436",
//   },
//   {
//     type: "point",
//     year: 1988,
//     month: 3,
//     day: 27,
//     text: "Bla bla bla",
//     color: "#2d3436",
//   },
//   {
//     type: "point",
//     year: 1988,
//     month: 3,
//     day: 28,
//     text: "Bla bla bla 222",
//     color: "#00b894",
//   },
// ];

// var example2 = [
//   {
//     type: "point",
//     year: -100,
//     month: 5,
//     day: 27,
//     text: "Lorem ipsum event",
//     color: "#2d3436",
//     link: {
//       text: "Find more here",
//       url: "https://google.com",
//     },
//   },
//   {
//     type: "point",
//     year: -98,
//     month: 5,
//     day: 27,
//     text: "Lorem ipsum event 2",
//     color: "#2d3436",
//   },
//   {
//     type: "period",
//     start: {
//       year: -100,
//       month: 1,
//       day: 1,
//       text: "Start period 1",
//       color: "green",
//     },
//     end: {
//       year: 200,
//       month: 5,
//       day: 5,
//       text: "End period 1",
//       color: "red",
//     },
//     text: "Period 1",
//     color: "blue",
//   },
//   {
//     type: "period",
//     start: {
//       year: 500,
//       month: 2,
//       day: 2,
//       text: "Start period 1",
//       color: "green",
//     },
//     end: {
//       year: 1000,
//       month: 3,
//       day: 3,
//       text: "End period 1",
//       color: "red",
//     },
//     text: "Period 1",
//     color: "blue",
//   },
// ];

type Color = string;

interface Point {
  type?: "point";
  year: number;
  month: Month;
  day: number;
  text: string;
  color: Color;
  approxYear?: boolean;
  approxMonth?: boolean;
  approxDay?: boolean;
  link?: Link;
}

interface Period {
  type: "period";
  start: Point;
  end: Point;
  text: string;
  color: Color;
  link?: Link;
  approxYear?: boolean;
  approxMonth?: boolean;
  approxDay?: boolean;
}

var example3: (Point | Period)[] = [
  {
    type: "point",
    year: 1827,
    month: 11,
    day: 26,
    text: "Se naște Ellen G. White (Harmon), în Gorham, Maine, SUA. Părinții: Robert și Eunice Harmon. Are o soră Geamănă: Elizabeth.",
    color: "#e17055",
  },
  {
    type: "point",
    year: 1836,
    month: 6,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "La 9 ani Ellen G. White (Harmon) are accidentul.",
    color: "#636e72",
  },
  {
    type: "point",
    year: 1839,
    month: 6,
    day: 1,
    approxYear: true,
    approxMonth: true,
    approxDay: true,
    text: "Datorită accidentului, Ellen G. White (Harmon) e nevoită să abandoneze școala.",
    color: "#6c5ce7",
  },
  {
    type: "point",
    year: 1840,
    month: 3,
    day: 1,
    approxDay: true,
    text: "William Miller vizitează Portland, Maine pentru prima dată ca să predice aici.",
    color: "#00b894",
  },
  {
    type: "point",
    year: 1842,
    month: 6,
    day: 1,
    approxDay: true,
    text: "William Miller vizitează Portland, Maine pentru prima a doua oară.",
    color: "#00b894",
  },
  {
    type: "point",
    year: 1843,
    month: 1,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "Separarea familiei Harmon de Biserica Metodistă.",
    color: "#e17055",
  },
  {
    type: "period",
    start: {
      year: 1843,
      month: 3,
      day: 21,
      text: "Începe anul 1843 după calendarul ebraic.",
      color: "#0984e3",
    },
    end: {
      year: 1844,
      month: 3,
      day: 21,
      text: "Se încheie anul 1843 după calendarul ebraic.",
      color: "#0984e3",
    },
    text: "Anul 1843 ebraic",
    color: "#81ecec",
  },
  {
    type: "point",
    year: 1844,
    month: 10,
    day: 22,
    text: "Marea dezamăgire. / Începe judecata preadventă.",
    color: "#e17055",
  },
  {
    type: "point",
    year: 1848,
    month: 1,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "Conferințele despre Sabat",
    color: "#636e72",
  },
  {
    type: "point",
    year: 1849,
    month: 6,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "(vara) Fr. James White începe lucrarea de publicare (Middletown).",
    color: "#636e72",
  },
  {
    type: "point",
    year: 1855,
    month: 12,
    day: 1,
    approxDay: true,
    text: "Se publică prima broșură din seria Mărturiilor pentru Biserică.",
    color: "#636e72",
  },
  {
    type: "point",
    year: 1856,
    month: 12,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "EGW identifică AZS ca fiind Laodiceea.",
    color: "#636e72",
  },
  {
    type: "point",
    year: 1860,
    month: 1,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "Este organizată lucrarea de publicare. Se hotărăște numele AZS.",
    color: "#636e72",
  },
  {
    type: "point",
    year: 1863,
    month: 5,
    day: 1,
    approxDay: true,
    text: "Organizarea Conferinței Generale a AZS.",
    color: "#636e72",
  },
  {
    type: "point",
    year: 1863,
    month: 6,
    day: 1,
    approxDay: true,
    text: "Reforma sănătății, reforma în îmbrăcăminte.",
    color: "#636e72",
  },
  {
    type: "period",
    start: {
      year: 1870,
      month: 1,
      day: 1,
      approxDay: true,
      text: "Test - începe perioadă AAA.",
      color: "green",
    },
    end: {
      year: 1880,
      month: 3,
      day: 1,
      approxYear: true,
      approxMonth: true,
      approxDay: true,
      text: "Test - se încheie perioadă AAA.",
      color: "green",
    },
    text: "Test perioadă aproximativă AAA",
    color: "red",
  },
];
// colors: https://flatuicolors.com/palette/us

const timelines = example3;

interface Link {
  text: string;
  url: string;
}

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Event {
  text: string;
  color: Color;
  link?: Link;
  approxYear?: boolean;
  approxMonth?: boolean;
  approxDay?: boolean;
  details: any;
  year?: number;
  month?: Month;
  day?: number;
}

let expandedTimeline: Event[][][][] = [];

const settings: {
  months: any;
  noEventsYears?: number[][];
} = {
  // months: {
  //   1: "January",
  //   2: "February",
  //   3: "March",
  //   4: "April",
  //   5: "May",
  //   6: "June",
  //   7: "July",
  //   8: "August",
  //   9: "September",
  //   10: "October",
  //   11: "November",
  //   12: "December"
  // }
  months: {
    1: "Ianuarie",
    2: "Februarie",
    3: "Martie",
    4: "Aprilie",
    5: "Mai",
    6: "Iunie",
    7: "Iulie",
    8: "August",
    9: "Septembrie",
    10: "Octombrie",
    11: "Noiembrie",
    12: "Decembrie",
  },
};

function getTimelineLimits() {
  // Return start year and end year
  var maxYear = -10000;
  var minYear = 10000;
  for (var i = 0; i < timelines.length; i++) {
    var item = timelines[i];
    if (item.type === "point") {
      if (item.year > maxYear) {
        maxYear = item.year;
      }
      if (item.year < minYear) {
        minYear = item.year;
      }
    }
    if (item.type === "period") {
      if (item.start.year > maxYear) {
        maxYear = item.start.year;
      }
      if (item.start.year < minYear) {
        minYear = item.start.year;
      }
      if (item.end.year > maxYear) {
        maxYear = item.end.year;
      }
      if (item.end.year < minYear) {
        minYear = item.end.year;
      }
    }
  }

  // console.log(minYear, maxYear);
  return [minYear, maxYear];
}

function humanReadableYear(year: number) {
  if (year < 0) {
    return -year + " î.Hr.";
  }
  return year;
}

function humanReadableMonth(month: Month) {
  return settings.months[month];
}

function yearType(year: number) {
  if (typeof settings.noEventsYears === "undefined") {
    return null;
  }
  for (var i = 0; i < settings.noEventsYears.length; i++) {
    var period = settings.noEventsYears[i];
    if (year === period[0]) {
      return "start-no-events";
    }
    if (year === period[1]) {
      return "end-no-events";
    }
    if (year > period[0] && year < period[1]) {
      return "hidden-year";
    }
  }
  return "expanded-year";
}

function isPoint(item: Point | Period): item is Point {
  return item.type === "point" || typeof item.type === "undefined";
}

function addItemToExpandedTimeline(
  item: Point | Period,
  details: { text?: string; color?: string }
) {
  let eventYear = -Infinity,
    eventMonth: Month = 1,
    eventDay = -1;
  if (isPoint(item)) {
    eventYear = item.year;
    eventMonth = item.month;
    eventDay = item.day;
  }
  var eventText = item.text;
  var eventColor = item.color;

  if (isPoint(item) && !expandedTimeline.hasOwnProperty(eventYear)) {
    expandedTimeline[eventYear] = [];
  }
  if (
    isPoint(item) &&
    !expandedTimeline[eventYear].hasOwnProperty(eventMonth)
  ) {
    expandedTimeline[eventYear][eventMonth] = [];
  }
  if (
    isPoint(item) &&
    !expandedTimeline[eventYear][eventMonth].hasOwnProperty(eventDay)
  ) {
    expandedTimeline[eventYear][eventMonth][eventDay] = [];
  }
  expandedTimeline[eventYear][eventMonth][eventDay].push({
    text: eventText,
    color: eventColor,
    link: item.link,
    approxYear: item.approxYear,
    approxMonth: item.approxMonth,
    approxDay: item.approxDay,
    details: details,
    year: isPoint(item) ? eventYear : undefined,
    month: isPoint(item) ? eventMonth : undefined,
    day: isPoint(item) ? eventDay : undefined,
  });
}

function drawTimeline() {
  expandedTimeline = [];

  // Init the timeline [min year ... max year]
  var limits = getTimelineLimits();
  var startYear = limits[0];
  var endYear = limits[1];

  // Put the periods on the timeline
  for (let i = 0; i < timelines.length; i++) {
    let item = timelines[i];
    if (item.type === "period") {
      var details = { text: item.text, color: item.color };
      addItemToExpandedTimeline(item.start, details);
      addItemToExpandedTimeline(item.end, details);
    }
  }

  // Put the points on the timeline
  for (let i = 0; i < timelines.length; i++) {
    let item = timelines[i];
    if (item.type === "point") {
      addItemToExpandedTimeline(item, {});
    }
  }

  // Check for no events years
  var allNoEvents = [];
  var noEvents = [];
  for (var year = startYear; year <= endYear; year++) {
    // make sure all years are initialized
    if (!expandedTimeline.hasOwnProperty(year)) {
      expandedTimeline[year] = [];
    }
    if (year === 0) {
      continue;
    }

    // has this year events?
    if (Object.keys(expandedTimeline[year]).length === 0) {
      // update no events period limits
      if (noEvents.length === 0) {
        noEvents[0] = year;
      } else {
        noEvents[1] = year;
      }
    } else {
      // save this period of no events years
      if (noEvents.length === 2) {
        allNoEvents.push(noEvents);
      }
      // reset
      noEvents = [];
    }
  }
  settings.noEventsYears = allNoEvents;
}

interface EventDisplay {
  text: string;
  detailsText: any;
  detailsColor: any;
  year: number;
  eventColor: string;
  eventApproxYear: boolean | undefined;
  eventApproxMonth: boolean | undefined;
  eventApproxDay: boolean | undefined;
  month: Month | undefined;
  day: number | undefined;
  eventLink: Link | undefined;
}

function App() {
  drawTimeline();

  const map: Map<number, EventDisplay[]> = new Map<number, EventDisplay[]>();
  const [startYear, endYear] = getTimelineLimits();
  for (var year = startYear; year <= endYear; year++) {
    if (year === 0) {
      continue;
    }

    const arr = map.get(year) || [];
    map.set(year, arr);

    for (var month = 1; month <= 12; month++) {
      for (var day = 1; day <= 31; day++) {
        if (expandedTimeline.hasOwnProperty(year)) {
          if (expandedTimeline[year].hasOwnProperty(month)) {
            if (expandedTimeline[year][month].hasOwnProperty(day)) {
              var events = expandedTimeline[year][month][day];
              for (var i = 0; i < events.length; i++) {
                // console.log(events[i]);

                var text = events[i].text;
                var detailsText = events[i].details.text;
                var detailsColor = events[i].details.color;

                const obj = {
                  text,
                  detailsText,
                  detailsColor,
                  year,
                  eventColor: events[i].color,
                  eventApproxYear: events[i].approxYear,
                  eventApproxMonth: events[i].approxMonth,
                  eventApproxDay: events[i].approxDay,
                  month: events[i].month,
                  day: events[i].day,
                  eventLink: events[i].link,
                };

                arr.push(obj);
              }
            }
          }
        }
      }
    }
  }

  let c = 0;
  return (
    <div className="App">
      <h1>Timeline</h1>
      <div className="container">
        <div id="timeline">
          {[...map.entries()].map(([y, xs]) => {
            const arr = [
              <div className={`year-title ${yearType(y)}`} key={c++}>
                <h2>{humanReadableYear(y)}</h2>
              </div>,
            ];
            arr.push(
              ...xs.map((x) => {
                return (
                  <div className="event" key={c++}>
                    <div className="left">
                      <div
                        className="event-date"
                        style={{ background: x.eventColor }}
                      >
                        <div className="month">
                          {x.eventApproxYear && "aprox."}
                          {x.month &&
                            !(
                              x.eventApproxYear ||
                              (!x.eventApproxYear && x.eventApproxMonth)
                            ) &&
                            /*(*/ !x.eventApproxYear &&
                            !x.eventApproxMonth /*&&
                            x.eventApproxDay*/ && // ||
                            // (!x.eventApproxYear &&
                            //   !x.eventApproxMonth &&
                            //   !x.eventApproxDay)) &&
                            humanReadableMonth(x.month)}
                        </div>
                        <div
                          className="day"
                          style={{
                            display:
                              x.eventApproxYear ||
                              x.eventApproxMonth ||
                              x.eventApproxDay
                                ? "none"
                                : undefined,
                          }}
                        >
                          {x.day}
                        </div>
                        <div className="year">{humanReadableYear(x.year)}</div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="text">{x.text}</div>
                      <div
                        className="details"
                        style={{
                          display:
                            typeof x.detailsText === "undefined"
                              ? "none"
                              : undefined,
                          background: x.detailsColor,
                        }}
                      >
                        {x.detailsText}
                      </div>
                      <a
                        href={x.eventLink?.url}
                        target="_blank"
                        className="more"
                        rel="noreferrer"
                        style={{
                          display:
                            typeof x.eventLink === "undefined"
                              ? "none"
                              : undefined,
                        }}
                      >
                        {x.eventLink?.text}
                      </a>
                    </div>
                  </div>
                );
              })
            );
            return arr;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
