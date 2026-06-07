"use strict";

const entryTypes = [
  { id: "all", label: "全部类型" },
  { id: "paper", label: "论文" },
  { id: "conference", label: "会议" },
  { id: "project", label: "项目" },
  { id: "model-platform", label: "模型 / 代码平台" },
  { id: "community", label: "社区讨论" },
  { id: "blog", label: "新闻 / 博客" },
  { id: "source", label: "高可信来源" }
];

const trustLabels = {
  high: "高可信",
  medium: "中等可信",
  emerging: "新兴信号"
};

const cadenceLabels = {
  daily: "每日",
  weekly: "每周",
  monthly: "每月",
  "event-based": "事件驱动",
  irregular: "不定期"
};

const topicLabels = {
  agents: "Agent",
  benchmarks: "评测与基准",
  community: "社区信号",
  conferences: "会议",
  "deep-learning": "深度学习",
  deployment: "部署",
  engineering: "工程实践",
  inference: "推理部署",
  industry: "产业动态",
  "large-language-models": "大模型",
  "llm-engineering": "LLM 工程",
  "machine-learning": "机器学习",
  news: "新闻",
  "open-source": "开源",
  "open-source-models": "开源模型",
  "peer-review": "同行评审",
  product: "产品化",
  research: "研究",
  security: "安全",
  tooling: "工具链"
};

