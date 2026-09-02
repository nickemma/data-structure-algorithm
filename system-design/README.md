# System Design

Nobody expects you to know how Instagram is built. They expect you to take a vague prompt, make sensible assumptions out loud, and defend your choices when pushed.

That's learnable, because it's a **sequence**, not a body of knowledge. Learn the sequence and you can design a system you've never thought about before.

## The loop

```
1. SCRIPT     Learn the 7-step sequence and the clock.
2. WORKED     Read a full 45-minute design, written out, with the reasoning
              behind every move made explicit.
3. PRACTICE   You design a different system alone, on a timer, out loud.
4. REVIEW     You bring me what you wrote. I review it like an interviewer:
              what was strong, what I'd have pushed on, what would sink you.
```

## Start here

1. [The 45-minute script](how-to-approach.md) — the seven steps, what goes in each, and the habits that actually score points. Read once, keep open.
2. [Worked example: URL shortener](01-worked-example/) — the whole 45 minutes as a transcript. Every step is followed by a **💡 why I did that**, which is the real content.
3. [Practice: design a rate limiter](practice.md) — your turn, on the clock, no help.

Do them in that order. The worked example is only useful if you already know what the seven steps are.

## Also here

| Folder | What it's for |
| --- | --- |
| [`reference/`](reference/) | Short pages on caching, CAP, sharding, protocols, resilience, security. **Read these on demand**, when a design exposes a gap — not front-to-back beforehand. |
| [`mock-interviews/`](mock-interviews/) | Ten prompts with hidden interviewer follow-ups. Use after the rate limiter. |
| [`my-designs/`](my-designs/) | Your written designs. Start from `TEMPLATE.md`. |

## The five things that separate a pass from a fail

1. **Requirements before boxes.** Spend the first ten minutes on scope and numbers. Most beginners spend twenty-five on the diagram and fail.
2. **Numbers decide the architecture.** Estimate, then let the answer pick your design. If the estimate doesn't change a decision, you were decorating.
3. **Name the cost of every choice.** Not "I'll use a cache" — "I'll use a cache; it costs me staleness and an invalidation problem, and it buys me the p99 we agreed on."
4. **Start simple, scale under pressure.** Design the single-server version. Let the interviewer push. Opening with microservices is a junior tell.
5. **Volunteer what breaks.** Name your design's weakest point before they find it. Every time, this reads as senior.
