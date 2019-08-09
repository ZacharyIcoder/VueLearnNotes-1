[安装Vue-cli](https://cli.vuejs.org/zh/guide/installation.html)
###安装

    npm install -g @vue/cli
    # OR
    yarn global add @vue/cli

###检查
    vue --version

###创建一个项目
    vue create todolist
你会被提示选取一个 preset。你可以选默认的包含了基本的 Babel + ESLint 设置的 preset，也可以选“手动选择特性”来选取需要的特性。
![](./images/1.png)
这个默认的设置非常适合快速创建一个新项目的原型，而手动设置则提供了更多的选项，它们是面向生产的项目更加需要的。
![](./images/2.png)
vue create 命令有一些可选项，你可以通过运行以下命令进行探索：

    vue create --help
    用法：create [options] <app-name>

    创建一个由 `vue-cli-service` 提供支持的新项目
    选项：

    -p, --preset <presetName>       忽略提示符并使用已保存的或远程的预设选项
    -d, --default                   忽略提示符并使用默认预设选项
    -i, --inlinePreset <json>       忽略提示符并使用内联的 JSON 字符串预设选项
    -m, --packageManager <command>  在安装依赖时使用指定的 npm 客户端
    -r, --registry <url>            在安装依赖时使用指定的 npm registry
    -g, --git [message]             强制 / 跳过 git 初始化，并可选的指定初始化提交信息
    -n, --no-git                    跳过 git 初始化
    -f, --force                     覆写目标目录可能存在的配置
    -c, --clone                     使用 git clone 获取远程预设选项
    -x, --proxy                     使用指定的代理创建项目
    -b, --bare                      创建项目时省略默认组件中的新手指导信息
    -h, --help                      输出使用帮助信息

### 使用图形化界面
你也可以通过 vue ui 命令以图形化界面创建和管理项目：

    vue ui

![](./images/3.png)

### 启动服务
需要到todolist目录cmd
    npm run serve
    # OR
    yarn serve
如果你可以使用 npx (最新版的 npm 应该已经自带)，也可以直接这样调用命令：

    npx vue-cli-service serve

