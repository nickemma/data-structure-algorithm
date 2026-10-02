# Curriculum

Python is our primary implementation language. Follow module IDs below, not the numbers of the existing pattern folders. This is a complete learning roadmap; it is not a claim that every lesson has already been written.

The first lesson is ready. Existing linked resources support later modules, and many pattern pages are outlines. We develop each full lesson from your attempts, using the same teaching loop. A topic can take several sessions; repeat it when the checkpoint exposes a gap.

## The learning loop

For each module: explain the concept in plain language → build intuition with a trace or drawing → implement the core operation → study one worked example → attempt small exercises → solve a different interview problem → review and retry.

We discuss a correct baseline before optimization. Every optimization needs an explanation of why it preserves correctness. Record hints honestly. Revisit problems after roughly 1 day, 1 week, and 1 month, adjusting dates to your schedule.

## DSA sequence

Default prerequisite: the preceding module, unless noted. The implementation column describes work we will do together. The practice column gives examples of independent problems, whose solutions stay closed until you attempt them.

| ID | Topic and implementation | Practice and evidence to move on | Existing material |
| --- | --- | --- | --- |
| D00 | Python essentials if needed: variables, conditions, loops, functions, lists, strings, mutation, assertions | Trace a loop; write a function that counts positive integers; explain its return value | [Language warm-up](dsa/lessons/00-python/README.md) |
| D01 | Big-O: input size, operation counts, best/worst cases, auxiliary space, sequential/nested loops; later revisit amortized analysis and recursion | Analyze the duplicate-check exercise; justify growth and memory from the code | [First lesson](dsa/lessons/01-complexity/README.md) |
| D02 | Arrays and strings: indexing, traversal, slicing, mutability; implement a scan and an in-place reversal | Find a maximum with a clear empty-input contract; move zeroes; distinguish substring from subsequence | New guided lesson planned |
| D03 | Hash tables: keys, hashing, collisions, sets vs maps, expected lookup cost; build frequency counts and a small collision-bucket illustration | Valid Anagram, Two Sum; explain memory costs and why a list membership check changes runtime | [Hash map/set outline](dsa/patterns/02-hash-map-and-set/) |
| D04 | Two pointers, sliding windows, prefix sums: derive safe pointer moves and window invariants | Valid Palindrome worked example, then Two Sum II; fixed-window sum; range sums; explain a case where a shrinking window rule fails | [Two pointers lesson](dsa/patterns/01-two-pointers/), [window outline](dsa/patterns/03-sliding-window/), [prefix sum outline](dsa/patterns/07-prefix-sum/) |
| D05 | Linked lists: nodes, references, traversal, insertion/deletion; implement reversal, then fast/slow pointers | Reverse Linked List, Linked List Cycle; draw how links change without losing nodes | [Reversal outline](dsa/patterns/05-linked-list-reversal/), [fast/slow outline](dsa/patterns/04-fast-and-slow-pointers/) |
| D06 | Stacks and queues: LIFO/FIFO, list stack, deque queue; then monotonic stacks | Valid Parentheses, Implement Queue Using Stacks, Daily Temperatures; explain amortized work | [Monotonic stack outline](dsa/patterns/08-monotonic-stack/) |
| D07 | Recursion and backtracking: base case, call stack, progress, choose/explore/undo; implement subset generation | Trace a recursive call tree, Subsets, Combination Sum; count output cost and recursion space | [Backtracking outline](dsa/patterns/13-backtracking/) |
| D08 | Sorting and searching: insertion sort, merge sort, quicksort trade-offs; implement binary search and boundary variants | Binary Search, first/last occurrence, Search in Rotated Sorted Array; state the search interval invariant | [Binary search outline](dsa/patterns/06-binary-search/); sorting lesson planned |
| D09 | Trees and BSTs: node representation, DFS traversals, BFS levels, BST search/insert, balanced vs skewed height | Maximum Depth worked example, Validate BST, Lowest Common Ancestor; use height h in the analysis | [Tree traversal outline](dsa/patterns/11-tree-traversal/) |
| D10 | Heaps and priority queues: heap property, sift up/down, heapify; implement a small min-heap, then use heapq | Kth Largest Element, Merge K Sorted Lists; compare a heap with sorting | [Top K outline](dsa/patterns/10-top-k-elements/) |
| D11 | Graphs: directed/undirected, adjacency lists, visited state, DFS/BFS, components and cycles | Number of Islands, Clone Graph, unweighted shortest path; explain O(V + E) and disconnected inputs | [Graphs outline](dsa/patterns/12-graphs-and-matrices/) |
| D12 | Greedy algorithms and intervals: sort/sweep, local choices, exchange arguments, counterexamples | Merge Intervals, Non-overlapping Intervals, Jump Game; justify a greedy choice and show one that fails | [Intervals outline](dsa/patterns/09-intervals/); greedy lesson planned |
| D13 | Dynamic programming: repeated subproblems, state, recurrence, base cases, memoization, tabulation, iteration order, space reduction | Climbing Stairs worked example, House Robber, Coin Change, grid paths, Longest Common Subsequence; derive rather than memorize the recurrence | [DP outline](dsa/patterns/14-dynamic-programming/) |
| D14 | Tries: prefix nodes, terminal markers, insert/search/prefix; implement a trie | Implement Trie, word dictionary with wildcard; compare memory and lookup with hashing | New guided lesson planned |
| D15 | Advanced graphs: topological sort, union-find, Dijkstra, Bellman–Ford overview, minimum spanning trees | Course Schedule, Redundant Connection, Network Delay Time; choose based on edge weights and dependencies | New guided lessons planned; requires D10–D11 |
| D16 | Mixed interviews and optional bits: unlabeled problems, trade-offs, bit masks and basic bit operations | Solve mixed problems, explain why alternatives fail, repeat under a timer | [Mocks](dsa/mock-interviews/), [bits outline](dsa/patterns/15-bit-manipulation/) |

