@echo off
echo ============ JEKYLL ============
jekyll
echo ============ PAGES  ============
checkout gh-pages
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
git add *
git commit -m "Updated website"
git push -all origin
git checkout source
pause