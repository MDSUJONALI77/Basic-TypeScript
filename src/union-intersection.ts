type noobDeveloper = {
	name: string;
}


// type juniorDeveloper = {
// 	name: string;
// 	experties: string;
// 	experience: number;
// }

type juniorDeveloper = noobDeveloper & {
	experties: string;
	experience: number;
}

// enum Level{
// 	junior='junior',
// 	mid='mid',
// 	senior='senior'
// }

type nextLevelDeveloper = juniorDeveloper & {
	leadershipExperience: number;
	// level: Level;
	level: 'junior' | 'mid' | 'senioir'
}

const developer: nextLevelDeveloper = {
	name: ' Kalu Mia',
	experties: 'TS',
	experience: 4,
	leadershipExperience: 5,
	// level: Level.junior
	level: 'junior'
}

const newDeveloper: noobDeveloper | juniorDeveloper = {
	name: 'Kaka Mia',
	experties: 'JavaScript',
	experience: 4
}