## DSA checkpoints

- **Foundation, after D03:** trace code, write a small Python function, explain time and extra space, choose a list/map/set for a stated operation. Start system design S01 here.
- **Core, after D08:** solve a fresh easy problem independently, explain a medium approach with at most a small hint, and test boundaries. Begin occasional timed practice.
- **Structures, after D11:** choose traversal and storage from the problem's requirements; explain invariants and worst-case shape.
- **Transfer, after D15:** attempt unlabeled problems across topics; distinguish recognition from a proof that the technique fits.
- **Interview practice, D16:** complete three mixed 35–45 minute sessions on separate days with a clear plan, working implementation, tests, and complexity. Review gaps and repeat. This is a training checkpoint, not a hiring guarantee.

## System design sequence

Start after the D03 foundation checkpoint, with roughly one system design session for every three DSA sessions. Advanced DSA is not required to begin. Start with concrete request flows; add infrastructure only when a requirement justifies it.

Each module includes a concept explanation, a request trace or small experiment, a worked example, your design exercise, and review. We use Python for small experiments where helpful; architecture work is language independent.

| ID | Topic | Exercise / evidence to move on | Existing support |
| --- | --- | --- | --- |
| S01 | Client/server architecture, DNS at a high level, HTTP request/response, status codes, APIs, REST | Trace creating and reading a note through client → server → storage; define two endpoints | [Starter lesson](system-design/lessons/01-request-lifecycle/README.md), [protocols](system-design/reference/working-at-scale/08-protocols/) |
| S02 | SQL vs NoSQL, data models, primary keys, indexes, transactions | Model users and messages; choose an index from an actual query and explain its write/storage cost | [Relational data](system-design/reference/foundations/05-relational-data/), [distributed data](system-design/reference/working-at-scale/11-distributed-data/) |
| S03 | Requirements, latency/throughput, capacity estimates, horizontal/vertical scaling, load balancing | Estimate reads/writes/storage with units; scale a stateless API and discuss where state lives | [Scoping](system-design/reference/foundations/01-scoping/), [quality](system-design/reference/foundations/02-system-quality/), [scaling](system-design/reference/foundations/03-scaling/) |
| S04 | Caching, TTLs, invalidation, cache failures, CDNs | Trace cache hit/miss and an update; explain how a stale response can happen | [Caching](system-design/reference/foundations/06-caching/) |
| S05 | Replication, sharding, shard keys, hot partitions, consistency and availability, CAP theorem | Trace a write and a stale replica read; describe behavior during a partition. CAP concerns consistency vs availability during partitions, not a general “pick any two” rule | [Distributed data](system-design/reference/working-at-scale/11-distributed-data/), [CAP](system-design/reference/foundations/04-cap-theorem/) |
| S06 | Queues, asynchronous processing, delivery semantics, retries, idempotency, dead-letter handling | Design a notification worker that handles duplicate jobs; explain the effect of a crash between processing and acknowledgment | [Async workflows](system-design/reference/working-at-scale/10-async-workflows/) |
| S07 | Rate limiting, authentication, authorization, sessions/tokens, transport security | Compare fixed window and token bucket; distinguish proving identity from checking access to a resource | [Security](system-design/reference/working-at-scale/07-security/), [rate limiter practice](system-design/practice.md) |
| S08 | Observability: logs, metrics, traces, SLOs; fault tolerance, timeouts, backoff, overload and recovery | Diagnose rising latency, choose signals, then trace database or worker failure and recovery | [Quality](system-design/reference/foundations/02-system-quality/), [resilience](system-design/reference/working-at-scale/09-resilience/) |
| S09 | Distributed systems integration: ordering, coordination, leader failure; microservices and event-driven architecture | Split a service only for a stated need; handle duplicated/out-of-order events and explain deployment and consistency costs | [Async workflows](system-design/reference/working-at-scale/10-async-workflows/), [distributed data](system-design/reference/working-at-scale/11-distributed-data/); deeper guided lesson planned |
| S10 | Complete system designs, with evolving requirements | Requirements → APIs → data model → architecture → scaling → failures → trade-offs | Design sequence below |

