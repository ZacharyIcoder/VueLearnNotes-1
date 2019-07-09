## 安装

### 兼容性
**Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器**。

### 直接用 ==\<script>== 引入
直接下载并用 ==\<script>== 标签引入，==Vue== 会被注册为一个全局变量。<br/>
**在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!**

* [开发版本](https://vuejs.org/js/vue.js)包含完整的警告和调试模式
* [生产版本](https://vuejs.org/js/vue.min.js)删除了警告，33.30KB min+gzip
### CDN
对于制作原型或学习，你可以这样使用最新版本：
```
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：

```
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
```
如果你使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件：

```
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
</script>
```

你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。

Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。

请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。

