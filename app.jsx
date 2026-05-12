const { useState } = React;

// ===== Data =====
const COLS = ["A","B","C","D","E","F","G","H","I","J","K"];
const PRODUCT_COL_INDEX = 1; // B
const DATA = [
  { product: "Laptops",     q1: 25430, q2: 28510, q3: 26305, q4: 30120, total: 110365 },
  { product: "Monitors",    q1: 14620, q2: 15200, q3: 16010, q4: 18450, total: 64280 },
  { product: "Keyboards",   q1:  7200, q2:  6950, q3:  7450, q4:  8100, total: 29700 },
  { product: "Mice",        q1:  5320, q2:  5850, q3:  6120, q4:  6980, total: 24270 },
  { product: "Accessories", q1:  9310, q2: 10410, q3:  9875, q4: 11230, total: 40825 },
];
const TOTAL_ROW = { product: "Total", q1: 61880, q2: 66920, q3: 65760, q4: 74880, total: 269440 };
const fmt = (n) => n.toLocaleString("en-US");

// ===== Components =====
function TopBar({ onAgent }) {
  return (
    <div className="topbar">
      <div className="brand">
        <div className="brand-mark">M</div>
        <div className="brand-name">MarkdownSheet</div>
      </div>
      <div className="doc-meta">
        <button className="doc-title">
          sales-summary<span className="ext">.md</span>
          <I.CaretSm />
        </button>
        <span className="saved-pill"><span className="dot"></span> Saved</span>
        <span className="branch"><I.Branch /> main · v24</span>
        <span className="audit-badge">
          <I.Sparkle /> 3 agent proposals <span className="sep">·</span> auditable
        </span>
      </div>
      <div className="search">
        <I.Search />
        <input placeholder="Search, ask agent, or run command…" />
        <span className="hint">⌘K</span>
      </div>
      <div className="top-actions">
        <button className="icon-btn" title="Comments">
          <I.Comment />
          <span className="ind"></span>
        </button>
        <button className="icon-btn" title="Activity"><I.Activity /></button>
        <button className="icon-btn" title="Version history"><I.History /></button>
        <button className="btn btn--ai" onClick={onAgent}><I.Sparkle /> Agent</button>
        <button className="btn btn--primary"><I.Share /> Share</button>
        <div className="avatar">MA</div>
      </div>
    </div>
  );
}

const RIBBON_TABS = ["Home","Insert","Formulas","Data","Markdown","Review","Agents","View"];

function RibbonTabs({ active, onChange }) {
  return (
    <div className="ribbon-tabs">
      {RIBBON_TABS.map(t => (
        <button
          key={t}
          className={"ribbon-tab" + (active === t ? " is-active" : "")}
          onClick={() => onChange(t)}>
          {t}{t === "Agents" && <span className="agent-pill">3</span>}
        </button>
      ))}
    </div>
  );
}

function RibbonHome() {
  return (
    <div className="ribbon-cmd">
      <div className="group">
        <div className="cbtn" title="Paste"><I.Paste /><I.CaretSm /></div>
        <div className="stack-2">
          <button className="cbtn" title="Cut"><I.Cut /></button>
          <button className="cbtn" title="Copy"><I.Copy /></button>
        </div>
        <button className="cbtn" title="Format painter"><I.Painter /></button>
      </div>
      <div className="group">
        <div className="select w-font">Segoe UI<I.Caret /></div>
        <div className="select w-size">11<I.Caret /></div>
      </div>
      <div className="group">
        <button className="cbtn"><I.Bold /></button>
        <button className="cbtn"><I.Italic /></button>
        <button className="cbtn"><I.Underline /></button>
        <button className="cbtn"><I.Border /><I.CaretSm /></button>
        <button className="cbtn"><I.Fill /><I.CaretSm /></button>
        <button className="cbtn"><I.TextColor /><I.CaretSm /></button>
      </div>
      <div className="group">
        <button className="cbtn"><I.AlignLeft /></button>
        <button className="cbtn"><I.AlignCenter /></button>
        <button className="cbtn"><I.AlignRight /></button>
        <button className="cbtn"><I.VTop /></button>
        <button className="cbtn"><I.VMid /></button>
        <button className="cbtn"><I.VBot /></button>
        <button className="cbtn"><I.Wrap /> Wrap</button>
        <button className="cbtn"><I.Merge /> Merge</button>
      </div>
      <div className="group">
        <div className="select w-num">General<I.Caret /></div>
        <button className="cbtn"><I.Dollar /></button>
        <button className="cbtn"><I.Percent /></button>
        <button className="cbtn"><I.Comma /></button>
        <button className="cbtn"><I.Decrease /></button>
        <button className="cbtn"><I.Increase /></button>
      </div>
      <div className="group">
        <button className="cbtn"><I.Cond /> Conditional</button>
        <button className="cbtn"><I.Table /> Format as Table</button>
        <button className="cbtn"><I.Sort /> Sort</button>
        <button className="cbtn"><I.Filter /> Filter</button>
      </div>
    </div>
  );
}

