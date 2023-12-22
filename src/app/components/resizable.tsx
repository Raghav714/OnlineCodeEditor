import React, { ReactNode, useState, useRef, useEffect } from "react";
import '../styles/resizable.css'
//FOR NOW: if using relative units (%) will only work if viewport width is
// the resizable width

interface ResizableProps {
    leftPanel: ReactNode
    rightPanel: ReactNode

    // Optional - Left panel will be displayed when true, else false
    // Default: true
    displayLeftPanel?: boolean
    setDisplayLeftPanel?: (val: boolean) => void


    // Optional - When set, uses pixels to calculate the width of the left panel
    // otherwise, width is calculated as a percentage of parent|window width
    // Default: false
    useAbsolute?: boolean

    // Optional - Default width of the left panel. Uses px when useAbsolute set, else %
    // Default: 50
    defaultWidth?: number

    // Optional - Width of parent element; used to calc left panel width
    // when useAbsolute flag is NOT set
    // Default: window.innerWidth
    parentWidth?: number

    // Optional - Minimum width (px) of left panel
    // Only use when useAbsolute flag is set
    // Default: 0
    minWidthPx?: number

    // Optional - Color of the resize dragger
    // Default: black
    draggerColor?: string

    // Optional - Width (px) of the resize dragger
    // Default: 4
    draggerWidth?: number

    // Optional - Will collapse left panel if user slides drager so left
    // panel is smaller than minWidthPx
    // Default: false
    collapseLeftPanel?: boolean
}

const Resizable: React.FC<ResizableProps> = ({
    leftPanel,
    rightPanel,
    displayLeftPanel = true,
    setDisplayLeftPanel = () => { },
    useAbsolute = false,
    defaultWidth = 50,
    minWidthPx = 0,
    // parentWidth = window.innerWidth,
    draggerColor = '#000000',
    collapseLeftPanel = false,
    draggerWidth = 4
}) => {
    const [width, setWidth] = useState<number>(defaultWidth);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [startWidth, setStartWidth] = useState<number>(0);

    useEffect(() => {
        setStartWidth(window.innerWidth * (width / 100));
    }, [])

    useEffect(() => {
        setWidth(displayLeftPanel ? defaultWidth : 0);
    }, [displayLeftPanel])


    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setStartX(e.clientX);
        setStartWidth(useAbsolute ? width : window.innerWidth * (width / 100));
        setMouseDown(true);
        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseDown) {
            const deltaX = e.clientX - startX;
            const newWidthPercent = (startWidth + deltaX) / window.innerWidth * 100;
            let newWidthPixel = Math.max(startWidth + deltaX, minWidthPx)


            if (collapseLeftPanel &&
                (startWidth >= minWidthPx && ((startWidth + deltaX) < minWidthPx - 70))) {
                newWidthPixel = 0;
                if (setDisplayLeftPanel) {
                    setDisplayLeftPanel(false);
                }
            } else if (width == 0) {
                setDisplayLeftPanel(true);
            }

            setWidth(useAbsolute ? newWidthPixel : newWidthPercent)
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
            <div className="editor-container" style={{ width: `${width}${useAbsolute ? 'px' : '%'}`, zIndex: 2 }}>
                {leftPanel}
            </div>
            <div className="resize" onMouseDown={handleMouseDown} style={{
                width: draggerWidth,
                backgroundColor: draggerColor,
            }} />

            <div className="output-container">
                {rightPanel}
            </div>
        </div>
    )

}

export default Resizable;
