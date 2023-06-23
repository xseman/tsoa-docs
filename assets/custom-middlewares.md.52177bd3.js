import{_ as s,c as e,o as a,V as o}from"./chunks/framework.edf59122.js";const u=JSON.parse('{"title":"Custom Middlewares","description":"","frontmatter":{},"headers":[],"relativePath":"custom-middlewares.md","filePath":"custom-middlewares.md"}'),n={name:"custom-middlewares.md"},t=o(`<h1 id="custom-middlewares" tabindex="-1">Custom Middlewares <a class="header-anchor" href="#custom-middlewares" aria-label="Permalink to &quot;Custom Middlewares&quot;">​</a></h1><p>The <code>@Middlewares</code> decorator is used to apply custom middleware to an endpoint in your TypeScript code. This middleware intercepts incoming HTTP requests before they reach the endpoint and allows you to perform additional operations or modifications. It provides support for Express, Koa, and Hapi middlewares.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">customMiddleware</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExpRes</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">next</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NextFunction</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Perform any necessary operations or modifications</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/custom-middleware</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Middlewares</span><span style="color:#A6ACCD;">(customMiddleware)</span></span>
<span class="line"><span style="color:#A6ACCD;">async </span><span style="color:#82AAFF;">exampleGetEndpoint</span><span style="color:#A6ACCD;">(@</span><span style="color:#82AAFF;">Request</span><span style="color:#A6ACCD;">() req: Req): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">Custom middleware</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">);</span></span>
<span class="line"><span style="color:#F07178;">}</span></span></code></pre></div><h2 id="execution-flow" tabindex="-1">Execution Flow <a class="header-anchor" href="#execution-flow" aria-label="Permalink to &quot;Execution Flow&quot;">​</a></h2><p>When an HTTP request is made to the endpoint decorated with <code>@Middlewares</code>, the execution flow is as follows:</p><p>The request first goes through the custom middleware function specified in the <code>@Middlewares</code> decorator. Inside the middleware function, you can perform any necessary operations or modifications on the request or response objects.</p><p>After completing the middleware logic, you must call the <code>next()</code> function to pass the request to the next middleware or the endpoint itself.</p><p>Finally, the request reaches the exampleGetEndpoint method, where you can handle the request and provide the appropriate response.</p><p>It&#39;s important to note that the order of the decorators and middlewares matters. If multiple middlewares are specified, they are executed in the order they are applied.</p>`,10),l=[t];function p(r,c,i,d,y,F){return a(),e("div",null,l)}const D=s(n,[["render",p]]);export{u as __pageData,D as default};
