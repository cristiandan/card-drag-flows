export function componentsProcessor(jsonData) {
        return jsonData.components.map(component => ({id:component.id, name:component.configuration.scriptName, parameters: component.parameters}));
}

export function flowsProcessor(jsonData) {
        return jsonData.flows.map(flow => ({name: flow.name, id: flow.id}));
}

export function inheritedParametersProcessor(parameters) {
        console.log(parameters);
        var activeParams = {}
        var inheritedParams = {}

        for (const key in parameters) {
                if(parameters[key].inherited)
                        inheritedParams[key] = parameters[key];
                else
                        activeParams[key] = parameters[key];
        }

        return {activeParams,inheritedParams}
}

export function flowProcessor(jsonData) {
        return {name: jsonData.name, id: jsonData.id, components: componentsProcessor({components:jsonData.components})};
}