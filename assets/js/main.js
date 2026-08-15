/* ==========================================================================
 *  作品集 · 渲染逻辑
 *  所有内容都来自 data.js，这里负责把数据渲染成网页。
 *  正常使用无需修改本文件；要增删作品，请编辑 data.js。
 * ========================================================================== */

(function () {
  "use strict";

  /* 如果 data.js 没能正常加载（多半是编辑时引号少了一个、或保存成了错误编码），
     给出一段明确提示，而不是让网页白屏 */
  if (typeof SITE === "undefined" || !SITE || !SITE.profile) {
    document.body.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0b0b0f;color:#f2f2f4;font-family:sans-serif;padding:24px;">
        <div style="max-width:560px;border:1px solid rgba(255,77,0,.5);border-radius:16px;padding:34px;background:#13131b;">
          <div style="font-size:28px;margin-bottom:12px;">⚠️ 网页没能正常加载</div>
          <p style="line-height:1.8;color:#c9c9d1;">原因是 <b>assets/js/data.js</b> 这个文件出错了。最常见的情况：</p>
          <ul style="line-height:2;color:#c9c9d1;padding-left:20px;">
            <li>编辑时某个引号 <b>"</b> 少写了一个（引号必须成对出现）</li>
            <li>用记事本保存时编码选错了（请选 <b>UTF-8</b>）</li>
          </ul>
          <p style="line-height:1.8;color:#c9c9d1;margin-top:8px;">把 data.js 里你改过的部分发给 AI 工具，让它帮你修复即可。</p>
        </div>
      </div>`;
    return;
  }

  const P = SITE.profile;
  const IP = SITE.ip;

  /* ---------- 分类映射 ---------- */
  const CATS = {
    video: "视频剪辑",
    render: "汽车渲染",
    "3d": "三维建模",
    motion: "动效特效",
    design: "修图设计"
  };
  const CAT_ORDER = ["video", "render", "3d", "motion", "design"];

  const $ = (s, el) => (el || document).querySelector(s);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ---------- 首页 ---------- */
  function renderHero() {
    // 网站名称（导航 Logo、页脚 Logo、浏览器标签页标题）
    const brand = P.nameEn || "PORTFOLIO";
    document.querySelectorAll("#logoName, #logoNameFooter").forEach(el => { el.textContent = brand; });
    document.title = brand + " · 数字媒体艺术作品集";
    $("#heroName").innerHTML = `${esc(P.nameEn)}<span class="stroke">.</span><span class="accent">/26</span>`;
    $("#heroRole").innerHTML = `${esc(P.role)} <b>·</b> ${esc(P.focus)}`;
    $("#heroTagline").textContent = P.tagline;
    $("#heroMeta").innerHTML = [
      { n: SITE.works.length + "+", l: "数字作品" },
      { n: IP.expressions.length, l: "款表情包" },
      { n: IP.merch.length, l: "类周边" },
      { n: SITE.skills.length, l: "项核心技能" }
    ].map(s => `<div><div class="num">${s.n}</div>${s.l}</div>`).join("");
  }

  /* ---------- 跑马灯 ---------- */
  function renderMarquee() {
    const items = ["AI 共创", "汽车文化", "数字媒体艺术", "Blender", "PR / 剪映", "After Effects", "Photoshop", "速度与光影", "小驰 DASH"];
    const half = items.map(t => `<span>${esc(t)}<b class="star">✦</b></span>`).join("");
    $("#marqueeTrack").innerHTML = half + half;
  }

  /* ---------- IP 项目 ---------- */
  function renderIp() {
    const visual = `
      <div class="ip-visual reveal">
        <div class="img-wrap">
          <span class="tag-corner">FEATURED · AI IP</span>
          <img src="${IP.image}" alt="${esc(IP.name)} 主形象" loading="lazy" />
        </div>
        <div class="badge">IP 形象<br/><b>DASH</b> · 小驰</div>
        <p class="ip-caption">${esc(IP.imageCaption)}</p>
      </div>`;

    const stats = [
      { n: IP.process.length, l: "步制作流程" },
      { n: IP.expressions.length, l: "款表情包" },
      { n: IP.merch.length, l: "类周边延展" },
      { n: IP.meaning.length, l: "层意义" }
    ].map(s => `<div class="stat"><div class="n"><em>${s.n}</em></div><div class="l">${s.l}</div></div>`).join("");

    const text = `
      <div class="ip-text reveal d1">
        <h3 class="ip-name">${esc(IP.nameEn)}<span class="accent">.</span></h3>
        <p class="ip-slogan">${esc(IP.slogan)}</p>
        <div class="ip-intro">${IP.intro.map(p => `<p>${esc(p)}</p>`).join("")}</div>
        <div class="ip-stats">${stats}</div>
      </div>`;

    $("#ipHero").innerHTML = visual + text;
  }

  function renderExpressions() {
    const grid = IP.expressions.map((e, i) => `
      <div class="exp-item reveal d${i % 4}">
        <div class="img-wrap"><img src="${e.img}" alt="${esc(e.name)}表情包" loading="lazy" /></div>
        <div class="name">${esc(e.name)}</div>
        <div class="text">${esc(e.text)}</div>
      </div>`).join("");
    $("#ipExpressions").innerHTML = `
      <div class="sub-head reveal"><h3 class="h">表情包 <span class="accent">/ STICKERS</span></h3><span class="tag">系列表情</span></div>
      <div class="exp-grid">${grid}</div>`;
  }

  function renderMerch() {
    const grid = IP.merch.map((m, i) => `
      <div class="merch-item reveal d${i % 4}">
        <div class="img-wrap">
          <img src="${m.img}" alt="${esc(m.name)}" loading="lazy" />
          
        </div>
        <div class="name">${esc(m.name)}</div>
        <div class="desc">${esc(m.desc)}</div>
      </div>`).join("");
    $("#ipMerch").innerHTML = `
      <div class="sub-head reveal"><h3 class="h">周边产品 <span class="accent">/ MERCH</span></h3><span class="tag">IP 延展产品</span></div>
      <div class="merch-grid">${grid}</div>`;
  }

  const PROC_ICONS = ["💡", "✍️", "🎨", "✅", "🧩", "🚀"];
  function renderProcess() {
    const cards = IP.process.map((p, i) => `
      <div class="card proc-card reveal d${i % 3}">
        <span class="no">${esc(p.step)}</span>
        <div class="ico">${PROC_ICONS[i] || "✦"}</div>
        <h4>${esc(p.title)}</h4>
        <p>${esc(p.desc)}</p>
      </div>`).join("");
    $("#ipProcess").innerHTML = `
      <div class="sub-head reveal"><h3 class="h">制作流程 <span class="accent">/ PROCESS</span></h3><span class="tag">它怎么来的</span></div>
      <div class="process">${cards}</div>`;
  }

  const AI_ICONS = ["🧠", "🎯", "⚡", "🚪"];
  const MEAN_ICONS = ["✊", "🤝", "🏁"];
  function renderInsight() {
    const solutions = IP.aiSolutions.map((s, i) => `
      <div class="card ai-card reveal d${i % 2}">
        <div class="ico">${AI_ICONS[i] || "✦"}</div>
        <h4>${esc(s.title)}</h4>
        <p>${esc(s.desc)}</p>
      </div>`).join("");
    const meanings = IP.meaning.map((m, i) => `
      <div class="card ai-card reveal d${i % 2}">
        <div class="ico">${MEAN_ICONS[i] || "✦"}</div>
        <h4>${esc(m.title)}</h4>
        <p>${esc(m.desc)}</p>
      </div>`).join("");
    $("#ipInsight").innerHTML = `
      <div class="sub-head reveal"><h3 class="h">AI 帮我解决了什么 <span class="accent">/ WHY AI</span></h3></div>
      <div class="duo-cards">${solutions}</div>
      <div class="sub-head reveal"><h3 class="h">这个形象的意义 <span class="accent">/ MEANING</span></h3></div>
      <div class="duo-cards">${meanings}</div>`;
  }

  /* ---------- 作品集 ---------- */
  let activeCat = "all";
  function renderFilters() {
    const btn = (key, label) => `<button class="filter-btn ${activeCat === key ? "active" : ""}" data-cat="${key}">${label}</button>`;
    const cats = [`<button class="filter-btn ${activeCat === "all" ? "active" : ""}" data-cat="all">全部</button>`];
    CAT_ORDER.forEach(k => cats.push(btn(k, CATS[k])));
    $("#filterBar").innerHTML = cats.join("");
    $("#filterBar").querySelectorAll(".filter-btn").forEach(b => {
      b.addEventListener("click", () => {
        activeCat = b.dataset.cat;
        renderFilters();
        renderWorks();
      });
    });
  }

  function workCard(w, i) {
    return `
      <article class="card work-card reveal d${i % 3}" data-id="${w.id}">
        <div class="cover">
          <img src="${w.cover}" alt="${esc(w.title)}" loading="lazy" />
        </div>
        <div class="body">
          <div class="meta">
            <span class="cat">${CATS[w.category] || w.category}</span>
            <span class="year">${esc(w.year)}</span>
            ${w.featured ? '<span class="cat" style="border-color:rgba(42,183,255,.4);color:#2ab7ff;">★ 精选</span>' : ""}
          </div>
          <h3>${esc(w.title)}</h3>
          <div class="tags">${w.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
        </div>
      </article>`;
  }

  function renderWorks() {
    const list = SITE.works.filter(w => activeCat === "all" || w.category === activeCat);
    $("#worksGrid").innerHTML = list.length
      ? list.map(workCard).join("")
      : `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:60px 0;">这个分类还没有作品，快去 data.js 里添加吧～</p>`;
    $("#worksGrid").querySelectorAll(".work-card").forEach(card => {
      card.addEventListener("click", () => openModal(card.dataset.id));
    });
    bindReveals();
  }

  /* ---------- 作品详情弹窗 ---------- */
  function openModal(id) {
    const w = SITE.works.find(x => x.id === id);
    if (!w) return;
    // video 字段只写文件名时，自动补全 assets/video/ 目录
    const videoSrc = w.video && (w.video.indexOf("assets/") === 0 || /^https?:\/\//.test(w.video))
      ? w.video
      : "assets/video/" + w.video;
    const media = w.video
      ? `<video src="${videoSrc}" controls autoplay muted loop></video>`
      : `<img src="${w.cover}" alt="${esc(w.title)}" />`;
    const note = (w.category === "video" && !w.video)
      ? `<div class="modal-video-note">🎬 这是视频作品位：把你的视频文件放进 <b>assets/video/</b> 文件夹，然后在 <b>data.js</b> 里该作品的 <b>video</b> 字段填入文件名，这里就会变成视频播放器。</div>`
      : "";
    $("#modalMedia").innerHTML = `<span class="tag-corner">${CATS[w.category] || w.category}</span>${media}`;
    $("#modalBody").innerHTML = `
      <h3>${esc(w.title)}</h3>
      <div class="meta">
        <span>🗓 ${esc(w.year)}</span>
        ${w.tags.map(t => `<span>${esc(t)}</span>`).join("")}
      </div>
      <p class="desc">${esc(w.description)}</p>
      <p class="tools-line">🛠 使用工具：<b>${w.tools.map(esc).join(" · ")}</b></p>
      ${note}`;
    $("#modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    $("#modal").classList.remove("open");
    document.body.style.overflow = "";
    const v = $("video", $("#modalMedia"));
    if (v) v.pause();
  }

  /* ---------- 技能 ---------- */
  function renderSkills() {
    $("#skillsGrid").innerHTML = SITE.skills.map((s, i) => `
      <div class="card skill-card reveal d${i % 2}">
        <div class="top"><h4>${esc(s.name)}</h4><span class="pct">${s.level}%</span></div>
        <div class="tools">${esc(s.tools)}</div>
        <p>${esc(s.desc)}</p>
        <div class="bar"><i data-level="${s.level}"></i></div>
      </div>`).join("");
  }

  /* ---------- 关于 ---------- */
  function renderAbout() {
    $("#aboutText").innerHTML = `
      <h3>你好，我是 ${esc(P.name)}</h3>
      ${P.bio.map(p => `<p>${esc(p)}</p>`).join("")}
      <div class="about-facts">
        <div class="fact"><div class="k">📍 坐标</div><div class="v">${esc(P.location)}</div></div>
        <div class="fact"><div class="k">🎓 专业</div><div class="v">${esc(P.role)}</div></div>
        <div class="fact"><div class="k">🎯 方向</div><div class="v">${esc(P.focus)}</div></div>
        <div class="fact"><div class="k">📁 作品</div><div class="v">${SITE.works.length}+ 件</div></div>
      </div>`;
  }

  /* ---------- 联系 ---------- */
  function renderContact() {
    const chips = P.socials.map(s => `<a class="social-chip" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)} <span style="color:var(--muted-2)">${esc(s.handle)}</span></a>`).join("");
    $("#contactBox").innerHTML = `
      <h3 class="big">一起创造 <span class="accent">速度与想象</span></h3>
      <p>如果你有合作、项目或者只是想聊聊汽车和 AI，欢迎随时找我。</p>
      <a class="contact-email" href="mailto:${esc(P.email)}">${esc(P.email)}</a>
      <p style="font-size:13px;color:var(--muted-2);">微信：${esc(P.wechat)}</p>
      <div class="social-row">${chips}</div>`;
  }

  /* ---------- 页脚 ---------- */
  function renderFooter() {
    $("#footerText").innerHTML = `© ${new Date().getFullYear()} ${esc(P.name)} · ${esc(SITE.footer)}`;
  }

  /* ---------- 滚动显现 ---------- */
  function bindReveals() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          // 技能条动画
          en.target.querySelectorAll(".bar i").forEach(b => { b.style.width = b.dataset.level + "%"; });
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
  }

  /* ---------- 导航 ---------- */
  function bindNav() {
    const nav = $("#nav");
    window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

    // 当前区块高亮
    const links = [...document.querySelectorAll(".nav-links a")].filter(a => !a.classList.contains("nav-cta"));
    const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);
    const onScroll = () => {
      const pos = window.scrollY + 120;
      let current = sections[0];
      sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec; });
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current.id));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 移动端菜单
    const burger = $("#navBurger");
    const menu = $("#navLinks");
    burger.addEventListener("click", () => {
      menu.classList.toggle("open");
      burger.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.classList.remove("open");
    }));
  }

  /* ---------- 弹窗事件 ---------- */
  function bindModal() {
    $("#modalClose").addEventListener("click", closeModal);
    $("#modal").addEventListener("click", (e) => { if (e.target === $("#modal")) closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }

  /* ---------- 启动 ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderMarquee();
    renderIp();
    renderExpressions();
    renderMerch();
    renderProcess();
    renderInsight();
    renderFilters();
    renderWorks();
    renderSkills();
    renderAbout();
    renderContact();
    renderFooter();
    bindReveals();
    bindNav();
    bindModal();
  });
})();
