# Vue入门
这里还是通过一个实例来了解Vue

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vue入门实例</title>
        <!-- <script src="../vue.js"></script> -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            <input type="text" v-model="inputValue"/>
            <button @click="handlerClick">提交</button>
            <hr>
            <ul>
                <li v-for="(item,index) in list" :key="index">{{item}}</li>
            </ul>
            <hr>
            <a :href="baidu">百度</a>
        </div>
        <script>
            var app = new Vue({
            el:"#app",
            data:{
                list:[],
                inputValue:"",
                baidu:"http://www.baidu.com"
            },
            methods: {
                handlerClick:function(){
                        if(!this.inputValue){
                            alert("提交内容为空！");
                            return;
                        }
                        this.list.push(this.inputValue);
                        this.inputValue="";
                }
            }
            });
        </script>
    </body>
    </html>
1. var app = new Vue({})创建一个实例，通过el:"#app"绑定到id为“app”的div内的所有内容。
2. data:{}属性是用来装载数据的，预先定义好数据，例如list和inputValue，百度三个数据对象，即使没有值也需要定义空对象或者undefined，null，Vue是响应式，预先未定义的对象不会被Vue接管。
3. methods:{}是用来定义方法，例如handlerClick方法
4. 指令
    * v-for指令用于遍历list
    * v-model用于数据双向绑定，即input框中数据改变，Vue实例对应绑定的数据也发生改变，Vue实例数据被JS改变，input框也会改变。
    * 还有其他一些指令如v-if请自行查看[Vue官方文档](https://cn.vuejs.org/v2/api/)    
5. @click指令用于绑定事件，这里绑定了handlerClick事件，对应Vue实例methods中的handlerClick。(v-bind):baidu动态地绑定一个或多个特性，或一个组件 prop 到表达式，即将baidu绑定到上面
    * @是v-on:的缩写
    * :是v-bind:的缩写
6. {{}}模板语法，如 {{item}}取出item的值