function RibbonMarkdown() {
  return (
    <div className="ribbon-cmd">
      <div className="group">
        <button className="cbtn is-on"><I.Code /> View source</button>
        <button className="cbtn"><I.Sync /> Sync markdown</button>
        <button className="cbtn"><I.Eye /> Preview</button>
      </div>
      <div className="group">
        <button className="cbtn"><I.Hash /> Table block ID</button>
        <button className="cbtn"><I.Doc /> Frontmatter</button>
        <button className="cbtn"><I.Stack /> Named ranges</button>
      </div>
      <div className="group">
        <button className="cbtn"><I.Branch /> Cross-doc refs</button>
        <button className="cbtn"><I.Graph /> Dependency graph</button>
      </div>
      <div className="group">
        <button className="cbtn"><I.Check /> Validate schema</button>
        <button className="cbtn"><I.MdLogo /> Export markdown</button>
      </div>
    </div>
  );
}

function FormulaBar() {
  return (
    <div className="formula-bar">
      <div className="name-box">C7 <I.Caret /></div>
      <div className="fb-divider"></div>
      <button className="fb-icon" title="Cancel"><I.X /></button>
      <button className="fb-icon" title="Confirm"><I.Check /></button>
      <button className="fb-icon fx" title="Insert function">fx</button>
      <div className="fb-divider"></div>
      <div className="formula-input">
        =<span className="fn">SUM</span><span className="paren">(</span><span className="rng">C2:C6</span><span className="paren">)</span>
      </div>
      <span className="fb-dep-badge"><span className="dot"></span> Tracked · 5 deps · deterministic</span>
    </div>
  );
}

