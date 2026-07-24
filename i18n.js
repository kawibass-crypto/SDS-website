// SDS i18n — Chinese/English translation data
const I18N = {
  zh: {
    // Nav
    'nav.home': '首页',
    'nav.brand-story': '品牌故事',
    'nav.key-projects': '重点项目',
    'nav.widgets': '工具集',
    'nav.design-tools': '设计工具',
    'nav.vi-guide': 'VI 指南',
    'nav.toggle': 'EN',

    // Hero
    'hero.title': 'Seeed Studio Design System',
    'hero.subtitle': 'Seeed Studio 品牌设计系统',
    'hero.desc': '一个为产品叙事、品牌表达、可复用资产和实用设计工作流而生的共享基础体系。',

    // Brand Story
    'brand-story.label': '品牌故事',
    'brand-story.title': 'SDS 品牌设计系统',
    'brand-story.desc': 'SDS (Seeed Studio Design System) 是 Seeed Studio 品牌设计系统的核心框架，为所有产品、营销和用户体验提供统一的设计语言和视觉标准。',
    'brand-story.cta': '探索设计系统',

    // Section 01 — Key Projects
    'key-projects.label': '01 · 重点项目',
    'key-projects.title': '设计驱动的实践',
    'key-projects.desc': '从空间体验到产品细节，设计思维贯穿每一个重点项目，塑造品牌的真实感知。',

    // Project cards
    'project.hq-showroom': '总部展厅',
    'project.hq-showroom.desc': 'Seeed Studio 总部展厅改造，通过沉浸式空间叙事融合品牌体验与产品展示。',
    'project.maker-faire': 'Maker Faire Shenzhen',
    'project.maker-faire.desc': '自 2012 年起，连接深圳本地硬件生态与全球科技社区。',
    'project.ai-signage': 'AI 交互标牌',
    'project.ai-signage.desc': '当易拉罐有了 AI 灵感——从色彩识别到梦境生图，一台会读懂你情绪的智能饮料推荐机。',
    'project.souvenir': '灵感的实体形态',
    'project.souvenir.desc': '品牌纪念品——品牌文化的实体延伸，将抽象概念转化为可触摸、可使用的日常物品。',
    'project.showreel': '产品影像辑',
    'project.showreel.desc': '影像视觉叙事重新定义工业美学——四部影片展现科技、设计与创客精神的融合。',

    // Section 02 — Widgets
    'widgets.label': '02 · 工具集',
    'widgets.title': '即用型设计工具',
    'widgets.desc': '不断增长的生产力工具集，帮助设计师和协作者快速完成日常任务。',
    'widget.ai-banner': 'AI Banner 文案编辑器',
    'widget.ai-banner.desc': '使用自然语言指令修改横幅和宣传图片中的文字与文案。',
    'widget.image-library': '产品图片库',
    'widget.image-library.desc': '跨团队协作上传和分享高质量产品 PNG 图片。',
    'widget.image-compressor': '图片压缩器',
    'widget.image-compressor.desc': '无损极限压缩工具，优化产品和宣传图片。',
    'widget.pdf-compressor': 'PDF 无损极限压缩 (PDF Lossless Studio)',
    'widget.pdf-compressor.desc': '100% 本地隐私处理与极限瘦身工具，支持高清双重重采样与绿色桌面版。',

    // PDF Lossless Page
    'pdf-comp.badge': '⚡ 本地 PDF 压缩器',
    'pdf-comp.title': 'PDF 无损极限压缩工具',
    'pdf-comp.hero-sub': '100% 本地离线处理，采用智能双重重采样引擎，在保护绝密设计文档隐私的同时实现极限瘦身。',
    'pdf-comp.dl-btn': '↓ 下载绿色免安装版 (ZIP · 125MB)',
    'pdf-comp.back': '← 返回工具集',
    'pdf-comp.overview-title': '极佳清晰度与极端体积压缩的平衡',
    'pdf-comp.overview-p1': '在设计、营销与产品文档的协同共享中，包含高分辨率图档的 PDF 文件往往动辄数十乃至数百兆，导致邮件拒发、传输缓慢以及线上阅读卡顿。传统的在线 PDF 压缩服务往往依赖云端上传，存在核心商业秘密与视觉文档泄漏的风险，且无法精准掌控图像压缩比率。',
    'pdf-comp.overview-p2': 'PDF Lossless Studio 专为 Seeed Studio 内部与合作设计师打造，提供 100% 端到端本地处理能力。内置“对象级嵌入流替换”与“高保真页面抗锯齿重构”两大引擎，配合自定义 DPI 与 JPEG 质量调节，打造极致的 PDF 瘦身体验。',
    'pdf-comp.s1-title': '选择 PDF 文件',
    'pdf-comp.s1-desc': '直接拖拽或批量选取本地 PDF 文件，支持实时解析对象结构、评估页面图像密度与元数据。',
    'pdf-comp.s2-title': '智能双引擎重采样',
    'pdf-comp.s2-desc': '优先采用对象级智能替代引擎，仅针对高 DPI 嵌套图像重采样；必要时自动切换至页面级高保真抗锯齿引擎。',
    'pdf-comp.s3-title': '秒级完成导出',
    'pdf-comp.s3-desc': '直观对比压缩前后体积与节省比例，一键导出优化后的 PDF 或下载免安装桌面应用进行极速处理。',
    'pdf-comp.cap-title': '核心功能与技术特色',
    'pdf-comp.c1-title': '100% 本地隐私保障',
    'pdf-comp.c1-desc': '无需上传云端服务器，所有图像渲染与二进制流优化均在本地内存完成，保障绝密设计资产安全。',
    'pdf-comp.c2-title': '智能双重压缩引擎',
    'pdf-comp.c2-desc': '结合对象级 (Object Engine) 图像替换与页面级 (Page Engine) 高清晰重编码，轻松应对矢量图与扫描件。',
    'pdf-comp.c3-title': '四档预设与高保真抗锯齿',
    'pdf-comp.c3-desc': '涵盖“视觉无损 (200DPI)”、“极佳平衡 (120DPI)”、“极限压缩 (90DPI)”及自定义调节，保持矢量文本与线条极度清晰。',
    'pdf-comp.c4-title': '免安装绿色桌面版',
    'pdf-comp.c4-desc': '提供 Windows 64位 Portable 解压即用包，适合离线环境、高频批量处理与内部共享。',
    'pdf-comp.rel-title': '下载绿色免安装桌面版',
    'pdf-comp.rel-desc': '下载完整编译的 Windows 绿色便携版应用 (PDF-Lossless-Studio-Portable-v1.0.zip)，解压即用，无需安装。',
    'pdf-comp.quote-p1': '零云端上传，极至本地掌控与隐私保障。',
    'pdf-comp.quote-p2': '智能无损压缩，流畅极速阅读。',

    // Section 03 — Design Tools
    'design-tools.label': '03 · 设计分享',
    'design-tools.title': 'AI 驱动的设计工作流',
    'design-tools.desc': '实用的 AI 工具和工作流，涵盖图像生成、视频制作和品牌视觉素材创建——让设计更快、更易触达。',
    'tool.ai-detail': 'AI 产品详情页',
    'tool.ai-detail.desc': '利用 AI 图像生成技术，高效产出电商产品详情页视觉素材——从概念到最终输出。',
    'tool.video-workflow': '视频工作流 · 即梦 Seedance 2.0',
    'tool.video-workflow.desc': '基于即梦 Seedance 2.0 的完整 AI 视频生成管线——从创意构思到成品输出。',
    'tool.gaoding': '稿定 AI 生图',
    'tool.gaoding.desc': '利用稿定 AI 快速产出品牌营销视觉素材——覆盖电商横幅、社媒配图、活动海报等。',

    // Section 04 — VI Guide
    'vi-guide.label': '04 · VI 指南',
    'vi-guide.title': '品牌视觉识别系统',
    'vi-guide.desc': '完整的品牌视觉指南，确保在所有触点上保持统一、专业的品牌表达。',
    'vi-guide.download-title': '下载完整 VI 手册',
    'vi-guide.download-desc': '涵盖 Logo 使用、色彩系统、字体排印、图标系统及应用指南——为内部团队和外部合作伙伴提供完整的视觉识别体系。',
    'vi-guide.download-btn': '↓ 下载 VI 手册 (PDF)',
    'vi-guide.side-text': '<strong>VI（视觉识别）</strong>定义了 Seeed Studio 如何被视觉识别和传播。每一条规则都经过精心设计，以确保一致性和专业性。',

    // Footer
    'footer.kicker': '实时设计系统',
    'footer.desc': '一个为产品叙事、品牌表达、可复用资产和实用设计工作流而设的共享基础体系，贯穿 Seeed Studio 各团队。',
    'footer.explore': '浏览',
    'footer.status': '系统状态',
    'footer.version': '版本',
    'footer.scope': '范围',
    'footer.mode': '模式',
    'footer.mode-val': '持续演进',
    'footer.copyright': '© 2026 Seeed Studio · 品牌设计系统',
    'footer.built': '为更清晰的协作而建',
    'footer.brand-story': '品牌故事',
    'footer.key-projects': '重点项目',
    'footer.widgets': '工具集',
    'footer.design-tools': '设计工具',
    'footer.vi-guide': 'VI 指南',

    // 404 Page
    '404.title': '页面未找到',
    '404.desc': '抱歉，您访问的页面不存在或已被移动。',
    '404.btn': '← 返回 SDS 首页',
  },
  en: {
    'nav.home': 'Home',
    'nav.brand-story': 'Brand Story',
    'nav.key-projects': 'Key Projects',
    'nav.widgets': 'Widgets',
    'nav.design-tools': 'Design Tools',
    'nav.vi-guide': 'VI Guide',
    'nav.toggle': '中文',

    'hero.title': 'Seeed Studio Design System',
    'hero.subtitle': 'Seeed Studio Design System',
    'hero.desc': 'A shared foundation for product storytelling, brand expression, reusable assets, and practical design workflows across Seeed Studio teams.',

    'brand-story.label': 'BRAND STORY',
    'brand-story.title': 'SDS Brand Design System',
    'brand-story.desc': 'SDS (Seeed Studio Design System) is the core framework of Seeed Studio\'s brand design system, providing consistent design language and visual standards for all products, marketing, and user experiences.',
    'brand-story.cta': 'Explore the Design System',

    'key-projects.label': '01 · KEY PROJECTS',
    'key-projects.title': 'Design-Driven Practice',
    'key-projects.desc': 'From spatial experiences to product details, design thinking runs through every key project, shaping the authentic perception of the brand.',

    'project.hq-showroom': 'HQ Showroom',
    'project.hq-showroom.desc': 'Seeed Studio\'s headquarters showroom redesign, blending brand experience with product display through immersive spatial storytelling.',
    'project.maker-faire': 'Maker Faire Shenzhen',
    'project.maker-faire.desc': 'Since 2012, connecting Shenzhen\'s local hardware ecosystem with the global tech community.',
    'project.ai-signage': 'AI Interactive Signage',
    'project.ai-signage.desc': 'When a can gets AI inspiration — from color recognition to dream-scape generation, an intelligent beverage recommender that reads your emotions.',
    'project.souvenir': 'The Physical Form of Inspiration',
    'project.souvenir.desc': 'Brand Memorabilia — a tangible extension of brand culture, translating abstract concepts into everyday objects that can be touched and used.',
    'project.showreel': 'Product Showreel',
    'project.showreel.desc': 'Cinematic visual storytelling redefining industrial aesthetics — four films showcasing the fusion of technology, design, and maker spirit.',

    'widgets.label': '02 · WIDGETS',
    'widgets.title': 'Ready-to-Use Design Tools',
    'widgets.desc': 'A growing collection of productivity tools to help designers and collaborators complete daily tasks quickly.',
    'widget.ai-banner': 'AI Banner Copy Editor',
    'widget.ai-banner.desc': 'Modify text and copy within banners and promotional images using natural language prompts.',
    'widget.image-library': 'Product Image Library',
    'widget.image-library.desc': 'Collaboratively upload and share high-quality product PNG images across teams.',
    'widget.image-compressor': 'Image Compressor',
    'widget.image-compressor.desc': 'Lossless extreme compression tool to optimize product and promotional images.',
    'widget.pdf-compressor': 'PDF Lossless Studio',
    'widget.pdf-compressor.desc': '100% local privacy PDF extreme compression tool with dual-engine resampling and portable desktop app support.',

    // PDF Lossless Page
    'pdf-comp.badge': '⚡ LOCAL PDF COMPRESSOR',
    'pdf-comp.title': 'PDF Lossless Studio',
    'pdf-comp.hero-sub': '100% local offline processing powered by dual-engine resampling to squeeze file sizes while preserving design document privacy.',
    'pdf-comp.dl-btn': '↓ Download Portable App (ZIP · 125MB)',
    'pdf-comp.back': '← Back to Widgets',
    'pdf-comp.overview-title': 'Balance Between Extreme Clarity & Maximum Compression',
    'pdf-comp.overview-p1': 'In cross-team design and marketing workflows, high-res PDF files can easily reach tens or hundreds of megabytes, leading to email failures, slow transfers, and lagging viewports. Cloud-based compression services risk leaking trade secrets and offer limited compression control.',
    'pdf-comp.overview-p2': 'Designed for Seeed Studio teams and collaborators, PDF Lossless Studio provides 100% end-to-end local processing. Dual Object Stream & Page Re-encoding engines with custom DPI & JPEG quality controls deliver ultimate PDF compression.',
    'pdf-comp.s1-title': 'Select PDF Files',
    'pdf-comp.s1-desc': 'Drag & drop or batch select local PDFs for instant object parsing and density assessment.',
    'pdf-comp.s2-title': 'Smart Dual Engine Resampling',
    'pdf-comp.s2-desc': 'Prioritizes Object Engine for high-DPI stream replacement, fallback to Page Engine anti-aliasing.',
    'pdf-comp.s3-title': 'Export in Seconds',
    'pdf-comp.s3-desc': 'Compare original & compressed file sizes instantly, export optimized PDFs or run the portable app.',
    'pdf-comp.cap-title': 'Core Capabilities & Technical Highlights',
    'pdf-comp.c1-title': '100% Local Privacy',
    'pdf-comp.c1-desc': 'Zero server uploads. All image rendering and stream optimization happen purely in local memory.',
    'pdf-comp.c2-title': 'Dual Compression Engine',
    'pdf-comp.c2-desc': 'Combines Object Stream replacement and Page Re-encoding to handle vectors and scanned docs seamlessly.',
    'pdf-comp.c3-title': '4 Presets & Anti-Aliasing',
    'pdf-comp.c3-desc': 'Covers Visually Lossless (200DPI), Balanced (120DPI), Extreme (90DPI) & Custom modes with crisp vector typography.',
    'pdf-comp.c4-title': 'Portable Desktop App',
    'pdf-comp.c4-desc': 'Windows 64-bit portable package ready to extract and run offline for batch processing.',
    'pdf-comp.rel-title': 'Download Portable Desktop App',
    'pdf-comp.rel-desc': 'Download compiled Windows portable package (PDF-Lossless-Studio-Portable-v1.0.zip), extract and run with zero setup.',
    'pdf-comp.quote-p1': 'Zero cloud upload. Complete local control & privacy.',
    'pdf-comp.quote-p2': 'Compress smarter, read faster.',

    'design-tools.label': '03 · DESIGN SHARING',
    'design-tools.title': 'AI-Powered Design Workflows',
    'design-tools.desc': 'Practical AI tools and workflows for image generation, video production, and brand visual asset creation — making design faster and more accessible.',
    'tool.ai-detail': 'AI Product Detail Page',
    'tool.ai-detail.desc': 'Leverage AI image generation to efficiently produce e-commerce product detail page visuals — from concept to final output.',
    'tool.video-workflow': 'Video Workflow · Jimeng Seedance 2.0',
    'tool.video-workflow.desc': 'A complete AI video generation pipeline built on Jimeng Seedance 2.0 — from creative ideation to polished final output.',
    'tool.gaoding': 'Gaoding AI Image Generation',
    'tool.gaoding.desc': 'Rapidly produce brand marketing visuals with Gaoding AI — covering e-commerce banners, social media graphics, campaign posters, and more.',

    'vi-guide.label': '04 · VI GUIDELINES',
    'vi-guide.title': 'Brand Visual Identity System',
    'vi-guide.desc': 'Complete brand visual guidelines ensuring consistent, professional brand expression across all touchpoints.',
    'vi-guide.download-title': 'Download the Full VI Manual',
    'vi-guide.download-desc': 'Covers logo usage, color system, typography, iconography, and application guidelines — a complete visual identity system for internal teams and external partners.',
    'vi-guide.download-btn': '↓ Download VI Manual (PDF)',
    'vi-guide.side-text': '<strong>VI (Visual Identity)</strong> defines how Seeed Studio is visually recognized and communicated. Every rule is carefully crafted to ensure consistency and professionalism.',

    'footer.kicker': 'Live Design System',
    'footer.desc': 'A shared foundation for product storytelling, brand expression, reusable assets, and practical design workflows across Seeed Studio teams.',
    'footer.explore': 'Explore',
    'footer.status': 'System Status',
    'footer.version': 'Version',
    'footer.scope': 'Scope',
    'footer.mode': 'Mode',
    'footer.mode-val': 'Continuously Evolving',
    'footer.copyright': '© 2026 Seeed Studio · Brand Design System',
    'footer.built': 'Built for clearer collaboration',
    'footer.brand-story': 'Brand Story',
    'footer.key-projects': 'Key Projects',
    'footer.widgets': 'Widgets',
    'footer.design-tools': 'Design Tools',
    'footer.vi-guide': 'VI Guide',

    // 404 Page
    '404.title': 'Page Not Found',
    '404.desc': 'The page you are looking for does not exist or has been moved.',
    '404.btn': '← Back to Home',
  }
};

// Apply translations
function applyI18n(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = I18N[lang][key];
      } else {
        el.innerHTML = I18N[lang][key];
        // Update typewriter cache if present
        if (el.dataset.typewriter !== undefined) {
          el.dataset.typewriter = I18N[lang][key];
        }
      }
    }
  });
  // Update toggle button text
  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'zh' ? 'EN' : '中文';
  localStorage.setItem('sds-lang', lang);
  if (typeof window.initHeroTitleAnimation === 'function') {
    window.initHeroTitleAnimation();
  }
}

// Toggle language
function toggleLang() {
  const current = document.documentElement.lang || 'en';
  const next = current === 'zh' ? 'en' : 'zh';
  applyI18n(next);
}

// Init
(function() {
  const saved = localStorage.getItem('sds-lang') || 'en';
  applyI18n(saved);
})();