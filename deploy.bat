@echo off
chcp 65001 >nul
echo ════════════════════════════════════════
echo    SDS · 一键部署
echo ════════════════════════════════════════

git add .
git commit -m "自动更新页面"
git push origin dev-young
git push origin dev-young:main

if %errorlevel% equ 0 (
    echo ✅ 部署成功！等 1-2 分钟刷新页面
) else (
    echo ❌ 推送失败...
)
pause
