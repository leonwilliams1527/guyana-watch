import { AlertTriangle } from "lucide-react";

export default function PriorityWatch() {
  return (
    <section className="priorityPanel">
      <div className="priorityIcon"><AlertTriangle size={22} /></div>
      <div>
        <span className="eyebrow">PRIORITY WATCH</span>
        <h3>Issues requiring immediate review</h3>
        <p>Critical verified reports and rapidly increasing issue clusters will appear here for staff review.</p>
      </div>
      <button>Open Priority Center</button>
    </section>
  );
}