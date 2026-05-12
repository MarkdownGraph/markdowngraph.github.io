// Minimal icon set – Fluent-style 1.5px line icons drawn with currentColor
const Icon = ({ children, size = 16, className = "ic" }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const I = {
  Caret: () => <Icon size={10}><path d="M3 6l5 5 5-5" /></Icon>,
  CaretSm: () => <Icon size={8}><path d="M3 6l5 5 5-5" /></Icon>,
  Search: () => <Icon><circle cx="7" cy="7" r="4.2" /><path d="M10.2 10.2L13.5 13.5" /></Icon>,
  Comment: () => <Icon><path d="M2.5 4.5a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2H7l-3 2v-2H4.5a2 2 0 01-2-2v-5z" /></Icon>,
  Bell: () => <Icon><path d="M8 2v1M4.5 6.5a3.5 3.5 0 117 0c0 3 1 4 1 4h-9s1-1 1-4z" /><path d="M7 13a1 1 0 002 0" /></Icon>,
  Activity: () => <Icon><path d="M1.5 8h2l2-5 4 10 2-5h3" /></Icon>,
  Share: () => <Icon><path d="M5.5 8.5l5-3M5.5 7.5l5 3" /><circle cx="4" cy="8" r="1.6" /><circle cx="12" cy="4" r="1.6" /><circle cx="12" cy="12" r="1.6" /></Icon>,
  Sparkle: () => <Icon><path d="M8 2.5l1.3 3.2L12.5 7 9.3 8.3 8 11.5 6.7 8.3 3.5 7l3.2-1.3z" /><path d="M12.5 11.5l.6 1.5 1.5.5-1.5.5-.6 1.5-.6-1.5L10.4 13l1.5-.5z" /></Icon>,
  Branch: () => <Icon><circle cx="4" cy="3.5" r="1.2" /><circle cx="4" cy="12.5" r="1.2" /><circle cx="12" cy="4.5" r="1.2" /><path d="M4 4.5v7M4 8.5h4a4 4 0 004-4" /></Icon>,
  History: () => <Icon><path d="M2.5 8a5.5 5.5 0 105.5-5.5 5.4 5.4 0 00-4 1.8" /><path d="M2.5 2v3h3" /><path d="M8 5v3l2 1.5" /></Icon>,
  // Ribbon icons
  Paste: () => <Icon><path d="M5 3h6v2H5z" /><path d="M3.5 4.5h2v9h7v-9h2" /></Icon>,
  Cut: () => <Icon><circle cx="4" cy="11.5" r="1.5" /><circle cx="12" cy="11.5" r="1.5" /><path d="M5 10.5L12.5 3M11 10.5L3.5 3" /></Icon>,
  Copy: () => <Icon><rect x="4" y="4" width="8" height="9" rx="1" /><path d="M6 4V3a1 1 0 011-1h5a1 1 0 011 1v9" /></Icon>,
  Painter: () => <Icon><path d="M2.5 6V4h7v2M3.5 6h5v2H3.5z" /><path d="M6 8v2l-1 1v2h2v-2l-1-1" /></Icon>,
  Bold: () => <Icon><path d="M5 3h3.5a2 2 0 010 4H5zM5 7h4a2 2 0 010 4H5zM5 3v8" /></Icon>,
  Italic: () => <Icon><path d="M7 3h5M4 13h5M9 3l-2 10" /></Icon>,
  Underline: () => <Icon><path d="M5 2.5v5a3 3 0 006 0v-5M3.5 13.5h9" /></Icon>,
  Border: () => <Icon><rect x="2.5" y="2.5" width="11" height="11" /><path d="M2.5 8h11M8 2.5v11" strokeDasharray="1.5 1.5" /></Icon>,
  Fill: () => <Icon><path d="M3 7.5l5-5 5 5-5 5z" /><path d="M3 7.5h10" /><circle cx="13" cy="11" r="1.2" /></Icon>,
  TextColor: () => <Icon><path d="M4 11.5L8 3l4 8.5M5.5 9h5" /><rect x="3" y="13" width="10" height="1.5" fill="currentColor" stroke="none" /></Icon>,
  AlignLeft: () => <Icon><path d="M2.5 4h11M2.5 7h7M2.5 10h11M2.5 13h7" /></Icon>,
  AlignCenter: () => <Icon><path d="M2.5 4h11M4.5 7h7M2.5 10h11M4.5 13h7" /></Icon>,
  AlignRight: () => <Icon><path d="M2.5 4h11M6.5 7h7M2.5 10h11M6.5 13h7" /></Icon>,
  AlignJustify: () => <Icon><path d="M2.5 4h11M2.5 7h11M2.5 10h11M2.5 13h11" /></Icon>,
  VTop: () => <Icon><path d="M3 3h10M5 6h6v8" /></Icon>,
  VMid: () => <Icon><path d="M3 8h3M10 8h3M6 4h4v8H6z" /></Icon>,
  VBot: () => <Icon><path d="M3 13h10M5 11V3h6v8" /></Icon>,
  Wrap: () => <Icon><path d="M2.5 4h11M2.5 8h9a2 2 0 010 4H8l1.5-1.5M9.5 13.5L8 12M2.5 12h3" /></Icon>,
  Merge: () => <Icon><rect x="2.5" y="4" width="11" height="8" /><path d="M5.5 4v8M10.5 4v8" strokeDasharray="1.5 1.5" /><path d="M7 8l2-2M7 8l2 2M9 8H7" /></Icon>,
  Sigma: () => <Icon><path d="M11.5 3.5h-7L8.5 8 4.5 12.5h7" /></Icon>,
  Percent: () => <Icon><path d="M3.5 12.5l9-9" /><circle cx="5" cy="5" r="1.5" /><circle cx="11" cy="11" r="1.5" /></Icon>,
  Dollar: () => <Icon><path d="M8 2.5v11M10.5 5.5a2 2 0 00-2-1H7.5a1.5 1.5 0 000 3h1a1.5 1.5 0 010 3H7a2 2 0 01-2-1" /></Icon>,
  Comma: () => <Icon><path d="M3.5 5.5h2v2h-2zM3.5 11.5h2v1c0 1-1 1.5-2 1.5M9 4h3.5v8H9z" /></Icon>,
  Increase: () => <Icon><path d="M3 8l2 2 4-4M11 8l1 1 2-2" /></Icon>,
  Decrease: () => <Icon><path d="M3 8l2 2 4-4M14 9l-3-3" /></Icon>,
  Filter: () => <Icon><path d="M2.5 3.5h11l-4 5v4l-3 1.5V8.5z" /></Icon>,
  Sort: () => <Icon><path d="M4 3.5v9M4 12.5L2 10.5M4 12.5L6 10.5M12 12.5v-9M12 3.5l-2 2M12 3.5l2 2" /></Icon>,
  Table: () => <Icon><rect x="2.5" y="3.5" width="11" height="9" /><path d="M2.5 6.5h11M6 3.5v9M10 3.5v9" /></Icon>,
  Cond: () => <Icon><path d="M4.5 3.5l5 9M11.5 3.5l-2 4 2 4" /><rect x="2.5" y="3.5" width="11" height="9" /></Icon>,
  // Markdown specials
  MdLogo: () => <Icon><rect x="1.5" y="3" width="13" height="10" rx="1.2" /><path d="M3.5 11V5l2 2.5L7.5 5v6M10 5v5M10 10l1.5 1.5L13 10" /></Icon>,
  Code: () => <Icon><path d="M5.5 4.5L2.5 8l3 3.5M10.5 4.5l3 3.5-3 3.5M9 3l-2 10" /></Icon>,
  Sync: () => <Icon><path d="M2.5 8a5.5 5.5 0 019.7-3.5M13.5 8a5.5 5.5 0 01-9.7 3.5" /><path d="M9.5 4.5h3v-3M6.5 11.5h-3v3" /></Icon>,
  Hash: () => <Icon><path d="M5 2.5l-1 11M11 2.5l-1 11M2.5 5.5h11M2.5 10.5h11" /></Icon>,
  // Sidebar
  Brush: () => <Icon><rect x="2.5" y="2.5" width="11" height="5" rx="1" /><path d="M5.5 7.5v2L4.5 11v2.5h7V11l-1-1.5v-2" /></Icon>,
  Stack: () => <Icon><rect x="2.5" y="2.5" width="11" height="3" /><rect x="2.5" y="6.5" width="11" height="3" /><rect x="2.5" y="10.5" width="11" height="3" /></Icon>,
  Graph: () => <Icon><circle cx="4" cy="4" r="1.5" /><circle cx="12" cy="4" r="1.5" /><circle cx="8" cy="12" r="1.5" /><path d="M5 5l2 6M11 5l-2 6M5.5 4h5" /></Icon>,
  Robot: () => <Icon><rect x="3" y="5" width="10" height="7" rx="1.2" /><circle cx="6" cy="8.5" r="0.8" fill="currentColor" /><circle cx="10" cy="8.5" r="0.8" fill="currentColor" /><path d="M8 5V3M6.5 13.5h3" /></Icon>,
  Clock: () => <Icon><circle cx="8" cy="8" r="5.5" /><path d="M8 5v3l2 1.5" /></Icon>,
  Plus: () => <Icon><path d="M8 3v10M3 8h10" /></Icon>,
  X: () => <Icon><path d="M4 4l8 8M12 4l-8 8" /></Icon>,
  Check: () => <Icon><path d="M3 8.5l3 3 7-7" /></Icon>,
  ChevL: () => <Icon><path d="M10 3l-5 5 5 5" /></Icon>,
  ChevR: () => <Icon><path d="M6 3l5 5-5 5" /></Icon>,
  Eye: () => <Icon><path d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z" /><circle cx="8" cy="8" r="2" /></Icon>,
  Doc: () => <Icon><path d="M3.5 1.5h6L12.5 4.5v10h-9z" /><path d="M9.5 1.5v3h3" /></Icon>,
  GridIcon: () => <Icon><rect x="2.5" y="2.5" width="11" height="11" /><path d="M2.5 6h11M2.5 9.5h11M6 2.5v11M9.5 2.5v11" /></Icon>,
  PageView: () => <Icon><rect x="2.5" y="2.5" width="11" height="11" rx="1" /><path d="M5 5.5h6M5 8h4M5 10.5h6" /></Icon>,
  GraphView: () => <Icon><circle cx="4" cy="4.5" r="1.5" /><circle cx="12" cy="4.5" r="1.5" /><circle cx="4" cy="11.5" r="1.5" /><circle cx="12" cy="11.5" r="1.5" /><path d="M5.5 4.5h5M5.5 11.5h5M4 6v4M12 6v4M5.5 5.5l5 5" /></Icon>,
  Access: () => <Icon><circle cx="8" cy="3.5" r="1.2" /><path d="M3.5 6h9M8 6v4M8 10l-2 3.5M8 10l2 3.5" /></Icon>,
  Lock: () => <Icon><rect x="3.5" y="7" width="9" height="6.5" rx="1" /><path d="M5.5 7V5a2.5 2.5 0 015 0v2" /></Icon>,
  ZoomOut: () => <Icon size={14}><path d="M4 8h6" /></Icon>,
  ZoomIn: () => <Icon size={14}><path d="M4 8h6M7 5v6" /></Icon>,
};

window.I = I;
window.Icon = Icon;
