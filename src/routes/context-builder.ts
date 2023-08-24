import { getContext, setContext } from 'svelte';
import { JsonActionsProvider } from '../actions/adapters/primary/json-actions.provider';
import { SearchActionsUsecase } from '../actions/models/search-actions.usecase';

export const buildContainer = () => {
	const actionsProvider = new JsonActionsProvider();
	const searchActionsUsecase = new SearchActionsUsecase(actionsProvider);

	const di = {
		searchActionsUsecase
	};
	setContext('di', di);
	return di;
};

export type DiContainer = ReturnType<typeof buildContainer>;

export const getContainer = (): DiContainer => {
	return getContext('di');
};
