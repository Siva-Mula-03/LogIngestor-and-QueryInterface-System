const logSchema = require("../model/logmodel");

exports.insertLog = async (req, res) => {
    try {
        const logArray = req.body;

        // Insert data into MongoDB
        const result = await logSchema.insertMany(logArray);

        // Create indexes on all specified fields
        const fieldsToIndex = ['level', 'message', 'resourceId', 'timestamp', 'traceId', 'spanId', 'commit', 'metadata.parentResourceId'];

        fieldsToIndex.forEach((field) => {
            const indexSpec = {};
            indexSpec[field] = 1;

            logSchema.collection.createIndex(indexSpec, { background: true }, (err, indexes) => {
                if (err) {
                    console.error(`Error creating index for ${field}:`, err);
                } else {
                    console.log(`Index for ${field} created successfully`);
                }
            });
        });

        return res.status(200).json({ success: true, insertedCount: result.length });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};
exports.index = async (req, res) => {
    const { level, message, resourceId, traceId, startDate, endDate, spanId, commit, parentResourceId } = req.body;
    // console.log(startDate, endDate);
    // console.log("2023-09-15T08:00 2023-10-18T22:53".length);

    try {
        // Check if all constants are empty
        if (!level && !message && !resourceId && !traceId && !startDate && !endDate && !spanId && !commit && !parentResourceId) {
            return res.status(200).json([]);
        }
        // query based on non-empty constants
        const query = {};
        if (level) query.level = { $regex: level, $options: 'i' };
        if (message) query.message = { $regex: message, $options: 'i' };
        if (resourceId) query.resourceId = { $regex: resourceId, $options: 'i' };
        if (spanId) query.spanId = { $regex: spanId, $options: 'i' };
        if (commit) query.commit = { $regex: commit, $options: 'i' };
        if (parentResourceId) query["metadata.parentResourceId"] = { $regex: parentResourceId, $options: 'i' };
        if (traceId) query.traceId = { $regex: traceId, $options: 'i' };
        if (startDate && endDate) {
            // Update the format of startDate and endDate to include seconds and milliseconds
            query.timestamp = { $gte: new Date(`${startDate}:00.000Z`), $lt: new Date(`${endDate}:00.000Z`) };
        }

        const result = await logSchema.find(query);
        const stats = await logSchema.find(query).explain("executionstats")
        console.log(stats);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ msg: "Error while fetching data" });
    }
};

// Indexing
// nReturned: 14,
//     executionTimeMillisEstimate: 0,
//         works: 48,
//             advanced: 14,
//                 needTime: 33,
//                     needYield: 0,
//                         saveState: 0,
//                             restoreState: 0,
//                                 isEOF: 1,
//                                     docsExamined: 14,

// Without Indexing
// nReturned: 14,
// executionTimeMillisEstimate: 0,
//     works: 48,
//         advanced: 14,
//             needTime: 33,
//                 needYield: 0,
//                     saveState: 0,
//                         restoreState: 0,
//                             isEOF: 1,
//                                 direction: 'forward',
//                                     docsExamined: 47