# Architecture

## Overview

AI Frontier Navigation 第一版是静态前端应用，继续保持 index.html、styles.css、app.js 的轻量结构。应用直接在浏览器中运行，不需要后端、数据库、账号系统、爬虫或 AI API。

核心架构从“静态 URL 列表”升级为“人工维护的精选条目数据 + 前端筛选与详情展示”。所有产品能力围绕结构化数据字段展开：条目类型、主题、标签、推荐理由、可信度、更新频率、适合人群和外部讨论链接。

## System Boundaries

### In Scope

- 静态首页。
- 结构化条目数据。
- 今日值得看内容展示。
- 搜索与筛选。
- 条目详情面板或详情视图。
- 外部链接跳转。
- 响应式前端布局。
- 本地直接打开运行。

### Out of Scope

- 后端服务。
- 数据库。
- 用户系统。
- 站内论坛。
- 评论、发帖、点赞、收藏。
- 审核后台。
- 爬虫和自动同步。
- AI 摘要或推荐 API。
- 服务端渲染。
- Next.js 或其他复杂构建链。

## File Structure

当前推荐保持：

- index.html：页面结构、静态挂载点、基础语义结构。
- styles.css：视觉系统、布局、响应式、组件状态。
- app.js：结构化数据、筛选状态、渲染逻辑、详情交互。
- README.md：本地打开、验证方式、产品范围说明。
- brain/：产品 Brain 文档。

如果条目数据继续增长，可以后续拆分：

- data.js 或 sources.js：仅存放精选条目数据。
- app.js：仅存放状态管理和渲染逻辑。

第一版不需要新增框架。

## Data Model

核心对象为 curatedEntry。

字段建议：

- id：稳定唯一标识。
- title：条目标题。
- type：来源类型，例如 paper、project、blog、community、source、conference、model-platform。
- url：主链接。
- description：简短说明。
- recommendation：推荐理由。
- trustLevel：可信度等级，例如 high、medium、emerging。
- trustScore：可选数字评分，例如 1-5。
- trustReason：可信度解释。
- updateCadence：更新频率，例如 daily、weekly、monthly、event-based、irregular。
- audience：适合人群，例如 beginner、learner、builder、researcher、product。
- topics：主题数组。
- tags：标签数组。
- featuredToday：是否进入今天值得看。
- dateAdded：收录日期。
- lastUpdated：最近更新日期。
- discussionLinks：外部讨论链接数组。

外部讨论链接对象字段：

- label：显示名称。
- url：外部讨论 URL。
- platform：平台，例如 Reddit、Hacker News、GitHub、知乎、X、Discord。

## Trust Model

可信度不是装饰字段，而是产品差异化的一部分。

建议规则：

- high：官方论文、会议官网、作者仓库、主流研究机构、长期稳定高质量博客、可信社区高质量讨论。
- medium：二手解读、个人博客、社区整理、较新但有明确来源支撑的项目。
- emerging：新项目、新讨论、新观点，可能有价值但仍需观察。

每个条目必须有 trustReason，解释其被收录和评分的理由。

## Execution Flow

1. 页面加载 index.html。
2. app.js 初始化条目数据和筛选状态。
3. 计算筛选项集合，包括主题、类型、可信度、更新频率和标签。
4. 渲染“今天值得看”区域。
5. 渲染筛选控件。
6. 根据搜索词和筛选状态计算可见条目。
7. 渲染条目列表。
8. 用户点击条目后，渲染详情面板或详情视图。
9. 用户点击主 URL 或外部讨论链接跳转到外部站点。

## UI Architecture

推荐页面结构：

- Header：产品名称、简短定位、搜索入口。
- Today Section：今天值得看的精选内容。
- Filter Bar：主题、类型、可信度、更新频率、标签。
- Main Workspace：条目列表 + 详情面板。
- Empty State：无结果提示和清除筛选动作。

桌面端可以采用列表与详情并排布局。移动端建议列表优先，详情以展开面板或独立区域展示，保证筛选控件可访问且不遮挡内容。

## Frontend Quality Constraints

- 使用原生 HTML、CSS、JavaScript。
- 不引入 Next.js；如果未来引入，必须先阅读项目 node_modules/next/dist/docs/ 中对应版本文档。
- 不引入数据库或远程运行依赖。
- 所有动态内容来自本地结构化数据。
- 视觉设计服务于扫描效率和可信感。
- 保持键盘和屏幕阅读器基础可用性。
- 外链应清晰标识，并使用安全的 target 和 rel 属性。

## Verification

轻量验证方式：

- node --check app.js
- 浏览器打开 index.html
- 检查桌面布局。
- 检查移动端布局。
- 验证搜索、筛选、今天值得看、详情展示和外链跳转。
- 验证空状态。

## Future Architecture Options

当内容规模超过几百条，或多人维护数据变复杂时，再考虑：

- 将数据拆分为独立 JSON。
- 引入静态构建工具。
- 引入轻量 CMS。
- 引入静态导出框架。
- 引入后端和账号系统。

这些都不是第一版范围。