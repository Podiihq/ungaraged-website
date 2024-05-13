import React, { useState, useEffect } from "react";

const FilterComponent: React.FC = () => {
  const [carData, setCarData] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");


  useEffect(() => {
    fetch("/carData.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCarData(data))
      .catch(error => console.error("Error fetching car data:", error));
  }, []);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
    setSelectedModel("");
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  const carTypes = carData.map((carType) => carType.type);
  const filteredModels = selectedType
    ? carData.find((carType) => carType.type === selectedType)?.models || []
    : [];

  const selectedModelData = selectedModel
    ? filteredModels.find((model: { name: string; }) => model.name === selectedModel)
    : undefined;

  return (
    <div className="container mx-auto mt-8 bg-[#141414] p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="carType" className="block font-medium">
            Select Car Type:
          </label>
          <select
            id="carType"
            className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2 italic"
            onChange={handleTypeChange}
            value={selectedType}
          >
            <option value="">Select</option>
            {carTypes.map((carType) => (
              <option key={carType} value={carType}>
                {carType}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="carModel" className="block font-medium">
            Select Car Model:
          </label>
          <select
            id="carModel"
            className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2 italic"
            onChange={handleModelChange}
            value={selectedModel}
            disabled={!selectedType}
          >
            <option value="">Select</option>
            {filteredModels.map((model: { name: string; }) => (
              <option key={model.name} value={model.name}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {selectedModelData && (
          <div className="mt-8 flex gap-10 md:gap-20">
            <div>
              <h2 className="text-xl font-medium">
                Tuning Levels for {selectedModelData.name}
              </h2>
              <ul className="mt-4 space-y-2 text-[#ABABAB]">
                {selectedModelData.tuningLevels.map((level: any) => (
                  <li key={level.name}>
                    <span className="font-medium">{level.name}:</span>{" "}
                    {level.power}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-medium">Compatible Models</h2>
              <ul className="mt-2 space-y-2 text-[#ABABAB]">
                {selectedModelData.compatibleModels.map((model: string) => (
                  <li key={model}>{model}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;










// import React, { useState } from "react";

// const FilterComponent: React.FC = () => {
//   const [selectedType, setSelectedType] = useState<string>("");
//   const [selectedModel, setSelectedModel] = useState<string>("");

//   const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedType(event.target.value);
//     setSelectedModel("");
//   };

//   const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedModel(event.target.value);
//   };

//   interface TuningLevel {
//     name: string;
//     power: string;
//   }

//   interface CarModel {
//     name: string;
//     compatibleModels: string[];
//     tuningLevels: TuningLevel[];
//   }

//   interface CarType {
//     type: string;
//     models: CarModel[];
//   }

//   const carData: CarType[] = [
//     {
//       type: "Audi",
//       models: [
//         {
//           name: "3.0 TFSI Supercharged",
//           compatibleModels: ["B8/B8.5 S4 S5", "C7 A6 A7", "8R Q5 SQ5"],
//           tuningLevels: [
//             { name: "Stock", power: "333bhp/440nm" },
//             { name: "Stage 1", power: "400bhp/480nm" },
//             { name: "Stage 1 SP", power: "420bhp/500nm" },
//             { name: "Stage 2 DP", power: "455bhp/550nm" },
//             { name: "Stage 2+", power: "495bhp/600nm" },
//           ],
//         },
//         {
//           name: "2.0 TSI EA888 Gen 1 & 2",
//           compatibleModels: [
//             "B8/B8.5 A4 A5",
//             "8R Q5",
//             "C7 A6",
//             "B8/B8.5 Allroad",
//           ],
//           tuningLevels: [
//             { name: "Stock", power: "210bhp/350nm" },
//             { name: "Stage 1", power: "270bhp/380nm" },
//             { name: "Stage 2", power: "285bhp/400nm" },
//             { name: "Stage 3 K04", power: "370bhp/550nm" },
//           ],
//         },
//         {
//           name: "1.8 TSI EA888 Gen 3 IS12",
//           compatibleModels: ["8V A3"],
//           tuningLevels: [
//             { name: "Stock", power: "180bhp/250nm" },
//             { name: "Stage 1", power: "230bhp/380nm" },
//             { name: "Stage 2", power: "250bhp/400nm" },
//             { name: "Stage 3 IS38", power: "370bhp/440nm" },
//           ],
//         },
//         {
//           name: "2.0 TSI EA888 Gen 3 IS20 MQB",
//           compatibleModels: ["8S TT", "8V A3"],
//           tuningLevels: [
//             { name: "Stock", power: "220bhp/350nm" },
//             { name: "Stage 1", power: "300bhp/450nm" },
//             { name: "Stage 2", power: "330bhp/500nm" },
//             { name: "Stage 3 IS38", power: "410bhp/550nm" },
//           ],
//         },
//         {
//           name: "2.0 TSI EA888 Gen 3 IS38 MQB",
//           compatibleModels: ["8V S3", "8S TTS"],
//           tuningLevels: [
//             { name: "Stock", power: "290bhp/380nm" },
//             { name: "Stage 1", power: "370bhp/500nm" },
//             { name: "Stage 2", power: "410bhp/550nm" },
//             { name: "Stage 3 IS38 Hybrid", power: "500bhp/600nm" },
//           ],
//         },
//         {
//           name: "2.0 TFSI EA113",
//           compatibleModels: ["8P", "TT", "8J", "A3"],
//           tuningLevels: [
//             { name: "Stock", power: "200bhp/280nm" },
//             { name: "Stage 1", power: "260bhp/350nm" },
//             { name: "Stage 2", power: "275bhp/380nm" },
//             { name: "Stage 3 K04", power: "370bhp/550nm" },
//           ],
//         },
//         {
//           name: "2.0 TFSI EA113 KO4",
//           compatibleModels: ["8P S3", "8J TTS"],
//           tuningLevels: [
//             { name: "Stock", power: "265bhp/350nm" },
//             { name: "Stage 1", power: "320bhp/480nm" },
//             { name: "Stage 2", power: "370bhp/550nm" },
//             { name: "Stage 3 K04 Hybrid", power: "450bhp/600nm" },
//           ],
//         },
//         {
//           name: "1.4 TSI EA211 MQB",
//           compatibleModels: ["8V", "A3"],
//           tuningLevels: [
//             { name: "Stock", power: "140bhp/250nm" },
//             { name: "Stage 1", power: "175bhp/320nm" },
//             { name: "Stage 2", power: "195bhp/350nm" },
//           ],
//         },
//       ],
//     },
//     {
//       type: "VW",
//       models: [
//         {
//           name: "2.0 TFSI EA113",
//           compatibleModels: ["MK5 GTI", "Jetta", "GLI", "B6 Passat"],
//           tuningLevels: [
//             { name: "Stock", power: "200bhp/280nm" },
//             { name: "Stage 1", power: "260bhp/350nm" },
//             { name: "Stage 2", power: "275bhp/380nm" },
//             { name: "Stage 3 K04", power: "370bhp/550nm" },
//           ],
//         },
//         {
//           name: "1.8 TSI EA888 Gen 3 IS12",
//           compatibleModels: ["For 2015+ - MK7 Golf", "Sportwagen", " Alltrak"],
//           tuningLevels: [
//             { name: "Stock", power: "180bhp/250nm" },
//             { name: "Stage 1", power: "230bhp/380nm" },
//             { name: "Stage 2", power: "250bhp/400nm" },
//             { name: "Stage 3 IS38", power: "370bhp/440nm" },
//           ],
//         },
//         {
//           name: "2.0 TSI EA888 Gen 3 IS20 MQB",
//           compatibleModels: ["MK7/MK7.5", "GTI", "GLI"],
//           tuningLevels: [
//             { name: "Stock", power: "220bhp/350nm" },
//             { name: "Stage 1", power: "300bhp/450nm" },
//             { name: "Stage 2", power: "330bhp/500nm" },
//             { name: "Stage 3 IS38", power: "410bhp/550nm" },
//           ],
//         },
//         {
//           name: "2.0 TSI EA888 Gen 3 IS38 MQB",
//           compatibleModels: ["MK7", "Golf R"],
//           tuningLevels: [
//             { name: "Stock", power: "290bhp/380nm" },
//             { name: "Stage 1", power: "370bhp/500nm" },
//             { name: "Stage 2", power: "410bhp/550nm" },
//             { name: "Stage 3 IS38 Hybrid", power: "500bhp/600nm" },
//           ],
//         },
//         {
//           name: "2.0 TFSI EA113 K04",
//           compatibleModels: ["MK5", "Golf R"],
//           tuningLevels: [
//             { name: "Stock", power: "265bhp/350nm" },
//             { name: "Stage 1", power: "320bhp/480nm" },
//             { name: "Stage 2", power: "370bhp/550nm" },
//             { name: "Stage 3 K04 Hybrid", power: "450bhp/600nm" },
//           ],
//         },
//         {
//           name: "1.4 TSI EA211 MQB",
//           compatibleModels: ["MK7/MK7.5", "Golf"],
//           tuningLevels: [
//             { name: "Stock", power: "140bhp/250nm" },
//             { name: "Stage 1", power: "175bhp/320nm" },
//             { name: "Stage 2", power: "195bhp/350nm" },
//           ],
//         },
//       ],
//     },
//   ];

//   const carTypes = carData.map((carType) => carType.type);
//   const filteredModels = selectedType
//     ? carData.find((carType) => carType.type === selectedType)?.models || []
//     : [];

//   const selectedModelData = selectedModel
//     ? filteredModels.find((model) => model.name === selectedModel)
//     : undefined;

//   return (
//     <div className="container mx-auto mt-8 bg-[#141414] p-6">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         <div>
//           <label htmlFor="carType" className="block font-medium">
//             Select Car Type:
//           </label>
//           <select
//             id="carType"
//             className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2 italic"
//             onChange={handleTypeChange}
//             value={selectedType}
//           >
//             <option value="">Select</option>
//             {carTypes.map((carType) => (
//               <option key={carType} value={carType}>
//                 {carType}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="carModel" className="block font-medium">
//             Select Car Model:
//           </label>
//           <select
//             id="carModel"
//             className="mt-2 block w-full border border-[#3C3C3C] bg-[#141414] px-2 py-2 italic"
//             onChange={handleModelChange}
//             value={selectedModel}
//             disabled={!selectedType}
//           >
//             <option value="">Select</option>
//             {filteredModels.map((model) => (
//               <option key={model.name} value={model.name}>
//                 {model.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div>
//         {selectedModelData && (
//           <div className="mt-8 flex gap-10 md:gap-20">
//             <div>
//               <h2 className="text-xl font-medium">
//                 Tuning Levels for {selectedModelData.name}
//               </h2>
//               <ul className="mt-4 space-y-2 text-[#ABABAB]">
//                 {selectedModelData.tuningLevels.map((level) => (
//                   <li key={level.name}>
//                     <span className="font-medium">{level.name}:</span>{" "}
//                     {level.power}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="">
//               <h2 className="text-xl font-medium">Compatible Models</h2>
//               <ul className="mt-2 space-y-2 text-[#ABABAB]">
//                 {selectedModelData.compatibleModels.map((model) => (
//                   <li key={model}>{model}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;