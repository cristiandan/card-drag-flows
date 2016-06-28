export function jobsProcessor(jsonData) {
        return jsonData.jobs.map(job => ({id:job.id, name:job.configuration.scriptName, parameters: job.parameters}));
}

export function flowsProcessor(jsonData) {
        return jsonData.flows.map(flow => ({name: flow.name, components: jobsProcessor({jobs:flow.components})}));
}