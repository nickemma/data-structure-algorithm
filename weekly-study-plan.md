# Weekly study plan

This plan turns the DSA and system-design tracks into a repeatable Monday–Sunday schedule.
Plan for about 90–120 minutes per day: one focused DSA block and one shorter system-design or review block.
If you have less time, complete the DSA assignment first and carry the second block forward.

## The daily lesson format

| Day | Lesson | What to do |
| --- | --- | --- |
| Monday | Pattern lesson | Read the DSA pattern primer, answer its MCQs, and complete the first **Learn** problem. Read the week's system-design module overview. |
| Tuesday | Guided practice | Complete the next two DSA problems. Attempt each one before opening hints or explanations. |
| Wednesday | Design lesson | Study the week's system-design concept. Write the problem, trade-offs, a small data model, and one diagram or request flow. |
| Thursday | Application lesson | Complete the final two DSA problems. Finish the system-design exercise and practise explaining the design aloud for five minutes. |
| Friday | Retrieval review | Re-solve two DSA problems from this week without notes. Review the system-design trade-off card and answer its MCQs. |
| Saturday | Timed interview | Do the listed DSA mock in 45 minutes, or a system-design mock when marked **SD**. Record gaps and unclear explanations. |
| Sunday | Consolidation | Review the summary sheet, update the progress tracker and weak-pattern notes, and schedule 1-day, 1-week, and 1-month revisits. |

## The 15-week sequence

The five DSA problems listed in each row are the week's new lessons. Use the links in the [Blind 75 catalogue](dsa/02-blind-75/README.md). For every problem, follow the repository's order: try it yourself, use hints if needed, then read the explanation and implement the solution.

| Week | Monday–Tuesday DSA lessons | Thursday DSA lessons | Wednesday system-design lesson | Saturday |
| --- | --- | --- | --- | --- |
| 1 | 1 Two Sum; 2 Best Time to Buy and Sell Stock; 3 Contains Duplicate | 4 Product of Array Except Self; 5 Maximum Subarray | 01 Scoping: requirements and data model | DSA Mock 01 — arrays and hashing |
| 2 | 6 Maximum Product Subarray; 7 Find Minimum in Rotated Sorted Array; 8 Search in Rotated Sorted Array | 9 Three Sum; 10 Container With Most Water | 02 System quality: reliability, performance, observability | DSA Mock 02 — two pointers |
| 3 | 11 Sum of Two Integers; 12 Number of 1 Bits; 13 Counting Bits | 14 Missing Number; 15 Reverse Bits | 03 Scaling: vertical/horizontal scaling and load balancers | DSA Mock 04 — binary search and intervals |
| 4 | 16 Climbing Stairs; 17 Coin Change; 18 Longest Increasing Subsequence | 19 Longest Common Subsequence; 20 Word Break | 04 CAP theorem: consistency, availability, partitions | SD Mock — design a URL shortener |
| 5 | 21 Combination Sum; 22 House Robber; 23 House Robber II | 24 Decode Ways; 25 Unique Paths | 05 Relational data: modelling, ACID and sharding | DSA Mock 08 — dynamic programming |
| 6 | 26 Jump Game; 27 Clone Graph; 28 Course Schedule | 29 Pacific Atlantic Water Flow; 30 Number of Islands | 06 Caching: client/server caches, CDNs and invalidation | SD Mock — design a news feed |
| 7 | 31 Longest Consecutive Sequence; 32 Alien Dictionary; 33 Graph Valid Tree | 34 Number of Connected Components; 35 Word Ladder | 07 Security: authentication, authorisation and TLS | DSA Mock 07 — graphs |
| 8 | 36 Insert Interval; 37 Merge Intervals; 38 Non-overlapping Intervals | 39 Meeting Rooms; 40 Meeting Rooms II | 08 Protocols: HTTP, REST and GraphQL | DSA Mock 04 — binary search and intervals |
| 9 | 41 Reverse Linked List; 42 Linked List Cycle; 43 Merge Two Sorted Lists | 44 Merge K Sorted Lists; 45 Remove Nth Node From End | 09 Resilience: failure modes, fallbacks and edge cases | DSA Mock 05 — linked lists |
| 10 | 46 Reorder List; 47 Set Matrix Zeroes; 48 Spiral Matrix | 49 Rotate Image; 50 Word Search | 10 Async workflows: queues, brokers and processors | SD Mock — design a job scheduler |
| 11 | 51 Longest Substring Without Repeating Characters; 52 Longest Repeating Character Replacement; 53 Minimum Window Substring | 54 Valid Anagram; 55 Group Anagrams | 11 Distributed data: non-relational models and replication | DSA Mock 03 — windows and stacks |
| 12 | 56 Valid Parentheses; 57 Valid Palindrome; 58 Longest Palindromic Substring | 59 Palindromic Substrings; 60 Maximum Depth of Binary Tree | 12 Case studies: apply the complete interview sequence | SD Mock — design an e-commerce checkout |
| 13 | 61 Same Tree; 62 Invert Binary Tree; 63 Binary Tree Maximum Path Sum | 64 Binary Tree Level Order Traversal; 65 Serialize and Deserialize Binary Tree | Review scoping, quality and scaling; compare two alternative architectures | DSA Mock 06 — trees |
| 14 | 66 Subtree of Another Tree; 67 Construct Tree from Preorder and Inorder; 68 Validate Binary Search Tree | 69 Kth Smallest Element in a BST; 70 Lowest Common Ancestor of a BST | Review data, caching, security and protocols; practise trade-off answers | SD Mock — design a video-streaming service |
| 15 | 71 Implement Trie; 72 Add and Search Word; 73 Word Search II | 74 Top K Frequent Elements; 75 Find Median from Data Stream | Review resilience, async workflows, distributed data and case studies | DSA Mock 09, then Mock 10 — mixed final |

## How to use each lesson

For DSA, finish every session by stating the invariant, time and space complexity, and one tricky test case. For system design, finish by stating the main bottleneck, the failure mode you would handle first, and the trade-off behind your most important choice.

Do not open `03-explanation.md` or a `solutions/` directory until you have made an honest attempt. On Sunday, mark a problem as complete only when you can solve it and explain it without copying the answer.
