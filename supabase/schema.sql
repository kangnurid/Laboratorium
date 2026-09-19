-- SynthaLIMS: skema registrasi sampel
-- Jalankan di Supabase Dashboard > SQL Editor

create extension if not exists "pgcrypto";

create table if not exists public.samples (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  matrix text not null default 'Darah Vena EDTA (Tutup Ungu K2EDTA)',
  priority text not null default 'rutin' check (priority in ('rutin','cito','investigasi')),
  client_category text not null default 'Fasilitas Kesehatan / RS',
  sender text not null default '',
  ref_no text not null default '',
  subject text not null default '',
  sampling_time text not null default '',
  received_time text not null default '',
  volume_ml numeric null,
  intake_temp_c numeric null,
  visual text not null default 'Jernih (Non-Hemolisis)',
  check_sealed boolean not null default true,
  check_leak_free boolean not null default true,
  check_label_clear boolean not null default true,
  intake_note text not null default '',
  tests text[] not null default '{}',
  storage_unit text not null default 'chiller-b1',
  rack_row text not null default 'E',
  rack_col text not null default '07',
  location_code text generated always as ('LOC-' || upper(replace(storage_unit,'-','')) || '-T04-' || rack_row || rack_col) stored,
  status text not null default 'registered' check (status in ('draft','registered','queued','testing','validated','coa')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists samples_code_idx on public.samples (code);
create index if not exists samples_created_idx on public.samples (created_at desc);
create index if not exists samples_status_idx on public.samples (status);

-- updated_at otomatis
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_samples_touch on public.samples;
create trigger trg_samples_touch
before update on public.samples
for each row execute function public.touch_updated_at();

-- RLS: buka akses anonim untuk demo internal (sesuaikan untuk produksi!)
alter table public.samples enable row level security;

drop policy if exists "samples public read" on public.samples;
create policy "samples public read" on public.samples
for select using (true);

drop policy if exists "samples public insert" on public.samples;
create policy "samples public insert" on public.samples
for insert with check (true);

drop policy if exists "samples public update" on public.samples;
create policy "samples public update" on public.samples
for update using (true) with check (true);

drop policy if exists "samples public delete" on public.samples;
create policy "samples public delete" on public.samples
for delete using (true);

-- Contoh seed (opsional)
insert into public.samples (code, matrix, priority, sender, ref_no, subject, sampling_time, received_time, volume_ml, intake_temp_c, tests, storage_unit, rack_row, rack_col, status)
values
('#SMP-2025-1043','Darah Vena EDTA (Tutup Ungu K2EDTA)','rutin','RS Siloam Lippo Village - Paviliun Umum','REF-SLM-9920198-PK','Tn. Hendra Gunawan','22/10 08:15 WIB','22/10 09:45 WIB',4.5,3.8,'{kimia,glukosa,hba1c}','chiller-b1','E','07','registered')
on conflict (code) do nothing;
