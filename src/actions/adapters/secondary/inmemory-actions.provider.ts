import type { CombatActions } from '../../models/actions.model';
import type { ActionsProvider } from '../../models/actions.provider';

export class InMemoryActionsProvider implements ActionsProvider {
	#data: CombatActions[] = [];

	initializeData(data: CombatActions[]) {
		this.#data = data;
	}

	all(): Promise<CombatActions[]> {
		return Promise.resolve(this.#data);
	}
}
