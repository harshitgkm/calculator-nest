import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
} from 'typeorm';

@Entity('operations')
export class Operation {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	operations: string;
	@Column()
	email: string;
	@Column('float')
	result: number;
}
