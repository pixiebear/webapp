set -e

echo "Deploying application ..."

set -e

echo "Deploying application ..."

git pull origin main

rm -r /home/pixijccn/public_html && cp -a /home/pixijccn/app/build/. /home/pixijccn/public_html

echo "Application deployed!"
