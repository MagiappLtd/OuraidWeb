const AWS = require('aws-sdk')

AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.update({region: 'ap-northeast-1'});


const dynamoDB = new AWS.DynamoDB()

const params = {
  TableName: 'users',
  AttributeDefinitions: [
    { AttributeName: 'user_id', AttributeType: 'N' },     // number
    { AttributeName: 'created_at', AttributeType: 'S' },  // string
    { AttributeName: 'post_id', AttributeType: 'N' }      // number
  ],
  KeySchema: [
    { AttributeName: 'user_id', KeyType: 'HASH' },     // Partition key
    { AttributeName: 'created_at', KeyType: 'RANGE' }  // Sort key
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: 'post_local_index',
      Projection: {
        ProjectionType: 'ALL' // 射影される属性 > 全て
      },
      KeySchema: [
        { AttributeName: 'user_id', KeyType: 'HASH' },
        { AttributeName: 'post_id', KeyType: 'RANGE' }
      ]
    }
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'post_global_index',
      Projection: {
        ProjectionType: 'ALL'
      },
      KeySchema: [
        { AttributeName: 'post_id', KeyType: 'HASH' }
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
      }
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
}

dynamoDB.createTable(params, (err, data) => {
  if (err) {
    console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2))
  } else {
    console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2))
  }
})