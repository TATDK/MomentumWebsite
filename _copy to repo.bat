@echo off
echo ============ PAGES  ============
git checkout gh-pages
cp -R _site/* .
rm -rf _site/
touch .nojekyll
git add *
git commit -m "Updated website"
git push -all origin
git checkout source
pause