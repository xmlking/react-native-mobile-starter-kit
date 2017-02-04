DIY for React-Native
====================
Do-it-yourself guide to setup new React Native Mobile app.

### Install Prerequisites
```bash
# install ruby via rvm
rvm install ruby --latest
gem install cocoapods --pre
# install watchman
brew install --HEAD watchman
# install Node (> 7.1.0) with NVM
nvm install node 7.1.0
# install yarn a better package manager then NPM
npm install -g yarn
# install typescript
yarn global add typescript@next
# install react-native-cli
yarn global add react-native-cli
# or react-native-ignite

# check
yarn global ls

npm install native-base --save
# link  Peer Dependencies
react-native link react-native-vector-icons

```

### Project Scaffolding
```bash
# create a new angular project `MobileStarterKit`
react-native init MobileStarterKit
cd MobileStarterKit
```

### Addons
```bash
npm install --save bootstrap@next
npm install --save @ng-bootstrap/ng-bootstrap
npm install --save font-awesome
npm install --save web3

# check
npm list --depth=0
npm outdated
```

### Artifact Scaffolding
```bash
# scaffold `home` module with `routes`
ng g module home --routing   --dry-run

ng g component shared/header --dry-run
ng g component shared/footer --dry-run

# scaffold `dashboard` module and sub components
ng g module dashboard lazy --routing   --dry-run
ng g class dashboard/provider model  --dry-run
ng g interface dashboard/payer model  --dry-run

# scaffold `about` lazy module with `routes`
ng g module about lazy --routing   --dry-run

ng g module 404 lazy --routing   --dry-run

ng g service core/ethereum   --dry-run

ng g module core
```


### Upgrade angular-cli
When upgrading to newer versions for `angular-cli` , always clean install
```bash
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
```

### Tips
```
# with --dry-run, you can see what ng command will generate before actually creating them.
ng g module code --dry-run
# get more help for specific ng command
ng generate module --help
```


