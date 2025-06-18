import { useState } from 'react';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(100);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [productivityGain, setProductivityGain] = useState(15);
  const [implementationCost, setImplementationCost] = useState(15000);

  const calculateROI = () => {
    const annualBenefit = (employees * avgSalary * (productivityGain / 100));
    const roi = ((annualBenefit - implementationCost) / implementationCost) * 100;
    const paybackMonths = (implementationCost / annualBenefit) * 12;
    
    return {
      annualBenefit,
      roi,
      paybackMonths
    };
  };

  const metrics = calculateROI();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">ROI Calculator</h2>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Salary ($)
            </label>
            <input
              type="number"
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Productivity Gain (%)
            </label>
            <input
              type="number"
              value={productivityGain}
              onChange={(e) => setProductivityGain(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Cost ($)
            </label>
            <input
              type="number"
              value={implementationCost}
              onChange={(e) => setImplementationCost(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Annual Benefit</div>
              <div className="text-3xl font-bold text-green-600">
                ${metrics.annualBenefit.toLocaleString()}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">ROI</div>
              <div className="text-3xl font-bold text-blue-600">
                {metrics.roi.toFixed(1)}%
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Payback Period</div>
              <div className="text-3xl font-bold text-purple-600">
                {metrics.paybackMonths.toFixed(1)} months
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
