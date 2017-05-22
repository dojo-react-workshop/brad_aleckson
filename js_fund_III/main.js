function personConstructor(name)
{
	this.name = name
	this.distance_traveled = 0
	this.say_name = function(){alert(this.name);};
	this.say_something = function(msg) {return `${this.name} says ${msg}`};
	this.walk = function() {alert(`${this.name} is walking`); this.distance_traveled +=3;};
	this.run = function() {alert(`${this.name} is running`); this.distance_traveled +=10;};
	this.crawl = function() {alert(`${this.name} is crawling`); this.distance_traveled +=1;};

}

let jay = new personConstructor('Jay');
jay.say_name();
jay.say_something('I am cool');
jay.walk();
jay.run();
jay.crawl();
console.log(`jay.distance_traveled: ${jay.distance_traveled}`);

function ninjaConstructor(nameIn, cohortIn)
{
	this.name = nameIn;
	this.cohort = cohortIn;
	this.belt_level = 'yellow-belt';
	this.levelUp = function(){this.belt_level = 'green-belt'};
}

console.log(`ninja1 about to be created`);
let ninja1 = new ninjaConstructor('Tom', 'Larry');
console.log(`ninja1 created`);
console.log(`ninja1.name: ${ninja1.name}`);
console.log(`ninja1.cohort: ${ninja1.cohort}`);
console.log(`ninja1.belt_level: ${ninja1.belt_level}`);
ninja1.levelUp();
console.log(`ninja1.belt_level: ${ninja1.belt_level}`);
