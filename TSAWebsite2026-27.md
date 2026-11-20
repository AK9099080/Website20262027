# AxonEDU: project guide for Claude Code

Read this whole file before changing anything. It explains what the project is, how it is built, what must never be changed, how to match the style, and what is left to do.

## 1. What this is

AxonEDU is a free AI-literacy learning portal for high school students (grades 9 to 12). Students learn how AI works, how to use it ethically for school, and practice with games. It is a student project. The site was formerly called "Synapse High". The name AxonEDU is final.

Context note: the original assignment brief said AI is not allowed to build the site. The owner knows this and asked for AI help anyway, so treat code here as work the owner reviews and owns. Do not remove or hide anything about this from the owner if they ask.

Core ideas:
- Gamified like Prodigy, Blooket and Nearpod: XP, levels, achievements, avatars, leaderboards, mini games.
- Five learning modules, 25 lessons, a quiz after every lesson.
- Real accounts in the cloud (Supabase), username plus 6-digit PIN only.
- Friends with request and accept, real-time duels, class, school and world leaderboards.

## 2. Files and how to run

| File | Purpose |
|---|---|
| `axonedu.html` | The whole site. This is the master file. Edit this one. |
| `axonedu-site/index.html` | Copy of the master for deployment. |
| `axonedu-site/404.html` | Another copy. GitHub Pages serves it for deep links like `/news`. |
| `axonedu-site/_redirects` | Netlify rewrite rule: `/*    /index.html   200` |
| `axonedu-site/vercel.json` | Same rewrite rule for Vercel. |
| `CLAUDE.md` | This file. Keep it at the repo root. |
| `synapse-high*.html` | Old versions. Ignore. Do not edit. |

Recommended repo layout: `index.html`, `404.html`, `_redirects`, `vercel.json`, `CLAUDE.md`, `img/hero.png`, `img/logo-home.png`.

Run locally: double-click the file or serve the folder. In `file://` mode the router uses hash URLs (`#/news`). On a real host it uses clean paths (`/news`).

Deploy: after any edit, copy `axonedu.html` over `index.html` and `404.html`, then deploy the folder (Netlify Drop, Vercel, or GitHub Pages). Deep links such as `/news` only survive a refresh if the rewrite file for that host is deployed. On GitHub Pages project sites the code detects the repo sub-folder automatically (`BASE`).

Verify the JavaScript parses after every edit:

```bash
node -e "const s=require('fs').readFileSync('axonedu.html','utf8');const j=s.match(/<script>([\s\S]*)<\/script>/)[1];new Function(j);console.log('syntax ok')"
```

## 3. Tech stack and constraints

- One HTML file with inline CSS and inline JavaScript. No build step, no framework, no npm. Keep it that way unless the owner asks.
- Vanilla JavaScript, ES5 style: `function` declarations, `var`, string-concatenated HTML, `async/await` only for network code.
- Supabase JS loaded from CDN, pinned: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js`. Pin exact versions for any new script.
- Backend: Supabase project at `https://rytzhadculmofsblaxju.supabase.co` (Postgres, Auth, Realtime). The page uses only the public anon key (`SB_KEY` near the end of the script).
- External images: logo and hero come from the owner's GitHub repo (see section 12).

## 4. Anatomy of `axonedu.html`

Search for these markers and names to navigate.

