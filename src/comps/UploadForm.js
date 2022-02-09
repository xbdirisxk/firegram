import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            setError('please choose a jpeg or png image');
        }
    };
    return (
        <form>
            <input type='file' onChange={changeHandler} />
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div className='file'>{file.name}</div>}
            </div>
        </form>
    );
};

export default UploadForm;
