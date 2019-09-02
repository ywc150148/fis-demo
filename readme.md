# 打包发布到某个目录

## 第一种方法

发布到当前目录的output路径下

```
fis3 release -d ./output/

```
## 第二种方法 

修改fis-conf.js，打包到绝对路径

```
fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: 'D:/git/fis3/demo-simple/output/'
    })
})
```

执行打包命令打包：

```
fis3 release
```

# 启动本地服务器

查看Web Server 的根目录：

```
fis3 server open
```

打包文件到Web Server 的根目录：

```
fis3 release -d C:/Users/rocher/AppData/Local/.fis3-tmp/www
```

或者(前提是已经设置打包目录)
```
fis3 release
```

启动服务：

```
fis3 server start
```

热更新，浏览器自动刷新：
```
fis3 release -wL
```

关闭服务器: 

ctrl+c

```
fis3 server stop
```
