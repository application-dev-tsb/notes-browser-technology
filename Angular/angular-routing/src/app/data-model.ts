export class Hero {
	id: number;
	name: string;
	addresses: Address[];
}

export class Address {
	id: number;
	street: string;
	state: string;
	zip: string;
}

export const heroes: Hero[] = [
	{
		id: 1,
		name: 'Supergirl',
		addresses: [
			{
				id: 1,
				street: 'Krypton', 
				state: 'CA', 
				zip: '94801'
			},
      		{
      			id: 2,
      			street: 'Danskerski',
      			state: 'VA', 
      			zip: '23226'
      		}
		]
	},
	{
		id: 2,
		name: 'The Doctor',
		addresses: [
			{
				id: 3,
				street: 'Galifrey', 
				state: 'CA', 
				zip: '94801'
			},
      		{
      			id: 4,
      			street: 'Earth',
      			state: 'VA', 
      			zip: '23226'
      		}
		]
	},
	{
		id: 3,
		name: 'Sarah Kerrigan',
		addresses: [
			{
				id: 1,
				street: 'Char', 
				state: 'CA', 
				zip: '94801'
			},
      		{
      			id: 2,
      			street: 'Aiur',
      			state: 'VA', 
      			zip: '23226'
      		}
		]
	}
];