export function formatGYDFromMillions(millions, exact=false){
 const n=Number(millions||0),d=n*1_000_000;
 if(exact)return `G$${Math.round(d).toLocaleString("en-US")}`;
 if(d>=1e9)return `G$${(d/1e9).toLocaleString("en-US",{maximumFractionDigits:2})} billion`;
 if(d>=1e6)return `G$${(d/1e6).toLocaleString("en-US",{maximumFractionDigits:2})} million`;
 if(d>=1e3)return `G$${(d/1e3).toLocaleString("en-US",{maximumFractionDigits:2})} thousand`;
 return `G$${d.toLocaleString("en-US",{maximumFractionDigits:0})}`;
}
export function formatGYD(amount,exact=false){
 const n=Number(amount||0);
 if(exact)return `G$${Math.round(n).toLocaleString("en-US")}`;
 if(n>=1e9)return `G$${(n/1e9).toLocaleString("en-US",{maximumFractionDigits:2})} billion`;
 if(n>=1e6)return `G$${(n/1e6).toLocaleString("en-US",{maximumFractionDigits:2})} million`;
 if(n>=1e3)return `G$${(n/1e3).toLocaleString("en-US",{maximumFractionDigits:2})} thousand`;
 return `G$${n.toLocaleString("en-US",{maximumFractionDigits:0})}`;
}