const ganttDom = document.getElementById("gantChart");
const g = new JSGantt.GanttChart(ganttDom, "day");

const normalTasks = [
  {
    pID: "task01",
    pName: "NORMAL TASK 1",
    pStart: "2020-01-15",
    pEnd: "",
    pPlanStart: "2020-01-01",
    pPlanEnd: "2020-01-20",
    pClass: "gtaskblue",
    pLink: "<a href='#'>Click me to get more information</a>",
    pMile: 0,
    pRes: "resource name 1",
    pComp: 60,
    pGroup: 0,
    pParent: 0,
    pOpen: 0,
    pDepend: "",
    pCaption: "",
    pCost: 200,
    pNotes: "this is notes",
    deadline: "2020-01-30",
    pBarText: "Bar text task 01",
    customColumn1: "abc",
    customColumn2: `abc`
  },
  {
    pID: "task02",
    pName: "NORMAL TASK 2",
    pStart: "2020-02-15",
    pEnd: "2020-02-19",
    pPlanStart: "2020-02-01",
    pPlanEnd: "2020-02-20",
    pClass: "gmilestone",
    // pClass:'gtaskred',
    pLink: "<a href='#'>更多</a>",
    pMile: 1,
    pRes: "任务名称资源",
    pComp: 100,
    pGroup: 0,
    pParent: 0,
    pOpen: 0,
    pDepend: "",
    pCaption: "",
    pCost: 1000,
    pNotes: "this is notes",
    pBarText: "普通任务2",
    customColumn1: "abc",
    customColumn2: `abc`
  },
  {
    pID: "task03",
    pName: "NORMAL TASK 3",
    pStart: "2020-03-02",
    pEnd: "",
    pPlanStart: "2020-03-01",
    pPlanEnd: "2020-03-20",
    pClass: "gtaskred",
    pLink: "<a href='#'>更多</a>",
    pMile: 0,
    pRes: "任务名称资源",
    pComp: 10,
    pGroup: 0,
    pParent: 0,
    pOpen: 0,
    pDepend: "task01",
    pCaption: "",
    pCost: 1000,
    pNotes: "this is notes",
    pBarText: "普通任务3",
    customColumn1: "abc",
    customColumn2: `abc`
  },
  {
    pID: "task04",
    pName: "NORMAL TASK 4",
    pStart: "2020-03-15",
    pEnd: "",
    pPlanStart: "2020-03-09",
    pPlanEnd: "2020-03-29",
    pClass: "gtaskyellow",
    pLink: "<a href='#'>更多</a>",
    pMile: 0,
    pRes: "任务名称资源",
    pComp: 10,
    pGroup: 0,
    pParent: 0,
    pOpen: 0,
    pDepend: "task03",
    pCaption: "",
    pCost: 1000,
    pNotes: "this is notes",
    pBarText: "普通任务3",
    customColumn1: "abc",
    customColumn2: `abc`
  },
  {
    pID: "task05",
    pName: "NORMAL TASK 5",
    pStart: "",
    pEnd: "",
    pPlanStart: "2020-04-09",
    pPlanEnd: "2020-04-29",
    pClass: "gtaskyellow",
    pLink: "<a href='#'>更多</a>",
    pMile: 0,
    pRes: "任务名称资源",
    pComp: 0,
    pGroup: 0,
    pParent: 0,
    pOpen: 0,
    pDepend: "",
    pCaption: "",
    pCost: 1000,
    pNotes: "this is notes",
    pBarText: "普通任务3",
    customColumn1: "abc",
    customColumn2: `abc`
  }
];

