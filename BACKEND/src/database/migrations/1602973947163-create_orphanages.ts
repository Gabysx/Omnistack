import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602973947163 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar alguma alteração
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {   
                    name: 'id',
                    type: 'integer',
                    unsigned: true,  
                    isPrimary: true,
                    isGenerated: true, 
                    generationStrategy: 'increment',
                }, 

                {
                    name:'name',
                    type:'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name:'about',
                    type:'text',
                },
                {
                    name:'instructions',
                    type:'text',
                },
                {
                    name:'opening_hours',
                    type:'varchar',
                },
               {
<<<<<<< HEAD
                   name: 'weekends_open',
                   type: 'boolean',
                   default: false,
=======
                   name:'weekends_open',
                   type:'boolean',
                   
>>>>>>> 6011e7fb76cf38b872aa3f69df7f471de2c44bfd
               },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //desfazer o que foi feito no up
        await queryRunner.dropTable('orphanages');
    }

}
