#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add .
git commit -m 'deploy'
git push -f git@github.com:AlexKharenko/alexkharenko.github.io.git master:gh-pages
cd -