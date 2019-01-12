import { Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from 'typeorm';

@Entity()
@Tree('nested-set')
export class Category {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @TreeChildren({ cascade: true })
    children!: Category[];

    @TreeParent()
    parent!: Category;
}
