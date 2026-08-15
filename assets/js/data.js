/* ==========================================================================
 *  📝 作品集 · 内容配置文件
 *  这个文件是网站的"内容仓库"：改这里的文字和图片路径，网站就会跟着变。
 *  详细教程见项目根目录的 README.md
 *
 *  ⚠️ 编辑本文件前请先看这里（重要！）：
 *  1. 保存时编码必须选 UTF-8（记事本：文件 → 另存为 → 编码选 UTF-8）
 *  2. 所有内容的引号是英文引号 " ，而且必须成对出现
 *     例如  name: "段宇珅"  —— 开头一个 " ，结尾一个 "
 *  3. 改完如果网页打不开，99% 是某个引号没配对或编码不对，
 *     把 data.js 里你改动的部分发给 AI 工具修复即可
 * ========================================================================== */

/* ==========================================================================
 *  📝 作品集 · 内容配置文件
 *  这个文件是网站的"内容仓库"：改这里的文字和图片路径，网站就会跟着变。
 *  详细教程见项目根目录的 README.md
 * ========================================================================== */

const SITE = {

  /* ---------- 个人信息（把"你的名字"换成你自己的） ---------- */
  profile: {
    name: "段宇珅",
    nameEn: "EasonDuan",
    role: "数字媒体艺术-视觉传达",
    roleEn: "Digital Media Art-Visual Communication",
    focus: "AI 创作 × 汽车影像 × 三维设计",
    tagline: "用 AI 与数字工具，把关于速度与未来的想象，变成看得见的作品。",
    location: "中国 · 杭州",
    email: "easonduan242@gmail.com",
    wechat: "easonD_d11",
    avatar: "assets/img/avatar.svg",

    bio: [
      "你好，我是「段宇珅」，一名数字媒体艺术专业的学生。我热爱汽车文化，也痴迷于 AI 与数字工具带来的创作自由。",
      "我相信：在 AI 时代，创作者的价值不是“会不会画”，而是“想不想得到、愿不愿意去实现”。这个作品集记录了我用 AI 和各类数字媒体工具，把想象变成作品的过程。"
    ],

    /* 社交账号：把链接和昵称换成你自己的，不想要的直接删掉一行 */
    socials: [
      { name: "小红书", handle: "@", url: "https://www.xiaohongshu.com" },
      { name: "哔哩哔哩", handle: "@", url: "https://www.bilibili.com" },
      { name: "GitHub", handle: "@easonDuan11", url: "https://github.com/easonDuan11" }
    ]
  },

  /* ---------- 代表项目：AI 生成 IP 形象「小驰 DASH」 ---------- */
  ip: {
    name: "小驰 DASH",
    nameEn: "DASH",
    slogan: "一个由 AI 共创的汽车文化数字 IP",
    intro: [
      "「小驰」是一只诞生于 AI 提示词的汽车小机器人：圆润的车身、发亮的车灯眼睛，热爱速度，也相信创意。“驰”是速度与自由，“小”则是 AI 时代每个普通人都能成为创作者的那份可能。",
      "这个项目完整记录了一个 AI 形象从“一句话”到“一套作品”的全过程：它怎么来的、意味着什么，以及 AI 工具帮我解决了哪些真实困境。"
    ],

    image: "assets/img/ip/mascot-main.svg",
    imageCaption: "「小驰 DASH」主形象 · AI 生成后由我统一设定",

    /* 它怎么来的：从灵感到成品 */
    origin: [
      "灵感来自我很喜欢的汽车文化：赛车、霓虹、引擎声。我想做一个属于自己的“汽车伙伴”——一个能代表我审美的角色。",
      "我没有插画功底，于是把想法写成提示词交给 AI：一只热爱汽车的小机器人，圆润可爱，车身橙色，车灯是眼睛。AI 在几十秒内给了我几十个版本。",
      "我从里面挑选气质最对的几张，反复调整提示词让形象稳定下来，再用 Photoshop 统一细节、Blender 做 3D 延展。最终，小驰诞生了。"
    ],

    /* 制作流程：6 步 */
    process: [
      { step: "01", title: "灵感 · 概念", desc: "确定主题：汽车文化 × 拟人化 × AI 共创。收集参考图，写下关键词和性格设定。" },
      { step: "02", title: "提示词 · 生成", desc: "把想法写成提示词，用 Midjourney / 即梦等 AI 工具批量生成概念草图。" },
      { step: "03", title: "筛选 · 迭代", desc: "选出气质最对的版本，反馈给 AI 反复微调：表情、配色、车身细节。" },
      { step: "04", title: "定稿 · 设定", desc: "锁定主形象，补充角色设定：性格、口头禅、世界观，让形象“活”起来。" },
      { step: "05", title: "延展 · 应用", desc: "围绕形象制作表情包、周边、海报与视频，用 PS / Blender / AE / PR 完成。" },
      { step: "06", title: "发布 · 成长", desc: "上线发布、收集反馈，持续迭代新表情、新周边，让 IP 一直生长。" }
    ],

    /* 表情包：图片 + 名称，可任意增删 */
    expressions: [
      { img: "assets/img/ip/exp-01-happy.svg", name: "开心", text: "今天也是追风的一天" },
      { img: "assets/img/ip/exp-02-go.svg", name: "加油", text: "冲就完了！" },
      { img: "assets/img/ip/exp-03-wow.svg", name: "惊讶", text: "？？这也太帅了" },
      { img: "assets/img/ip/exp-04-hmm.svg", name: "思考", text: "让我想想……" },
      { img: "assets/img/ip/exp-05-love.svg", name: "比心", text: "爱了爱了" },
      { img: "assets/img/ip/exp-06-cool.svg", name: "耍酷", text: "低调，低调" }
    ],

    /* 周边产品：图片 + 名称，可任意增删 */
    merch: [
      { img: "assets/img/ip/merch-mug.svg", name: "马克杯", desc: "通勤 / 办公，小驰陪你" },
      { img: "assets/img/ip/merch-sticker.svg", name: "表情贴纸", desc: "贴满你的车与电脑" },
      { img: "assets/img/ip/merch-hoodie.svg", name: "卫衣", desc: "把速度穿在身上" },
      { img: "assets/img/ip/merch-keychain.svg", name: "钥匙扣", desc: "随身携带的小驰" }
    ],

    /* AI 帮我解决了什么问题与困境 */
    aiSolutions: [
      { title: "突破“空白页”困境", desc: "面对一张白纸不知道画什么？AI 能快速生成几十版概念，帮我跨越“从零开始”的恐惧，直接进入“选择与打磨”。" },
      { title: "搞定风格统一", desc: "手绘很难保证每张图风格一致。我用“参考图 + 提示词”让 AI 保持形象一致性，表情包和周边也因此有了统一的视觉基因。" },
      { title: "大幅缩短制作周期", desc: "表情包、周边、海报从“一张张手绘”变成“生成 + 微调”，过去几周的工作量，现在几天就能完成第一版。" },
      { title: "降低技能门槛", desc: "没有插画功底也能用提示词把想法可视化。AI 补齐了手绘短板，让我把精力放在创意和叙事上。" }
    ],

    /* 这个形象的意义 */
    meaning: [
      { title: "创作者宣言", desc: "小驰是我用 AI 完成的第一个完整 IP 项目，代表“普通人也能成为创作者”——工具不重要，想法才重要。" },
      { title: "人机共创样本", desc: "它不是一个“AI 一键生成”的贴图，而是我主导创意、AI 提供生产力、我再判断与打磨的共创产物。" },
      { title: "速度与未来的载体", desc: "小驰连接了我热爱的汽车文化与 AI 未来：速度不只是引擎，也是创意迭代的速度。" }
    ]
  },

  /* ---------- 作品集：在下面这个数组里添加作品 ----------
   * 添加方法（三选一）：
   * 1. 复制任意一个 { ... }, 粘贴到数组里，改 title/category/year/cover/description
   * 2. 把作品图片放到 assets/img/works/ 文件夹，再在 cover 里写它的路径
   * 3. 有视频时，把视频文件放到 assets/video/ 文件夹，在 video 里写路径
   * 分类 category 可填：video 视频剪辑 / render 汽车渲染 / 3d 三维建模 / motion 动效特效 / design 修图设计
   * ---------------------------------------------------------- */
  works: [
    {
      id: "w13", category: "video", year: "2026", featured: true,
      title: "ET5T 混剪 · 汽车广告向剪辑",
      tags: ["视频剪辑", "汽车", "混剪"],
      tools: ["剪映", "Premiere Pro"],
      cover: "assets/img/works/ET5T混剪（仅供学习参考不作商用，侵权删）-封面.jpg",
      video: "ET5T混剪（仅供学习参考不作商用，侵权删）.mp4",
      description: "蔚来 ET5T 主题混剪，仅供学习参考、不作商用。用节奏卡点、转场与调色呈现汽车的速度感与设计美学。"
    },
    {
      id: "w01", category: "render", year: "2025", featured: true,
      title: "赛博夜行 · 未来城市跑车",
      tags: ["汽车渲染", "AI 优化"],
      tools: ["Midjourney", "Photoshop"],
      cover: "assets/img/works/car-render-1.svg",
      video: "",
      description: "用 AI 生成初稿后，用 Photoshop 精修光影与氛围，呈现未来城市雨夜中疾驰的跑车。"
    },
    {
      id: "w02", category: "render", year: "2025", featured: false,
      title: "落日戈壁 · 越野车氛围大片",
      tags: ["汽车渲染", "AI 优化"],
      tools: ["Midjourney", "Photoshop"],
      cover: "assets/img/works/car-render-2.svg",
      video: "",
      description: "以黄昏戈壁为背景的越野车氛围图，AI 生成构图，人工统一色调并强化光影层次。"
    },
    {
      id: "w03", category: "render", year: "2024", featured: false,
      title: "棚拍 GT · AI 光影精修",
      tags: ["汽车渲染", "修图"],
      tools: ["Photoshop", "AI 扩图"],
      cover: "assets/img/works/car-render-3.svg",
      video: "",
      description: "模拟影棚聚光拍摄的 GT 跑车，用 AI 扩图与修图工具补全场景、增强质感。"
    },
    {
      id: "w04", category: "video", year: "2025", featured: true,
      title: "「速度与光影」汽车广告混剪",
      tags: ["视频剪辑", "节奏"],
      tools: ["Premiere Pro", "剪映"],
      cover: "assets/img/works/video-1.svg",
      video: "",
      description: "围绕“速度与光影”主题的汽车短片混剪，卡点节奏、转场与调色均由我完成。"
    },
    {
      id: "w05", category: "video", year: "2025", featured: false,
      title: "「小驰 DASH 诞生记」AIGC 幕后花絮",
      tags: ["AIGC", "幕后"],
      tools: ["剪映", "AE"],
      cover: "assets/img/works/video-2.svg",
      video: "",
      description: "记录 AI 形象从提示词到成品的全过程，用剪辑与动效把创作幕后讲成一个故事。"
    },
    {
      id: "w06", category: "video", year: "2024", featured: false,
      title: "山道 Vlog · 周末追风",
      tags: ["Vlog", "生活"],
      tools: ["剪映"],
      cover: "assets/img/works/video-3.svg",
      video: "",
      description: "周末山道自驾 Vlog，轻快节奏 + 字幕包装，用剪映完成全部剪辑与调色。"
    },
    {
      id: "w07", category: "3d", year: "2025", featured: false,
      title: "小驰 3D 形象 · 低多边形",
      tags: ["三维建模", "IP 延展"],
      tools: ["Blender"],
      cover: "assets/img/works/blender-1.svg",
      video: "",
      description: "用 Blender 把小驰从 2D 变成 3D 低多边形形象，为表情包与周边提供三维资产。"
    },
    {
      id: "w08", category: "3d", year: "2024", featured: false,
      title: "概念车模型 · 白模渲染",
      tags: ["三维建模", "渲染"],
      tools: ["Blender"],
      cover: "assets/img/works/blender-2.svg",
      video: "",
      description: "自建概念车低模并进行白模渲染，练习硬表面建模与光影布光。"
    },
    {
      id: "w09", category: "motion", year: "2025", featured: false,
      title: "品牌片头 · 速度线动效",
      tags: ["动效", "片头"],
      tools: ["After Effects"],
      cover: "assets/img/works/motion-1.svg",
      video: "",
      description: "为个人品牌制作的片头动效，用速度线与粒子营造引擎启动的冲击感。"
    },
    {
      id: "w10", category: "motion", year: "2024", featured: false,
      title: "车载 HUD 数据界面动效",
      tags: ["HUD", "界面动效"],
      tools: ["After Effects"],
      cover: "assets/img/works/motion-2.svg",
      video: "",
      description: "未来车载 HUD 界面动效练习：速度表、导航与状态数据的科技感表达。"
    },
    {
      id: "w11", category: "design", year: "2025", featured: false,
      title: "车展主视觉海报 · 合成",
      tags: ["海报", "合成"],
      tools: ["Photoshop"],
      cover: "assets/img/works/design-1.svg",
      video: "",
      description: "以汽车为主体进行多素材合成，完成一张车展主题主视觉海报。"
    },
    {
      id: "w12", category: "design", year: "2024", featured: false,
      title: "棚拍精修 · 氛围与色彩",
      tags: ["精修", "调色"],
      tools: ["Photoshop"],
      cover: "assets/img/works/design-2.svg",
      video: "",
      description: "汽车棚拍图精修练习：脏点清理、色彩分级与氛围渲染。"
    },

  ],

  /* ---------- 技能与工具 ---------- */
  skills: [
    { name: "视频剪辑", tools: "Premiere Pro · 剪映", level: 90, desc: "卡点、转场、字幕包装与调色，能独立完成从素材到成片。" },
    { name: "修图设计", tools: "Photoshop", level: 85, desc: "精修、合成、海报排版，擅长汽车题材的质感与氛围表达。" },
    { name: "三维建模", tools: "Blender", level: 78, desc: "硬表面建模、低多边形角色、白模渲染与简单动画。" },
    { name: "动效特效", tools: "After Effects", level: 72, desc: "片头动效、粒子特效、HUD 界面动效与 MG 动画。" },
    { name: "AI 内容创作", tools: "Midjourney · 即梦 · SD · ChatGPT", level: 88, desc: "提示词工程、图生图、风格统一、AI+人工协作工作流。" }
  ],

  /* ---------- 页脚寄语 ---------- */
  footer: "用 AI 与数字工具，把关于速度的想象变成作品。"
};

/* 浏览器与 Node 都能读取 */
if (typeof module !== "undefined" && module.exports) module.exports = { SITE };