const curatedEntries = [
  {
    id: "arxiv-cs-ai",
    title: "arXiv CS.AI / CS.LG Recent",
    type: "paper",
    url: "https://arxiv.org/list/cs.AI/recent",
    description: "Daily stream of AI and machine learning preprints from the primary open research archive.",
    recommendation:
      "Use it as the broadest early signal for new methods, benchmarks, datasets, and technical claims before they reach conferences or blogs.",
    trustLevel: "high",
    trustReason:
      "Primary paper source with author-submitted manuscripts, stable identifiers, and transparent version history; papers still need quality screening.",
    updateCadence: "daily",
    audience: "Researchers, builders, and serious learners tracking frontier work at source level.",
    topics: ["research", "large-language-models", "machine-learning"],
    tags: ["paper", "preprint", "llm", "research"],
    featuredToday: true,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "Hugging Face Papers",
        url: "https://huggingface.co/papers",
        platform: "Hugging Face"
      }
    ]
  },
  {
    id: "openreview",
    title: "OpenReview",
    type: "paper",
    url: "https://openreview.net/",
    description: "Open peer-review hub for major ML venues including ICLR and many workshops.",
    recommendation:
      "Best when you need reviewer discussion, author responses, acceptance status, and venue context around a paper.",
    trustLevel: "high",
    trustReason:
      "Contains venue-linked submissions and review trails, making the surrounding evaluation more visible than a standalone PDF.",
    updateCadence: "event-based",
    audience: "Researchers and advanced learners comparing papers through review context.",
    topics: ["research", "peer-review", "conferences"],
    tags: ["paper", "review", "iclr", "neurips"],
    featuredToday: true,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "ICLR venue",
        url: "https://iclr.cc/",
        platform: "Conference"
      }
    ]
  },
  {
    id: "huggingface-papers",
    title: "Hugging Face Papers",
    type: "paper",
    url: "https://huggingface.co/papers",
    description: "Community-ranked paper feed that connects new research to models, demos, and discussion.",
    recommendation:
      "Good daily scan for papers that are already attracting practitioner attention and often have runnable artifacts nearby.",
    trustLevel: "medium",
    trustReason:
      "Useful discovery layer with strong community signal, but ranking reflects attention rather than formal validation.",
    updateCadence: "daily",
    audience: "Builders, learners, and researchers who want a faster paper triage workflow.",
    topics: ["research", "open-source-models", "tooling"],
    tags: ["paper", "community", "model", "demo"],
    featuredToday: true,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "Hugging Face models",
        url: "https://huggingface.co/models",
        platform: "Hugging Face"
      }
    ]
  },
  {
    id: "papers-with-code",
    title: "Papers with Code",
    type: "project",
    url: "https://paperswithcode.com/",
    description: "Research index linking papers to code, tasks, benchmarks, datasets, and leaderboards.",
    recommendation:
      "Use it to move from a claim in a paper to runnable code, baseline comparisons, and benchmark context.",
    trustLevel: "high",
    trustReason:
      "Strong structured links between papers, implementations, and tasks; leaderboard claims still need metric and dataset checks.",
    updateCadence: "weekly",
    audience: "Builders and researchers validating whether a result is reproducible or relevant.",
    topics: ["benchmarks", "open-source", "research"],
    tags: ["paper", "code", "benchmark", "leaderboard"],
    featuredToday: false,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "GitHub organization",
        url: "https://github.com/paperswithcode",
        platform: "GitHub"
      }
    ]
  },
  {
    id: "neurips",
    title: "NeurIPS",
    type: "conference",
    url: "https://neurips.cc/",
    description: "Major AI and ML conference covering papers, datasets, benchmarks, workshops, and tutorials.",
    recommendation:
      "Track it for official accepted work, workshop agendas, invited talks, and the topics shaping the next research cycle.",
    trustLevel: "high",
    trustReason:
      "Official venue site for one of the field's highest-signal conferences, with authoritative schedules and proceedings links.",
    updateCadence: "event-based",
    audience: "Researchers, advanced learners, and product teams watching research direction.",
    topics: ["conferences", "research", "benchmarks"],
    tags: ["conference", "paper", "schedule", "official"],
    featuredToday: false,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "OpenReview",
        url: "https://openreview.net/",
        platform: "OpenReview"
      }
    ]
  },
  {
    id: "iclr",
    title: "ICLR",
    type: "conference",
    url: "https://iclr.cc/",
    description: "Premier deep learning conference with a strong open-review culture.",
    recommendation:
      "Use it to follow accepted deep learning work and connect papers back to OpenReview discussions.",
    trustLevel: "high",
    trustReason:
      "Official conference source with venue proceedings and review context available through OpenReview.",
    updateCadence: "event-based",
    audience: "Researchers and learners focused on deep learning, representation learning, and LLM methods.",
    topics: ["conferences", "deep-learning", "peer-review"],
    tags: ["conference", "openreview", "official", "deep-learning"],
    featuredToday: false,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "OpenReview ICLR",
        url: "https://openreview.net/group?id=ICLR.cc",
        platform: "OpenReview"
      }
    ]
  },
  {
    id: "huggingface-models",
    title: "Hugging Face Models",
    type: "model-platform",
    url: "https://huggingface.co/models",
    description: "Large public catalog of model checkpoints, datasets, demos, metadata, and community activity.",
    recommendation:
      "Useful for finding open model releases, checking licenses and model cards, and spotting implementation momentum.",
    trustLevel: "medium",
    trustReason:
      "Excellent discovery surface with model metadata and community signal, but quality varies by uploader and documentation depth.",
    updateCadence: "daily",
    audience: "Builders, learners, and product teams evaluating open models and demos.",
    topics: ["open-source-models", "tooling", "deployment"],
    tags: ["model", "dataset", "demo", "open-source"],
    featuredToday: true,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "Papers",
        url: "https://huggingface.co/papers",
        platform: "Hugging Face"
      }
    ]
  },
  {
    id: "github-trending-ai",
    title: "GitHub Trending AI",
    type: "project",
    url: "https://github.com/trending",
    description: "Trending repositories across languages, often surfacing new AI tools, agents, and model projects.",
    recommendation:
      "Scan it for implementation momentum, but validate README claims, commit activity, issues, and maintainer credibility.",
    trustLevel: "emerging",
    trustReason:
      "Popularity can reveal early momentum, but stars and trending rank are weak evidence without code and maintenance review.",
    updateCadence: "daily",
    audience: "Builders looking for new tools, libraries, demos, and implementation patterns.",
    topics: ["open-source", "agents", "tooling"],
    tags: ["code", "open-source", "tooling", "repo"],
    featuredToday: true,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "GitHub Topics: AI",
        url: "https://github.com/topics/artificial-intelligence",
        platform: "GitHub"
      }
    ]
  },
  {
    id: "hacker-news-ai",
    title: "Hacker News AI Discussions",
    type: "community",
    url: "https://news.ycombinator.com/",
    description: "Engineering and startup discussion stream where notable AI releases are debated quickly.",
    recommendation:
      "Useful for early skepticism, implementation concerns, product implications, and links to primary announcements.",
    trustLevel: "medium",
    trustReason:
      "Discussion quality varies, but strong comments often identify technical caveats and missing evidence quickly.",
    updateCadence: "daily",
    audience: "Builders and product-minded readers who want engineering reaction to AI news.",
    topics: ["community", "engineering", "product"],
    tags: ["community", "startup", "discussion", "engineering"],
    featuredToday: true,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "HN Search: AI",
        url: "https://hn.algolia.com/?q=AI",
        platform: "Hacker News"
      }
    ]
  },
  {
    id: "reddit-localllama",
    title: "Reddit r/LocalLLaMA",
    type: "community",
    url: "https://www.reddit.com/r/LocalLLaMA/",
    description: "Community focused on local LLM releases, quantization, inference, benchmarks, and hardware tradeoffs.",
    recommendation:
      "Good source for practical deployment notes and model-release reactions that may not appear in formal writeups.",
    trustLevel: "emerging",
    trustReason:
      "High practical signal for local inference, but posts require verification against model cards, repos, and reproducible tests.",
    updateCadence: "daily",
    audience: "Builders running local models or comparing open-weight releases.",
    topics: ["open-source-models", "deployment", "inference"],
    tags: ["community", "llm", "local-model", "inference"],
    featuredToday: true,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "Top posts",
        url: "https://www.reddit.com/r/LocalLLaMA/top/",
        platform: "Reddit"
      }
    ]
  },
  {
    id: "the-batch",
    title: "The Batch by DeepLearning.AI",
    type: "blog",
    url: "https://www.deeplearning.ai/the-batch/",
    description: "Weekly AI newsletter summarizing research, industry moves, applications, and policy issues.",
    recommendation:
      "Good weekly orientation layer for readers who want context before drilling into primary papers or code.",
    trustLevel: "medium",
    trustReason:
      "Editorially curated and generally source-linked, but still a secondary summary that should not replace primary sources.",
    updateCadence: "weekly",
    audience: "Learners and practitioners who want a concise AI landscape digest.",
    topics: ["news", "industry", "research"],
    tags: ["news", "newsletter", "industry", "research"],
    featuredToday: false,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "DeepLearning.AI",
        url: "https://www.deeplearning.ai/",
        platform: "Publisher"
      }
    ]
  },
  {
    id: "simon-willison-ai",
    title: "Simon Willison: AI",
    type: "blog",
    url: "https://simonwillison.net/tags/ai/",
    description: "Practical AI and LLM engineering notes from a long-running technical blog.",
    recommendation:
      "Read for grounded experiments, tool notes, security caveats, and clear explanations of fast-moving LLM capabilities.",
    trustLevel: "high",
    trustReason:
      "Long track record of transparent technical writing, reproducible examples, and careful distinction between evidence and speculation.",
    updateCadence: "weekly",
    audience: "Builders and technical learners applying LLMs in real software.",
    topics: ["llm-engineering", "tooling", "security"],
    tags: ["blog", "llm", "engineering", "tools"],
    featuredToday: false,
    dateAdded: "2026-06-07",
    lastUpdated: "2026-06-07",
    discussionLinks: [
      {
        label: "GitHub profile",
        url: "https://github.com/simonw",
        platform: "GitHub"
      }
    ]
  }
];

