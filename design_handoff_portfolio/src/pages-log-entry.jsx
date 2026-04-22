/* Log entry detail page — markdown-rendered */

const LOG_MD = {
  sclerocare: `# ScleroCare: An App for Patients

*July 24, 2025 · 8 min read*

Partnering with Tech4Good and Scleroderma Canada to build an app that actually helps patients — not another dashboard.

When we first got the brief, it was straightforward: build an app for patients with scleroderma. What wasn't in the brief was the emotional reality of the people using it — many dealing with pain, fatigue, and frustration with existing tools.

## Starting with research

We spent three weeks talking to patients, caregivers, and doctors before writing a single line of code. The takeaway: nobody wanted a new tracking app. They wanted something that felt like a friend who remembered.

> Technology should compress the distance between a symptom and a response.

That sentence became our north star. Every feature we shipped after that was measured against it.

## What we shipped

- A symptom log that asks two questions, not twenty
- Medication reminders that know about your day
- A directory of vetted specialists

More to come as we roll out to beta testers.`,

  internship: `# How to Land an Internship 101

*July 7, 2025 · 12 min read*

Some honest notes from landing my first internship — it's less about LeetCode and more about luck, preparation, and knowing what to signal.

Alright, let's get some things straight before you start reading this: I am not some internship wizard. You'll see people on LinkedIn with 7 FAANG internships who started coding out of the womb — that's not me.

Think of this as a checklist. Checking these off will likely increase your chances, but nothing guarantees a landing. Hope for the best, prepare for the worst.

## Why do companies hire interns?

It's an investment. Companies hire interns to give them a trial version of what it would be like to work there full-time. Realistically, companies know you're not going to invent a new massively efficient process — but interns do bring value.

A lot of interns bring valuable technical expertise to the table. Secondly, interns are usually from the younger generation — which lets them look at problems with a fresh set of eyes.

> Even if you LeetCode in your sleep, nothing stops the hiring manager from picking a better-qualified individual.

## The short list

1. Get your resume reviewed by someone who hires
2. Apply early — like, months-early
3. Do one project you can actually demo end-to-end
4. Practice talking, not just coding`,

  intro: `# Intro — why I started writing

*June 21, 2025 · 4 min read*

Why I decided to start writing these in the first place.

I've always been bad at remembering things. Not names — those I'm fine with — but the texture of what I was doing three months ago. Which project I was excited about. Which bug took me out for a weekend.

This logbook is my fix for that. It's not a blog. I'm not writing to optimize for reach. I'm writing to have something to look back on.`,
};

/* Tiny markdown → React renderer (headings, paragraphs, quotes, lists, em/strong) */
function renderMd(md) {
  const lines = md.split('\n');
  const out = [];
  let listBuffer = null;
  let olBuffer = null;

  const flushLists = () => {
    if (listBuffer) { out.push(<ul key={'ul'+out.length}>{listBuffer.map((l,i)=><li key={i}>{inline(l)}</li>)}</ul>); listBuffer = null; }
    if (olBuffer)   { out.push(<ol key={'ol'+out.length}>{olBuffer.map((l,i)=><li key={i}>{inline(l)}</li>)}</ol>); olBuffer = null; }
  };

  const inline = (s) => {
    // split by **...** then *...*
    const parts = [];
    let rest = s;
    let key = 0;
    const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/;
    while (rest.length) {
      const m = rest.match(re);
      if (!m) { parts.push(rest); break; }
      const before = rest.slice(0, m.index);
      if (before) parts.push(before);
      const tok = m[0];
      if (tok.startsWith('**')) parts.push(<strong key={key++}>{tok.slice(2,-2)}</strong>);
      else if (tok.startsWith('`')) parts.push(<code key={key++}>{tok.slice(1,-1)}</code>);
      else parts.push(<em key={key++}>{tok.slice(1,-1)}</em>);
      rest = rest.slice(m.index + tok.length);
    }
    return parts;
  };

  for (const raw of lines) {
    const line = raw;
    if (/^\s*$/.test(line)) { flushLists(); continue; }
    if (/^# /.test(line))       { flushLists(); out.push(<h1 key={out.length}>{inline(line.slice(2))}</h1>); continue; }
    if (/^## /.test(line))      { flushLists(); out.push(<h2 key={out.length}>{inline(line.slice(3))}</h2>); continue; }
    if (/^### /.test(line))     { flushLists(); out.push(<h3 key={out.length}>{inline(line.slice(4))}</h3>); continue; }
    if (/^> /.test(line))       { flushLists(); out.push(<blockquote key={out.length}>{inline(line.slice(2))}</blockquote>); continue; }
    if (/^- /.test(line))       { if (!listBuffer) listBuffer = []; listBuffer.push(line.slice(2)); continue; }
    if (/^\d+\. /.test(line))   { if (!olBuffer) olBuffer = []; olBuffer.push(line.replace(/^\d+\.\s/, '')); continue; }
    flushLists();
    out.push(<p key={out.length}>{inline(line)}</p>);
  }
  flushLists();
  return out;
}

function PageLogEntry({ id }) {
  const { navigate } = useRouter();
  const md = LOG_MD[id] || LOG_MD.intro;

  return (
    <main className="page page-enter">
      <article className="log-article md">
        <a href="#" className="log-back" onClick={(e) => { e.preventDefault(); navigate('/logbook'); }}>
          <Icon.arrowLeft /> Back to logbook
        </a>
        {renderMd(md)}

        <div className="log-next">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-muted)' }}>NEXT IN THE LOGBOOK</span>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/logbook'); }} style={{ fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: 'var(--display-tracking)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)' }}>
            Browse all entries <Icon.arrow />
          </a>
        </div>
      </article>
      <Footer />
    </main>
  );
}

window.PageLogEntry = PageLogEntry;