| Where | What |
|---|---|
| `<style>` | All CSS. Theme variables are at the top (`:root` and the dark media query). |
| `<body>` | Header (`.top`, `#nav`, `#auth`), logged-in bar (`#sub`), `<main id="main">`, `<div id="modal">`, `<footer>`. |
| `/* ===== QUESTION BANK` | Helpers `Q()` and `TF()`, arrays `QUIZ`, `MYTH`, `PROMPT`, `TERMS`, and `ALLQ`. **All game questions live here.** |
| `/* ===== LESSON CONTENT` | `MODS`: five modules, each with 5 lessons of `[title, [paragraphs], [3 quiz questions]]`. |
| `var ACH=` | The 35 achievements (id, code, name, description, test function). `BADGES` is derived from it. |
| `var AVS=` | Avatar gradients and the level that unlocks each. |
| `var NEWS=` | News blog items. |
| `function render()` | Draws header, bars and the current page. Every page is a function returning HTML. |
| `/* ===== URL ROUTING` | `PATHS`, `urlOf`, `pathRoute`, `pushUrl`, `syncUrl`, `popstate` handler. |
| `async function loadUser` | Loads profile, progress, friends after login. |
| `async function doLogin` | Username plus PIN login and sign-up. |
| `function addXp` | Awards XP through the `add_xp` RPC. |
| `function chk` | Computes achievements from data. |
| `function games()` | Games hub. Start functions: `play`, `fcStart`, `muStart`, `blStart`, `gmStart`, `startDuel`, `liveInvite`. |
| `async function loadBoard` | World, School, Class, Friends leaderboards. |
| `async function loadFriends` | Friend list and pending requests. |
| `async function viewProfile` | Clickable player profile card. |
| `async function loadDuels` | Play-later duels list. |
| `function startInbox` | Realtime invites and friend notifications. |

Global state: `U` (current user, or `null`), `route`, `LB` (leaderboard rows), and one object per game: `G` (quiz race), `FC` (flashcards), `MU` (match up), `BL` (blaster), `GM` (gem match), `DG` (play-later duel), `RT` (live duel).

User object shape: `U = {id, name, xp, av, school, cls, created, done:{moduleId:[lessonIndexes]}, badges:[], wins, st:{stats}, friends:[{id,name,xp,av}], reqIn:[{id,name}], reqOut:[{id,name}]}`.

## 5. Pages and routes

Each page has its own URL. Add a route by editing `PATHS`, `PUB` or `PRI`, and the page map inside `render()`.

| Route key | Path | Function | Needs login |
|---|---|---|---|
| `home` | `/` | `home()` | No |
| `why` | `/why-learn-ai` | `why()` | No |
| `stats` | `/statistics` | `stats()` | No |
| `news` | `/news` | `news()` | No |
| `dash` | `/dashboard` | `dash()` | Yes |
| `lib` | `/library` | `lib()` | Yes |
| `games` | `/games` | `games()` | Yes |
| `lb` | `/leaderboards` | `board()` | Yes |
| `me` | `/profile` | `me()` | Yes |

Logged-out visits to private routes fall back to `home`. Navigation links are real `<a href>` tags with `onclick="go('route');return false"`.

## 6. What has been built so far

Learning
- Library of 5 modules with tags (Easy, Medium, Hard, Essential, First) and progress bars; started modules are shown first.
- Lesson reader: 4 paragraphs per lesson, quiz unlocks after 15 seconds, 3 questions, 2 correct to pass. Passing gives 25 XP, a perfect score +10, finishing a module +50.

Games (all give XP; questions come from the question bank)
- Quiz Race, Myth Buster (true or false), Prompt Doctor, Flashcard Sprint, Match Up, Quiz Blaster (canvas shooter, bouncing answer targets, 60-second rounds that get harder), Gem Match (match-3 with question breaks for extra moves), Friend Duels (play later, or live in real time).
- Wrong-answer XP penalty and subject selection are **not built yet** (see backlog).

Gamification and social
- XP and levels (`level = floor(xp/100)+1`), 35 derived achievements, unlockable gradient avatars (initial on a gradient circle), XP bar in the logged-in bar.
- Leaderboards: World, School, Class, Friends (tab order as listed). Players set school and class code on the Profile page; spelling must match.
- Friend requests that the other person must accept, with live notifications.
- Clickable profiles showing level, XP, per-game personal bests, lessons completed and modules in progress, and join date.

Accounts and data
- Username plus 6-digit PIN through Supabase Auth, everything stored in Supabase, progress follows the player across devices.

## 7. Supabase backend

### Tables

