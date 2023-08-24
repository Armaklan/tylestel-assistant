import type { CombatActions } from './entities/actions.model';

export interface ActionsProvider {
	all(): Promise<CombatActions[]>;
}
