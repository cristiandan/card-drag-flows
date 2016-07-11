export function jobsProcessor(jsonData) {
        return jsonData.jobs.map(job => ({id:job.id, name:job.configuration.scriptName, parameters: job.parameters}));
}

export function flowsProcessor(jsonData) {
        return jsonData.flows.map(flow => ({name: flow.name, components: jobsProcessor({jobs:flow.components})}));
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