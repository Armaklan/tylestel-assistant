import type { CombatActions } from './actions.model';

export interface ActionsProvider {
	all(): Promise<CombatActions[]>;
}
