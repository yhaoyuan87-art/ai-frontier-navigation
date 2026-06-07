const sources = [
  {
    id: "transformer-circuits",
    title: "Transformer Circuits Thread",
    type: "论文/解释",
    topic: "机制解释",
    trust: "高",
    cadence: "不定期",
    url: "https://transformer-circuits.pub/",
    updated: "2026-06",
    audience: "希望理解模型内部机制的学习者",
    summary: "用可复核实验解释 Transformer 内部表示，是阅读机制解释方向的稳定入口。",
    reason: "作者团队长期维护，文章结构清晰，代码、图示和实验结论之间的对应关系强，适合作为高可信基础资料。",
    trustNote: "来自专业研究团队；内容更新慢但引用和复核价值高。",
    discussions: [
      { label: "HN 讨论检索", url: "https://hn.algolia.com/?q=transformer%20circuits" },
      { label: "Reddit 讨论检索", url: "https://www.reddit.com/search/?q=transformer%20circuits" }
    ],
    tags: ["interpretability", "paper", "long-read"],
    today: true
  },
  {
    id: "papers-with-code-llm",
    title: "Papers with Code: Language Models",
    type: "论文索引",
    topic: "模型进展",
    trust: "高",
    cadence: "每日",
    url: "https://paperswithcode.com/task/language-modelling",
    updated: "2026-06",
    audience: "追踪论文、代码和榜单变化的读者",
    summary: "把论文、实现和任务榜单放在同一上下文里，适合快速判断方向热度和可复现性。",
    reason: "比单纯论文链接更可扫描，能直接看到代码可用性、数据集和任务位置。",
    trustNote: "社区维护加结构化元数据；仍需回到论文原文确认细节。",
    discussions: [
      { label: "GitHub Trending AI", url: "https://github.com/trending?l=python" },
      { label: "Reddit MachineLearning", url: "https://www.reddit.com/r/MachineLearning/" }
    ],
    tags: ["benchmark", "code", "paper"],
    today: true
  },
  {
    id: "latent-space",
    title: "Latent Space",
    type: "博客/播客",
    topic: "产品与工程",
    trust: "中高",
    cadence: "每周",
    url: "https://www.latent.space/",
    updated: "2026-06",
    audience: "关注 AI 工程实践、创业和产品判断的人",
    summary: "以访谈和长文追踪 AI 工程现场，能补足论文之外的产品与开发者视角。",
    reason: "内容密度高，嘉宾质量稳定，适合判断一个技术为什么被开发者采用。",
    trustNote: "观点型内容较多；适合做趋势线索，不应替代论文或官方文档。",
    discussions: [
      { label: "X / Twitter", url: "https://x.com/latentspacepod" },
      { label: "Substack 评论", url: "https://www.latent.space/" }
    ],
    tags: ["engineering", "podcast", "product"],
    today: false
  },
  {
    id: "openrouter-rankings",
    title: "OpenRouter Rankings",
    type: "模型平台",
    topic: "模型进展",
    trust: "中",
    cadence: "实时",
    url: "https://openrouter.ai/rankings",
    updated: "2026-06",
    audience: "需要了解模型使用热度和可用性的开发者",
    summary: "用实际调用热度观察模型生态变化，适合作为论文之外的市场采用信号。",
    reason: "能快速看到哪些模型正在被开发者使用，但它衡量的是平台内流量，不等同于绝对能力。",
    trustNote: "平台数据透明度有限；需要和评测、价格、上下文长度一起看。",
    discussions: [
      { label: "OpenRouter Discord", url: "https://discord.gg/openrouter" },
      { label: "HN 检索", url: "https://hn.algolia.com/?q=OpenRouter" }
    ],
    tags: ["models", "usage", "platform"],
    today: true
  },
  {
    id: "lmsys-chatbot-arena",
    title: "LMArena Leaderboard",
    type: "评测/榜单",
    topic: "模型评测",
    trust: "中高",
    cadence: "高频",
    url: "https://lmarena.ai/",
    updated: "2026-06",
    audience: "希望快速比较通用聊天模型体感质量的人",
    summary: "基于匿名对战偏好展示模型排名，是理解用户偏好变化的常用参照。",
    reason: "能补足传统基准的盲区，但对提示分布和投票人群敏感。",
    trustNote: "评测方法公开度较高；结论适合横向参考，不适合作为唯一采购依据。",
    discussions: [
      { label: "论文与方法", url: "https://arxiv.org/search/?query=chatbot+arena&searchtype=all" },
      { label: "Reddit 检索", url: "https://www.reddit.com/search/?q=LMArena" }
    ],
    tags: ["evaluation", "leaderboard", "models"],
    today: false
  },
  {
    id: "ai-news-hn",
    title: "Hacker News: AI Threads",
    type: "外部讨论",
    topic: "社区讨论",
    trust: "中",
    cadence: "每日",
    url: "https://hn.algolia.com/?q=AI",
    updated: "2026-06",
    audience: "想看工程师视角和早期产品反馈的人",
    summary: "快速发现论文、工具、创业项目在技术社区里的第一轮质疑和验证。",
    reason: "讨论质量波动，但高赞回复常能指出实现细节、商业约束和安全风险。",
    trustNote: "社区观点需要交叉验证；适合作为讨论入口而非事实来源。",
    discussions: [
      { label: "AI 搜索", url: "https://hn.algolia.com/?q=AI" },
      { label: "LLM 搜索", url: "https://hn.algolia.com/?q=LLM" }
    ],
    tags: ["discussion", "engineering", "community"],
    today: false
  },
  {
    id: "arxiv-sanity",
    title: "arXiv Sanity Preserver",
    type: "论文索引",
    topic: "论文发现",
    trust: "中高",
    cadence: "每日",
    url: "https://arxiv-sanity-lite.com/",
    updated: "2026-06",
    audience: "需要从 arXiv 新论文中筛选主题的人",
    summary: "围绕 arXiv 论文提供检索和相似论文发现，适合做每日论文雷达。",
    reason: "比直接刷 arXiv 更便于聚类和追踪作者，但推荐结果仍要人工判断。",
    trustNote: "数据来自 arXiv；筛选和排序只是发现辅助。",
    discussions: [
      { label: "arXiv cs.AI", url: "https://arxiv.org/list/cs.AI/recent" },
      { label: "arXiv cs.CL", url: "https://arxiv.org/list/cs.CL/recent" }
    ],
    tags: ["arxiv", "paper", "discovery"],
    today: true
  },
  {
    id: "huggingface-papers",
    title: "Hugging Face Papers",
    type: "论文/社区",
    topic: "论文发现",
    trust: "中高",
    cadence: "每日",
    url: "https://huggingface.co/papers",
    updated: "2026-06",
    audience: "喜欢论文摘要、模型卡和社区讨论连在一起的读者",
    summary: "把论文、模型、数据集和社区评论连接起来，适合发现近期热门方向。",
    reason: "讨论入口和模型生态紧密，能看到论文是否被快速实现或复用。",
    trustNote: "热度受平台用户影响；事实判断仍以论文和代码为准。",
    discussions: [
      { label: "Hugging Face Daily Papers", url: "https://huggingface.co/papers" },
      { label: "Discord", url: "https://hf.co/join/discord" }
    ],
    tags: ["paper", "models", "community"],
    today: true
  },
  {
    id: "openai-research-index",
    title: "OpenAI Research",
    type: "机构博客/论文",
    topic: "高可信来源",
    trust: "高",
    cadence: "不定期",
    url: "https://openai.com/research/",
    updated: "2026-06",
    audience: "需要追踪前沿模型发布、系统安全和能力边界的一线工程师与研究者",
    summary: "OpenAI 官方研究入口，适合核对模型发布、技术报告和安全说明的一手表述。",
    reason: "覆盖模型、对齐、安全和产品化研究，能直接看到发布方对能力、限制和评估方式的正式解释。",
    trustNote: "属于一手来源，事实可靠性高；商业发布视角可能强调自家系统，需要结合第三方评测交叉验证。",
    discussions: [
      { label: "Hacker News 检索", url: "https://hn.algolia.com/?q=OpenAI%20research" },
      { label: "Reddit OpenAI", url: "https://www.reddit.com/r/OpenAI/" }
    ],
    tags: ["official", "research", "safety"],
    today: true
  },
  {
    id: "anthropic-research",
    title: "Anthropic Research",
    type: "机构博客/论文",
    topic: "高可信来源",
    trust: "高",
    cadence: "不定期",
    url: "https://www.anthropic.com/research",
    updated: "2026-06",
    audience: "关注可解释性、模型行为、对齐和安全评估的人",
    summary: "Anthropic 的研究与安全文章集中入口，常发布模型行为、评估和可解释性长文。",
    reason: "文章通常给出实验设置、限制条件和风险讨论，适合建立安全与可解释方向的基准阅读列表。",
    trustNote: "官方一手资料可信度高；涉及模型优劣时仍应参考独立复现实验和社区反馈。",
    discussions: [
      { label: "Hacker News 检索", url: "https://hn.algolia.com/?q=Anthropic%20research" },
      { label: "LessWrong Anthropic", url: "https://www.lesswrong.com/tag/anthropic" }
    ],
    tags: ["alignment", "interpretability", "official"],
    today: true
  },
  {
    id: "deepmind-blog",
    title: "Google DeepMind Blog",
    type: "机构博客",
    topic: "高可信来源",
    trust: "高",
    cadence: "每周",
    url: "https://deepmind.google/discover/blog/",
    updated: "2026-06",
    audience: "希望从研究成果、产品集成和科学应用角度理解 AI 前沿的人",
    summary: "Google DeepMind 官方博客，覆盖基础模型、科学发现、机器人和安全研究。",
    reason: "内容常与论文、项目页面或正式发布相互链接，适合从高层解读进入原始研究。",
    trustNote: "官方来源可靠，但博客会做传播化压缩；关键结论应继续阅读对应论文或技术报告。",
    discussions: [
      { label: "Hacker News 检索", url: "https://hn.algolia.com/?q=Google%20DeepMind" },
      { label: "Reddit MachineLearning", url: "https://www.reddit.com/r/MachineLearning/search/?q=DeepMind&restrict_sr=1" }
    ],
    tags: ["official", "science", "models"],
    today: false
  },
  {
    id: "stanford-ai-index",
    title: "Stanford AI Index Report",
    type: "年度报告",
    topic: "高可信来源",
    trust: "高",
    cadence: "每年",
    url: "https://aiindex.stanford.edu/report/",
    updated: "2026-06",
    audience: "需要用数据把握产业、学术、政策和投资趋势的产品负责人、研究员和分析师",
    summary: "Stanford HAI 维护的年度 AI 发展报告，提供跨领域指标和趋势图表。",
    reason: "适合做宏观判断和引用背景数据，能把模型能力、成本、产业采用和政策变化放在同一张图谱里看。",
    trustNote: "由学术机构组织并引用公开数据，可信度高；年度节奏意味着不能替代实时新闻和最新基准。",
    discussions: [
      { label: "报告官网", url: "https://aiindex.stanford.edu/" },
      { label: "Hacker News 检索", url: "https://hn.algolia.com/?q=Stanford%20AI%20Index" }
    ],
    tags: ["report", "policy", "trend"],
    today: false
  },
  {
    id: "neurips-proceedings",
    title: "NeurIPS Proceedings",
    type: "会议论文",
    topic: "论文发现",
    trust: "高",
    cadence: "每年",
    url: "https://proceedings.neurips.cc/",
    updated: "2026-06",
    audience: "需要系统追踪机器学习顶会论文、作者和主题演化的研究者",
    summary: "NeurIPS 官方论文集入口，适合查找经过会议流程筛选后的机器学习论文。",
    reason: "顶会论文集便于按年份和主题回溯研究脉络，比社交媒体热度更适合做严肃文献入口。",
    trustNote: "会议官方页面可信度高；论文结论仍可能需要复现、同行后续讨论和代码验证。",
    discussions: [
      { label: "OpenReview NeurIPS", url: "https://openreview.net/group?id=NeurIPS.cc" },
      { label: "Reddit MachineLearning", url: "https://www.reddit.com/r/MachineLearning/search/?q=NeurIPS&restrict_sr=1" }
    ],
    tags: ["conference", "paper", "academic"],
    today: false
  },
  {
    id: "huggingface-models",
    title: "Hugging Face Models",
    type: "模型平台",
    topic: "模型平台",
    trust: "中高",
    cadence: "实时",
    url: "https://huggingface.co/models",
    updated: "2026-06",
    audience: "需要查找模型卡、权重、许可证和实际下载热度的工程师",
    summary: "开源模型生态的核心检索入口，可按任务、库、许可证和热度筛选模型。",
    reason: "模型卡、文件、提交记录和社区讨论在同一页面，适合快速判断模型是否可用、可商用、可复现。",
    trustNote: "平台信息透明但质量参差不齐；可信度取决于发布者、模型卡完整度和外部复现。",
    discussions: [
      { label: "Hugging Face Discord", url: "https://hf.co/join/discord" },
      { label: "Hugging Face Forum", url: "https://discuss.huggingface.co/" }
    ],
    tags: ["models", "open-source", "license"],
    today: true
  },
  {
    id: "llama-cpp",
    title: "llama.cpp",
    type: "开源项目",
    topic: "工程项目",
    trust: "中高",
    cadence: "高频",
    url: "https://github.com/ggerganov/llama.cpp",
    updated: "2026-06",
    audience: "希望在本地、边缘设备或低成本环境运行大模型的开发者",
    summary: "高活跃度本地推理项目，是理解量化、推理后端和端侧部署的代表性工程入口。",
    reason: "项目活跃、issue 和 PR 讨论丰富，能看到新模型格式、硬件后端和性能优化的真实工程约束。",
    trustNote: "代码和社区活跃度可直接检查；具体模型效果受权重、量化方式和硬件环境影响。",
    discussions: [
      { label: "GitHub Issues", url: "https://github.com/ggerganov/llama.cpp/issues" },
      { label: "GitHub Discussions", url: "https://github.com/ggerganov/llama.cpp/discussions" }
    ],
    tags: ["inference", "local-llm", "github"],
    today: false
  },
  {
    id: "lesswrong-ai",
    title: "LessWrong AI",
    type: "外部讨论",
    topic: "社区讨论",
    trust: "中",
    cadence: "每日",
    url: "https://www.lesswrong.com/tag/ai",
    updated: "2026-06",
    audience: "关注 AI 安全、对齐、长线风险和理论争议的读者",
    summary: "AI 安全与对齐议题的长期讨论入口，适合观察观点分歧和论证链条。",
    reason: "社区长文和评论常保留完整推理过程，能帮助识别安全议题中的关键假设。",
    trustNote: "讨论深度高但观点性强；应与论文、实验和官方文档一起交叉阅读。",
    discussions: [
      { label: "AI 标签页", url: "https://www.lesswrong.com/tag/ai" },
      { label: "Alignment Forum", url: "https://www.alignmentforum.org/" }
    ],
    tags: ["discussion", "alignment", "safety"],
    today: false
  }
];

