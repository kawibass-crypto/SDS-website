@echo off
chcp 65001 >nul
echo ════════════════════════════════════════
echo    SDS · 一键部署
echo ════════════════════════════════════════

git add .
git push github dev-young
git push github dev-young:main -f
git push origin dev-young 2>nul

if %errorlevel% equ 0 (
    echo ✅ 部署成功！等 1-2 分钟刷新页面
) else (
    echo ❌ 推送失败...
)
pause
