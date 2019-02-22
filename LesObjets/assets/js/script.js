/* PNJ */

let character = {
    name : "Jerrome",
    age : 27,
    items_to_give : ["Doran's Ring", "Health Potion", "Perfect Hex Core"],
    giveItem : function() {
        let randomItem = character.items_to_give[Math.floor(Math.random() * character.items_to_give.length)];
        console.log(randomItem);
    }
}

for(let allItems in character.items_to_give) {
	console.log(character.items_to_give[allItems]);

}

character.giveItem();

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

function showShop() {
	return itemAvailable === true;;
}

