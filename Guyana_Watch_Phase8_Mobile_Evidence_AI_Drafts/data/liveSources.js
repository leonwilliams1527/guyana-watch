export const liveSources=[
 {id:"LIVE-01",name:"National Procurement and Tender Administration",short:"NPTA",type:"Official procurement",mode:"Scheduled adapter",cadence:"Daily",health:"Ready for connection",fields:["Contract ID","Contractor / Awardee","Procuring Entity","Description","Contract Value","Award Date","Procurement Method"],destination:["Contracts","Contractors","Projects"]},
 {id:"LIVE-02",name:"Ministry of Finance",short:"MOF",type:"Official fiscal",mode:"Document ingestion",cadence:"On publication",health:"Ready for connection",fields:["Budget programme","Allocation","Agency","Fiscal year","Project / programme description"],destination:["Budgets","Projects & Promises"]},
 {id:"LIVE-03",name:"Department of Public Information",short:"DPI",type:"Official announcements",mode:"Article monitor",cadence:"Daily",health:"Ready for connection",fields:["Promise","Project","Agency","Location","Deadline","Progress update","Quoted amount"],destination:["Promises","Projects","Timelines"]},
 {id:"LIVE-04",name:"Approved Guyana News Sources",short:"MEDIA",type:"Independent media",mode:"Feed / article monitor",cadence:"Daily",health:"Source list required",fields:["Project update","Contract mention","Deadline","Location","Government statement","Independent reporting"],destination:["Evidence queue","Project updates"]}
];

export const ingestionRuns=[
 {id:"RUN-1042",source:"NPTA",found:18,candidates:12,matched:9,review:3,status:"Completed",time:"Today 06:00"},
 {id:"RUN-1041",source:"DPI",found:34,candidates:8,matched:5,review:3,status:"Completed",time:"Today 05:30"},
 {id:"RUN-1040",source:"MOF",found:3,candidates:2,matched:2,review:0,status:"Completed",time:"Yesterday 20:10"},
 {id:"RUN-1039",source:"MEDIA",found:0,candidates:0,matched:0,review:0,status:"Configuration",time:"Pending"}
];

export const canonicalFields=[
 ["Contractor / Awardee","contractor_id","Contractor canonical entity + alias matching"],
 ["Contract / Tender ID","contract_id","Unique award / contract reference where available"],
 ["Project","project_id","Canonical project linked to promise, budget and contract"],
 ["Agency / Procuring Entity","agency_id","Normalized government entity"],
 ["Award / Budget Value","amount","Original currency/value preserved with source"],
 ["Award Date","award_date","Source date, not AI-estimated"],
 ["Deadline / Milestone","deadline","Only populated when explicitly sourced"],
 ["Location","location","Region → town/village/community/street + coordinates when available"],
 ["Source Provenance","source_id","URL/document, retrieval date and extraction reference"],
 ["Verification State","verification_status","Candidate → reviewed → verified → published"]
];
