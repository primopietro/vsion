const transactionSchema = {
    title: 'Transaction schema',
    description: 'Describes a transaction by its name and its value. The type is optional.',
    version: 0,
    type: 'object',
    properties: {
        name: {
            type: 'string',
            primary: true
        },
        type: {
            name: 'string'
        },
        value: {
            type: 'number',
            min: 0,
            max: 100000
        }
    },
    required: ['value']
};

export default transactionSchema;