const state = {
  topic: "全部",
  type: "全部",
  trust: "全部",
  cadence: "全部",
  query: "",
  selectedId: sources[0].id
};

const labels = {
  topic: ["全部", ...unique("topic")],
  type: ["全部", ...unique("type")],
  trust: ["全部", ...unique("trust")],
  cadence: ["全部", ...unique("cadence")]
};

const listEl = document.querySelector("#source-list");
const todayEl = document.querySelector("#today-grid");
const detailEl = document.querySelector("#detail-content");
const emptyEl = document.querySelector("#empty-state");
const countEl = document.querySelector("#result-count");
const searchInput = document.querySelector("#search-input");

function unique(key) {
  return [...new Set(sources.map((source) => source[key]))];
}

function matches(source) {
  const query = state.query.trim().toLowerCase();
  const text = [source.title, source.summary, source.reason, source.topic, source.type, source.tags.join(" ")].join(" ").toLowerCase();
  return (state.topic === "全部" || source.topic === state.topic)
    && (state.type === "全部" || source.type === state.type)
    && (state.trust === "全部" || source.trust === state.trust)
    && (state.cadence === "全部" || source.cadence === state.cadence)
    && (!query || text.includes(query));
}

function renderFilters() {
  renderGroup("topic", "#topic-filters");
  renderGroup("type", "#type-filters");
  renderGroup("trust", "#trust-filters");
  renderGroup("cadence", "#cadence-filters");
}

