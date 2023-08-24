import { expect } from 'vitest';
import { InMemoryActionsProvider } from '../adapters/primary/inmemory-actions.provider';
import type { CombatActions } from '../models/actions.model';
import { SearchActionsUsecase, type ActionsFilter } from '../models/search-actions.usecase';

export const createSearchActionsFixture = () => {
	const actionsProvider = new InMemoryActionsProvider();
	const searchActionsUsecase = new SearchActionsUsecase(actionsProvider);

	return {
		data: [] as CombatActions[],
		givenActionsDataIs(data: CombatActions[]) {
			actionsProvider.initializeData(data);
		},
		async whenISearchActionsWithFilter(filter: ActionsFilter) {
			this.data = await searchActionsUsecase.execute(filter);
		},
		thenIShouldGet(expected: CombatActions[]) {
			expect(this.data).toEqual(expected);
		}
	};
};

export type SearchActionsFixture = ReturnType<typeof createSearchActionsFixture>;

export class ActionsBuilder {
	id = uuid();
	name = 'actions tests';

	withName(name: string): ActionsBuilder {
		this.name = name;
		return this;
	}

	build(): CombatActions {
		return {
			_id: this.id,
			name: this.name
		};
	}
}

function uuid(): string {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
