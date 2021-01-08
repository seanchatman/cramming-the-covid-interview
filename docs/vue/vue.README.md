# Vue

## Cheatsheets

- [VUE ESSENTIALS CHEAT SHEET by Vue Mastery](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf)
- [Vue.js cheatsheet by DEVHINTS.IO](Vue.js cheatsheet)
- [Vue cheat sheet 1 by Adnan Babakan](new Vue({
  el: '...',
  data: {
  checkedNames: []
  }
  }))

### \# Text

```html
<span>Message: {{ msg }}</span>
```

### \# Raw HTML

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

### \# Attributes

```html
<div :id="dynamicId"></div>
<button :disabled="isButtonDisabled">Button</button>
<a :href="baseURL + '/post/' + postId">Read more</a>
```

### \# Using JavaScript Expressions

```html
{{ number + 1 }} {{ ok ? 'YES' : 'NO' }} {{ message.split('').reverse().join('')
}}

<div v-bind:id="'list-' + id"></div>
```

### \# Text

```html
<span>Message: {{ msg }}</span>
```

### \# Text

```html
<span>Message: {{ msg }}</span>
```

# VUE ESSENTIALS CHEAT SHEET

```html
<div id="app">
  <p>I have a {{ product }}</p>
  <p>{{ product + 's' }}</p>
  <p>{{ isWorking ? 'YES' : 'NO' }}</p>
  <p>{{ product.getSalePrice() }}</p>
</div>

LIST RENDERING

<li v-for="item in items" :key="item.id">{{ item }}</li>
BINDING DIRECTIVES
<p v-if="inStock">{{ product }}</p>
<a v-bind:href="url">...</a>
<a :href="url">...</a>
<p v-show="showProductDetails">...</p>
<button @click="addToCart"></button>
<button @click="addToCart(product)"></button>
<form @submit.prevent="addProduct"></form>
 <li v-for="(item, index) in items">
          ... To access the position in the array:
</li>
<li v-for="(value, key) in object"></li>
<cart-product v-for="item in products" :product="item" :key="item.id"></cart-product>
            Using v-for with a component:
            <img @mouseover.once="showImage" />... Only trigger once:
            <input @keyup.enter="submit" />
            Keyboard entry example:
            <input @keyup.ctrl.c="onCopy" />
            Call onCopy when control-c is pressed: Toggles the display: none CSS
            property:
            <p v-else-if="onSale">...</p>
            <p v-else>...</p>
            <input v-model="firstName" />
            <button
            :disabled="isButtonDisabled”>
            <div :class="{ active: isActive }">
              ... If isActive is truthy, the class ‘active’ will appear:
              <div :style="{ color: activeColor }">
                 <div>
                  <h2>I'm a title</h2>
                  <slot> Only displayed if no slot content </slot>
                </div>
                Component template:
                <app-layout>
                  <h1 slot="header">Page title</h1>
                  <p>the main content.</p>
                  <p slot="footer">Contact info</p>
                </app-layout>
                Use of component with data for slot: MULTIPLE SLOTS
                <div class="container">
                  <header>
                    <slot name="header"></slot>
                  </header>
                  <main>
                    <slot>Default content</slot>
                  </main>
                  <footer>
                    <slot name="footer"></slot>
                  </footer>
                </div>
                Component template: LIBRARIES YOU SHOULD KNOW Vue CLI Command
                line interface for rapid Vue development.
                <my-component>
                  <p>This will go in the slot</p>
                </my-component>
                Use of component with data for slot: Use props (above) to pass
                data into child components, custom events to pass data to parent
                elements. Set listener on component, within its parent:
                <button-counter v-on:incrementBy="incWithVal">
                  Inside button-counter template: this.$emit('incrementBy', 5)
                  Inside parent component: methods: { incWithVal: function
                  (toAdd) { ... } } /button-counter
                >
              </div>
            </div></cart-product
          >
        </li>
      </form>
    </button>
  </button>
</button>
```
