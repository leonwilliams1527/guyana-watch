const reports = [
  { id: "GW-1028", title: "Severe road deterioration", location: "East Bank Demerara, Region 4", category: "Roads", evidence: 6, severity: "Critical" },
  { id: "GW-1027", title: "Recurring community flooding", location: "Georgetown, Region 4", category: "Drainage", evidence: 11, severity: "High" },
  { id: "GW-1026", title: "Extended water service interruption", location: "New Amsterdam, Region 6", category: "Water", evidence: 4, severity: "High" },
  { id: "GW-1025", title: "Streetlights not operational", location: "Linden, Region 10", category: "Electricity", evidence: 8, severity: "Medium" }
];

export default function RecentReports() {
  return (
    <section className="panel">
      <div className="panelHeader">
        <div><span className="eyebrow">VERIFIED EVIDENCE</span><h2>Recent Reports</h2></div>
        <button className="textButton">View reports</button>
      </div>
      <div className="reportList">
        {reports.map((report) => (
          <article className="reportItem" key={report.id}>
            <div className="reportId">{report.id}</div>
            <div className="reportContent">
              <strong>{report.title}</strong><span>{report.location}</span>
              <div className="reportMeta"><span>{report.category}</span><span>{report.evidence} evidence files</span></div>
            </div>
            <span className={`severity ${report.severity.toLowerCase()}`}>{report.severity}</span>
          </article>
        ))}
      </div>
      <p className="demoNotice">Demonstration reports for interface development only.</p>
    </section>
  );
}