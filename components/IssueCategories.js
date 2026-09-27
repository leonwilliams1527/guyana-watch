const categories = [
  ["Roads & Bridges", 438],
  ["Drainage & Flooding", 271],
  ["Electricity", 184],
  ["Water", 137],
  ["Healthcare", 96],
  ["Education", 74],
  ["Waste Management", 51],
  ["Government Services", 33]
];

export default function IssueCategories() {
  const max = Math.max(...categories.map((item) => item[1]));
  return (
    <section className="panel">
      <div className="panelHeader">
        <div><span className="eyebrow">NATIONAL OVERVIEW</span><h2>Issues by Category</h2></div>
        <button className="textButton">View all</button>
      </div>
      <div className="categoryList">
        {categories.map(([name, total]) => (
          <div className="category" key={name}>
            <div className="categoryRow"><span>{name}</span><strong>{total}</strong></div>
            <div className="bar"><div className="barFill" style={{ width: `${(total / max) * 100}%` }} /></div>
          </div>
        ))}
      </div>
      <p className="demoNotice">Demonstration data — not official public-service statistics.</p>
    </section>
  );
}