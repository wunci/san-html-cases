# San HTML 样例

本仓库维护 San 在不同的使用场景下正确的 HTML 是什么。即 [san-ssr][san-ssr] 应当产出怎样的 HTML，以及 [san 核心][san] 正确反解依赖怎样的 HTML。因此本仓库就是 San HTML 的规范，并由 san 和 san-ssr 两个仓库的 e2e 测试来确保有效。

本仓库的用途包括：

1. [san][san] 核心中的 e2e case 使用本仓库提供的 component, HTML 和 spec（浏览器端运行）。
2. [san-ssr][san-ssr] 中的 e2e case 使用本仓库提供的 component 和 HTML。
3. [san-ssr-target-php][san-ssr-target-php] 中的 e2e case 使用本仓库提供的 component 和 HTML。

## 开发指南

1. spec.js 一个用途是跑 san e2e 测试。因此
    - spec 中的注释标记（比如 `// inject`）不可删除。
    - spec 只是代码片段不能直接跑，不要尝试给本仓库添加 Lint 或 Test。
2. data 优先使用 JSON 格式并命名为 data.json，利用了 JS 特性的（比如 `Date`）使用 date.js 格式。
3. component.ts 用来维护 TypeScript 样例，它们是静态分析的。因此
    - template 必须是 String Literal 或 NoSubstitutionTemplateLiteral。
    - 组件内 Date 功能为 [Ts2Php][ts2php] Date 支持的子集，比如构造函数只接受数字。

[san]: https://github.com/baidu/san
[san-ssr]: https://github.com/baidu/san-ssr
[san-ssr-target-php]: https://github.com/baidu/san-ssr-target-php
[ts2php]: https://github.com/searchfe/ts2php