# System design learning track

Begin after the D03 foundation checkpoint. Follow S01–S10 in [the curriculum](../CURRICULUM.md). Start with [one request through a system](lessons/01-request-lifecycle/README.md), then learn storage and access patterns before scaling techniques.

For each topic we explain the concept, trace a request, work an example, and ask you to make and defend a design choice. For full designs, use **requirements → APIs → data model → architecture → scaling → failure cases → trade-offs**.

## Material

| Resource | When to use it |
| --- | --- |
| [Starter lesson](lessons/01-request-lifecycle/README.md) | First system design session |
| [Reference](reference/) | Alongside the matching curriculum module and when reviewing gaps |
| [Approach guide](how-to-approach.md) | After fundamentals, to structure a complete design |
| [URL shortener worked example](01-worked-example/) | After S04, then revisit its failures after S08 |
| [Rate limiter practice](practice.md) | During S07 after studying rate-limiting algorithms |
| [Design template](my-designs/TEMPLATE.md) | Save your own design and assumptions |
| [Mock interviews](mock-interviews/) | After two guided full designs |
| [Progress](progress.md) | Track reasoning, hints, feedback, and retries |

The full design sequence is URL shortener, messaging, timeline, video platform, ride-hailing, streaming platform, and distributed file storage. Earlier documents remain practice resources; the curriculum determines prerequisites and the current learning order.

A strong design explains who uses it, the workload, the read and write flows, why each component is needed, and what happens when a dependency fails. We will compare choices under stated assumptions, then change a requirement and see which decisions need to change.
