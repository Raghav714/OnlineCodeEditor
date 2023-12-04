import React, { useEffect } from "react";


interface ConsoleOutputProps {
    output: string
}
const Console: React.FC<ConsoleOutputProps> = ({ output }) => {
    // useEffect(() => {
    //     console.log(val)
    // }, [])
    return (
        <div className="console-container">
            {output}
        </div>
    )
}

export default Console;