function Grid() {
  const selCol = 2; // C, zero-indexed
  const selRow = 6; // row 7 (1-indexed) in display, which is total row in data
  const depRows = [1,2,3,4,5]; // rows 2..6 in spreadsheet (data rows 0..4)

  // Build extended col widths (A..K)
  return (
    <div className="grid-wrap" id="gridScroll">
      <table className="grid-table">
        <colgroup>
          <col style={{ width: "var(--gutter-w)" }} />
          <col style={{ width: 44 }} />
          <col style={{ width: "var(--col-w-name)" }} />
          {Array.from({length: 9}).map((_,i) => <col key={i} style={{ width: "var(--col-w)" }} />)}
        </colgroup>
        <thead>
          <tr>
            <th className="corner"></th>
            {COLS.map((c, i) => (
              <th key={c} className={i === selCol ? "col-hl" : ""}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({length: 18}).map((_, rIdx) => {
            const rowNum = rIdx + 1;
            const isRowHl = rowNum === (selRow + 1);
            const isHeaderRow = rowNum === 1;
            const isDataRow = rowNum >= 2 && rowNum <= 6;
            const isTotalRow = rowNum === 7;
            const dataIdx = rowNum - 2;
            const row = isDataRow ? DATA[dataIdx] : null;

            return (
              <tr key={rIdx}
                  className={isHeaderRow ? "row-head" : isTotalRow ? "row-total" : ""}>
                <th className={isRowHl ? "row-hl" : ""}>{rowNum}</th>
                {/* A: index number */}
                <td>
                  <div className="cell num" style={{ color: "var(--colorNeutralForeground3)" }}>
                    {isDataRow ? dataIdx + 1 : ""}
                  </div>
                </td>
                {/* B: product name */}
                <td className="col-prod">
                  <div className={"cell" + (isHeaderRow ? " head" : "")}>
                    {isHeaderRow ? "Product"
                      : isDataRow ? row.product
                      : isTotalRow ? TOTAL_ROW.product
                      : ""}
                  </div>
                </td>
                {/* C: Q1 Sales */}
                <td className={
                    (isTotalRow ? "is-selected" :
                     depRows.includes(rIdx) ? "is-dep" : "")
                  }>
                  <div className={"cell num" + (isHeaderRow ? " head" : "")}>
                    {isHeaderRow ? "Q1 Sales"
                      : isDataRow ? fmt(row.q1)
                      : isTotalRow ? fmt(TOTAL_ROW.q1)
                      : ""}
                  </div>
                </td>
                {/* D: Q2 */}
                <td>
                  <div className={"cell num" + (isHeaderRow ? " head" : "")}>
                    {isHeaderRow ? "Q2 Sales"
                      : isDataRow ? fmt(row.q2)
                      : isTotalRow ? fmt(TOTAL_ROW.q2)
                      : ""}
                  </div>
                </td>
                {/* E: Q3 */}
                <td>
                  <div className={"cell num" + (isHeaderRow ? " head" : "")}>
                    {isHeaderRow ? "Q3 Sales"
                      : isDataRow ? fmt(row.q3)
                      : isTotalRow ? fmt(TOTAL_ROW.q3)
                      : ""}
                  </div>
                </td>
                {/* F: Q4 */}
                <td>
                  <div className={"cell num" + (isHeaderRow ? " head" : "")}>
                    {isHeaderRow ? "Q4 Sales"
                      : isDataRow ? fmt(row.q4)
                      : isTotalRow ? fmt(TOTAL_ROW.q4)
                      : ""}
                  </div>
                </td>
                {/* G: Total */}
                <td>
                  <div className={"cell num" + (isHeaderRow ? " head" : "")}>
                    {isHeaderRow ? "Total Sales"
                      : isDataRow ? fmt(row.total)
                      : isTotalRow ? fmt(TOTAL_ROW.total)
                      : ""}
                  </div>
                </td>
                {/* H-K empty */}
                {[0,1,2,3].map(i => <td key={i}><div className="cell"></div></td>)}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="ask-agent" title="Ask Sheet Agent">
        <span className="glyph"><I.Sparkle /></span>
        Ask Sheet Agent
        <span className="kbd">⌘J</span>
      </button>
    </div>
  );
}

function Sidebar() {
  const [tab, setTab] = useState("style");
  const tabs = [
    { id: "style",   icon: <I.Brush />,   label: "Style" },
    { id: "data",    icon: <I.Stack />,   label: "Data" },
    { id: "formula", icon: <I.Sigma />,   label: "Formula", badge: 1 },
    { id: "agent",   icon: <I.Robot />,   label: "Agent",   badge: 3 },
    { id: "history", icon: <I.Clock />,   label: "History" },
  ];
  return (
    <aside className="sidebar">
      <div className="sb-head">
        <div className="sb-title">Format</div>
        <button className="icon-btn"><I.X /></button>
      </div>
      <div className="sb-tabs">
        {tabs.map(t => (
          <button key={t.id}
            className={"sb-tab" + (tab===t.id ? " is-active" : "")}
            onClick={() => setTab(t.id)}>
            {t.icon}
            {t.badge && <span className="badge">{t.badge}</span>}
          </button>
        ))}
      </div>
      <div className="sb-body">

        <div className="sb-section">
          <div className="sb-section-title">Number format</div>
          <div className="sb-row">
            <div className="sb-select">General <span className="caret"><I.Caret /></span></div>
          </div>
          <div className="sb-row" style={{marginTop: 6}}>
            <div className="btn-row" style={{flex:1}}>
              <button className="pbtn"><I.Dollar /></button>
              <button className="pbtn"><I.Percent /></button>
              <button className="pbtn"><I.Decrease /></button>
              <button className="pbtn"><I.Increase /></button>
            </div>
          </div>
        </div>

        <div className="sb-section">
          <div className="sb-section-title">Font</div>
          <div className="sb-row">
            <div className="sb-select" style={{flex: 2}}>Segoe UI <span className="caret"><I.Caret /></span></div>
            <div className="sb-select" style={{flex: 1}}>11 <span className="caret"><I.Caret /></span></div>
          </div>
          <div className="sb-row" style={{marginTop: 6}}>
            <div className="btn-row" style={{flex:1}}>
              <button className="pbtn"><I.Bold /></button>
              <button className="pbtn"><I.Italic /></button>
              <button className="pbtn"><I.Underline /></button>
              <button className="pbtn"><I.TextColor /></button>
            </div>
          </div>
        </div>

        <div className="sb-section">
          <div className="sb-section-title">Alignment</div>
          <div className="btn-row">
            <button className="pbtn"><I.AlignLeft /></button>
            <button className="pbtn is-on"><I.AlignRight /></button>
            <button className="pbtn"><I.AlignCenter /></button>
            <button className="pbtn"><I.AlignJustify /></button>
          </div>
          <div className="btn-row" style={{marginTop: 4}}>
            <button className="pbtn"><I.VTop /></button>
            <button className="pbtn is-on"><I.VMid /></button>
            <button className="pbtn"><I.VBot /></button>
            <button className="pbtn"><I.Wrap /></button>
          </div>
        </div>

        <div className="sb-section">
          <div className="sb-section-title">Border &amp; fill</div>
          <div className="btn-row">
            <button className="pbtn"><I.Border /></button>
            <button className="pbtn"><I.Border /></button>
            <button className="pbtn"><I.Fill /></button>
            <button className="pbtn"><I.Painter /></button>
          </div>
        </div>

        <div className="sb-section">
          <div className="sb-section-title">
            Markdown metadata
            <span className="ms-tag">SYNCED</span>
          </div>
          <div className="kv"><span className="k">Table ID</span><span className="v mono">sales_summary</span></div>
          <div className="kv"><span className="k">Source</span><span className="v mono link">reports/q4-sales.md</span></div>
          <div className="kv"><span className="k">Block ID</span><span className="v mono">tbl_sales_001</span></div>
          <div className="kv"><span className="k">Schema</span><span className="v">products[5] × quarters[4]</span></div>
        </div>

        <div className="sb-section">
          <div className="sb-section-title">
            Formula intelligence
            <span className="right">cell C7</span>
          </div>
          <div className="kv"><span className="k">Formula</span><span className="v mono">=SUM(C2:C6)</span></div>
          <div className="kv"><span className="k">Dependencies</span><span className="v link">5 cells →</span></div>
          <div className="kv"><span className="k">Recalc</span><span className="v">Deterministic</span></div>
          <div className="kv">
            <span className="k">Status</span>
            <span className="status-chip ok"><span className="dot"></span> Valid</span>
          </div>

          <div className="agent-suggest">
            <div className="as-head"><I.Sparkle /> Sheet Agent</div>
            <div className="as-body">
              <b>=SUM(C2:C6)</b> aggregates Q1 across all 5 product rows.
              Block <code>tbl_sales_001</code> in <code>q4-sales.md</code> guarantees this range.
            </div>
            <div className="as-actions">
              <button className="pill-btn primary"><I.Sparkle /> Explain formula</button>
              <button className="pill-btn ghost">Trace deps</button>
            </div>
          </div>
        </div>

        <div className="sb-section">
          <div className="sb-section-title">Actions</div>
          <div className="action-list">
            <button className="action ai"><span className="ico"><I.Check /></span>Validate formulas<span className="meta">12 cells</span></button>
            <button className="action ai"><span className="ico"><I.Graph /></span>Trace dependencies<span className="meta">→ graph</span></button>
            <button className="action ai"><span className="ico"><I.MdLogo /></span>Convert table to Markdown</button>
            <button className="action"><span className="ico"><I.Lock /></span>Lock formula range</button>
          </div>
        </div>

      </div>
    </aside>
  );
}

const SHEETS = [
  { name: "Sales Summary", src: "q4-sales.md", active: true },
  { name: "Products",      src: "products.md" },
  { name: "Regions",       src: "regions.md" },
  { name: "Data" },
  { name: "Markdown Source" },
  { name: "Dependency Graph" },
];

function BottomTabs() {
  return (
    <div className="bottom-tabs">
      <div className="bnav">
        <button className="icon-btn"><I.ChevL /></button>
        <button className="icon-btn"><I.ChevR /></button>
      </div>
      {SHEETS.map((s, i) => (
        <button key={i} className={"sheet-tab" + (s.active ? " is-active" : "")}>
          {s.name}
          {s.src && <span className="src">{s.src}</span>}
        </button>
      ))}
      <button className="icon-btn" style={{alignSelf: "center"}}><I.Plus /></button>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="statusbar">
      <span className="item ok"><I.Check /> Ready</span>
      <span className="sep"></span>
      <span className="item ok"><I.Access /> Accessibility: Good to go</span>
      <span className="sep"></span>
      <span className="item ai"><I.Sync /> Markdown synced · 2s ago</span>
      <span className="sep"></span>
      <span className="item"><I.Graph /> Dependency graph: 47 nodes · 0 cycles</span>

      <div className="right">
        <span className="vsw">
          <button className="vbtn is-active" title="Grid"><I.GridIcon /></button>
          <button className="vbtn" title="Markdown"><I.PageView /></button>
          <button className="vbtn" title="Graph"><I.GraphView /></button>
        </span>
        <span className="sep"></span>
        <span className="zoom">
          <button className="icon-btn" style={{width: 22, height: 22}}><I.ZoomOut /></button>
          <span className="slider"></span>
          <button className="icon-btn" style={{width: 22, height: 22}}><I.ZoomIn /></button>
          <span className="pct">100%</span>
        </span>
      </div>
    </div>
  );
}

function App() {
  const [tab, setTab] = useState("Home");
  return (
    <div className="app">
      <TopBar />
      <RibbonTabs active={tab} onChange={setTab} />
      {tab === "Markdown" ? <RibbonMarkdown /> : <RibbonHome />}
      <FormulaBar />
      <div className="workspace">
        <Grid />
        <Sidebar />
      </div>
      <BottomTabs />
      <StatusBar />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
