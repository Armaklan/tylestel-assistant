import { beforeEach, describe, it } from 'vitest';
import {
	ActionsBuilder,
	createSearchActionsFixture,
	type SearchActionsFixture
} from './search-actions.fixture';

describe('Search actions', () => {
	let fixture: SearchActionsFixture;

	beforeEach(() => {
		fixture = createSearchActionsFixture();
	});

	it('should return a list of empty actions', async () => {
		fixture.givenActionsDataIs([]);
		await fixture.whenISearchActionsWithFilter({});
		fixture.thenIShouldGet([]);
	});

	it('should return a list of many actions', async () => {
		const data = [
			new ActionsBuilder().withName('Attaque en force').build(),
			new ActionsBuilder().withName('Attaque précise').build()
		];

		fixture.givenActionsDataIs([...data]);
		await fixture.whenISearchActionsWithFilter({});
		fixture.thenIShouldGet([...data]);
	});

	describe('when i filter by name', () => {
		const data = [
			new ActionsBuilder().withName('Attaque en force').build(),
			new ActionsBuilder().withName('Attaque précise').build(),
			new ActionsBuilder().withName('Parade').build()
		];
		it('should return all elements with name containing the given string', async () => {
			fixture.givenActionsDataIs([...data]);
			await fixture.whenISearchActionsWithFilter({
				name: 'Attaque'
			});
			fixture.thenIShouldGet([data[0], data[1]]);
		});

		it('should ignore space when search', async () => {
			fixture.givenActionsDataIs([...data]);
			await fixture.whenISearchActionsWithFilter({
				name: ' Attaque '
			});
			fixture.thenIShouldGet([data[0], data[1]]);
		});

		it('should ignore case when search', async () => {
			fixture.givenActionsDataIs([...data]);
			await fixture.whenISearchActionsWithFilter({
				name: ' aTtaQue '
			});
			fixture.thenIShouldGet([data[0], data[1]]);
		});
	});
});
