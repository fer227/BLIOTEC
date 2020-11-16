#!/bin/bash
echo "Installing Dependencies"
sudo npm install --global gulp-cli gulp mocha
npm install
npm install --only=dev
echo "you can uninstall doing sudo npm uninstall -g mocha chai gulp gulp-cli"
echo "now you are able to do gulp <task> like: gulp test"
