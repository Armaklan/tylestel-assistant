import type { CombatActions } from './actions.model';
import type { ActionsProvider } from './actions.provider';

export type ActionsFilter = {
	name?: string;
};

export class SearchActionsUsecase {
	constructor(private actionsProvider: ActionsProvider) {}

	async execute(filter: ActionsFilter): Promise<CombatActions[]> {
		const actions = await this.actionsProvider.all();

		return actions.filter((action) => {
			return (
				!filter.name?.trim() ||
				action.name.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase().trim())
			);
		});
	}
}
