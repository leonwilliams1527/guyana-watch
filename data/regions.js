export const regions = [
  { id: 1, name: "Barima-Waini", capital: "Mabaruma", issues: 58, critical: 6, x: 29, y: 12 },
  { id: 2, name: "Pomeroon-Supenaam", capital: "Anna Regina", issues: 71, critical: 7, x: 25, y: 31 },
  { id: 3, name: "Essequibo Islands-West Demerara", capital: "Vreed-en-Hoop", issues: 181, critical: 18, x: 37, y: 43 },
  { id: 4, name: "Demerara-Mahaica", capital: "Paradise / Georgetown area", issues: 386, critical: 43, x: 47, y: 47 },
  { id: 5, name: "Mahaica-Berbice", capital: "Fort Wellington", issues: 112, critical: 9, x: 57, y: 42 },
  { id: 6, name: "East Berbice-Corentyne", capital: "New Amsterdam", issues: 224, critical: 26, x: 71, y: 39 },
  { id: 7, name: "Cuyuni-Mazaruni", capital: "Bartica", issues: 66, critical: 5, x: 34, y: 56 },
  { id: 8, name: "Potaro-Siparuni", capital: "Mahdia", issues: 43, critical: 4, x: 50, y: 64 },
  { id: 9, name: "Upper Takutu-Upper Essequibo", capital: "Lethem", issues: 52, critical: 3, x: 52, y: 84 },
  { id: 10, name: "Upper Demerara-Berbice", capital: "Linden", issues: 143, critical: 15, x: 59, y: 57 }
];

export const places = [
  { name: "Georgetown", type: "City", region: 4, issues: 142, critical: 18 },
  { name: "Linden", type: "Town", region: 10, issues: 71, critical: 8 },
  { name: "New Amsterdam", type: "Town", region: 6, issues: 64, critical: 7 },
  { name: "Corriverton", type: "Town", region: 6, issues: 41, critical: 5 },
  { name: "Anna Regina", type: "Town", region: 2, issues: 29, critical: 3 },
  { name: "Bartica", type: "Town", region: 7, issues: 27, critical: 2 },
  { name: "Mabaruma", type: "Town", region: 1, issues: 19, critical: 2 },
  { name: "Mahdia", type: "Town", region: 8, issues: 17, critical: 2 },
  { name: "Lethem", type: "Town", region: 9, issues: 25, critical: 1 }
];


export const locationHierarchy = {
  4: [
    { city: "Georgetown", communities: [
      { name: "Albouystown", villages: ["Albouystown"], streets: ["La Penitence Street", "James Street", "Hunter Street"] },
      { name: "Campbellville", villages: ["Campbellville"], streets: ["Sheriff Street", "Campbell Avenue", "William Street"] },
      { name: "South Ruimveldt", villages: ["South Ruimveldt"], streets: ["Ruimveldt Avenue", "David Rose Street"] }
    ]},
    { city: "East Bank Demerara", communities: [
      { name: "Diamond / Grove", villages: ["Diamond", "Grove"], streets: ["Public Road", "Access Road"] },
      { name: "Providence", villages: ["Providence"], streets: ["Public Road", "Access Road"] }
    ]}
  ],
  6: [
    { city: "New Amsterdam", communities: [
      { name: "New Amsterdam", villages: ["New Amsterdam"], streets: ["Main Street", "Republic Road"] }
    ]},
    { city: "Corriverton", communities: [
      { name: "Corriverton", villages: ["Springlands", "Skeldon"], streets: ["Public Road", "Access Road"] }
    ]}
  ],
  10: [
    { city: "Linden", communities: [
      { name: "Mackenzie", villages: ["Mackenzie"], streets: ["Republic Avenue", "Greenheart Street"] },
      { name: "Wismar", villages: ["Wismar"], streets: ["Burnham Drive", "Blueberry Hill Road"] }
    ]}
  ]
};
