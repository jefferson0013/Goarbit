param(
   [string]$directory
)

cd $directory

git add .
git commit -m "Deploy"
npm run build
npm run deploy
git push