function renderGroup(key, selector) {
  const group = document.querySelector(selector);
  group.innerHTML = labels[key].map((label) => `
    <button type="button" aria-pressed="${state[key] === label}" data-filter="${key}" data-value="${label}">
      ${label}
    </button>
  `).join("");
}

function renderToday() {
  todayEl.innerHTML = sources.filter((source) => source.today).slice(0, 5).map((source) => `
    <button class="today-card" type="button" data-select="${source.id}">
      <div class="card-top">
        <span class="pill">${source.type}</span>
        <span class="trust-badge">可信度 ${source.trust}</span>
      </div>
      <h3>${source.title}</h3>
      <p>${source.summary}</p>
    </button>
  `).join("");
}

function renderList() {
  const visible = sources.filter(matches);
  countEl.textContent = `${visible.length} / ${sources.length} 条`;
  emptyEl.hidden = visible.length > 0;
  listEl.hidden = visible.length === 0;

  if (!visible.some((source) => source.id === state.selectedId) && visible[0]) {
    state.selectedId = visible[0].id;
  }

  listEl.innerHTML = visible.map((source) => `
    <button class="source-card ${source.id === state.selectedId ? "is-active" : ""}" type="button" data-select="${source.id}">
      <div class="card-title">
        <div>
          <div class="card-top">
            <span class="pill">${source.topic}</span>
            <span class="tag">${source.type}</span>
          </div>
          <h3>${source.title}</h3>
        </div>
        <span class="trust-badge">${source.trust}</span>
      </div>
      <p class="summary">${source.summary}</p>
      <div class="meta-row">
        <span>更新 ${source.cadence}</span>
        <span>校对 ${source.updated}</span>
        <span class="discussion-count">${source.discussions.length} 个讨论入口</span>
      </div>
      <div class="meta-row">${source.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}</div>
    </button>
  `).join("");

  renderDetail();
}

