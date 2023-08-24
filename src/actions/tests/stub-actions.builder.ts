import { ActionsBuilder, uuid } from '../domain/builder/actions.builder';

export class StubActionBuilder extends ActionsBuilder {
	protected id = uuid();
	protected name = 'actions tests';
}