const groupTasks = [
  {
    pID: "task01",
    pName: "<a href='http://www.baidu.com'>任务名称</a>",
    pStart: "",
    pEnd: "",
    pPlanStart: "",
    pPlanEnd: "",
    pClass: "ggroupblack",
    pLink: "<a href='#'>更多</a>",
    pMile: 0,
    pRes: "任务名称资源",
    pComp: 0,
    pGroup: 1,
    pParent: 0,
    pOpen: 1,
    pDepend: "",
    pCaption: "",
    pCost: 0,
    pNotes: "this is notes",
    pBarText: "任务名称",
    customColumn1: "abc",
    customColumn2: `customColumn2`
  },
  {
    pID: "task02",
    pName: "测试子任务",
    pStart: "2020-02-15",
    pEnd: "2020-02-21",
    pPlanStart: "2020-02-01",
    pPlanEnd: "2020-02-20",
    pClass: "gtaskblue",
    pLink: "",
    pMile: 0,
    pRes: "<a href='#' title='测试子任务资源'>测试子任务资源</a>",
    pComp: 30,
    pGroup: 0,
    pParent: "task01",
    pOpen: 0,
    pDepend: "",
    pCaption: "",
    pCost: 1000,
    pNotes: "pNotes",
    pBarText: "测试子任务",
    customColumn1: "a",
    customColumn2: "a"
  },
  {
    pID: "task03",
    pName: "测试关联任务1",
    pStart: "2020-01-01",
    pEnd: "2020-01-21",
    pPlanStart: "2020-01-01",
    pPlanEnd: "2020-01-20",
    pClass: "gtaskyellow",
    pLink: "",
    pMile: 0,
    pRes: "测试关联任务1资源",
    pComp: 0,
    pGroup: 0,
    pParent: "task01",
    pOpen: 0,
    pDepend: "task02",
    pCaption: "",
    pCost: 1000,
    pNotes: "pNotes",
    pBarText: "测试关联任务1",
    customColumn1: "b",
    customColumn2: "d"
  },
  {
    pID: "task04",
    pName: "测试关联任务2",
    pStart: "2020-01-15",
    pEnd: "2020-01-21",
    pPlanStart: "2020-01-05",
    pPlanEnd: "2020-01-18",
    pClass: "gtaskred",
    pLink: "",
    pMile: 0,
    pRes: "测试关联任务2资源",
    pComp: 0,
    pGroup: 0,
    pParent: "task01",
    pOpen: 0,
    pDepend: "task02,task03",
    pCaption: "",
    pCost: 1000,
    pNotes: "pNotes",
    pBarText: "测试关联任务2",
    customColumn1: "d",
    customColumn2: "d"
  }
];

const combinedGroupTasks = [
  {
    pID: "task01",
    pName: "<a href='http://www.baidu.com'>任务名称</a>",
    pStart: "",
    pEnd: "",
    pPlanStart: "",
    pPlanEnd: "",
    pClass: "",
    pLink: "<a href='#'>更多</a>",
    pMile: 0,
    pRes: "任务名称资源",
    pComp: 10,
    pGroup: 2,
    pParent: 0,
    pOpen: 1,
    pDepend: "",
    pCaption: "",
    pCost: 0,
    pNotes: "this is notes",
    pBarText: "任务名称",
    customColumn1: "abc",
    customColumn2: `customColumn2`
  },
  {
    pID: "task02",
    pName: "测试子任务",
    pStart: "2020-01-15",
    pEnd: "2020-01-21",
    pPlanStart: "2020-01-03",
    pPlanEnd: "2020-01-20",
    pClass: "gtaskblue",
    pLink: "",
    pMile: 0,
    pRes: "<a href='#' title='测试子任务资源'>测试子任务资源</a>",
    pComp: 30,
    pGroup: 0,
    pParent: "task01",
    pOpen: 0,
    pDepend: "",
    pCaption: "",
    pCost: 1000,
    pNotes: "pNotes",
    pBarText: "测试子任务",
    customColumn1: "a",
    customColumn2: "a"
  },
  {
    pID: "task03",
    pName: "测试关联任务1",
    pStart: "2020-02-03",
    pEnd: "2020-02-21",
    pPlanStart: "2020-02-01",
    pPlanEnd: "2020-02-20",
    pClass: "gtaskyellow",
    pLink: "",
    pMile: 0,
    pRes: "测试关联任务1资源",
    pComp: 0,
    pGroup: 0,
    pParent: "task01",
    pOpen: 0,
    pDepend: "task02",
    pCaption: "",
    pCost: 1000,
    pNotes: "pNotes",
    pBarText: "测试关联任务1",
    customColumn1: "b",
    customColumn2: "d"
  },
  {
    pID: "task04",
    pName: "测试关联任务2",
    pStart: "2020-03-15",
    pEnd: "2020-03-21",
    pPlanStart: "2020-03-05",
    pPlanEnd: "2020-03-18",
    pClass: "gtaskred",
    pLink: "",
    pMile: 0,
    pRes: "测试关联任务2资源",
    pComp: 0,
    pGroup: 0,
    pParent: "task01",
    pOpen: 0,
    pDepend: "task02,task03",
    pCaption: "",
    pCost: 1000,
    pNotes: "pNotes",
    pBarText: "测试关联任务2",
    customColumn1: "d",
    customColumn2: "d"
  }
];

const tasks = normalTasks;

JSGantt.parseJSONString(JSON.stringify(tasks), g);

