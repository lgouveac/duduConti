# Conti Filmes — Portfólio + CMS

Site portfólio do Eduardo Conti (React + Vite) com um **CMS** próprio em `/admin`,
usando **Supabase** como banco de dados.

No painel você pode:

- Criar / editar / excluir projetos
- **Reordenar** projetos (arrastar ou setas ↑↓) — a ordem reflete no site
- Adicionar vídeo colando o link do **YouTube ou do Vimeo** (o id é detectado sozinho)
- Editar imagens de cada projeto (URLs)
- Editar os textos das páginas **Sobre** e **Contato**, o WhatsApp e o nome/tagline

> Sem o Supabase configurado, o site funciona normalmente usando os dados estáticos
> de `src/data/` (modo de fallback) — mas as edições do `/admin` precisam do Supabase.

## 1. Configurar o Supabase

1. Crie (ou abra) um projeto em [supabase.com](https://supabase.com).
2. Em **Project Settings → API**, copie a **Project URL** e a chave **anon public**.
3. Crie o arquivo `.env` na pasta `conti-filmes/` (copie de `.env.example`):

   ```
   VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-chave-anon-public
   ```

4. No Supabase, abra o **SQL Editor** e rode, nesta ordem:
   - `supabase/schema.sql`  → cria as tabelas e a segurança (RLS)
   - `supabase/seed.sql`    → insere os 18 projetos atuais e os textos das páginas

   > Os arquivos `.sql` são gerados a partir dos dados estáticos com
   > `node scripts/gen-sql.mjs` (rode de novo se mudar `src/data/`).

5. Crie o usuário de login (o Eduardo) em **Authentication → Users → Add user**
   (e-mail + senha, marque “Auto Confirm”). É com esse e-mail/senha que ele entra em `/admin`.

## 2. Rodar localmente

```bash
npm install
npm run dev
```

- Site: `http://localhost:5173/`
- Painel: `http://localhost:5173/admin`

## Como funciona

- `src/lib/supabase.js` — cliente do Supabase (lê as variáveis do `.env`).
- `src/lib/ContentContext.jsx` — carrega projetos e páginas do banco (com fallback estático).
- `src/lib/video.js` — detecta YouTube/Vimeo a partir do link e monta o embed.
- `src/pages/admin/` — painel: login, gestão de projetos e de páginas.
- `supabase/` — SQL de schema e seed.

## Segurança

- O `.env` está no `.gitignore` (nunca suba suas chaves).
- A chave `anon` pode ser pública; a proteção real é o **RLS**: qualquer um lê,
  mas só usuários autenticados podem escrever.
