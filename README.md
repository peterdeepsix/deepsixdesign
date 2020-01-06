# docker dev environment

docker-compose up --build

# update all packages

npm install -g npm-check-updates
ncu -u
npm update
npm install

# git user set

git config --global user.email "peter@deepsixdesign.com"
git config --global user.name "Peter Arnold"

# node latest from scratch

curl https://www.npmjs.com/install.sh | sudo sh

# gcloud local builder for dev

cloud-build-local --config=cloudbuild.yaml --dryrun=false --push .

# colors

#FF1654
#247BA0
#70C1B3
#B2DBBF
#F3FFBD
