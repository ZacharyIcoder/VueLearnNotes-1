#Vue组件
***
## Vue全局组件
老规矩来段代码测试，可以赋值代码测试一下哦！

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vue全局组件</title>
        
        <!-- 引入vue.js -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            <input v-model="inputValue"/>
            <button @click="handlerClick">提交</button>
            <hr>
            <ul>
                <!-- 调用全局组件global,将全局组件global的content与item数据绑定，index与index绑定 -->
                <global v-for="(item,index) in list" :key="index" :index="index" :content="item" ></global>
            </ul>
        </div>
        <script>
            // 定义全局组件,每一个组件都是一个vue实例
            Vue.component('global', {
                props: ['content','index'],//组件属性
                template:'<li>{{content-index}}</li>'//模板获取content-index的值
            });
            var app = new Vue({
                el:"#app",
                data:{
                        list:[],
                        inputValue:""
                },
                methods: {
                        handlerClick:function(){
                                if(!this.inputValue){
                                    alert("输入为空")
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
代码主要是测试全局组件调用:
#### 定义全局组件
    Vue.component('global', {
                props: ['content','index'],//组件属性
                template:'<li>{{content-index}}</li>'
            });
此处global为组件名称，props为属性，template为模板，组件定义了两个属性分别为content，index，模板为一个`<li>`标签，计算content-index的值,可以在vue根实例(app)中调用，此处的全局组件也是一个vue实例，根实例(app)为父组件，global为子组件。
1. global组件可以以`<global>`的方式在html中使用，如果你的组件名是GlobalCompontent这样的形势可以使用`<global-compontent>`，即大写可以转换为小写，第二个大写字母转小写后必须加上-前缀。
2. :content和:index分别绑定item(list中每个元素的值)和index(当前的item的索引,即下标),**:** 等价于**v-bind:**。
3. props用于向子组件(此处全局组件global)传递数据，content和index分别接收了:content的item、:index的index.
4. template定义了模板(通常是一段HTML+Vue实例传过来的值，如content和index)
>父组件(接管`<div id='app'>`的Vue实例)向子组件(`<global>`)传递值,父组件中使用子组件。
***
## Vue局部组件
将上面的代码改造使用局部组件

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vue局部组件</title>
        <!-- 引入vue.js -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            <input v-model="inputValue"/>
            <button @click="handlerClick">提交</button>
            <hr>
            <ul>
                <!-- 调用局部组件local,将局部组件local的content与item数据绑定，index与index绑定 -->
                <local v-for="(item,index) in list" :key="index" :index="index" :content="item" @delete="handlerDelete" ></local>
            </ul>
        </div>
        <script>
            //局部组件
            var local = {
                props: ['content','index'],//组件属性
                template:'<li @click="localHandlerClick">{{content-index}}</li>',//模板
                methods:{
                    localHandlerClick:function(){
                        //触发当前实例上的事件(delete)。附加参数(this.index)都会传给监听器回调。
                        this.$emit('delete', this.index);
                    }
                }
            };
            var app = new Vue({
            el:"#app",
            components:{//调用局部组件，名为local，值为local对象
                'local':local
            },
            data:{
                    list:[],
                    inputValue:""
            },
            methods: {
                    handlerClick:function(){
                            if(!this.inputValue){
                                alert("输入为空");
                                return;
                            }
                            this.list.push(this.inputValue);
                            this.inputValue="";
                    },
                    handlerDelete:function(index){
                        this.list.splice(index, 1);//删除数组索引index开始，1个元素
                    }
            }
            });
        </script>
    </body>
    </html>
代码主要测试局部组件调用:
#### 定义局部组件
    var local = {
        props: ['content','index'],//组件属性
        template:'<li>{{content-index}}</li>',//模板
        methods:{
                localHandlerClick:function(){
                    //触发当前实例上的事件(delete)。附加参数(this.index)都会传给监听器回调。
                    this.$emit('delete', this.index);
                }
            }
    };
#### 调用局部组件
    components:{//调用局部组件，名为local，值为local对象
        'local':local
    },
这里定义一个js对象local，在Vue实例中使用引用`components:{'local':local}`引入该对象(local)，名称为`local`。

1. 局部组件local以`<local>`的方式使用
2. 在子组件local中定义了一个方法 `localHandlerClick`，点击子组件，触发方法，这里通过`this.$emit('delete', this.index)`向父组件传递一个事件，事件名为`delete`，该事件传递了一个参数`this.index`。
3. 父组件监听子组件的`@delete="handlerDelete"`，子组件`delete`事件触发，传递到父组件触发`@delete`调用方法`handlerDelete`。这就是子组件向父组件传值。
4. [$emit](https://cn.vuejs.org/v2/api/#vm-emit)事件API

<hr>

<div>

  <span style="float:left;">[返回顶部](#top)</span><span style="float:right;">[返回首页](../README.md) </span>

</div>

