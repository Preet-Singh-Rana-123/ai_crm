const buildSegmentQuery = (rules) => {
    const query = {};

    for (const condition of rules.conditions) {
        const { field, operator, value } = condition;

        switch (operator) {
            case ">":
                query[field] = { $gt: value };
                break;

            case "<":
                query[field] = { $lt: value };
                break;

            case ">=":
                query[field] = { $gte: value };
                break;

            case "<=":
                query[field] = { $lte: value };
                break;

            case "=":
                query[field] = value;
                break;

            default:
                break;
        }
    }

    return query;
};

module.exports = buildSegmentQuery;
