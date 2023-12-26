import React from "react";
import '../styles/dropdown.css';

interface ActionItem {
    tag: string;
    action: (...args: any[]) => void;
}

interface DropdownProps {
    isOpen: boolean;
    actions: ActionItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, actions }) => {
    return (
        <div className={`dropdown-outer-container`}>
            <div className={`${isOpen ? 'dropdown-visible' : 'dropdown-hidden'} dropdown-container`}>
                {actions?.map((action: ActionItem, idx: number) => {
                    return (
                        <div key={idx} className="action-item-container" onClick={action.action}>
                            {action.tag}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Dropdown;