const sources = curatedEntries;

const state = {
  type: "all",
  topic: "all",
  tag: "all",
  query: "",
  trust: "all",
  cadence: "all",
  todayOnly: false,
  selectedId: curatedEntries[0].id
};

const elements = {
  topicFilters: document.querySelector("#topicFilters"),
  categoryFilters: document.querySelector("#categoryFilters"),
  tagFilters: document.querySelector("#tagFilters"),
  sourceCards: document.querySelector("#sourceCards"),
  resultCount: document.querySelector("#resultCount"),
  searchInput: document.querySelector("#searchInput"),
  trustSelect: document.querySelector("#trustSelect"),
  cadenceSelect: document.querySelector("#cadenceSelect"),
  todayOnly: document.querySelector("#todayOnly"),
  emptyState: document.querySelector("#emptyState"),
  resetFilters: document.querySelector("#resetFilters"),
  resetFiltersTop: document.querySelector("#resetFiltersTop"),
  todayCards: document.querySelector("#todayCards"),
  todayJump: document.querySelector("#todayJump"),
  detailTitle: document.querySelector("#detailTitle"),
  detailTrustLine: document.querySelector("#detailTrustLine"),
  detailDescription: document.querySelector("#detailDescription"),
  detailType: document.querySelector("#detailType"),
  detailUrl: document.querySelector("#detailUrl"),
  detailRecommendation: document.querySelector("#detailRecommendation"),
  detailTrust: document.querySelector("#detailTrust"),
  detailTrustReason: document.querySelector("#detailTrustReason"),
  detailCadence: document.querySelector("#detailCadence"),
  detailUseCase: document.querySelector("#detailUseCase"),
  detailDates: document.querySelector("#detailDates"),
  detailTags: document.querySelector("#detailTags"),
  detailDiscussionLinks: document.querySelector("#detailDiscussionLinks"),
  detailLink: document.querySelector("#detailLink")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTypeLabel(id) {
  return entryTypes.find((entryType) => entryType.id === id)?.label ?? id;
}

function getTrustLabel(level) {
  return trustLabels[level] ?? level;
}

function getCadenceLabel(cadence) {
  return cadenceLabels[cadence] ?? cadence;
}

function getTopicLabel(topic) {
  return topicLabels[topic] ?? topic;
}

function getTrustClass(level) {
  return `trust-${level}`;
}

function getTrustSignal(level) {
  if (level === "high") {
    return "高可信来源：优先阅读，可作为后续追踪入口";
  }
  if (level === "medium") {
    return "中等可信：适合发现线索，关键结论仍需回到原始材料";
  }
  return "新兴信号：值得观察，但需要交叉验证代码、讨论和来源";
}

function getAllTags() {
  return ["all", ...Array.from(new Set(curatedEntries.flatMap((entry) => entry.tags))).sort()];
}

function getAllTopics() {
  return ["all", ...Array.from(new Set(curatedEntries.flatMap((entry) => entry.topics))).sort()];
}

function matchesEntry(entry) {
  const query = state.query.trim().toLowerCase();
  const searchable = [
    entry.title,
    entry.type,
    entry.description,
    entry.recommendation,
    entry.trustLevel,
    entry.trustReason,
    entry.updateCadence,
    entry.audience,
    entry.dateAdded,
    entry.lastUpdated,
    ...entry.topics,
    ...entry.tags,
    ...entry.discussionLinks.flatMap((link) => [link.label, link.platform])
  ]
    .join(" ")
    .toLowerCase();

  const typeMatch = state.type === "all" || entry.type === state.type;
  const topicMatch = state.topic === "all" || entry.topics.includes(state.topic);
  const tagMatch = state.tag === "all" || entry.tags.includes(state.tag);
  const queryMatch = query === "" || searchable.includes(query);
  const cadenceMatch = state.cadence === "all" || entry.updateCadence === state.cadence;
  const trustMatch =
    state.trust === "all" ||
    entry.trustLevel === state.trust ||
    (state.trust === "solid" && ["high", "medium"].includes(entry.trustLevel));
  const todayMatch = !state.todayOnly || entry.featuredToday;

  return typeMatch && topicMatch && tagMatch && queryMatch && cadenceMatch && trustMatch && todayMatch;
}

function renderTopicFilters() {
  elements.topicFilters.innerHTML = "";
  getAllTopics().forEach((topic) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = topic === "all" ? "全部主题" : getTopicLabel(topic);
    button.setAttribute("aria-pressed", String(state.topic === topic));
    button.addEventListener("click", () => {
      state.topic = topic;
      render();
    });
    elements.topicFilters.append(button);
  });
}

