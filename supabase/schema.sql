-- ============================================================
-- Conti Filmes — schema do CMS (Supabase / Postgres)
-- Cole tudo isto no SQL Editor do Supabase e clique em "Run".
-- ============================================================

create extension if not exists pgcrypto;

-- Projetos do portfólio
create table if not exists public.projects (
  id             uuid primary key default gen_random_uuid(),
  slug           text unique not null,
  title          text not null,
  role           text default '',
  video_provider text,           -- 'youtube' | 'vimeo' | null
  video_id       text,
  description    text default '',
  images         jsonb not null default '[]'::jsonb,
  sort_order     integer not null default 0,
  created_at     timestamptz not null default now()
);

create index if not exists projects_sort_order_idx on public.projects (sort_order);

-- Conteúdo editável das páginas (sobre, contato) e da marca (site)
create table if not exists public.pages (
  key        text primary key,   -- 'site' | 'sobre' | 'contato'
  content    jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- Segurança (RLS): leitura pública, escrita só para logados
-- ============================================================
alter table public.projects enable row level security;
alter table public.pages    enable row level security;

drop policy if exists "projects_public_read" on public.projects;
create policy "projects_public_read" on public.projects
  for select using (true);

drop policy if exists "projects_auth_write" on public.projects;
create policy "projects_auth_write" on public.projects
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

drop policy if exists "pages_public_read" on public.pages;
create policy "pages_public_read" on public.pages
  for select using (true);

drop policy if exists "pages_auth_write" on public.pages;
create policy "pages_auth_write" on public.pages
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
