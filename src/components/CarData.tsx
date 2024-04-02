interface TuningLevel {
    name: string;
    power: string;
}

interface CarModel {
    name: string;
    compatibleModels: string[];
    tuningLevels: TuningLevel[];
}

interface CarType {
    type: string;
    models: CarModel[];
}


const carData: CarType[] = [
    {
        type: 'Audi',
        models: [
            {
                name: '3.0 TFSI Supercharged',
                compatibleModels: ['B8/B8.5 S4 S5', 'C7 A6 A7', '8R Q5 SQ5'],
                tuningLevels: [
                    { name: 'Stock', power: '333bhp/440nm' },
                    { name: 'Stage 1', power: '400bhp/480nm' },
                    { name: 'Stage 1 SP', power: '420bhp/500nm' },
                    { name: 'Stage 2 DP', power: '455bhp/550nm' },
                    { name: 'Stage 2+', power: '495bhp/600nm' }
                ]
            },
            {
                name: '2.0 TSI EA888 Gen 1 & 2',
                compatibleModels: ['B8/B8.5 A4 A5', '8R Q5', 'C7 A6', 'B8/B8.5 Allroad'],
                tuningLevels: [
                    { name: 'Stock', power: '210bhp/350nm' },
                    { name: 'Stage 1', power: '270bhp/380nm' },
                    { name: 'Stage 2', power: '285bhp/400nm' },
                    { name: 'Stage 3 K04', power: '370bhp/550nm' }
                ]
            },
            {
                name: '1.8 TSI EA888 Gen 3 IS12',
                compatibleModels: ['2015+ MK7 Golf', 'Sportwagen', 'Alltrak', '8V A3'],
                tuningLevels: [
                    { name: 'Stock', power: '180bhp/250nm' },
                    { name: 'Stage 1', power: '230bhp/380nm' },
                    { name: 'Stage 2', power: '250bhp/400nm' },
                    { name: 'Stage 3 IS38', power: '370bhp/440nm' }
                ]
            },
            {
                name: '2.0 TSI EA888 Gen 3 IS20 MQB',
                compatibleModels: ['MK7/MK7.5 GTI', 'GLI', '8S TT', '8V A3'],
                tuningLevels: [
                    { name: 'Stock', power: '220bhp/350nm' },
                    { name: 'Stage 1', power: '300bhp/450nm' },
                    { name: 'Stage 2', power: '330bhp/500nm' },
                    { name: 'Stage 3 IS38', power: '410bhp/550nm' }
                ]
            },
            {
                name: '2.0 TSI EA888 Gen 3 IS38 MQB',
                compatibleModels: ['MK7 Golf R', '8V S3', '8S TTS'],
                tuningLevels: [
                    { name: 'Stock', power: '290bhp/380nm' },
                    { name: 'Stage 1', power: '370bhp/500nm' },
                    { name: 'Stage 2', power: '410bhp/550nm' },
                    { name: 'Stage 3 IS38 Hybrid', power: '500bhp/600nm' }
                ]
            },
            {
                name: '2.0 TFSI EA113',
                compatibleModels: ['MK6 Golf R', '8P S3', '8J TTS'],
                tuningLevels: [
                    { name: 'Stock', power: '265bhp/350nm' },
                    { name: 'Stage 1', power: '320bhp/480nm' },
                    { name: 'Stage 2', power: '370bhp/550nm' },
                    { name: 'Stage 3 K04 Hybrid', power: '450bhp/600nm' }
                ]
            },
            {
                name: '1.4 TSI EA211 MQB',
                compatibleModels: ['MK7/MK7.5 Golf', '8V A3'],
                tuningLevels: [
                    { name: 'Stock', power: '140bhp/250nm' },
                    { name: 'Stage 1', power: '175bhp/320nm' },
                    { name: 'Stage 2', power: '195bhp/350nm' }
                ]
            }
        ]
    },
    {
        type: 'VW',
        models: [
            {
                name: '2.0 TFSI EA113',
                compatibleModels: ['MK5 GTI', 'Jetta', 'GLI', 'B6 Passat'],
                tuningLevels: [
                    { name: 'Stock', power: '200bhp/280nm' },
                    { name: 'Stage 1', power: '260bhp/350nm' },
                    { name: 'Stage 2', power: '275bhp/380nm' },
                    { name: 'Stage 3 K04', power: '370bhp/550nm' }
                ]
            }
        ]
    }
];
