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

1. is
    





