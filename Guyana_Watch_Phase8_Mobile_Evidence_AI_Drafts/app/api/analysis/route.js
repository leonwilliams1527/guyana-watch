import {NextResponse} from 'next/server';
export async function POST(request){
 try{
  const {issue}=await request.json();
  if(!issue||typeof issue.title!=='string'||issue.title.length>300) return NextResponse.json({error:'Valid issue required'},{status:400});
  const key=process.env.OPENAI_API_KEY;
  if(!key)return NextResponse.json({error:'AI analysis is not configured. Set OPENAI_API_KEY on the server; no analysis has been generated.'},{status:503});
  const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),20000);
  let response;try{response=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_MODEL||'gpt-4.1-mini',max_output_tokens:1100,instructions:'You are a neutral evidence-review assistant for a Guyana public-accountability platform. The issue may be DEMONSTRATION data, not a verified event. Never invent sources, facts, findings, or wrongdoing. State the evidence status prominently. Provide sections: Known record fields; Unverified or missing evidence; Potential public impact (conditional); Lawful parliamentary oversight options for the Leader of the Opposition (questions, records requests, committee scrutiny, request agency response); Suggested follow-up verification checklist. Avoid electioneering, partisan persuasion, and claims of guilt. If the input is demo data, explain no substantive factual conclusions can be drawn.',input:JSON.stringify({id:issue.id,title:issue.title,location:issue.location,severity:issue.severity,source:'Unverified demonstration record'})}),signal:controller.signal});}finally{clearTimeout(timeout)}
  const data=await response.json();if(!response.ok)return NextResponse.json({error:'AI provider request failed; check server configuration.'},{status:502});
  const analysis=(data.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==='output_text').map(x=>x.text).join('\n');
  if(!analysis)return NextResponse.json({error:'No analysis was returned.'},{status:502});
  return NextResponse.json({analysis});
 }catch{return NextResponse.json({error:'Could not generate analysis.'},{status:500})}
}
