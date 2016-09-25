# appium-ui
[![Build Status](https://travis-ci.org/bongster/appium-ui.svg?branch=master)](https://travis-ci.org/bongster/appium-ui)

### How to use 

* install dependencies:
	$ cd appium-ui && npm install

* run the app:
	$ DEBUG=appium-ui:* npm start


### Tip

* Add this script in your env for fix up your branch

```
function gitclean() {
    git pull
    git branch --merged master | grep -v "\master" | xargs -n 1 git branch -d
    git remote prune origin
    git gc
}
```
