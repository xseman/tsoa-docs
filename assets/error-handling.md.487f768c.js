import{_ as s,c as n,o as a,V as l}from"./chunks/framework.edf59122.js";const o="/assets/errors-server.06a3af98.png",p="/assets/errors-client.e871ae56.png",e="/assets/errors-json-client.a72b4976.png",t="/assets/errors-json-server.58dc84b1.png",r="/assets/err-422-swui.25b6edbd.png",g=JSON.parse('{"title":"Error Handling","description":"","frontmatter":{"title":"Error Handling","lang":"en-US"},"headers":[],"relativePath":"error-handling.md","filePath":"error-handling.md"}'),c={name:"error-handling.md"},y=l('<h1 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error Handling&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">COMPATIBILITY NOTE</p><p>This guide requires Node.js &gt;= 8 and will target <a href="https://expressjs.com" target="_blank" rel="noreferrer">express</a>. We currently recommend using <a href="https://yarnpkg.com/en/" target="_blank" rel="noreferrer">Yarn</a>, npm should work but was not tested. This guide assumes you followed the <a href="./getting-started.html">getting started guide</a> or have a similar setup.</p></div><p>As you may have noticed after following all the steps from the <a href="./getting-started.html">getting started guide</a>, our server does not allow for invalid parameters, but the response isn&#39;t very ideal yet.</p><p><img src="'+o+'" alt="Current Error Response"></p><p>For the Client, it looks something like this:</p><p><img src="'+p+`" alt="Client Error Response"></p><h2 id="setting-up-error-handling" tabindex="-1">Setting up error handling <a class="header-anchor" href="#setting-up-error-handling" aria-label="Permalink to &quot;Setting up error handling&quot;">​</a></h2><h3 id="handling-validation-errors" tabindex="-1">Handling Validation Errors <a class="header-anchor" href="#handling-validation-errors" aria-label="Permalink to &quot;Handling Validation Errors&quot;">​</a></h3><p>Let&#39;s first make sure that, whenever the Client triggers a Validation Error, instead of printing the stack trace, instead we show a properly formatted json response.</p><p>At the end of our <code>app.ts</code>, after the call to <code>RegisterRoutes(app)</code>, we&#39;ll add a global express error handler:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> express</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ExResponse</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Request</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ExRequest</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">NextFunction</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ValidateError</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tsoa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">errorHandler</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExRequest</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExResponse</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">next</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NextFunction</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExResponse</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ValidateError</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">warn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Caught Validation Error for </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fields</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">status</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">422</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Validation Failed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      details</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">fields</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">status</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">500</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Internal Server Error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Now, the same request will respond like this:</p><p><img src="`+e+'" alt="Client Error with handler"></p><p>Additionally, our console will show:</p><p><img src="'+t+`" alt="Server Error with handler"></p><h3 id="handling-missing-routes" tabindex="-1">Handling missing routes <a class="header-anchor" href="#handling-missing-routes" aria-label="Permalink to &quot;Handling missing routes&quot;">​</a></h3><p>In order to handle missing urls more gracefully, we can add a &quot;catch-all&quot; route handler:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// app.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> express</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ExResponse</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Request</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ExRequest</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">NextFunction</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">RegisterRoutes</span><span style="color:#A6ACCD;">(app)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">notFoundHandler</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">_req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExResponse</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">status</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">404</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Not Found</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">errorHandler</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span></code></pre></div><h2 id="specifying-error-response-types-for-openapi" tabindex="-1">Specifying error response types for OpenAPI <a class="header-anchor" href="#specifying-error-response-types-for-openapi" aria-label="Permalink to &quot;Specifying error response types for OpenAPI&quot;">​</a></h2><p>If you check out the Documentation endpoint, you&#39;ll notice that we don&#39;t have any documentation for our Errors yet. Since TypeScript does not check throwing Errors, tsoa can&#39;t infer the type of response we&#39;re sending out in these cases.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Please note that <code>@Response</code> has to be the tsoa import and can not currently be renamed (i.e. <code>import {Response as TsoaResponse} from &quot;tsoa&quot;</code>)</p></div><p>However, we have a way for you to manually specify these returns:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Body</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Controller</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Post</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Route</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Response</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">SuccessResponse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tsoa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">User</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UsersService</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UserCreationParams</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./usersService</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ValidateErrorJSON</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Validation failed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> [</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Route</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UsersController</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Controller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// more code here</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Response</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ValidateErrorJSON</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">422</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Validation Failed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">SuccessResponse</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">201</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Created</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// Custom success response</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Post</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">createUser</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Body</span><span style="color:#A6ACCD;">() </span><span style="color:#A6ACCD;font-style:italic;">requestBody</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserCreationParams</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setStatus</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">201</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// set return status 201</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">UsersService</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">requestBody</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>This should make our docs show something like this:</p><p><img src="`+r+`" alt="SwaggerUI showing our 422 Response"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>OpenAPI allows matching status codes such as &#39;2xx&#39; or matching all codes using &#39;default&#39;. tsoa will support this:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Response</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ErrorResponse</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Unexpected error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Response</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">public async </span><span style="color:#82AAFF;">getResponse</span><span style="color:#A6ACCD;">(): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">TestModel</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new </span><span style="color:#F07178;">ModelService</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">.</span><span style="color:#F07178;">getModel</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div><h2 id="typechecked-alternate-responses" tabindex="-1">Typechecked alternate responses <a class="header-anchor" href="#typechecked-alternate-responses" aria-label="Permalink to &quot;Typechecked alternate responses&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This section applies to tsoa &gt;=3.1</p></div><p>In recent versions of tsoa, we have the option to inject a framework-agnostic responder function into our function that we can call to formulate a response that does not comply with the return type of our controller method/status code and headers (which is used for the success response). This is especially useful to reply with an error response without the risk of type mismatches associated with throwing errors. In order to inject one/more responders, we can use the <code>@Res()</code> decorator:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Route</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Controller</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Get</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Query</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TsoaResponse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tsoa</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Route</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/greeting</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GreetingsController</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Controller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">notFoundResponse</span><span style="color:#676E95;font-style:italic;"> The responder function for a not found response</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">greet</span><span style="color:#89DDFF;">(@</span><span style="color:#82AAFF;">Query</span><span style="color:#A6ACCD;">() </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Res</span><span style="color:#A6ACCD;">() </span><span style="color:#A6ACCD;font-style:italic;">notFoundResponse</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TsoaResponse</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">404</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">reason</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">notFoundResponse</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">404</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> reason</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">We don&#39;t know you yet. Please provide a name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span></code></pre></div>`,30),F=[y];function D(i,C,A,d,u,h){return a(),n("div",null,F)}const m=s(c,[["render",D]]);export{g as __pageData,m as default};
