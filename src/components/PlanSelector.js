import React from 'react';

const PlanSelector = ({ selectedPlan, onSelectPlan }) => {
    return (
        <div>
            <label>
                <input 
                    type="radio" 
                    value="Builder" 
                    checked={selectedPlan === 'Builder'} 
                    onChange={onSelectPlan} 
                />
                Builder
            </label>
            <label>
                <input 
                    type="radio" 
                    value="Agency" 
                    checked={selectedPlan === 'Agency'} 
                    onChange={onSelectPlan} 
                />
                Agency
            </label>
            <label>
                <input 
                    type="radio" 
                    value="Enterprise" 
                    checked={selectedPlan === 'Enterprise'} 
                    onChange={onSelectPlan} 
                />
                Enterprise
            </label>
        </div>
    );
};

export default PlanSelector;
