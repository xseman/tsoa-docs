import{_ as e,c as t,o as a,V as i}from"./chunks/framework.edf59122.js";const f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"introduction.md","filePath":"introduction.md"}'),o={name:"introduction.md"},r=i('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>tsoa is a framework with integrated OpenAPI compiler to build Node.js serve-side applications using TypeScript. It can target express, hapi, koa and more frameworks at runtime. tsoa applications are type-safe by default and handle runtime validation seamlessly.</p><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><ul><li>TypeScript controllers and models as the single source of truth for your API</li><li>A valid OpenAPI (formerly Swagger) spec (2.0 or 3.0) is generated from your controllers and models, including: <ul><li>Paths (e.g. GET /Users)</li><li>Definitions based on TypeScript interfaces (models)</li><li>Parameters/model properties marked as required or optional based on TypeScript (e.g. myProperty?: string is optional in the OpenAPI spec)</li><li>jsDoc supported for object descriptions (most other metadata can be inferred from TypeScript types)</li></ul></li><li>Routes are generated for middleware of choice <ul><li>Express, Hapi, and Koa currently supported, other middleware can be supported using a simple handlebars template</li><li>Seamless runtime validation</li></ul></li></ul><h2 id="philosophy" tabindex="-1">Philosophy <a class="header-anchor" href="#philosophy" aria-label="Permalink to &quot;Philosophy&quot;">​</a></h2><ul><li>Rely on TypeScript type annotations to generate API metadata if possible</li><li>If regular type annotations aren&#39;t an appropriate way to express metadata, use decorators</li><li>Use jsdoc for pure text metadata (e.g. endpoint descriptions)</li><li>Minimize boilerplate</li><li>Models are best represented by interfaces (pure data structures), but can also be represented by classes</li><li>Runtime validation of tsoa should behave as closely as possible to the specifications that the generated OpenAPI 2/3 schema describes. Any differences in validation logic are clarified by logging warnings during the generation of the OpenAPI Specification (OAS) and/or the routes. <ul><li>Please note that by enabling OpenAPI 3 you minimize the chances of divergent validation logic since OpenAPI 3 has a more expressive schema syntax.</li></ul></li></ul>',6),n=[r];function s(l,d,p,c,u,h){return a(),t("div",null,n)}const y=e(o,[["render",s]]);export{f as __pageData,y as default};
