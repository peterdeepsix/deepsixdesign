# docker

docker-compose up --build

# git user

git config --global user.email "peter@deepsixdesign.com"
git config --global user.name "Peter Arnold"

# node latest from scratch

curl https://www.npmjs.com/install.sh | sudo sh

# gcloud local builder

cloud-build-local --config=cloudbuild.yaml --dryrun=false --push .
