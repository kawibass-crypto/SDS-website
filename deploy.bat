@echo off
chcp 65001 >nul
echo ════════════════════════════════════════
echo    SDS · 一键部署
echo ════════════════════════════════════════

git add .
git push origin dev-young
git push origin dev-young:main -f

if %errorlevel% equ 0 (
    echo ✅ 部署成功！等 1-2 分钟刷新页面
) else (
    echo ❌ 推送失败...
)
pause
