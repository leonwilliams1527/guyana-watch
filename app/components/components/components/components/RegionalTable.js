const regions = [
  ["4", "Demerara-Mahaica", 386, 43, "High"],
  ["6", "East Berbice-Corentyne", 224, 26, "High"],
  ["3", "Essequibo Islands-West Demerara", 181, 18, "Medium"],
  ["10", "Upper Demerara-Berbice", 143, 15, "Medium"],
  ["5", "Mahaica-Berbice", 112, 9, "Medium"]
];

export default function RegionalTable() {
  return (
    <section className="panel regionalPanel">
      <div className="panelHeader">
        <div>
          <span className="eyebrow">GEOGRAPHIC INTELLIGENCE</span>
          <h2>Regional Overview</h2>
        </div>

        <button className="textButton">All 10 regions</button>
      </div>

      <div className="tableWrap">
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Open Issues</th>
              <th>Critical</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>
            {regions.map(([number, name, issues, critical, priority]) => (
              <tr key={number}>
                <td>
                  <div className="regionName">
                    <span className="regionNumber">{number}</span>
                    <span>{name}</span>
                  </div>
                </td>

                <td>{issues}</td>
                <td>{critical}</td>

                <td>
                  <span className={`priority ${priority.toLowerCase()}`}>
                    {priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="demoNotice">
        Demonstration data — regional totals will be generated from verified
        reports.
      </p>
    </section>
  );
}
