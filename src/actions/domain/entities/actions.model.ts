export type CombatActions = {
	_id: string;
	name: string;
	type?: string;
	img?: string;
	description?: string;
	nbUtilisationsMax?: string;
	preRequis: PreRequis;
	test: Test;
};

export type Test = {
	attribut?: string;
	metier?: string;
};

export type PreRequis = {
	metier?: string;
	value?: string;
};
