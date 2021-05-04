import React from 'react'
import Slider from '@material-ui/core/Slider'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }

    return (
        <>
            <div style={{width: '300px'}}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </div>
        </>
    )
}

export default SuperDoubleRange
