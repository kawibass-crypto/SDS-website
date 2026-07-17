@echo off
chcp 65001 >nul
echo ════════════════════════════════════════
echo    SDS · 一键部署
echo ════════════════════════════════════════

git add index.html
git commit -m "自动更新页面"
git push

if %errorlevel% equ 0 (
    echo ✅ 部署成功！等 1-2 分钟刷新页面
) else (
    echo ❌ 推送失败，尝试弹出窗口登录...
    git push
)
pause