## Full designs, in order

These are educational designs of product-like systems; we are not claiming to reproduce any company's internal architecture. Use the [design template](system-design/my-designs/TEMPLATE.md).

| Design | First focus | Scaling/failure follow-up | Starting resource |
| --- | --- | --- | --- |
| URL shortener, after S04 | Key generation, redirects, persistence, cache | Collisions, hot links, database/cache failure; revisit after S08 | [Worked example](system-design/01-worked-example/) |
| WhatsApp-like messaging, after S08 | Conversations, send/receive, persistent connections, offline delivery | Ordering scope, delivery receipts, retries, duplicate messages | [Chat prompt](system-design/mock-interviews/04-chat-service.md) |
| Twitter/X-like timeline | Follow graph, posts, pagination, feed generation | Fan-out on read/write, celebrity accounts, stale feeds | [Feed prompt](system-design/mock-interviews/05-news-feed.md) |
| YouTube-like video platform | Upload, object storage, transcoding jobs, metadata | Failed uploads/jobs, adaptive playback, CDN traffic | [Video prompt](system-design/mock-interviews/07-video-streaming.md) |
| Uber-like ride-hailing | Location updates, nearby-driver search, trip state | Concurrent matching, stale location, regional outages | [Ride prompt](system-design/mock-interviews/08-ride-matching.md) |
| Netflix-like streaming | Catalog, playback authorization, media delivery | Bitrate selection, origin protection, regional recovery | Separate guided exercise planned; compare with the video platform |
| Distributed file storage | Chunks, metadata, checksums, replication | Partial writes, repair, concurrent updates, node loss | [File storage prompt](system-design/mock-interviews/06-file-storage.md) |

After two guided designs, attempt a fresh design without notes. Explain at least one read, one write, one failure, one estimate that affects a decision, and two trade-offs. Then introduce a 45-minute mock and repeat your weakest area.

## What completion means

For a module, explain the idea without notes, implement or trace its core operation, solve two varied exercises with recorded hint levels, and complete a later cold retry. If an attempt fails, identify the specific gap and practice that part. Merely reading a lesson does not mark a module complete.
