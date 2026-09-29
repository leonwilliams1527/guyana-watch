import {runNptaIngestion} from "./npta_adapter.mjs";
const r=await runNptaIngestion();
console.log(JSON.stringify({source:r.source,retrievedAt:r.retrievedAt,found:r.found,newCandidates:r.candidates.length,duplicates:r.duplicates.length},null,2));
