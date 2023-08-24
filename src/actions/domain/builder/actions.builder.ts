import type { CombatActions } from '../entities/actions.model';

export class ActionsBuilder {
	protected id = uuid();
	protected name = '';
	protected type?: string;
	protected img?: string;
	protected description?: string;
	protected nbUtilisationsMax?: string;
	protected testAttribut?: string;
	protected testMetier?: string;
	protected prerequisMetier?: string;
	protected prerequisValue?: string;

	withId(id: string): ActionsBuilder {
		this.id = id;
		return this;
	}

	withName(name: string): ActionsBuilder {
		this.name = name;
		return this;
	}

	withType(type?: string): ActionsBuilder {
		this.type = type;
		return this;
	}

	withImg(img?: string): ActionsBuilder {
		this.img = img;
		return this;
	}

	withDescription(description?: string): ActionsBuilder {
		this.description = description;
		return this;
	}

	withNbUtilisationsMax(nbUtilisationsMax?: string): ActionsBuilder {
		this.nbUtilisationsMax = nbUtilisationsMax;
		return this;
	}

	withTest(attribut?: string, metier?: string): ActionsBuilder {
		this.testAttribut = attribut;
		this.testMetier = metier;
		return this;
	}

	withPreRequis(metier?: string, value?: string): ActionsBuilder {
		this.prerequisMetier = metier;
		this.prerequisValue = value;
		return this;
	}

	build(): CombatActions {
		return {
			_id: this.id,
			name: this.name,
			type: this.type,
			img: this.img,
			description: this.description,
			nbUtilisationsMax: this.nbUtilisationsMax,
			preRequis: {
				metier: this.prerequisMetier,
				value: this.prerequisValue
			},
			test: {
				attribut: this.testAttribut,
				metier: this.testMetier
			}
		};
	}
}

export function uuid(): string {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
