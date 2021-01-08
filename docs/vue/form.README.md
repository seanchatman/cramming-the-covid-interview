# Vue Forms

### \# [Text](https://vuejs.org/v2/guide/forms.html#Text)
```html
<span>Message: {{ msg }}</span>
```
### \# [Multiline text](https://vuejs.org/v2/guide/forms.html#Multiline-text)
```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```
### \# [Checkbox](https://vuejs.org/v2/guide/forms.html#Checkbox)
```html
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
```
```javascript
new Vue({
  el: '...',
  data: {
    checkedNames: []
  }
})
```
### \# [Radio](https://vuejs.org/v2/guide/forms.html#Radio)
```html
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>
```
### \# [Select](https://vuejs.org/v2/guide/forms.html#Text)
```html
<select v-model="selected">
    <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
    </option>
</select>
<span>Selected: {{ selected }}</span>
```
```javascript
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```
### \# [Value Bindings](https://vuejs.org/v2/guide/forms.html#Value-Bindings)
```html
<!-- `picked` is a string "a" when checked -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` is either true or false -->
<input type="checkbox" v-model="toggle">

<!-- `selected` is a string "abc" when the first option is selected -->
<select v-model="selected">
    <option value="abc">ABC</option>
</select>
```
### \# [Radio](https://vuejs.org/v2/guide/forms.html#Radio-1)
```html
<input type="radio" v-model="pick" :value="a">
``````
### \# [Select Options](https://vuejs.org/v2/guide/forms.html#Select-Options)
```html
<select v-model="selected">
    <!-- inline object literal -->
    <option :value="{ number: 123 }">123</option>
</select>
```
### \# [Using v-model on Components](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components)
```html
<custom-input
        v-bind:value="searchText"
        v-on:input="searchText = $event"
></custom-input>
```