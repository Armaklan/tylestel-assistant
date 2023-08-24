export type CombatActionsDTO = {
	name: string;
	type?: string;
	img?: string;
	data?: CombatActionsDataDTO;
	_id: string;
};

export type CombatActionsDataDTO = {
	description: string;
	actif: boolean;
	nbUtilisationsMax: string;
	nbUtilisationsActuel: number;
	attribut: string;
	metier: string;
	preRequis: PreRequisDTO;
};

export type PreRequisDTO = {
	metier: string;
	value: string;
};
