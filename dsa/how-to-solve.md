# The 35-minute script

Every coding interview you will sit is the same shape. Learn the shape once and you stop panicking.

A typical slot is 45 minutes: ~5 for greetings and questions at the end, leaving ~35 on the problem. Here is where those 35 go.

| Minutes | Step | What you actually say / do |
| --- | --- | --- |
| 0–3 | **Restate + clarify** | Say the problem back in your own words. Ask 2–3 questions. |
| 3–6 | **Example by hand** | Write a tiny input on screen. Produce the output manually. |
| 6–9 | **Brute force out loud** | Describe the dumb solution and its Big-O. Do not code it. |
| 9–13 | **Find the waste, name the pattern** | "I'm re-scanning the same values — that's Two Pointers." |
| 13–15 | **State the plan** | 3–4 sentences of pseudocode. Get a nod before typing. |
| 15–28 | **Code it** | Talk while typing. Silence is the thing that fails you. |
| 28–33 | **Test by hand** | Walk your own code through your example, plus edge cases. |
| 33–35 | **Complexity + trade-off** | "O(n) time, O(1) space. I traded X for Y." |

## The steps in detail

### 1. Restate + clarify (3 min)

Never start coding off the raw prompt. Say: *"So I'm given an array of integers and a target, and I need to return the two indices whose values sum to the target. Let me check a few things."*

Good default questions:

- Can the input be empty? Can it have one element?
- Are there duplicates?
- Is it sorted?
- Can the values be negative? Zero?
- Is there always exactly one answer, or could there be none / many?
- Do I return the values, or their indices?

**Why this matters:** half of all wrong solutions are correct solutions to the wrong question.

### 2. Example by hand (3 min)

Write `[2, 7, 11, 15], target = 9` on the screen and write `[0, 1]` next to it. This does two things: it proves you understood, and it gives you a test case for minute 28. You'll reuse it all interview.

### 3. Brute force out loud (3 min)

Say the obvious solution even though it's slow: *"The direct approach is to check every pair — two nested loops, O(n²) time, O(1) space."*

**Never skip this.** It buys you three things:
- A correctness baseline you can compare against.
- Proof to the interviewer that you can solve it at all.
- Something to optimise *from*. Optimisation with no baseline sounds like memorisation.

If you freeze later, the brute force is a passing answer. Silence is not.

### 4. Find the waste, name the pattern (4 min)

Optimising always means finding **repeated work** in the brute force and removing it. Ask:

- Am I re-scanning values I already looked at? → hash map / prefix sum
- Am I comparing every element to every other element? → two pointers / sorting
- Am I recomputing the same subarray sum? → sliding window / prefix sum
- Am I re-solving the same subproblem? → dynamic programming
- Do I only care about the k best? → heap

Then name it out loud: *"I don't need to compare every pair — the array is sorted, so I can converge two pointers from both ends. That's O(n)."*

This sentence is the single highest-value thing you say all interview. It is what "pattern recognition" means in practice.

### 5. State the plan (2 min)

Before typing, say the whole algorithm in 3–4 sentences. If the interviewer sees a flaw, you lose 30 seconds here instead of 12 minutes of typing.

Then state your **invariant** — the thing that stays true on every loop pass. For two pointers on a sorted array: *"everything outside `left` and `right` has already been ruled out."* The invariant is why your code is correct, and interviewers listen for it.

### 6. Code it (13 min)

Rules:
- **Narrate.** "I'll set left to 0 and right to the last index..." A silent candidate is an unhireable candidate even with working code.
- Name variables like a human: `left`, `right`, `seen`, `best`. Not `i`, `j`, `x`.
- Handle the empty/one-element case first, in one line.
- If you get stuck, say what you're stuck on. It's an invitation for a hint, and hints are free.

### 7. Test by hand (5 min)

Point at your code and walk the example through it, line by line, out loud. Then run these:

- The empty input
- One element
- Two elements
- All-duplicates
- The answer being at the very start, and at the very end

Finding your own bug here is a **strong positive signal** — much stronger than code that happened to be right.

### 8. Complexity + trade-off (2 min)

*"This is O(n) time because each pointer moves at most n steps total, and O(1) extra space. I traded away the ability to handle unsorted input — if it weren't sorted I'd need a hash map and O(n) space instead."*

Naming the trade-off is what separates a mid-level answer from a junior one.

## When you are completely stuck

In order:

1. Re-read the constraints. `n <= 1000` means O(n²) is fine and you're overthinking.
2. Do a bigger example by hand and look for structure.
3. Ask: what would I do if the array were sorted? What if I could use unlimited memory?
4. Say out loud: *"Let me start from the brute force and improve it."* Then code the brute force.

A working brute force with clear communication beats a half-typed optimal solution. Every time.
