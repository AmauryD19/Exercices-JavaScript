/* PNJ */
let character = {
    name : "Jerrome",
    age : 27,
    items_to_give : ["l'épée de Jerrome", "le baton de Jerrome", "l'arc de Jerrome"],
    giveItem : function() {
        let randomItem = character.items_to_give[Math.floor(Math.random() * character.items_to_give.length)];
		console.log(randomItem);
	},
}

for(let allItems in character.items_to_give) {
	console.log(character.items_to_give[allItems]);

}

let giftedItem = character.giveItem();

/* SHOP */

let shop = 	["Luden's Echo", "Infinity Edge","Rabadon", "Liandry", "Runaan"];

shop[0] = {
	title : shop[0],
	physic : 0,
	magic : 50,	
	minLevel : 5,
	available : true
}
shop[1] = {
	title : shop[1],
	physic : 40,
	magic : 0,
	minLevel : 5,
	available : false
}
shop[2] = {
	title : shop[2],
	physic : 0,
	magic : 100,
	minLevel : 10,
	available : true
}
shop[3] = {
	title : shop[3],
	physic : 0,
	magic : 50,
	minLevel : 15,
	available : true
}
shop[4] = {
	title : shop[4],
	physic : 50,
	magic : 0,
	minLevel : 15,
	available : false
}

document.getElementById('shopAll').addEventListener('click', showShop);

function showShop() {
	for (i=0; i<shop.length; i++) {
		console.log(shop[i].title);
	}
}

document.getElementById('shopStock').addEventListener('click', showShopStock);

function showShopStock() {
	for (i=0; i<shop.length; i++) {
		if (shop[i].available=== true) {
			console.log(shop[i].title);
		}
	};
}

document.getElementById('shopLevel10').addEventListener('click', showShop10);

function showShop10() {
	for (i=0; i<shop.length; i++) {
		if (shop[i].minLevel<=10) {
			console.log(shop[i].title);
		}
	}
}

/* Le main character */

let mainCharacter = {
	name : "Jerrard",
	level : 12,
	life : 1000,
	weapon : {name : "un clou", damage: 50},
	attack : function() {
		console.log(mainCharacter.name + ' assène un violent coup avec ' + mainCharacter.weapon.name + ' et inflige ' +mainCharacter.weapon.damage*mainCharacter.level+ ' dégats.');
	}
}


mainCharacter.attack();

/* l'ennemi */

let hostileCharacter = {
	name : "Jerry",
	level : 6,
	life : 800,
	weapon : {name : "un caillou", damage: 5},
	hostileAttack : function() {
		
	}
}