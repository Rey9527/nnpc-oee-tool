create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  certificate_id text not null unique,
  recipient_name text not null,
  position text,
  program text,
  certificate_type text default 'internship_completion',
  start_date date,
  end_date date,
  issue_date date,
  status text not null default 'Draft' check (status in ('Draft', 'Verified', 'Revoked', 'Expired')),
  issued_by_name text default 'Derek Yeh',
  issued_by_title text default 'Chief Executive Officer',
  revoked_at timestamptz,
  revocation_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists certificates_certificate_id_idx on public.certificates (certificate_id);
create index if not exists certificates_status_idx on public.certificates (status);

alter table public.certificates enable row level security;

create policy "Public can read issued certificates"
on public.certificates
for select
using (status in ('Verified', 'Revoked', 'Expired'));

insert into public.certificates (
  certificate_id,
  recipient_name,
  position,
  program,
  certificate_type,
  start_date,
  end_date,
  issue_date,
  status,
  issued_by_name,
  issued_by_title
) values (
  'NNPC-INT-2026-001',
  'Lin Myat Phyo',
  'Data & AI Operation Analyst Intern',
  'NNPC Internship Program',
  'internship_completion',
  '2025-12-05',
  '2026-06-04',
  '2026-06-05',
  'Verified',
  'Derek Yeh',
  'Chief Executive Officer'
) on conflict (certificate_id) do nothing;
