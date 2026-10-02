# S01 — Follow one request

Use this after the D03 foundation checkpoint. Goal: explain what the client, server, and storage each do before introducing scaling infrastructure.

A client initiates a request. A server receives it, performs an operation, and returns a response. Persistent storage retains information across application restarts. In a browser application, HTTP defines the request/response exchange; an API defines the operations and data the application exposes.

Imagine a simple note service. A user types a note; the client asks the server to save it:

```http
POST /notes
Content-Type: application/json

{"text": "Practice arrays"}
```

The server validates the input, writes a note record to storage, and returns a response such as:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{"id": "n123", "text": "Practice arrays"}
```

The client can later request `GET /notes/n123`. The server looks up that ID and returns the note, or a not-found response if no visible note matches. This is a worked example of a resource-oriented API, not a complete production service.

Trace the flow in plain language: client → application server → storage → application server → client. Label the request, the operation, and the response at each step. We will then discuss HTTP methods, status codes, REST conventions, and how a domain name leads a client to a server.

## Your exercise

Design the create/read flow for a bookmark instead of a note:

1. What fields does the client send, and what does the server assign?
2. What are the two endpoints and their successful responses?
3. What should happen when the requested bookmark does not exist?
4. What is lost if bookmarks are held only in the application process and it restarts?

Save your answer in `system-design/my-designs/` or reply in chat. We will review the flow before moving to tables, keys, and indexes in S02. Authentication and permission checks receive their own treatment in S07.