function renderDetail() {
  const source = sources.find((item) => item.id === state.selectedId);
  if (!source) {
    detailEl.innerHTML = `
      <div class="detail-empty">
        <h2 id="detail-title">选择一个条目</h2>
        <p>详情会展示 URL、推荐理由、可信度解释、适合人群和外部讨论入口。</p>
      </div>
    `;
    return;
  }

  detailEl.innerHTML = `
    <article class="detail-content">
      <div>
        <div class="card-top">
          <span class="pill">${source.type}</span>
          <span class="trust-badge">可信度 ${source.trust}</span>
        </div>
        <h2 id="detail-title">${source.title}</h2>
      </div>

      <div class="detail-metrics">
        <div class="detail-metric"><span>更新频率</span><strong>${source.cadence}</strong></div>
        <div class="detail-metric"><span>最近校对</span><strong>${source.updated}</strong></div>
        <div class="detail-metric"><span>讨论入口</span><strong>${source.discussions.length} 个</strong></div>
      </div>

      <a class="open-link" href="${source.url}" target="_blank" rel="noreferrer">打开原始 URL</a>

      <section class="detail-section">
        <h3>推荐理由</h3>
        <p>${source.reason}</p>
      </section>

      <section class="detail-section">
        <h3>可信度解释</h3>
        <p>${source.trustNote}</p>
      </section>

      <section class="detail-section">
        <h3>适合人群</h3>
        <p>${source.audience}</p>
      </section>

      <section class="detail-section">
        <h3>外部讨论入口</h3>
        <div class="discussion-list">
          ${source.discussions.map((discussion) => `
            <a href="${discussion.url}" target="_blank" rel="noreferrer">
              <span>${discussion.label}</span><span>打开</span>
            </a>
          `).join("")}
        </div>
      </section>
    </article>
  `;
}

function resetFilters() {
  state.topic = "全部";
  state.type = "全部";
  state.trust = "全部";
  state.cadence = "全部";
  state.query = "";
  searchInput.value = "";
  renderFilters();
  renderList();
}

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter]");
  const selectButton = event.target.closest("[data-select]");
  const clearButton = event.target.closest("[data-action='clear']");

  if (filterButton) {
    state[filterButton.dataset.filter] = filterButton.dataset.value;
    renderFilters();
    renderList();
  }

  if (selectButton) {
    state.selectedId = selectButton.dataset.select;
    renderList();
  }

  if (clearButton) {
    resetFilters();
  }
});

document.querySelector("#reset-filters").addEventListener("click", resetFilters);

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
});

renderFilters();
renderToday();
renderList();
