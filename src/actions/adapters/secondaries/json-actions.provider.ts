import type { ActionsProvider } from '../../domain/actions.provider';
import { ActionsBuilder } from '../../domain/builder/actions.builder';
import type { CombatActions } from '../../domain/entities/actions.model';
import type { CombatActionsDTO } from './dto/combat-actions.dto';

export class JsonActionsProvider implements ActionsProvider {
	#data: CombatActions[] = [];
	constuctor() {
		this.#load();
	}

	async #load() {
		if (!this.#data.length) {
			const response = await fetch('data/actions.db.json');
			const jsonData: CombatActionsDTO[] = await response.json();
			this.#data = jsonData.map((action) => dtoToCombatActions(action));
		}
	}

	async all(): Promise<CombatActions[]> {
		await this.#load();
		return Promise.resolve(this.#data);
	}
}

function dtoToCombatActions(action: CombatActionsDTO): CombatActions {
	return new ActionsBuilder()
		.withId(action._id)
		.withType(action.type)
		.withName(action.name)
		.withDescription(action.data?.description)
		.withImg(action.img)
		.withNbUtilisationsMax(action.data?.nbUtilisationsMax)
		.withPreRequis(action.data?.preRequis.metier, action.data?.preRequis.value)
		.withTest(action.data?.attribut, action.data?.metier)
		.build();
}
