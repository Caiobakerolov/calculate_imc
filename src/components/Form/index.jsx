import { useState } from "react";

import './form.css';

const Formulario = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');  
  const [name, setName] = useState('');    

  const calculateIMC = () => {
    
    if (weight && height) {
      const heightInMeters = parseFloat(height);
      const weightInKg = parseFloat(weight);
      const imc = weightInKg / (heightInMeters * heightInMeters);
      return imc.toFixed(2);
    }

    return 0;

  };

  const renderResult = () => {
    const imc = calculateIMC();
    let classification = '';

    if (imc < 18.5) {
      classification = 'underweight (below 18.5)';
    } else if (imc >= 18.5 && imc <= 24.9) {
      classification = 'normal weight (18.5 - 24.9)';
    } else if (imc >= 25 && imc <= 29.9) {
      classification = 'overweight (25 - 29.9)';
    } else if (imc >= 30 && imc <= 34.9) {
      classification = 'obesity grade I (30 - 34.9)';
    } else if (imc >= 35 && imc <= 39.9) {
      classification = 'obesity grade II (severe) (35 - 39.9)';
    } else if (imc >= 40) {
      classification = 'obesity grade III (morbid) (40 or more)';
    }

    return (
      <p className="text">Hello <b className="name">{name}</b>, your body mass index is <b className="imc">{imc}</b> and you are classified as <b className="classification">{classification}</b></p>
    );
  };

  return (
    <form>      
      <input type="text" placeholder="Type your Name" onChange={e => setName(e.target.value)}/>
      <input type="number" placeholder="Type your weight in kg" step="0.01" onChange={e => setWeight(e.target.value)}/>      
      <input type="number" placeholder="Type your height in meters" step="0.01" onChange={e => setHeight(e.target.value)}/>      
      {renderResult()}     
    </form>    
  );
};

export default Formulario;
