const promises = [
  { project: "Regional road rehabilitation programme", ministry: "Infrastructure", status: "Delayed" },
  { project: "Community drainage improvement works", ministry: "Public Works", status: "Review" },
  { project: "Public health facility upgrade", ministry: "Health", status: "On Track" }
];

export default function PromiseTracker() {
  return (
    <section className="panel">
      <div className="panelHeader">
        <div><span className="eyebrow">ACCOUNTABILITY</span><h2>Projects & Promises</h2></div>
        <button className="textButton">Open tracker</button>
      </div>
      <div className="promiseList">
        {promises.map((item) => (
          <div className="promiseItem" key={item.project}>
            <div><strong>{item.project}</strong><span>{item.ministry}</span></div>
            <span className={`promiseStatus ${item.status.toLowerCase().replace(" ", "")}`}>{item.status}</span>
          </div>
        ))}
      </div>
      <p className="demoNotice">Placeholder projects — actual entries will require cited public sources.</p>
    </section>
  );
}