| Table | Columns | Notes |
|---|---|---|
| `profiles` | `id` (= auth user id), `username` (unique, `^[A-Za-z0-9_]{3,16}$`), `avatar` int, `xp` int, `school`, `class_code`, `stats` jsonb, `created_at` | Readable by every signed-in user. |
| `progress` | `user_id`, `module_id`, `lessons` int[] | Write own; read all. |
| `friendships` | `requester`, `addressee`, `status` (`pending` or `accepted`) | One row per pair (unique index on the pair). |
| `duels` | `id`, `challenger`, `opponent`, `qids` int[], `c_score`, `o_score`, `created_at` | Play-later duels. |
| `friends` | old table | **Unused.** Safe to drop. |

### Full schema (idempotent order for a fresh project)

```sql
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique not null check (username ~ '^[A-Za-z0-9_]{3,16}$'),
  avatar int not null default 0,
  xp int not null default 0 check (xp >= 0),
  school text, class_code text,
  stats jsonb not null default '{}'::jsonb,
  created_at timestamptz default now()
);
create table progress (
  user_id uuid references profiles(id) on delete cascade,
  module_id text, lessons int[] not null default '{}',
  primary key (user_id, module_id)
);
create table friendships (
  requester uuid not null references profiles(id) on delete cascade,
  addressee uuid not null references profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','accepted')),
  created_at timestamptz default now(),
  primary key (requester, addressee),
  check (requester <> addressee)
);
create unique index friendships_pair on friendships (least(requester, addressee), greatest(requester, addressee));
create table duels (
  id uuid primary key default gen_random_uuid(),
  challenger uuid not null references profiles(id) on delete cascade,
  opponent uuid not null references profiles(id) on delete cascade,
  qids int[] not null,
  c_score int not null check (c_score between 0 and 200),
  o_score int check (o_score between 0 and 200),
  created_at timestamptz default now(),
  check (challenger <> opponent)
);

alter table profiles enable row level security;
alter table progress enable row level security;
alter table friendships enable row level security;
alter table duels enable row level security;

create policy "read all"   on profiles for select to authenticated using (true);
create policy "insert own" on profiles for insert to authenticated with check (id = auth.uid());
create policy "update own" on profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
create policy "own progress"      on progress for all    to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "read all progress" on progress for select to authenticated using (true);
create policy "see own"     on friendships for select to authenticated using (auth.uid() in (requester, addressee));
create policy "send request" on friendships for insert to authenticated with check (requester = auth.uid() and status = 'pending');
create policy "accept"      on friendships for update to authenticated using (addressee = auth.uid() and status = 'pending') with check (addressee = auth.uid() and status = 'accepted');
create policy "remove"      on friendships for delete to authenticated using (auth.uid() in (requester, addressee));
create policy "see own duels" on duels for select to authenticated using (auth.uid() in (challenger, opponent));
create policy "start duel"    on duels for insert to authenticated with check (challenger = auth.uid() and o_score is null);
create policy "answer duel"   on duels for update to authenticated using (opponent = auth.uid() and o_score is null) with check (opponent = auth.uid());

grant select on profiles to authenticated;
grant insert (id, username, avatar, school, class_code) on profiles to authenticated;
grant update (avatar, school, class_code, stats) on profiles to authenticated;
grant select, insert, update on progress to authenticated;
grant select, delete on friendships to authenticated;
grant insert (requester, addressee) on friendships to authenticated;
grant update (status) on friendships to authenticated;
grant select on duels to authenticated;
grant insert (challenger, opponent, qids, c_score) on duels to authenticated;
grant update (o_score) on duels to authenticated;

create function add_xp(n int) returns void language sql security definer set search_path = public as $$
  update profiles set xp = xp + least(greatest(n, 0), 100) where id = auth.uid()
$$;
revoke execute on function add_xp(int) from public, anon;
grant execute on function add_xp(int) to authenticated;
```

