# AI Frontier Navigation

AI 前沿信息源导航与可信来源索引。第一版面向 AI 爱好者和需要追踪前沿信息的人，提供人工精选的论文库、会议官网、模型/代码平台、论坛社区、新闻/博客来源。

## Open locally

This first batch is a static, directly openable MVP.

1. Open `index.html` in a browser.
2. Use search, category filters, trust filters, tag chips, and the "今天值得看" toggle to explore sources.

No login, backend, cloud sync, payment, crawler, or AI API call is included.

## Verify

Run these lightweight checks from the repository root:

```powershell
node --check app.js
```

Then open `index.html` and review desktop/mobile layouts.

## First-batch scope

- Source categories: paper libraries, conference sites, model/code platforms, forums/communities, news/blogs.
- Curation model: manually selected and maintained.
- Trust model: curated trust scores, update cadence, verification notes, and inclusion rules.
- Main path: search and filter trusted sources, inspect details, and identify what is worth reading today.
