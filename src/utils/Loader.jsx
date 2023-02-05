import React, { useState, useEffect } from 'react';
import { Knob } from 'primereact/knob';

const Loader = () => {
    const step = 1
    const interval = 10
    const maxProgress = 100
    const [progress, setProgress] = useState(0);
    
    useEffect(() =>{
        const updateProgress = () => setProgress(progress + step)
        if (progress < maxProgress) {
            setTimeout(updateProgress, interval)
        }
        }, [progress])
        
    return (
        <div className="card flex justify-content-center">
            <Knob value={progress} onLoad={(e) => setProgress(e.value)} valueTemplate={`${progress}%`} />
        </div>
    )
}
export default Loader