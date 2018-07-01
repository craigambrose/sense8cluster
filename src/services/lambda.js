import AWS from "aws-sdk"

const REGION = "us-east-1"

const credentials = {
  accessKeyId: "AKIAJGFVCJ7PWSDAN2CQ",
  secretAccessKey: "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",
  region: "us-east-1"
}

const lambda = new AWS.Lambda(credentials)

export function requestJoinCluster(user) {
  const params = {
    FunctionName: "sense8-match-user",
    InvocationType: "RequestResponse",
    LogType: "None"
  }

  lambda.invoke(params, function(error, data) {
    if (error) {
      console.log("got error", error)
      // prompt(error)
    } else {
      // results = JSON.parse(data.Payload)
      console.log("got result", data)
    }
  })
}
