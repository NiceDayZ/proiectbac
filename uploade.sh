#!bin/bash

git pull;
git add .
git commit -a -m "$1"
git push origin  catalin-branch;
echo "Succesful";