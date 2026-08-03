# SDS Website

## 交付约定

项目交付给其他同事后，`Dockerfile` 作为固定的构建与部署入口。后续提交或推送时，请勿修改 `Dockerfile`；如确有变更需求，需先与维护者确认并完成镜像验证。

## 开发与构建

```bash
npm install
npm run dev
npm run build
```

Vite 会将主页和 `projects/` 下的页面构建到 `dist/`。本地 JavaScript、图片和视频在构建后会使用内容 hash；HTML 会引用新的资源文件名。

## Docker 部署

```bash
./run.sh
```

容器监听本机 `8010`，访问地址为 `http://localhost:8010/design-system/`。

外层 Nginx 将 `/design-system/` 转发至容器时，需要去除此前缀：

```nginx
location ^~ /design-system/ {
    proxy_pass http://127.0.0.1:8010/;
}
```

`proxy_pass` 末尾的 `/` 会把 `/design-system/` 映射为容器内的 `/`。Vite 的 `base` 已设置为 `/design-system/`。
