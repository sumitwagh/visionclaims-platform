import { type ReactNode } from "react";
import { Eye, Pencil, Plus, Trash2, X } from "lucide-react";

export function Button({ children, variant = "primary", icon, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "danger" | "ghost"; icon?: ReactNode }) {
  return <button className={`app-button app-button-${variant}`} {...props}>{icon}{children}</button>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`app-card ${className}`}>{children}</section>;
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <header className="page-header"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>{action}</header>;
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "positive" | "warning" | "danger" | "info" | "neutral" }) {
  return <span className={`status-badge status-${tone}`}>{children}</span>;
}

export function Kpi({ label, value, note, onClick }: { label: string; value: string | number; note: string; onClick?: () => void }) {
  const body = <><p>{label}</p><strong>{value}</strong><span>{note}</span></>;
  return onClick ? <button className="kpi-card" onClick={onClick}>{body}</button> : <div className="kpi-card">{body}</div>;
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return <div className="empty-state"><div className="empty-icon">0</div><h3>{title}</h3><p>{body}</p>{action}</div>;
}

export function Modal({ title, description, children, onClose, footer, wide = false }: { title: string; description?: string; children: ReactNode; onClose: () => void; footer?: ReactNode; wide?: boolean }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><div className={`modal-panel ${wide ? "modal-wide" : ""}`} role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => event.stopPropagation()}><header><div><h2>{title}</h2>{description && <p>{description}</p>}</div><button className="icon-button" aria-label="Close" onClick={onClose}><X size={18} /></button></header><div className="modal-body">{children}</div>{footer && <footer>{footer}</footer>}</div></div>;
}

export function Drawer({ title, subtitle, children, onClose }: { title: string; subtitle: string; children: ReactNode; onClose: () => void }) {
  return <div className="drawer-backdrop" role="presentation" onMouseDown={onClose}><aside className="detail-drawer" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => event.stopPropagation()}><header><div><p className="eyebrow">Details</p><h2>{title}</h2><p>{subtitle}</p></div><button className="icon-button" aria-label="Close details" onClick={onClose}><X size={19} /></button></header><div className="drawer-body">{children}</div></aside></div>;
}

export function Field({ label, children, error }: { label: string; children: ReactNode; error?: string }) {
  return <label className="field"><span>{label}</span>{children}{error && <small>{error}</small>}</label>;
}

export function CrudActions({ onView, onEdit, onDelete }: { onView: () => void; onEdit: () => void; onDelete: () => void }) {
  return <div className="table-actions"><button aria-label="View" title="View" onClick={onView}><Eye size={16} /></button><button aria-label="Edit" title="Edit" onClick={onEdit}><Pencil size={16} /></button><button aria-label="Delete" title="Delete" onClick={onDelete}><Trash2 size={16} /></button></div>;
}

export const AddButton = ({ onClick, label = "Add" }: { onClick: () => void; label?: string }) => <Button onClick={onClick} icon={<Plus size={16} />}>{label}</Button>;