const internationalisationConfig = () => {
  g.addLang("zh", {
    january: "一月",
    february: "二月",
    march: "三月",
    april: "四月",
    maylong: "五月",
    june: "六月",
    july: "七月",
    august: "八月",
    september: "九月",
    october: "十月",
    november: "十一月",
    december: "十二月",
    jan: "一月",
    feb: "二月",
    mar: "三月",
    apr: "四月",
    may: "五月",
    jun: "六月",
    jul: "七月",
    aug: "八月",
    sep: "九月",
    oct: "十月",
    nov: "十一月",
    dec: "十二月",
    sunday: "星期日",
    monday: "星期一",
    tuesday: "星期二",
    wednesday: "星期三",
    thursday: "星期四",
    friday: "星期五",
    saturday: "星期六",
    sun: "星期日",
    mon: "星期一",
    tue: "星期二",
    wed: "星期三",
    thu: "星期四",
    fri: "星期五",
    sat: "星期六",
    resource: "资源",
    duration: "耗时",
    comp: "达成率",
    completion: "达成",
    startdate: "起始日期",
    planstartdate: "计划起始日期",
    enddate: "截止日期",
    planenddate: "计划截止日期",
    cost: "成本",
    moreinfo: "更多信息",
    notes: "备注",
    format: "视图",
    hour: "时",
    day: "日",
    week: "星期",
    month: "月",
    quarter: "季",
    hours: "小时",
    days: "天",
    weeks: "周",
    months: "月",
    quarters: "季",
    hr: "小时",
    dy: "天",
    wk: "周",
    mth: "月",
    qtr: "季",
    hrs: "小时",
    dys: "天",
    wks: "周",
    mths: "月",
    qtrs: "季"
  });

  // 国际化
  g.setLang("zh");
};
// internationalisationConfig();

const switchConfig = () => {
  g.setAdditionalHeaders({
    customcolumn1: { title: "custom column 1" },
    customcolumn2: { title: "custom column 2" }
  });

  // tootip
  g.setShowTaskInfoLink(1);
  g.setShowTaskInfoNotes(1);

  g.setShowPlanStartDate(1);
  g.setShowPlanEndDate(1);

  g.setShowCost(1);

  g.setEvents({
    taskname: (...res) => console.log("taskname event", res),
    customRow: (...res) => console.log("customRow event", res)
  });

  g.setEventClickRow((...res) =>
    console.log("event click row", res[0].getAllData())
  );

  g.setColumnOrder([
    "vAdditionalHeaders",
    "vShowAddEntries",
    "vShowStartDate",
    "vShowEndDate",
    "vShowCost",
    "vShowRes",
    "vShowDur",
    "vShowComp",
    "vShowPlanStartDate",
    "vShowPlanEndDate"
  ]);

  // g.setDebug(true);

  g.setMinDate("2020-01-01");

  /*
  g.setTooltipTemplate((task) => {
    console.log("task: ", task.getID());

    return "mon super template de la mort qui tue";
  });
  */
};
switchConfig();

const keyValueConfig = () => {
  // g.setShowSelector('Bottom')

  g.setFormatArr("Hour", "Month", "Day", "Week", "Quarter");

  g.setCaptionType("Complete");

  // g.setScrollTo('2020-02-23')

  // g.setUseSingleCell(0)
};
keyValueConfig();

const layoutConfig = () => {
  g.setHourColWidth(18);

  g.setDayColWidth(40);

  g.setWeekColWidth(80);

  g.setMonthColWidth(120);

  g.setQuarterColWidth(180);
};
layoutConfig();

const dateFormat = () => {
  // 左边table时间格式
  g.setDateTaskTableDisplayFormat("yyyy/mm/dd");
  // tooltip时间格式
  g.setDateTaskDisplayFormat("yyyy/mm/dd");
  // 小时视图，甘特图主表头时间格式
  g.setHourMajorDateDisplayFormat("yyyy/mm/dd day");
  // 小时视图，甘特图次表头时间格式
  g.setHourMinorDateDisplayFormat("H");
  // 天视图，甘特图主表头时间格式
  g.setDayMajorDateDisplayFormat("yy/mm/dd");
  // 天视图，甘特图次表头时间格式
  g.setDayMinorDateDisplayFormat("d");
  // 周视图，甘特图表头时间格式
  g.setWeekMajorDateDisplayFormat("yy/mm/dd");
  // 周视图，甘特图次表头时间格式
  g.setWeekMinorDateDisplayFormat("w");
  // 月视图，甘特图表头时间格式
  g.setMonthMajorDateDisplayFormat("yyyy");
  // 月视图，甘特图次表头时间格式
  g.setMonthMinorDateDisplayFormat("mon");
  // 季度视图，甘特图表头时间格式
  g.setQuarterMajorDateDisplayFormat("yyyy");
  // 季度视图，甘特图次表头时间格式
  g.setQuarterMinorDateDisplayFormat("qq");
};
dateFormat();

g.Draw();

const selectOnChange = (e) => {
  let select = e.target.value;
  let tableDom = ganttDom.querySelector(".gmainleft");
  let ganttChartDom = ganttDom.querySelector(".gmainright");

  if (select === "0") {
    tableDom.style = "none";
    ganttChartDom.style = "none";
  } else if (select === "1") {
    tableDom.style = "flex:100%";
    ganttChartDom.style = "flex:0%";
  } else if (select === "2") {
    tableDom.style = "flex:0%";
    ganttChartDom.style = "flex:100%";
  }
};