Supabase dashboard settings the site depends on:
- Authentication, Email provider: **"Confirm email" must be OFF.**
- Realtime: public broadcast channels must be allowed (default).
- Table creation options used: Data API on, automatic RLS on.

### Realtime channels (broadcast only, no database tables)

- `inbox:<userId>`: events `invite` (live duel), `friendreq`, `friendacc`.
- `room:<code>`: events `join`, `start`, `next`, `ans`, `end`, `bye`. The host controls question timing. Both clients send their own score.

### Deleting an account

Dashboard, Authentication, Users, find `<username>@synapse.app`, Delete user. Cascades remove the profile, progress, friendships and duels. Never delete only the `profiles` row.

## 8. DO NOT CHANGE (these protect the site from breaking)

1. **Login stays username plus 6-digit PIN.** Do not switch to email, passwords, magic links or OAuth unless the owner explicitly asks. The site maps a username to the fake email `<username lowercase>@synapse.app` and sends the PIN as the Supabase password (Supabase requires at least 6 characters, which is why the PIN is 6 digits). Changing the domain `@synapse.app` locks out every existing account, even though the old name is "Synapse". Do not "clean it up".
2. **Never put the `service_role` or secret key in the page, the repo or this file.** Only the public anon key belongs in the HTML. Anything in the page is public.
3. **Keep "Confirm email" off** in Supabase, or sign-up with fake emails breaks.
4. **XP only changes through the `add_xp` RPC** (cap 100 per call, so `addXpBig` splits larger awards). Do not add an `update` grant on `profiles.xp`, and do not write XP from the client directly. This prevents trivial cheating.
5. **Keep Row Level Security on every table** and keep column-level grants as written. Do not widen grants (for example, never grant update on all of `profiles`). New columns need an explicit grant decision.
6. **Do not rename or reorder existing questions in `ALLQ`.** Duels store question indexes (`qids`), and both players must resolve the same index to the same question. Append new questions at the end of the array they belong to; do not insert in the middle or delete without checking duels.
7. **Do not rename stat keys in `U.st`** (they are saved in `profiles.stats` and read by achievements and profile cards): `raceWins played fcDone matchFast matchBest blRounds blBest gemBest gemQ perfect duels duelWins docWins q_<Game>_p q_<Game>_w`. Add new keys freely.
8. **Achievements are derived, not stored.** `chk()` recomputes them from progress, XP, stats and friends. Do not store badge lists in the database.
9. **Route keys and paths** (`home`, `why`, `stats`, `news`, `dash`, `lib`, `games`, `lb`, `me`) are used by links, the router and the footer. Change them only with a search-and-replace across the whole file.
10. **Usernames are validated to `^[A-Za-z0-9_]{3,16}$`** in the client and the database. Names are inserted into HTML without escaping because of that guarantee. Any other user-supplied text (school, class code, anything new) must be sanitized (`clean()`) or escaped before it goes into `innerHTML`.
11. **Keep the pinned Supabase version** unless you test login, realtime and the friend system after upgrading.
12. **Do not store personal data.** No real names, emails, birthdays or locations. Players are students.
13. **`localStorage`:** Supabase uses it for the session. The site uses `sh_dc_<userId>` for claimed duel bonuses. Do not clear or rename these.
14. **Do not remove the 15-second lesson timer or the 2-of-3 quiz rule** without asking. They exist so students actually read.

## 9. Design system: match this style

The owner wants the site to look "pretty good, not AI-looking": professional, cool, a little game-like. They rejected emojis, a stacked "pyramid" header, color-coded difficulty tags, the old logo and hero art.

Rules
- **No emojis anywhere.** The checkmark `✓` is the only symbol used as an icon. Icons are monospace text chips (`01`, `FC`, `BL`) or SVG.
- Use CSS variables for every color. Never hard-code colors in components. Exceptions: gem colors, avatar gradients, canvas drawing colors (read from CSS variables where possible).
- Tags are **one neutral style**. Do not color-code difficulty.
- Copy is plain and direct. Use curly apostrophes and quotes (’ “ ”) in visible text and straight quotes only in code. Avoid hype and filler.
- Sentence case for headings. Short paragraphs.
- Everything must work on phone widths (the header wraps, grids are `auto-fill`).

