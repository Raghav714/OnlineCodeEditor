import React, { ReactNode, useState } from "react";
import '../styles/resizable.css'

interface ResizableProps {
    leftPanel: ReactNode;
    rightPanel: ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ leftPanel, rightPanel }) => {
    const [width, setWidth] = useState<number>(100);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [startWidth, setStartWidth] = useState<number>(100);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setStartX(e.clientX);
        setStartWidth(width);
        setMouseDown(true);
        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseDown) {
            const newWidth = startWidth + (e.clientX - startX);
            setWidth(newWidth > 0 ? newWidth : 0);
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
            <div className="editor-container" style={{ width: width }}>
                {leftPanel}
            </div>
            <div className="resize" onMouseDown={handleMouseDown}></div>
            <div className="output-container">
                {rightPanel}
            </div>
        </div>
    )

}

export default Resizable;
