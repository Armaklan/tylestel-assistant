import type { ActionsProvider } from '../../domain/actions.provider';
import type { CombatActions } from '../../domain/entities/actions.model';

export class InMemoryActionsProvider implements ActionsProvider {
	#data: CombatActions[] = [];

	initializeData(data: CombatActions[]) {
		this.#data = data;
	}

	all(): Promise<CombatActions[]> {
		return Promise.resolve(this.#data);
	}
}
