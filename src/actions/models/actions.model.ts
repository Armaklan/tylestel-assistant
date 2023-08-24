export type CombatActions = {
	name: string;
	type?: string;
	img?: string;
	data?: CombatActionsData;
	_id: string;
};

export type CombatActionsData = {
	description: string;
	actif: boolean;
	nbUtilisationsMax: string;
	nbUtilisationsActuel: number;
	attribut: string;
	metier: string;
	preRequis: PreRequis;
};

export type PreRequis = {
	metier: string;
	value: string;
};
