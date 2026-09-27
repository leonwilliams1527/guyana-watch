import {
  LayoutDashboard,
  Map,
  FileWarning,
  Landmark,
  Database,
  FileText
} from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="brandMark">GW</div>
        <div>
          <h1>GUYANA WATCH</h1>
          <span>National Accountability Monitor</span>
        </div>
      </div>

      <nav>
        <a className="active" href="#"><LayoutDashboard size={17} />Dashboard</a>
        <a href="#"><Map size={17} />Map</a>
        <a href="#"><FileWarning size={17} />Reports</a>
        <a href="#"><Landmark size={17} />Projects & Promises</a>
        <a href="#"><Database size={17} />Evidence</a>
        <a href="#"><FileText size={17} />Briefings</a>
      </nav>

      <button className="reportButton">Report an Issue</button>
    </header>
  );
}