# San HTML 样例

本仓库维护 San 在不同的使用场景下正确的 HTML 是什么。即 [san-ssr][san-ssr] 应当产出怎样的 HTML，以及 [san 核心][san] 正确反解依赖怎样的 HTML。因此本仓库就是 San HTML 的规范，并由 san 和 san-ssr 两个仓库的 e2e 测试来确保有效。

本仓库的用途包括：

1. [san][san] 核心中的 e2e case 使用本仓库提供的 component, HTML 和 spec（浏览器端运行）。
2. [san-ssr][san-ssr] 中的 e2e case 使用本仓库提供的 component 和 HTML。
3. [san-ssr-target-php][san-ssr-target-php] 中的 e2e case 使用本仓库提供的 component 和 HTML。

## 目录结构

src 下每个目录表示一个测试样例，每个测试样例包含如下文件：

- spec.js 是 san e2e 测试的代码片段，因此不要尝试 Lint。
- data.json 是 SSR 使用的数据，为可移植尽量使用 json，其他情况（比如 `Date`）使用 date.js、date.php。
- component.js 是组件源代码，SSR 和反解公用。
- component.ts 用来维护 TypeScript 样例，SSR 尤其是 san-ssr-target-php 使用。它是静态分析的，因此有更多要求：
    - template 必须是 String Literal 或 NoSubstitutionTemplateLiteral。
    - 宿主 API 受限，比如 Date API 是 [Ts2Php][ts2php] Date 定义的功能子集。

## 特殊标记

- spec.js 中的注释标记（比如 `// inject`）用来生成 e2e 测试代码，不可删除。
- -ndo 命名的 case 表示渲染参数 noDataOutput 为 true。
- -so 命名的 case 表示编译参数 ssrOnly 为 true。

[san]: https://github.com/baidu/san
[san-ssr]: https://github.com/baidu/san-ssr
[san-ssr-target-php]: https://github.com/searchfe/san-ssr-target-php
[ts2php]: https://github.com/searchfe/ts2php