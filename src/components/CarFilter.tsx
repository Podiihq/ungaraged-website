// import React, { useState } from 'react';

// interface TuningLevel {
//     name: string;
//     power: string;
// }

// interface CarModel {
//     name: string;
//     compatibleModels: string[];
//     tuningLevels: TuningLevel[];
// }

// interface CarType {
//     type: string;
//     models: CarModel[];
// }


// const carData: CarType[] = [
//     {
//         type: 'Audi',
//         models: [
//             {
//                 name: '3.0 TFSI Supercharged',
//                 compatibleModels: ['B8/B8.5 S4 S5', 'C7 A6 A7', '8R Q5 SQ5'],
//                 tuningLevels: [
//                     { name: 'Stock', power: '333bhp/440nm' },
//                     { name: 'Stage 1', power: '400bhp/480nm' },
//                     { name: 'Stage 1 SP', power: '420bhp/500nm' },
//                     { name: 'Stage 2 DP', power: '455bhp/550nm' },
//                     { name: 'Stage 2+', power: '495bhp/600nm' }
//                 ]
//             },
//             {
//                 name: '2.0 TSI EA888 Gen 1 & 2',
//                 compatibleModels: ['B8/B8.5 A4 A5', '8R Q5', 'C7 A6', 'B8/B8.5 Allroad'],
//                 tuningLevels: [
//                     { name: 'Stock', power: '210bhp/350nm' },
//                     { name: 'Stage 1', power: '270bhp/380nm' },
//                     { name: 'Stage 2', power: '285bhp/400nm' },
//                     { name: 'Stage 3 K04', power: '370bhp/550nm' }
//                 ]
//             },
//             {
//                 name: '1.8 TSI EA888 Gen 3 IS12',
//                 compatibleModels: ['2015+ MK7 Golf', 'Sportwagen', 'Alltrak', '8V A3'],
//                 tuningLevels: [
//                     { name: 'Stock', power: '180bhp/250nm' },
//                     { name: 'Stage 1', power: '230bhp/380nm' },
//                     { name: 'Stage 2', power: '250bhp/400nm' },
//                     { name: 'Stage 3 IS38', power: '370bhp/440nm' }
//                 ]
//             },
//             {
//                 name: '2.0 TSI EA888 Gen 3 IS20 MQB',
//                 compatibleModels: ['MK7/MK7.5 GTI', 'GLI', '8S TT', '8V A3'],
//                 tuningLevels: [
//                     { name: 'Stock', power: '220bhp/350nm' },
//                     { name: 'Stage 1', power: '300bhp/450nm' },
//                     { name: 'Stage 2', power: '330bhp/500nm' },
//                     { name: 'Stage 3 IS38', power: '410bhp/550nm' }
//                 ]
//             },
//             {
//                 name: '2.0 TSI EA888 Gen 3 IS38 MQB',
//                 compatibleModels: ['MK7 Golf R', '8V S3', '8S TTS'],
//                 tuningLevels: [
//                     { name: 'Stock', power: '290bhp/380nm' },
//                     { name: 'Stage 1', power: '370bhp/500nm' },
//                     { name: 'Stage 2', power: '410bhp/550nm' },
//                     { name: 'Stage 3 IS38 Hybrid', power: '500bhp/600nm' }
//                 ]
//             },
//             {
//                 name: '2.0 TFSI EA113',
//                 compatibleModels: ['MK6 Golf R', '8P S3', '8J TTS'],
//                 tuningLevels: [
//                     { name: 'Stock', power: '265bhp/350nm' },
//                     { name: 'Stage 1', power: '320bhp/480nm' },
//                     { name: 'Stage 2', power: '370bhp/550nm' },
//                     { name: 'Stage 3 K04 Hybrid', power: '450bhp/600nm' }
//                 ]
//             },
//             {
//                 name: '1.4 TSI EA211 MQB',
//                 compatibleModels: ['MK7/MK7.5 Golf', '8V A3'],
//                 tuningLevels: [
//                     { name: 'Stock', power: '140bhp/250nm' },
//                     { name: 'Stage 1', power: '175bhp/320nm' },
//                     { name: 'Stage 2', power: '195bhp/350nm' }
//                 ]
//             }
//         ]
//     },
//     {
//         type: 'VW',
//         models: [
//             {
//                 name: '2.0 TFSI EA113',
//                 compatibleModels: ['MK5 GTI', 'Jetta', 'GLI', 'B6 Passat'],
//                 tuningLevels: [
//                     { name: 'Stock', power: '200bhp/280nm' },
//                     { name: 'Stage 1', power: '260bhp/350nm' },
//                     { name: 'Stage 2', power: '275bhp/380nm' },
//                     { name: 'Stage 3 K04', power: '370bhp/550nm' }
//                 ]
//             }
//         ]
//     }
// ];

// const CustomDropdown: React.FC<{ options: string[]; onSelect: (value: string) => void }> = ({ options, onSelect }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionClick = (option: string) => {
//         setSelectedOption(option);
//         onSelect(option);
//         setIsOpen(false);
//     };

//     return (
//         <div className="relative">
//             <button
//                 type="button"
//                 className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2"
//                 onClick={toggleDropdown}
//             >
//                 {selectedOption || 'Select'}
//                 <svg
//                     className="absolute w-5 h-5 right-3 top-1/2 transform -translate-y-1/2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                     />
//                 </svg>
//             </button>
//             {isOpen && (
//                 <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//                     {options.map((option) => (
//                         <div
//                             key={option}
//                             className="py-2 px-3 cursor-pointer hover:bg-gray-100"
//                             onClick={() => handleOptionClick(option)}
//                         >
//                             {option}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// const FilterComponent2: React.FC = () => {
//     const [selectedType, setSelectedType] = useState<string>('');
//     const [selectedModel, setSelectedModel] = useState<string>('');

//     const handleTypeSelect = (type: string) => {
//         setSelectedType(type);
//         setSelectedModel('');
//     };

//     const handleModelSelect = (model: string) => {
//         setSelectedModel(model);
//     };

//     const carTypes = carData.map((carType) => carType.type);
//     const filteredModels = selectedType
//         ? carData.find((carType) => carType.type === selectedType)?.models.map((model) => model.name) || []
//         : [];

//     return (
//         <div className="container mx-auto mt-8">
//             <div className="flex justify-center space-x-4">
//                 <div>
//                     <label htmlFor="carType" className="block font-medium">
//                         Select Car Type:
//                     </label>
//                     <CustomDropdown options={carTypes} onSelect={handleTypeSelect} />
//                 </div>
//                 <div>
//                     <label htmlFor="carModel" className="block font-medium">
//                         Select Car Model:
//                     </label>
//                     <CustomDropdown options={filteredModels} onSelect={handleModelSelect} />
//                 </div>
//             </div>
//             <div className="mt-8">
//                 {selectedModel && (
//                     <div>
//                         <h2 className="text-xl font-medium">Tuning Levels for {selectedModel}</h2>
//                         <ul className="mt-4 space-y-2">
//                             {carData
//                                 .find((carType) => carType.type === selectedType)
//                                 ?.models.find((model) => model.name === selectedModel)
//                                 ?.tuningLevels.map((level) => (
//                                     <li key={level.name}>
//                                         <span className="font-medium">{level.name}:</span> {level.power}
//                                     </li>
//                                 ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FilterComponent2;
