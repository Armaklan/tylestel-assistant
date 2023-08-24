import { expect } from 'vitest';
import { InMemoryActionsProvider } from '../adapters/secondaries/inmemory-actions.provider';
import type { CombatActions } from '../domain/entities/actions.model';
import { SearchActionsUsecase, type ActionsFilter } from '../usecases/search-actions.usecase';

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
