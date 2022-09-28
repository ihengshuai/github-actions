import{_ as a,o as s,c as n,a as e}from"./app.59707145.js";const i={},l=e(`<h1 id="hello" tabindex="-1"><a class="header-anchor" href="#hello" aria-hidden="true">#</a> hello</h1><blockquote><p>sdfa....</p></blockquote><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5...</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token function">mkdir</span> gh-pages-branch
<span class="token builtin class-name">cd</span> gh-pages-branch

<span class="token function">git</span> init
<span class="token assign-left variable">githubUrl</span><span class="token operator">=</span><span class="token string">&quot;https://<span class="token variable">\${OWNER}</span>:<span class="token variable">\${ACCESS_TOKEN}</span>@github.com/<span class="token variable">\${REPOSITORY}</span>&quot;</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> gh-pages

<span class="token builtin class-name">echo</span> <span class="token variable">$BUNDLE_DIST</span>

<span class="token function">cp</span> <span class="token parameter variable">-a</span> <span class="token punctuation">..</span>/<span class="token variable">$BUNDLE_DIST</span>/* <span class="token builtin class-name">.</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;wsm_1105@163.com&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token variable">$OWNER</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;update page&#39;</span>
<span class="token comment"># git push -f origin -q gh-pages</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> <span class="token variable">$githubUrl</span> <span class="token parameter variable">-q</span> gh-pages
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> gh-pages-branch
<span class="token builtin class-name">echo</span> deploy successfully
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://qooapp-images-cors-beta.s3.ap-southeast-1.amazonaws.com/file/2022/9/27/ace74d0b60cc4e38b172ba6ea56821ae.gif" alt=""></p>`,5),t=[l];function c(p,o){return s(),n("div",null,t)}const d=a(i,[["render",c],["__file","index.html.vue"]]);export{d as default};
