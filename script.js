const listItem = document.querySelector('.list-item')

console.log('listItem', listItem)
console.dir(listItem)

const listItems = document.querySelectorAll('.list-item')

console.log('listItems', listItems)

const secondaryListItems = document.querySelectorAll('#secondary-list .list-item')

console.log('secondaryListItems', secondaryListItems)

const mainList = document.querySelector('#main-list')

const mainListItems = mainList.querySelectorAll('.list-item')

console.log(mainListItems)

for (let i = 0; i < mainListItems.length; i++) {
    console.log(mainListItems[i])
}