Tokens (the site is light by default and switches to dark when the device is in dark mode; dark values shown)

```
--bg:#080c1c  --bg2:#0d1330  --card:#111a3a  --ink:#e8ecff  --mut:#8d98c4
--pri:#6d6bff --pri2:#22d3ee --ok:#34d399    --bad:#fb7185  --line:#222d5c
```

- Font: `Inter, "Segoe UI", Helvetica, Arial, sans-serif`. Numbers and chips use Consolas monospace.
- Radius: 9px (buttons, inputs), 14 to 16px (cards), 99px (pills, bars).
- Brand gradient: `linear-gradient(135deg, var(--pri), var(--pri2))` on primary buttons, progress bars, achievement tiles.
- Hover: small lift (`translateY(-1 or -2px)`) and a `--pri2` border.

Reusable components (use them, do not invent new ones)
- `.btn`, `.btn.ghost`, `.btn.gold` (inverted dark button), `.card`, `.grid` (auto-fill cards), `.sec` (section spacing), `.eyebrow` (small uppercase label), `.chip` (numbered tile), `.tag`, `.pill` and `.pill.on`, `.bar > i` (progress), `.opt` (answer button, with `.good`, `.no`, `.sel`), `.lane` (race lane), `table` styles, `.toast`, `.modal > .box`, `.av` (avatar via `av(size, user)`), `.badge`, `.plink` (clickable player name).
- Helpers: `$('id')`, `toast(msg)`, `fail(res)` (shows a save error), `render()`, `go('route')`, `av(sz,u)`, `tags(m)`, `lvl()`, `prog(m)`, `addXp(n)`, `addXpBig(n)`, `bump(key,n)` (increment a stat), `best(key,value)` (keep the max).

Layout
- Header today: logo centered on top, the nav links centered underneath, Log in in the top-right corner. The owner now dislikes this stacked "pyramid" look and wants it changed (backlog item 4). When logged in, a second bar below shows Dashboard, Library, Games, Leaderboards and Profile centered, with name, level and XP bar on the right.
- Page content sits in `main` (max width 1060px). Page titles are an `h1` with a short intro.

## 10. Recipes for common changes

Add a question: open `QUESTION BANK`. Append `Q('Question','Correct','Wrong 1','Wrong 2','Wrong 3'),` to `QUIZ` or `PROMPT`, or `TF('Statement', true),` to `MYTH`. Options are shuffled automatically. Append at the end (rule 6).

Add a flashcard term: append `['Term','Definition']` to `TERMS`.

Add a lesson: inside the module in `MODS`, append `['Title',['paragraph 1','paragraph 2','paragraph 3','paragraph 4'],[Q(...),Q(...),Q(...)]]`. Progress is stored as lesson indexes, so only append. Keep exactly 3 quiz questions, 3 to 4 paragraphs.

Add a module: add an object to `MODS` with `id`, `t`, `ic` (two-digit code), `tags`, `d`, `L`. Then check achievements that reference module ids (`basics`, `tools`, `ethics`, `gen`, `opt`).

Add an achievement: append `[id, 'code', 'Name', 'Description', function(c){...}]` to `ACH`. `c` has `les, tot, mods, md, lv, xp, st, fr, sch, cls`.

Add a game, in order:
1. A card in `games()` and a start function that renders into `$('game')`.
2. Award XP with `addXp` or `addXpBig` (max 100 per call). Cap total XP per run.
3. Record stats with `bump()` and `best()`. Call `bump('played')` once per finished run.
4. Add a row to the personal bests list in `viewProfile`.
5. Add at least one achievement.
6. Clean up timers and `requestAnimationFrame` loops when the player leaves (check the canvas or `$('game')` still exists).

