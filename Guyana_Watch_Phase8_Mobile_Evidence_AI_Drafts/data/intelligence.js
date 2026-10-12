export const sources=[
 {id:"SRC-01",name:"Ministry of Finance",type:"Official",tier:"Primary",status:"Active",coverage:"Budgets, estimates, fiscal reports",last:"Today"},
 {id:"SRC-02",name:"NPTA / Awarded Contracts",type:"Official",tier:"Primary",status:"Active",coverage:"Awards, contractors, values",last:"Today"},
 {id:"SRC-03",name:"Department of Public Information",type:"Official",tier:"Primary",status:"Active",coverage:"Announcements, projects, progress",last:"Today"},
 {id:"SRC-04",name:"Major News Monitoring",type:"Media",tier:"Secondary",status:"Configured",coverage:"Independent reporting and updates",last:"Pending feed setup"}
];
export const candidates=[
 {id:"INT-318",kind:"Project",title:"Puruni River Bridge and Access Roads",source:"Department of Public Information",confidence:94,region:"Region 7",amount:"Not extracted",deadline:"Not extracted",match:"New candidate",state:"Needs Review"},
 {id:"INT-317",kind:"Contract",title:"Stelling Access Road Waterfront Drainage System & Parking Apron",source:"NPTA / Awarded Contracts",confidence:98,region:"Location review",amount:"G$423,353,150",deadline:"Not provided",match:"Possible project match",contractor:"Demerara Infrastructure Ltd.",state:"Needs Review"},
 {id:"INT-316",kind:"Budget",title:"2026 Budget Estimates — candidate programme allocation",source:"Ministry of Finance",confidence:88,region:"National / programme",amount:"Requires document match",deadline:"FY 2026",match:"Needs project matching",state:"Needs Review"},
 {id:"INT-315",kind:"Promise",title:"Road / water development commitment candidate",source:"Official announcement monitor",confidence:82,region:"Region 10",amount:"Not stated",deadline:"Not stated",match:"Possible existing project",state:"Needs Review"}
];
export const pipeline=[["1,284","Items scanned"],["73","Candidates detected"],["41","Auto-matched"],["19","Need review"],["13","Approved"]];
