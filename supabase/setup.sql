-- Abbas' AI Academy: one private row of progress per signed-in person.
create table if not exists public.academy_progress (
  user_id uuid primary key default auth.uid() references auth.users on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.academy_progress enable row level security;
grant select, insert, update on public.academy_progress to authenticated;
drop policy if exists "read own progress" on public.academy_progress;
drop policy if exists "add own progress" on public.academy_progress;
drop policy if exists "change own progress" on public.academy_progress;
create policy "read own progress" on public.academy_progress for select to authenticated using (auth.uid() = user_id);
create policy "add own progress" on public.academy_progress for insert to authenticated with check (auth.uid() = user_id);
create policy "change own progress" on public.academy_progress for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
