export type PersonCore = {
  first_name: string;
  last_name?: string | null;
  phone?: string | null;
  email?: string | null;
  telegram_username?: string | null;
  city?: string | null;
  region?: string | null;
  country?: string | null;
  date_of_birth?: string | null;
  status?: string;
  status_uk?: string;
  source?: string;
  source_uk?: string;
  referral_source?: string | null;
  referral_details?: string | null;
  notes?: string | null;
};

export type PersonListItem = {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
  telegram_username?: string | null;
  city?: string | null;
  status: string;
  status_uk: string;
  source?: string;
  updated_at?: string | null;
  responsible?: StaffSummary | null;
  needs_contact?: boolean;
  has_next_action?: boolean;
  next_action_text?: string | null;
  next_action_at?: string | null;
};

export type StaffSummary = {
  id: number;
  email: string;
  full_name?: string | null;
  role: string;
  is_active: boolean;
};

export type FactRow = Record<string, unknown> & { id: string };

export type Person = {
  id: string;
  identity_user_id?: string | null;
  core: PersonCore;
  mobility: Record<string, unknown>;
  employment?: {
    stage_id?: string | null;
    stage_name?: string | null;
    stage_active?: boolean | null;
    offer_text?: string | null;
  };
  workflow?: {
    client_requests: {id:string; name:string; is_active:boolean}[];
    responsible?: StaffSummary | null;
    needs_contact: boolean;
    next_action_text?: string | null;
    next_action_at?: string | null;
  };
  tags: {skill_id:string; name:string; skill_type?:string|null}[];
  educations: FactRow[];
  credentials: FactRow[];
  experiences: FactRow[];
  activities: FactRow[];
  skills: FactRow[];
  languages: FactRow[];
  documents: FactRow[];
  created_at?: string | null;
  updated_at?: string | null;
};

export type CareerListItem = {
  id: string;
  code: string;
  name_uk: string;
  category_uk?: string | null;
  status?: string;
  profile_version?: number;
  short_description_uk?: string;
};
