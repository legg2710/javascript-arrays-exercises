var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
	//your code here
	let houdini = [];
	for (let i=0 ; i<people.length ; i++ ) {
		if (people[i] != personName) {
			houdini.push(people[i]);
		}
	}
	return houdini;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));