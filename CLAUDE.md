# SDS Website 项目规则

## 项目信息
- **项目名称**: SDS Website（深圳设计学会官网）
- **GitHub 仓库**: https://github.com/kawibass-crypto/SDS-website
- **GitHub Pages**: https://kawibass-crypto.github.io/SDS-website/
- **本地路径**: `C:\Users\Administrator\Desktop\SDS-website`
- **主分支**: main

## 🚀 推送规则（继承全局规则，以下为项目专属覆盖）

### 推送目标
```
git push origin main
```

### 文件优先级
- `index.html` — 主页，最常修改
- `i18n.js` — 多语言文件
- `assets/` — 图片、视频、CSS、JS 资源
- `projects/*.html` — 子项目页面
- `*.html` — 其他独立页面

### 智能 Commit 消息模板
根据修改的文件自动选择：
- 改了 `index.html` → `"更新首页内容/样式/功能"`
- 改了 `i18n.js` → `"更新多语言文本"`
- 改了 `assets/` → `"更新静态资源"`
- 改了 `projects/` → `"更新项目页面"`
- 改了多个文件 → `"全站更新：<列出主要变更>"`

## 技术栈
- 纯 HTML / CSS / JavaScript（无框架）
- GitHub Pages 托管
- 多语言支持（中/英/西班牙语）

## 推送成功后提示
```
✅ SDS Website 已推送到 GitHub！
🌐 预览: https://kawibass-crypto.github.io/SDS-website/
⏱ 等待 1-2 分钟刷新 GitHub Pages
```
