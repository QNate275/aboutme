# 个人简历网站

这是一个基于纯静态 HTML 开发的个人简历网站，采用响应式设计，支持在各种设备上良好展示。
[在线地址]()

## 技术栈

- HTML5
- CSS3
- JavaScript
- 使用 SVG 图标优化视觉效果

## 特点

- 🎨 简洁现代的设计风格
- 📱 完全响应式布局
- 🚀 快速加载
- 🔒 支持隐私保护（私有部署）

## 部署

本项目使用 Vercel 进行部署：

1. 克隆仓库

```bash
git clone [仓库地址]
```

2. 本地开发

- 直接在浏览器中打开 `index.html` 文件
- 或使用 Live Server 等工具启动本地服务器

3. 部署更新

```bash
git add .
git commit -m "更新内容"
git push
```

推送后 Vercel 会自动部署最新版本

## 项目结构

```
aboutme/
├── index.html      # 主页面
├── style.css       # 样式文件
├── main.js         # JavaScript 文件
└── js/
    └── html2canvas.js  # HTML转图片工具
```

## 维护说明

- 个人信息更新：修改 `index.html` 中对应部分
- 样式调整：修改 `style.css` 文件
- 功能更新：修改 `main.js` 文件

## License

私有项目，保留所有权利
