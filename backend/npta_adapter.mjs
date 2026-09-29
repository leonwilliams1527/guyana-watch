const NPTA_URL="https://www.npta.gov.gy/tenders-awarded/";
export function normalizeText(v=""){return v.replace(/\s+/g," ").replace(/\u00a0/g," ").trim()}
export function normalizeCompany(v=""){return normalizeText(v).toLowerCase().replace(/&/g," and ").replace(/\b(limited|ltd\.?|incorporated|inc\.?|company|co\.?|corporation|corp\.?)\b/g,"").replace(/[^a-z0-9]+/g," ").trim()}
export function parseMoney(v=""){const n=String(v).replace(/[^0-9.]/g,"");return n?Number(n):null}
export function parseNptaTable(html){
 const table=(html.match(/<table[\s\S]*?<\/table>/i)||[])[0]||"";
 const rows=[...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map(m=>m[1]);
 const strip=s=>normalizeText(s.replace(/<br\s*\/?>/gi," ").replace(/<[^>]+>/g," ").replace(/&amp;/g,"&").replace(/&#0*39;|&apos;/g,"'").replace(/&quot;/g,'"'));
 return rows.flatMap(row=>{
   const c=[...row.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(m=>strip(m[1]));
   if(c.length<9||/procuring entity/i.test(c[0])) return [];
   const [agency,contractId,awardee,description,amount,currency,method,tenders,awardDate,uploadDate]=c;
   return [{agency,contractId,awardee,contractorKey:normalizeCompany(awardee),description,amount:parseMoney(amount),amountDisplay:amount,currency,procurementMethod:method,tenderCount:Number(String(tenders).replace(/\D/g,""))||null,awardDate,uploadDate,sourceUrl:NPTA_URL}];
 });
}
export async function fetchNptaAwards(){
 const res=await fetch(NPTA_URL,{headers:{"user-agent":"GuyanaWatch/1.0 public-accountability-research"}});
 if(!res.ok) throw new Error(`NPTA HTTP ${res.status}`);
 return parseNptaTable(await res.text());
}
export function dedupeKey(r){return [normalizeText(r.contractId).toLowerCase(),r.contractorKey,normalizeText(r.description).toLowerCase(),r.amount??""].join("|")}
export async function runNptaIngestion({existingKeys=new Set()}={}){
 const rows=await fetchNptaAwards(),candidates=[],duplicates=[];
 for(const row of rows){const key=dedupeKey(row);(existingKeys.has(key)?duplicates:candidates).push({...row,dedupeKey:key})}
 return {source:NPTA_URL,retrievedAt:new Date().toISOString(),found:rows.length,candidates,duplicates};
}