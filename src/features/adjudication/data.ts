export type Role = "Admin" | "Payer" | "Provider";
export type PlanCode = "UDTOP" | "Gob/Mun/Unions" | "ELA" | "CIPR";
export type RateGroup = "Plan Parameters" | "Member Copay" | "Vista Care Cost Per Unit";

export interface RateItem {
  id: string;
  group: RateGroup;
  label: string;
  values: Record<PlanCode, number>;
}

export interface ProviderLocation {
  opticalProviderNumber: string;
  city: string;
}

export interface ProviderRecord {
  contactId: string;
  firstName: string;
  lastName: string;
  professionalType: string;
  taxonomyCode: string;
  credentialDate: string;
  locations: ProviderLocation[];
}

export interface Claim {
  id: string;
  memberId: string;
  memberName: string;
  plan: PlanCode;
  providerContactId: string;
  opticalProviderNumber: string;
  dateOfService: string;
  service: string;
  diagnosis: string;
  units: number;
  billed: number;
  allowed: number;
  memberResponsibility: number;
  payerPayable: number;
  status: "Submitted" | "Manual Review" | "Approved" | "Partially Approved" | "Denied" | "Payment Ready" | "Paid";
  notes: string;
}

export interface ManagedRecord {
  id: string;
  name: string;
  code: string;
  status: "Active" | "Inactive";
  detail: string;
}

export const roles: Array<{ role: Role; email: string; workspace: string }> = [
  { role: "Admin", email: "admin@demo.local", workspace: "Administration workspace" },
  { role: "Payer", email: "payer@demo.local", workspace: "Payer operations workspace" },
  { role: "Provider", email: "provider@demo.local", workspace: "Provider portal" },
];

export const planCodes: PlanCode[] = ["UDTOP", "Gob/Mun/Unions", "ELA", "CIPR"];

const v = (UDTOP: number, Gob: number, ELA: number, CIPR: number): Record<PlanCode, number> => ({
  UDTOP,
  "Gob/Mun/Unions": Gob,
  ELA,
  CIPR,
});

export const suppliedRates: RateItem[] = [
  { id: "rate-01", group: "Plan Parameters", label: "Eye Exam Reimbursement (paid to provider)", values: v(25, 25, 25, 25) },
  { id: "rate-02", group: "Plan Parameters", label: "Eye Exam Member Copay", values: v(12.5, 12.5, 12.5, 12.5) },
  { id: "rate-03", group: "Member Copay", label: "Frame Allowance (if applicable)", values: v(0, 0, 0, 125) },
  { id: "rate-04", group: "Member Copay", label: "Frame – 1st Pair Copay", values: v(15, 18, 18, 15) },
  { id: "rate-05", group: "Member Copay", label: "Single Vision Lens – 1st Pair Copay", values: v(15, 18, 18, 15) },
  { id: "rate-06", group: "Member Copay", label: "Bifocal Lens – 1st Pair Copay", values: v(15, 20, 20, 15) },
  { id: "rate-07", group: "Member Copay", label: "Trifocal Lens – 1st Pair Copay", values: v(15, 18, 18, 15) },
  { id: "rate-08", group: "Member Copay", label: "Contact Lens – Disposable Copay", values: v(30, 36, 36, 30) },
  { id: "rate-09", group: "Member Copay", label: "Contact Lens – Medically Necessary Allowance", values: v(30, 36, 36, 125) },
  { id: "rate-10", group: "Member Copay", label: "Tint Copay", values: v(0, 10, 10, 0) },
  { id: "rate-11", group: "Member Copay", label: "UV / Anti-Scratch Copay", values: v(0, 16, 16, 0) },
  { id: "rate-12", group: "Vista Care Cost Per Unit", label: "Frames – Procurement Cost (per pair)", values: v(12, 12, 12, 12) },
  { id: "rate-13", group: "Vista Care Cost Per Unit", label: "Single Vision Lens – Cost per Pair", values: v(15.7, 15.7, 15.7, 15.7) },
  { id: "rate-14", group: "Vista Care Cost Per Unit", label: "Bifocal Lens – Cost per Pair", values: v(18.66, 18.66, 18.66, 18.66) },
  { id: "rate-15", group: "Vista Care Cost Per Unit", label: "Trifocal / Poly Lens – Cost per Pair", values: v(38.62, 38.62, 38.62, 38.62) },
  { id: "rate-16", group: "Vista Care Cost Per Unit", label: "Fee Paid by FMHP – 1st Frame & Lens", values: v(0, 0, 0, 3) },
  { id: "rate-17", group: "Vista Care Cost Per Unit", label: "Fee Paid by FMHP – 2nd Frame & Lens", values: v(0, 0, 0, 25) },
  { id: "rate-18", group: "Vista Care Cost Per Unit", label: "Fee Paid by FMHP – Contact Lenses", values: v(0, 0, 0, 6) },
];

export const suppliedProviders: ProviderRecord[] = [
  { contactId: "100762", firstName: "GRACE", lastName: "WILEY RAMOS", professionalType: "OD", taxonomyCode: "152W00000X", credentialDate: "2023-09-01", locations: [{ city: "CAGUAS", opticalProviderNumber: "10-1492" }] },
  { contactId: "100471", firstName: "JOSÉ", lastName: "MATTEI MARTÍNEZ", professionalType: "OD", taxonomyCode: "152W00000X", credentialDate: "2023-09-01", locations: [{ city: "PONCE", opticalProviderNumber: "10-1714" }] },
  { contactId: "100788", firstName: "JOSÉ", lastName: "ÁLVAREZ APONTE", professionalType: "OD", taxonomyCode: "152W00000X", credentialDate: "2023-09-01", locations: [{ city: "SAN JUAN", opticalProviderNumber: "10-1765" }] },
  { contactId: "100432", firstName: "MÓNICA", lastName: "NIEVES COLÓN", professionalType: "OD", taxonomyCode: "152W00000X", credentialDate: "2023-09-08", locations: [
    { city: "BAYAMÓN", opticalProviderNumber: "10-1664" },
    { city: "VEGA BAJA", opticalProviderNumber: "10-1665" },
  ] },
];

export const emptyManagedData: Record<string, ManagedRecord[]> = {
  Payers: [], Networks: [], Users: [], "Adjudication Rules": [], "Vision Services": [], "CARC / RARC": [],
  "Utilization Limits": [], "Benefit Limits": [], Credentials: [], Members: [], Authorizations: [],
};

export const roleNavigation: Record<Role, Array<{ group: string; items: string[] }>> = {
  Admin: [
    { group: "Overview", items: ["Dashboard"] },
    { group: "Configuration", items: ["Master Configuration", "Payer Management", "Provider Management"] },
    { group: "Intelligence", items: ["AI Intelligence", "Reports & Analytics"] },
    { group: "Governance", items: ["Audit Logs", "Notifications", "Administration", "Profile"] },
  ],
  Payer: [
    { group: "Operations", items: ["Dashboard", "Claims Work Queue", "Manual Review & Exceptions", "Fraud & Anomaly Review", "Payment & Remittance"] },
    { group: "Intelligence", items: ["AI Intelligence", "Reports & Analytics"] },
    { group: "Account", items: ["Notifications", "Profile"] },
  ],
  Provider: [
    { group: "Portal", items: ["Dashboard", "Eligibility & Benefits", "Submit Claim", "Manage Claims"] },
    { group: "Account", items: ["Notifications", "Profile"] },
  ],
};
