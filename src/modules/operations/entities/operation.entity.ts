import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('operations')
export class Operation {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	operation: string;
	@Column()
	email: string;
	@Column()
	result: number;
	@Column()
	timestamp: Date;
}
