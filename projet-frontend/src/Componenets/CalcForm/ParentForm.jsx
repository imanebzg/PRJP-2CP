import React, { useState } from 'react';
import MyForm from './MyForm';
import MyForm2 from './MyForm2';

function ParentForm() {
    const [formData, setFormData] = useState({});

    const handleForm1Submit = (dataFromForm1) => {
        setFormData(dataFromForm1);
    };

    return (
        <div>
            <MyForm onSubmit={handleForm1Submit} />
            <MyForm2 formData={formData} />
        </div>
    );
}

export default ParentForm;
