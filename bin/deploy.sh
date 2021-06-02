cd /home/ubuntu/app/ &&
git pull &&
yarn install --production=false &&
yarn build &&
docker build . -t jay/node-web-app &&
docker kill app &&
docker rm app &&
docker run --name --network=host -p 3000:3000 -d jay/node-web-app &&
echo 'OK!'