function renderTypeFilters() {
  elements.categoryFilters.innerHTML = "";
  entryTypes.forEach((entryType) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = entryType.label;
    button.setAttribute("aria-pressed", String(state.type === entryType.id));
    button.addEventListener("click", () => {
      state.type = entryType.id;
      render();
    });
    elements.categoryFilters.append(button);
  });
}

function renderTagFilters() {
  elements.tagFilters.innerHTML = "";
  getAllTags().forEach((tag) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = tag === "all" ? "全部标签" : `#${tag}`;
    button.setAttribute("aria-pressed", String(state.tag === tag));
    button.addEventListener("click", () => {
      state.tag = tag;
      render();
    });
    elements.tagFilters.append(button);
  });
}

function renderCards(filteredEntries) {
  elements.sourceCards.innerHTML = "";
  filteredEntries.forEach((entry) => {
    const card = document.createElement("button");
    card.className = "source-card";
    card.type = "button";
    card.setAttribute("aria-controls", "entryDetailPanel");
    card.setAttribute("aria-pressed", String(state.selectedId === entry.id));
    card.innerHTML = `
      <div class="source-card-header">
        <div>
          <h3>${escapeHtml(entry.title)}</h3>
          <div class="source-meta">
            <span>${escapeHtml(getTypeLabel(entry.type))}</span>
            <span>${escapeHtml(getCadenceLabel(entry.updateCadence))}</span>
            <span>${escapeHtml(entry.lastUpdated)}</span>
            <span>${entry.discussionLinks.length} 个外部入口</span>
          </div>
        </div>
        <span class="trust-badge ${getTrustClass(entry.trustLevel)}">${escapeHtml(getTrustLabel(entry.trustLevel))}</span>
      </div>
      <p>${escapeHtml(entry.recommendation)}</p>
      <div class="source-proof">
        <span>可信依据</span>
        <strong>${escapeHtml(entry.trustReason)}</strong>
      </div>
      <div class="card-tags">
        ${entry.featuredToday ? '<span class="today-mark">今日精选</span>' : ""}
        ${entry.topics.map((topic) => `<span>${escapeHtml(getTopicLabel(topic))}</span>`).join("")}
        ${entry.tags.map((tag) => `<span>#${escapeHtml(tag)}</span>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => {
      state.selectedId = entry.id;
      render();
    });
    elements.sourceCards.append(card);
  });
}

