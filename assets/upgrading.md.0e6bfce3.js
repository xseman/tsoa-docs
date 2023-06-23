import{_ as s,c as a,o as e,V as n}from"./chunks/framework.edf59122.js";const F=JSON.parse('{"title":"Upgrading from tsoa 2.5","description":"","frontmatter":{"sidebarDepth":1},"headers":[],"relativePath":"upgrading.md","filePath":"upgrading.md"}'),o={name:"upgrading.md"},l=n(`<h1 id="upgrading-from-tsoa-2-5" tabindex="-1">Upgrading from tsoa 2.5 <a class="header-anchor" href="#upgrading-from-tsoa-2-5" aria-label="Permalink to &quot;Upgrading from tsoa 2.5&quot;">​</a></h1><p><a href="#breaking-changes">Jump to the breaking changes</a></p><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="support-for-type-aliases" tabindex="-1">Support for type aliases <a class="header-anchor" href="#support-for-type-aliases" aria-label="Permalink to &quot;Support for type aliases&quot;">​</a></h3><p>This release comes with proper support for type alias definitions.</p><p>They can range from simple scenarios</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * A Word shall be a non-empty sting</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">minLength</span><span style="color:#676E95;font-style:italic;"> 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Word</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>to more complex scenarios like unions and intersections of aliases</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IntersectionAlias</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TypeAliasModel1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OneOrTwo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TypeAliasModel1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TypeAliasModel2</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>or even generic type aliases:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GenericAlias</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ForwardGenericAlias</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GenericAlias</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Please note that this means that tsoa does not only generate the specification (OpenAPI v3 and Swagger2*), but will also validate the input against the types including the jsDoc annotations.</p><p>* There may be certain scenarios where we may not be able to generate Swagger 2 from your TypeScript, tsoa will log warnings to infor you about any issues we are aware of.</p><h3 id="support-for-mapped-types" tabindex="-1">Support for mapped types <a class="header-anchor" href="#support-for-mapped-types" aria-label="Permalink to &quot;Support for mapped types&quot;">​</a></h3><blockquote><p>TypeScript 2.1 introduced mapped types, a powerful addition to the type system. In essence, mapped types allow you to create new types from existing ones by mapping over property types. Each property of the existing type is transformed according to a rule that you specify. The transformed properties then make up the new type. - Marius Schulz, <a href="https://mariusschulz.com/blog/mapped-types-in-typescript" target="_blank" rel="noreferrer">https://mariusschulz.com/blog/mapped-types-in-typescript</a></p></blockquote><p>tsoa now works with the ts type checker to resolve mapped types. We will actively try to support all cases, however the test suite for now only covers the utility mapped types typescript ships with, like:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Make all properties in T optional</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Partial</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Make all properties in T required</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Required</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">-?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Make all properties in T readonly</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Readonly</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * From T, pick a set of properties whose keys are in the union K</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Pick</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h3 id="support-for-conditional-types" tabindex="-1">Support for conditional types <a class="header-anchor" href="#support-for-conditional-types" aria-label="Permalink to &quot;Support for conditional types&quot;">​</a></h3><p>As of version 2.8, TypeScript supports conditional types. The syntax is very close to the ternary operator and enables expression of 2 (or more) different types based on a condition. Please refer to the <a href="https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types" target="_blank" rel="noreferrer">TypeScript Handbook</a> for details.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Diff</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Remove types from T that are assignable to U</span></span></code></pre></div><p>tsoa now works with the ts type checker to resolve conditional types. We will actively try to support most cases, however the test suite for now only covers the utility types typescript ships with, like:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Exclude from T those types that are assignable to U</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exclude</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Extract from T those types that are assignable to U</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Extract</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Exclude null and undefined from T</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NonNullable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="support-for-combinations-and-utility-types" tabindex="-1">Support for combinations and utility types <a class="header-anchor" href="#support-for-combinations-and-utility-types" aria-label="Permalink to &quot;Support for combinations and utility types&quot;">​</a></h3><p>The combination of mapped and conditional types allow for powerful utility types like the <code>Omit</code> type.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Construct a type with the properties of T except for those in type K.</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">type Omit&lt;T, K extends keyof any&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;;</span></span></code></pre></div><h3 id="support-for-record-662-eywek" tabindex="-1">Support for <code>Record&lt;&gt;</code> <a href="https://github.com/lukeautry/tsoa/pull/662" target="_blank" rel="noreferrer">#662</a> (<a href="https://github.com/Eywek" target="_blank" rel="noreferrer">Eywek</a>)\` <a class="header-anchor" href="#support-for-record-662-eywek" aria-label="Permalink to &quot;Support for \`Record&lt;&gt;\` [\\#662](https://github.com/lukeautry/tsoa/pull/662) ([Eywek](https://github.com/Eywek))\`&quot;">​</a></h3><h3 id="enums-see-594-for-the-spec-and-599-and-593" tabindex="-1">Enums: See <a href="https://github.com/lukeautry/tsoa/pull/594" target="_blank" rel="noreferrer">#594</a> for the Spec and <a href="https://github.com/lukeautry/tsoa/pull/599" target="_blank" rel="noreferrer">#599</a> and <a href="https://github.com/lukeautry/tsoa/pull/593" target="_blank" rel="noreferrer">#593</a> <a class="header-anchor" href="#enums-see-594-for-the-spec-and-599-and-593" aria-label="Permalink to &quot;Enums: See [\\#594](https://github.com/lukeautry/tsoa/pull/594) for the Spec and [\\#599](https://github.com/lukeautry/tsoa/pull/599) and [\\#593](https://github.com/lukeautry/tsoa/pull/593)&quot;">​</a></h3><h3 id="null-keyword-see-601" tabindex="-1">Null Keyword: See <a href="https://github.com/lukeautry/tsoa/pull/601" target="_blank" rel="noreferrer">#601</a> <a class="header-anchor" href="#null-keyword-see-601" aria-label="Permalink to &quot;Null Keyword: See [\\#601](https://github.com/lukeautry/tsoa/pull/601)&quot;">​</a></h3><h3 id="ability-to-use-a-colon-delimiter-instead-of-bracelets-in-path-602-itamarco" tabindex="-1">Ability to use a colon delimiter instead of bracelets in path <a href="https://github.com/lukeautry/tsoa/pull/602" target="_blank" rel="noreferrer">#602</a>(<a href="https://github.com/itamarco" target="_blank" rel="noreferrer">itamarco</a>) <a class="header-anchor" href="#ability-to-use-a-colon-delimiter-instead-of-bracelets-in-path-602-itamarco" aria-label="Permalink to &quot;Ability to use a colon delimiter instead of bracelets in path [\\#602](https://github.com/lukeautry/tsoa/pull/602)([itamarco](https://github.com/itamarco))&quot;">​</a></h3><h3 id="added-example-support-for-parameters-properties-616-jfrconley" tabindex="-1">added @example support for parameters / properties <a href="https://github.com/lukeautry/tsoa/pull/616" target="_blank" rel="noreferrer">#616</a> (<a href="https://github.com/jfrconley" target="_blank" rel="noreferrer">jfrconley</a>) <a class="header-anchor" href="#added-example-support-for-parameters-properties-616-jfrconley" aria-label="Permalink to &quot;added @example support for parameters / properties [\\#616](https://github.com/lukeautry/tsoa/pull/616) ([jfrconley](https://github.com/jfrconley))&quot;">​</a></h3><h3 id="feat-ignore-class-methods-643-eywek" tabindex="-1">feat: ignore class methods <a href="https://github.com/lukeautry/tsoa/pull/643" target="_blank" rel="noreferrer">#643</a> (<a href="https://github.com/Eywek" target="_blank" rel="noreferrer">Eywek</a>) <a class="header-anchor" href="#feat-ignore-class-methods-643-eywek" aria-label="Permalink to &quot;feat: ignore class methods [\\#643](https://github.com/lukeautry/tsoa/pull/643) ([Eywek](https://github.com/Eywek))&quot;">​</a></h3><h3 id="feat-handle-enum-members-656-eywek" tabindex="-1">feat: handle enum members <a href="https://github.com/lukeautry/tsoa/pull/656" target="_blank" rel="noreferrer">#656</a> (<a href="https://github.com/Eywek" target="_blank" rel="noreferrer">Eywek</a>) <a class="header-anchor" href="#feat-handle-enum-members-656-eywek" aria-label="Permalink to &quot;feat: handle enum members [\\#656](https://github.com/lukeautry/tsoa/pull/656) ([Eywek](https://github.com/Eywek))&quot;">​</a></h3><h3 id="handle-indexed-types-636-eywek" tabindex="-1">Handle indexed types <a href="https://github.com/lukeautry/tsoa/pull/636" target="_blank" rel="noreferrer">#636</a> (<a href="https://github.com/Eywek" target="_blank" rel="noreferrer">Eywek</a>) <a class="header-anchor" href="#handle-indexed-types-636-eywek" aria-label="Permalink to &quot;Handle indexed types [\\#636](https://github.com/lukeautry/tsoa/pull/636) ([Eywek](https://github.com/Eywek))&quot;">​</a></h3><h3 id="handle-typeof-635-eywek" tabindex="-1">handle <code>typeof</code> <a href="https://github.com/lukeautry/tsoa/pull/635" target="_blank" rel="noreferrer">#635</a> (<a href="https://github.com/Eywek" target="_blank" rel="noreferrer">Eywek</a>) <a class="header-anchor" href="#handle-typeof-635-eywek" aria-label="Permalink to &quot;handle \`typeof\` [\\#635](https://github.com/lukeautry/tsoa/pull/635) ([Eywek](https://github.com/Eywek))&quot;">​</a></h3><h3 id="format-support-for-type-aliases-620-jfrconley" tabindex="-1"><code>@format</code> support for type aliases <a href="https://github.com/lukeautry/tsoa/pull/620" target="_blank" rel="noreferrer">#620</a> (<a href="https://github.com/jfrconley" target="_blank" rel="noreferrer">jfrconley</a>) <a class="header-anchor" href="#format-support-for-type-aliases-620-jfrconley" aria-label="Permalink to &quot;\`@format\` support for type aliases [\\#620](https://github.com/lukeautry/tsoa/pull/620) ([jfrconley](https://github.com/jfrconley))&quot;">​</a></h3><h2 id="bug-fixes" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h2><ul><li><p>correctly propagate field name in validateModel <a href="https://github.com/fantapop" target="_blank" rel="noreferrer">@fantapop</a></p></li><li><p>Aliased void Api Response types document 200 response instead of 204 <a href="https://github.com/lukeautry/tsoa/pull/629" target="_blank" rel="noreferrer">#629</a> (<a href="https://github.com/WoH" target="_blank" rel="noreferrer">WoH</a>)</p></li><li><p>ValidateError should extend Error <a href="https://github.com/lukeautry/tsoa/pull/661" target="_blank" rel="noreferrer">#661</a> (<a href="https://github.com/aldenquimby" target="_blank" rel="noreferrer">aldenquimby</a>)</p></li><li><p>Upgrade koa-router to @koa/router, fix type errors <a href="https://github.com/lukeautry/tsoa/pull/646" target="_blank" rel="noreferrer">#646</a> (<a href="https://github.com/michaelbeaumont" target="_blank" rel="noreferrer">michaelbeaumont</a>)</p></li><li><p>Remove object type <a href="https://github.com/lukeautry/tsoa/pull/642" target="_blank" rel="noreferrer">#642</a> (<a href="https://github.com/dimitor115" target="_blank" rel="noreferrer">dimitor115</a>)</p></li><li><p>Fix adding static properties to model definition <a href="https://github.com/lukeautry/tsoa/pull/639" target="_blank" rel="noreferrer">#639</a> (<a href="https://github.com/dimitor115" target="_blank" rel="noreferrer">dimitor115</a>)</p></li></ul><h2 id="breaking-changes" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes" aria-label="Permalink to &quot;Breaking changes&quot;">​</a></h2><h3 id="null-vs-undefined" tabindex="-1">Null vs. undefined <a class="header-anchor" href="#null-vs-undefined" aria-label="Permalink to &quot;Null vs. undefined&quot;">​</a></h3><p>Unless you declare a type to accept <code>null</code>, we will no longer mark your optional properties as <code>nullable: true</code> or <code>x-nullable: true</code>. This applies to validation aswell, so while sending <code>null</code> instead of sending <code>undefined</code> / no properties on an object was fine, now it&#39;s not any more. Sending <code>undefined</code> instead of, i.e. <code>string | null</code> is also rejected by the validation.</p><h3 id="naming" tabindex="-1">Naming <a class="header-anchor" href="#naming" aria-label="Permalink to &quot;Naming&quot;">​</a></h3><p>In order to support type aliases and avoid name clashes, the names for the generated component schemas / definitions may have changed (generic interfaces are affected mostly). If you rely on the component names generated from tsoa, this is a breaking change.</p><p>Because tsoa supported some type aliases in the past and now generated definitions differently, this may break your code. If you relied on tsoa not supporting type aliases properly to avoid issues, this may break your code. Proceed with caution and report issues.</p><h3 id="improve-nested-object-validation" tabindex="-1">Improve nested object validation <a class="header-anchor" href="#improve-nested-object-validation" aria-label="Permalink to &quot;Improve nested object validation&quot;">​</a></h3><p>See <a href="https://github.com/lukeautry/tsoa/pull/574" target="_blank" rel="noreferrer">#574</a> and <a href="https://github.com/lukeautry/tsoa/pull/575" target="_blank" rel="noreferrer">#575</a>. These SHOULD not be breaking changes, but since it affects validation, better safe than sorry.</p><h3 id="change-default-behavior-when-no-host-is-defined" tabindex="-1">Change default behavior when no host is defined: <a class="header-anchor" href="#change-default-behavior-when-no-host-is-defined" aria-label="Permalink to &quot;Change default behavior when no host is defined:&quot;">​</a></h3><p>Explicitly set your host in case you want to have absolute urls. This is a breaking change for those who were using OpenAPI 3, but it actually brings tsoa into parity with how we were handling the <code>host</code> property in Swagger 2. Previously OpenAPI 3 users had to result to passing <code>null</code> which we all felt was strange. Now omitting <code>host</code> will cause tsoa to assume the url should be relative.</p><h3 id="remove-in-fielderrors" tabindex="-1">Remove .. in fieldErrors <a class="header-anchor" href="#remove-in-fielderrors" aria-label="Permalink to &quot;Remove .. in fieldErrors&quot;">​</a></h3><p>When detecting illegal additional properties (if you are using tsoa setting <code>additionalProperties: &#39;throw-on-extras&#39;</code>), the key on the error would contain an additional dot.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">TestModel..additionalProp: : {</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>This is now fixed and the key is <code>TestModel.additionalProp</code>.</p><h3 id="use-spec-instead-of-swagger-tsoa-swagger-is-still-available-for-now-but-will-be-removed-eventually-664-woh" tabindex="-1">Use Spec instead of Swagger (<code>tsoa swagger</code> is still available for now, but will be removed eventually) <a href="https://github.com/lukeautry/tsoa/pull/664" target="_blank" rel="noreferrer">#664</a> (<a href="https://github.com/WoH" target="_blank" rel="noreferrer">WoH</a>) <a class="header-anchor" href="#use-spec-instead-of-swagger-tsoa-swagger-is-still-available-for-now-but-will-be-removed-eventually-664-woh" aria-label="Permalink to &quot;Use Spec instead of Swagger (\`tsoa swagger\` is still available for now, but will be removed eventually) [\\#664](https://github.com/lukeautry/tsoa/pull/664) ([WoH](https://github.com/WoH))&quot;">​</a></h3><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Calling the tsoa command</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> tsoa swagger</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> tsoa spec</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> tsoa swagger-and-routes</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> tsoa spec-and-routes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Manually calling spec generation</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> await generateSwaggerSpec(swaggerConfig, routesConfig, compilerOptions, config.ignore);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> await generateSpec(openapiConfig, compilerOptions, config.ignore);</span></span></code></pre></div><p>tsoa.json:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">swagger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>becomes</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">spec</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>Move shared config to top level <a href="https://github.com/lukeautry/tsoa/pull/628" target="_blank" rel="noreferrer">#628</a> (<a href="https://github.com/WoH" target="_blank" rel="noreferrer">WoH</a>)</li></ul><p>Instead of duplicating config and handling a lot of edge cases, the new config is a lot simpler. Config settings, that impact both routes and spec are now located at the top level of the config object.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">entryFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./tests/fixtures/express/server.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">noImplicitAdditionalProperties</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">silently-remove-extras</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">routes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">spec</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>This means if your settings are different (for example the entry file), you&#39;ll have to call the <code>generateRoutes()</code> and <code>generateSpec()</code> yourself. Note that these methods now have a simpler config aswell:</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">    await generateSwaggerSpec(swaggerConfig, routesConfig, compilerOptions, config.ignore);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">    await generateSpec(openapiConfig, compilerOptions, config.ignore);</span></span></code></pre></div><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">    await generateRoutes(routesConfig, swaggerConfig, compilerOptions, config.ignore);</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">    await generateRoutes(routesConfig, compilerOptions, config.ignore);</span></span></code></pre></div><p>EntryFile and noImplicitAdditionalProperties can now be set on the swagger/routesConfig.</p><p>Also, boolean settings for noImplicitAdditionalProperties have been removed: #503 Valid settings are now: <code>&#39;throw-on-extras&#39; | &#39;silently-remove-extras&#39; | &#39;ignore&#39;</code>, everything else falls back to <code>&#39;ignore&#39;</code>.</p><p><strong>For reference, see the TS interface of the entire config <a href="https://tsoa-community.github.io/reference/interfaces/_tsoa_runtime.config-1.html" target="_blank" rel="noreferrer">here</a></strong></p><h3 id="typescript-unions-are-now-implemented-as-anyof-in-openapi-671" tabindex="-1">TypeScript Unions are now implemented as <code>anyOf</code> in OpenAPI <a href="https://github.com/lukeautry/tsoa/issues/671" target="_blank" rel="noreferrer">#671</a> <a class="header-anchor" href="#typescript-unions-are-now-implemented-as-anyof-in-openapi-671" aria-label="Permalink to &quot;TypeScript Unions are now implemented as \`anyOf\` in OpenAPI [\\#671](https://github.com/lukeautry/tsoa/issues/671)&quot;">​</a></h3>`,67),t=[l];function p(r,c,i,y,h,d){return e(),a("div",null,t)}const D=s(o,[["render",p]]);export{F as __pageData,D as default};
