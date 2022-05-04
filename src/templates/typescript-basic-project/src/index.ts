import { SampleService } from "./services/sample.service"

console.log("Index: created")

const sample= SampleService()

console.log(`sample \n ${JSON.stringify(sample)}`)
