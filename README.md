# vuex

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 目录
```
|-- node_modules
|-- build
|-- config
|-- src
    |-- assets
    |-- components
        |-- No_Vuex      // Page1.vue  Page2.vue  没有使用 vuex
            |- Page1.vue    
            |- Page2.vue
        |-- State_Getter // Page3.vue  Page4.vue  有使用 vuex  State Getter
            |- Page3.vue    
            |- Page4.vue
        |-- Mutation     // Page5.vue  Page6.vue  有使用 vuex  Mutation
            |- Page5.vue    
            |- Page6.vue
        |-- Action       // Page7.vue  Page8.vue  有使用 vuex  Action
            |- Page7.vue    
            |- Page8.vue
        |-- Module       // Page9.vue  有使用 vuex  Module
            |- Page9.vue    
   |-- router
        |- index.js
   |- App.vue
   |- main.js
|-- static
    |-- css
        |- main.css
|- index.html
|- package.json
|- README.md
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