Add a page: write a function returning HTML, add a route key to `PATHS`, add it to `PUB` or `PRI`, add it to the `f={...}` map in `render()`, and test refresh on the new path.

Add a database column: write the SQL, decide RLS and column grants, update `loadUser`, then update the client. Give the owner the SQL to run in the Supabase SQL editor.

## 11. Working style the owner expects

- Make focused edits. Do not rewrite or reformat the whole file for a small change.
- Keep existing features working. After editing, run the syntax check and click through the affected pages.
- Hand the owner anything that has to be run in Supabase as a clearly labeled SQL block, and say what it does.
- Explain in plain language what changed and how to try it.
- Be honest about what was tested. Do not claim live Supabase behavior was verified if it was only simulated.
- Ask before changing auth, database security rules, the site name, or the visual identity.
- Prefer completing the next backlog item well over adding unrequested features.

Testing checklist
- Sign up a new username, log out, log in again, try a wrong PIN.
- Pass and fail a lesson quiz; confirm XP and progress persist after refresh.
- Play each game once; confirm XP and stats save.
- Two accounts: send a friend request, accept, check Friends board, open a profile, run a live duel and a play-later duel.
- Refresh on `/news`, `/library`, `/games` on the deployed host.

## 12. Known issues and limits

- **Cheating is possible** for determined players (duel scores and stats are reported by the browser). Fine for a class project.
- **Anyone signed in can see every player's username, XP, stats and lesson progress.** That is by design for leaderboards and profiles.
- A 6-digit PIN is weak. Supabase rate-limits attempts. Do not use this for sensitive data. Check school or district rules about student data before wide rollout (FERPA, parental consent).
- The logo URL `https://github.com/AK9099080/Website20262027/blob/main/img/logo-home.png?raw=true` returned **404** when checked, so that file may not be uploaded yet. The hero image at `.../img/hero.png` works but is a generic gray placeholder picture.
- The Statistics page figures and the News page items are **placeholders**, not tied to cited sources yet.
- Race wins and other stats are saved in `profiles.stats`; players who played before stats existed show empty bests.

## 13. Backlog (not built yet)

The owner keeps a feedback list in `website_fix_stuff.pdf`. None of it is in the current file. Suggested approach for each is below.

Website
1. **References page** (`/references`). Verified sources ready to use:
   - Pew Research Center (2026, Feb 24). How Teens Use and View AI. `https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/` (64% of U.S. teens use AI chatbots, about 3 in 10 daily; 54% used chatbots for schoolwork).
   - Sidoti and Park, Pew (2025, Jan 15). About a quarter of U.S. teens have used ChatGPT for schoolwork. `https://www.pewresearch.org/short-reads/2025/01/15/about-a-quarter-of-us-teens-have-used-chatgpt-for-schoolwork-double-the-share-in-2023/` (26% in 2024, 13% in 2023).
   - Georgieva (2024, Jan 14). IMF Blog, AI will transform the global economy. `https://www.imf.org/en/blogs/articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity` (almost 40% of global employment exposed to AI).
   - Dunlosky et al. (2013). Improving students' learning with effective learning techniques. `https://doi.org/10.1177/1529100612453266` (practice testing and distributed practice rated high utility).
   - Buolamwini and Gebru (2018). Gender Shades. `http://proceedings.mlr.press/v81/buolamwini18a.html`.
   - U.S. Copyright Office (2025, Jan). Copyright and AI, Part 2: Copyrightability. `https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`.
   Replace the placeholder numbers on the Statistics page with the figures above and link each to its reference.
