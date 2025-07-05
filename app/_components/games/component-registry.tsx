import { ComponentType } from "react";
import EtchASketchComponent from "./etch-a-sketch";

export interface ComponentConfig {
    component: ComponentType;
    defaultSize: { width: number; height: number };
    title: string;
    resizable: boolean;
}

export interface ComponentRegistry {
    [key: string]: ComponentConfig;
}

export const componentRegistry: ComponentRegistry = {
    "etch-a-sketch": {
        component: EtchASketchComponent,
        defaultSize: { width: 840, height: 645 },
        title: "Etch A Sketch",
        resizable: true,
    },
};

export const getComponentConfig = (componentId: string): ComponentConfig | undefined => {
    return componentRegistry[componentId];
};
