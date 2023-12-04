import React, { ReactNode, useState, useRef, useEffect } from "react";
import '../styles/resizable.css'

interface ResizableProps {
    leftPanel: ReactNode;
    rightPanel: ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ leftPanel, rightPanel }) => {
    //Width of leftPanel as percent
    const [width, setWidth] = useState<number>(50);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [startWidth, setStartWidth] = useState<number>(0);

    useEffect(() => {
        setStartWidth(window.innerWidth * (width / 100));
    }, [])


    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setStartX(e.clientX);
        setStartWidth(window.innerWidth * (width / 100));
        setMouseDown(true);
        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseDown) {
            const deltaX = e.clientX - startX;
            const newWidth = startWidth + deltaX;
            setWidth((newWidth / window.innerWidth) * 100);
        }
    };

    const handleMouseUp = () => {
        setMouseDown(false);
    };

    return (

        <div className="resizable-container"
            onMouseMove={mouseDown ? handleMouseMove : undefined}
            onMouseUp={handleMouseUp}
        >
            <div className="editor-container" style={{ width: `${width}%` }}>
                {leftPanel}
            </div>
            <div className="resize" onMouseDown={handleMouseDown} />

            <div className="output-container">
                {rightPanel}
            </div>
        </div>
    )

}

export default Resizable;
