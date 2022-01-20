/* Amplify Params - DO NOT EDIT
	API_LANDINGPAGEAMPLIFY_GRAPHQLAPIIDOUTPUT
	API_LANDINGPAGEAMPLIFY_POSTTABLE_ARN
	API_LANDINGPAGEAMPLIFY_POSTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient();

// TODO: How do we test this? amplify mocks?
exports.handler = (event) => {
  //eslint-disable-line
  event.Records.forEach((record) => {
    const { postID, value } = AWS.DynamoDB.Converter.unmarshall(
      record.dynamodb.NewImage
    );
    console.log("postID: %s %d", postID, value);

    const params = {
      TableName: process.env.API_LANDINGPAGEAMPLIFY_POSTTABLE_NAME,
      Key: { id: postID },
      UpdateExpression: "SET upvotes = :value + upvotes",
      ExpressionAttributeValues: {
        ":value": value,
      },
    };

    return ddb.update(params).promise();
  });
};