function renderEntryDetail(filteredEntries) {
  const selected =
    curatedEntries.find((entry) => entry.id === state.selectedId && filteredEntries.includes(entry)) ??
    filteredEntries[0];

  if (!selected) {
    elements.detailTrustLine.textContent = "当前没有可解释的可信度字段";
    elements.detailTitle.textContent = "没有可展示的条目详情";
    elements.detailDescription.textContent = "当前筛选条件没有命中。清空筛选或放宽主题、可信度、更新频率后，再选择条目查看完整判断依据。";
    elements.detailType.textContent = "-";
    elements.detailUrl.textContent = "-";
    elements.detailUrl.removeAttribute("href");
    elements.detailRecommendation.textContent = "-";
    elements.detailTrust.textContent = "-";
    elements.detailTrustReason.textContent = "-";
    elements.detailCadence.textContent = "-";
    elements.detailUseCase.textContent = "-";
    elements.detailDates.textContent = "-";
    elements.detailTags.innerHTML = "";
    elements.detailDiscussionLinks.innerHTML = '<span class="muted-note">没有匹配条目可显示外部讨论入口。</span>';
    elements.detailLink.href = "#explorer";
    elements.detailLink.removeAttribute("target");
    elements.detailLink.removeAttribute("rel");
    elements.detailLink.textContent = "回到筛选工作台";
    return;
  }

  state.selectedId = selected.id;
  elements.detailTrustLine.textContent = getTrustSignal(selected.trustLevel);
  elements.detailTitle.textContent = selected.title;
  elements.detailDescription.textContent = selected.description;
  elements.detailType.textContent = getTypeLabel(selected.type);
  elements.detailUrl.href = selected.url;
  elements.detailUrl.textContent = selected.url;
  elements.detailRecommendation.textContent = selected.recommendation;
  elements.detailTrust.textContent = getTrustLabel(selected.trustLevel);
  elements.detailTrustReason.textContent = selected.trustReason;
  elements.detailCadence.textContent = getCadenceLabel(selected.updateCadence);
  elements.detailUseCase.textContent = selected.audience;
  elements.detailDates.textContent = `收录 ${selected.dateAdded}; 更新 ${selected.lastUpdated}`;
  elements.detailTags.innerHTML = [
    ...selected.topics.map((topic) => `<span>${escapeHtml(getTopicLabel(topic))}</span>`),
    ...selected.tags.map((tag) => `<span>#${escapeHtml(tag)}</span>`)
  ].join("");
  elements.detailDiscussionLinks.innerHTML = selected.discussionLinks.length
    ? selected.discussionLinks
        .map(
          (link) =>
            `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.platform)}: ${escapeHtml(link.label)}</a>`
        )
        .join("")
    : '<span class="muted-note">暂未补充外部讨论入口。</span>';
  elements.detailLink.href = selected.url;
  elements.detailLink.target = "_blank";
  elements.detailLink.rel = "noopener noreferrer";
  elements.detailLink.textContent = "打开原始入口";
}

