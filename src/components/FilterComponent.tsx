import React, { useState } from 'react';
import { ArrowForward } from './Icons';


const FilterComponent: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('');
    const [selectedModel, setSelectedModel] = useState<string>('');

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
        setSelectedModel('');
    };

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(event.target.value);
    };


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


    const filteredModels = selectedType
        ? carData.find((carType) => carType.type === selectedType)?.models || []
        : [];

    return (
        <div className="container mx-auto mt-8 bg-[#141414] p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="carType" className="text-sm font-medium text-white italic">Select Car Type:</label>
                    <select
                        id="carType"
                        className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2 italic"
                        onChange={handleTypeChange}
                        value={selectedType}
                    >
                        <option value="">Select</option>
                        {carData.map((carType) => (
                            <option key={carType.type} value={carType.type}>{carType.type}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="carModel" className="text-sm font-medium text-white italic">Select Car Model:</label>
                    <select
                        id="carModel"
                        className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2 italic"
                        onChange={handleModelChange}
                        value={selectedModel}
                        disabled={!selectedType}
                    >
                        <option value="">Select</option>
                        {filteredModels.map((model) => (
                            <option key={model.name} value={model.name}>{model.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-4">
                {selectedModel && (
                    <div>
                        <h2 className="text-xl font-medium mt-8 italic">Tuning Levels for {selectedModel}</h2>
                        <ul className="mt-4 space-y-2">
                            {filteredModels
                                .find((model) => model.name === selectedModel)
                                ?.tuningLevels.map((level) => (
                                    <li key={level.name} className='italic'>
                                        <span className="font-medium">{level.name}:</span> {level.power}

                                    </li>
                                ))}
                            <div className="flex pt-4">
                                <a href="https://wa.link/k6zq3z" className="relative">
                                    <span className="absolute top-0 left-0 mt-1 ml-1 lg:mt-1.5 lg:ml-1.5 h-full w-full bg-[#FE5C43] -skew-x-[10deg] transform"></span>
                                    <span className="border-2 hover:translate-y-2 transform duration-300 -skew-x-[10deg] flex items-center gap-2 bg-black border-[#FE5C43] fold-bold relative h-full w-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white transition">
                                        <p className="skew-x-[10deg] text-[#FE5C43]">Get in Touch</p>
                                        <div className="skew-x-[10deg] text-[#FE5C43]">
                                            <ArrowForward />
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterComponent;