2. Replace the logo with the owner's `logo-home.png` (add a text wordmark fallback if the image fails to load).
3. White background on non-game pages (home, news, library, and so on); keep the dark game look for games.
4. Header: logo left and vertically centered; Log in vertically centered in the bar. Remove the stacked "pyramid" look.
5. Add a site footer. Move "About us" to the very bottom of the home page.
6. Rebuild the home page to feel big and bubbly like Khan Academy style marketing pages: full-viewport hero (min-height 100vh minus header), alternating text and illustration sections with green-check lists, a "Learner results" section, a call-to-action band, educator-toned copy.
7. Level 10 unlock: custom gradient avatar picked from a color wheel (`<input type="color">`, two colors). Suggested: avatar index 7, colors stored in `stats.avc` validated with `^#[0-9a-f]{6},#[0-9a-f]{6}$`, and rendering handled inside `av()`.
8. All games open in a full-screen popup overlay (one overlay container holding `#game`, titles centered and large, Close button, Escape key).
9. Different URLs per page. Done in the current file (see section 5); keep the rewrite files deployed.

Games
10. Remove Prompt Doctor (card, achievement `doc`, stat rows). Keep its questions as the "Optimizing" subject.
11. Add a small learning-focused popup minigame in its place with varied question types (multiple choice, true or false, fill in the blank, ordering) and short explanations after each answer.
12. **Subject selection gate.** Tag every question and term with a subject (the five module ids). Add a subject picker on the Games page (multi-select, remembered in `localStorage`). Games must refuse to start until at least one subject is selected, and every game draws only from selected subjects. Duels must still send question indexes, picked from the host's selected subjects.
13. **Wrong answers cost XP, never below zero.** XP can only go up through `add_xp`, so add a server function and call it from the client:
    ```sql
    create function lose_xp(n int) returns void language sql security definer set search_path = public as $$
      update profiles set xp = greatest(xp - least(greatest(n, 0), 20), 0) where id = auth.uid()
    $$;
    revoke execute on function lose_xp(int) from public, anon;
    grant execute on function lose_xp(int) to authenticated;
    ```
    Keep the amount in one constant (suggested 2 XP) and mirror it in the client with `Math.max(0, …)`.
14. **Dashboard game history, especially against other players.** Suggested table:
    ```sql
    create table game_results (
      id bigint generated always as identity primary key,
      user_id uuid not null references profiles(id) on delete cascade,
      game text not null check (char_length(game) <= 30),
      score int not null default 0,
      result text check (result in ('win','loss','tie','done')),
      opponent uuid references profiles(id) on delete set null,
      opp_score int,
      created_at timestamptz default now()
    );
    alter table game_results enable row level security;
    create policy "own results" on game_results for select to authenticated using (user_id = auth.uid());
    create policy "add own result" on game_results for insert to authenticated with check (user_id = auth.uid());
    grant select on game_results to authenticated;
    grant insert (user_id, game, score, result, opponent, opp_score) on game_results to authenticated;
    ```
    Log a row when a game ends (and for duels, once both players have played). Show "Recent games" and a head-to-head record per opponent on the dashboard.
15. Game pages: all titles centered, some with bigger fonts. Add more educational content to the games hub (short learning-science tips, explanations after answers, review hints that point back to lessons).

Keep in mind: items that touch the database (12 to 14) require SQL the owner runs, and must follow section 8.

## 14. Quick facts

- Games: Quiz Race, Myth Buster, Prompt Doctor, Flashcard Sprint, Match Up, Quiz Blaster, Gem Match, Friend Duels.
- Content: 5 modules, 25 lessons, 75 lesson-quiz questions, 47 + 27 + 14 game questions, 26 flashcard terms, 35 achievements.
- XP awards: lesson 25 (+10 perfect, +50 module), race win 50 or loss 20, flashcards 20, match up 25 or 40 under 60 seconds, Blaster 1 XP per 6 points (max 150), Gem Match 1 XP per 8 points (max 150), duel 30 (+20 win).
- Avatars unlock by level (1, 1, 2, 3, 4, 5, 6).
- Gem Match: 20 starting moves; a question every 300 points (+100 each time); right answer +10 moves, second chance +5, miss twice and no bonus.
- Quiz Blaster: clicking on a target hits it even if another box is in front; rounds need 300, 400, 500 and so on; 60 seconds per round.