function renderTodayCards() {
  elements.todayCards.innerHTML = "";
  curatedEntries
    .filter((entry) => entry.featuredToday)
    .slice(0, 6)
    .forEach((entry) => {
      const article = document.createElement("article");
      article.className = "today-card";
      article.innerHTML = `
        <div class="today-card-head">
          <span class="mini-pill">${escapeHtml(getTypeLabel(entry.type))}</span>
          <span class="trust-badge ${getTrustClass(entry.trustLevel)}">${escapeHtml(getTrustLabel(entry.trustLevel))}</span>
        </div>
        <div>
          <h3>${escapeHtml(entry.title)}</h3>
          <div class="source-meta">
            <span>${escapeHtml(getCadenceLabel(entry.updateCadence))}</span>
            <span>${escapeHtml(entry.lastUpdated)}</span>
          </div>
        </div>
        <p>${escapeHtml(entry.recommendation)}</p>
        <div class="today-proof">${escapeHtml(getTrustSignal(entry.trustLevel))}</div>
        <a href="${escapeHtml(entry.url)}" target="_blank" rel="noopener noreferrer">打开原始入口</a>
      `;
      elements.todayCards.append(article);
    });
}

function render() {
  const filteredEntries = curatedEntries.filter(matchesEntry);
  elements.resultCount.textContent = String(filteredEntries.length);
  elements.emptyState.hidden = filteredEntries.length > 0;
  renderTopicFilters();
  renderTypeFilters();
  renderTagFilters();
  renderCards(filteredEntries);
  renderEntryDetail(filteredEntries);
}

function resetFilters() {
  state.type = "all";
  state.topic = "all";
  state.tag = "all";
  state.query = "";
  state.trust = "all";
  state.cadence = "all";
  state.todayOnly = false;
  elements.searchInput.value = "";
  elements.trustSelect.value = "all";
  elements.cadenceSelect.value = "all";
  elements.todayOnly.checked = false;
  render();
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

elements.trustSelect.addEventListener("change", (event) => {
  state.trust = event.target.value;
  render();
});

elements.cadenceSelect.addEventListener("change", (event) => {
  state.cadence = event.target.value;
  render();
});

elements.todayOnly.addEventListener("change", (event) => {
  state.todayOnly = event.target.checked;
  render();
});

elements.resetFilters.addEventListener("click", resetFilters);
elements.resetFiltersTop.addEventListener("click", resetFilters);

elements.todayJump.addEventListener("click", () => {
  state.todayOnly = true;
  elements.todayOnly.checked = true;
  document.querySelector("#explorer").scrollIntoView({ behavior: "smooth" });
  render();
});

elements.searchInput.value = state.query;
elements.trustSelect.value = state.trust;
elements.cadenceSelect.value = state.cadence;
elements.todayOnly.checked = state.todayOnly;

renderTodayCards();
render();
