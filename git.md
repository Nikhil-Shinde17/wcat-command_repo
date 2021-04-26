# upload code to github

## First Time setup
* git config --global user.email "johndoe@gmail.com"
* git config --global user.name "John Doe"
* git config --list  ->  to check the email/name 


## (You need to do always) Hamesha karna hoga
* git init  ->  timeline create for that particular folder
* git add . ->  add all files/folder for tracking
* git commit -m "message"  -> create a savepoint / breakpoint
* git log   ->  to list all the commits


## create a repo on github
* git remote add origin Your  **Repo Name**
* git branch -M main
* git push -u origin main

Always -> git push

To ignore any of folder  ->  create .gitignore file and put file/folder name in it