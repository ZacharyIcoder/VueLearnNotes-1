# Vue组件详解

>组件复用

    <div id="components-demo">
        <button-counter></button-counter>
        <button-counter></button-counter>
        <button-counter></button-counter>
    </div>
    <script>
        // 定义一个名为 button-counter 的新组件
        Vue.component('button-counter', {
        data: function () {
            return {
            count: 0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
        })
        new Vue({ el: '#components-demo' })
    </script>

组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 `<button-counter>`。我们可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用。
详见[test](test.html)
> data必须是一个函数

    data: {
        count: 0
    }
不然服用时候改变一个数，所有组件的数值都会改变

    data: function () {
        return {
            count: 0
        }
    }
取而代之的是，一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝。
如果 Vue 没有这条规则，点击一个按钮就可能会像如下代码一样影响到其它所有实例。

>注意

1. data属性一定为function
    
        <script>
            Vue.component('row', {
                data: function(){
                    return {
                        content: 'hello world.'
                    }
                },
                template: '<tr><td>{{content}}</td></tr>'
            });
            var app = new Vue({
                el: "#app"
            });
        </script>
>复用时候作用域互不影响
2.  使用ref操作Dom元素

        <div id="app">
            <div ref="point" @click="hello">hello world</div>
        </div>
        </body>
        <script>
            var app = new Vue({
                el: "#app",
                methods: {
                    hello : function(){
                        alert(this.$refs.point.innerHTML);
                    }
                }
            });
        </script>
>使用ref让div变成一个引用，名称为point，然后在hello()方法中，this.$refs表示当前Vue实例中的所有引用，this.$refs.point这里获取的是<div ref="point">这个DOM对象。
3. Props
以字符串数组形式列出的 prop：
>props: ['title', 'likes', 'isPublished', 'commentIds', 'author']

但是，通常你希望每个 prop 都有指定的值类型。这时，你可以以对象形式列出 prop，这些属性的名称和值分别是 prop 各自的名称和类型：
>props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}

>传递静态或动态 Prop

像这样，你已经知道了可以像这样给 prop 传入一个静态的值：

    <blog-post title="My journey with Vue"></blog-post>
你也知道 prop 可以通过 v-bind 动态赋值，例如：

    <!-- 动态赋予一个变量的值 -->
    <blog-post v-bind:title="post.title"></blog-post>

    <!-- 动态赋予一个复杂表达式的值 -->
    <blog-post
    v-bind:title="post.title + ' by ' + post.author.name"
    ></blog-post>
在上述两个示例中，我们传入的值都是字符串类型的，但实际上任何类型的值都可以传给一个 prop。
- 传入一个数字

        <!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
        <blog-post v-bind:likes="42"></blog-post>

        <!-- 用一个变量进行动态赋值。-->
        <blog-post v-bind:likes="post.likes"></blog-post>
- 传入一个布尔值

        <!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
        <blog-post is-published></blog-post>

        <!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
        <blog-post v-bind:is-published="false"></blog-post>

        <!-- 用一个变量进行动态赋值。-->
        <blog-post v-bind:is-published="post.isPublished"></blog-post>
- 传入一个数组

        <!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
        <blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>

        <!-- 用一个变量进行动态赋值。-->
        <blog-post v-bind:comment-ids="post.commentIds"></blog-post>
- 传入一个对象

        <!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
        <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
        <blog-post
        v-bind:author="{
            name: 'Veronica',
            company: 'Veridian Dynamics'
        }"
        ></blog-post>

        <!-- 用一个变量进行动态赋值。-->
        <blog-post v-bind:author="post.author"></blog-post>
- 传入一个对象的所有属性
如果你想要将一个对象的所有属性都作为 prop 传入，你可以使用不带参数的 v-bind (取代 v-bind:prop-name)。例如，对于一个给定的对象 post：

        post: {
        id: 1,
        title: 'My Journey with Vue'
        }
下面的模板：

        <blog-post v-bind="post"></blog-post>
等价于：

        <blog-post
        v-bind:id="post.id"
        v-bind:title="post.title"
        ></blog-post>

