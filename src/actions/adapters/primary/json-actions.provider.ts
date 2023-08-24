import type { ActionsProvider } from '../../models/actions.provider';

export class JsonActionsProvider implements ActionsProvider {
	#data: CombatActions[] = [];
	constuctor() {
		this.#load();
	}

	async #load() {
		if (!this.#data.length) {
			const response = await fetch('data/actions.db.json');
			this.#data = await response.json();
		}
	}

	async all(): Promise<CombatActions[]> {
		await this.#load();
		return Promise.resolve(this.#data);
	}
}
