Welcome to my version of a receipt filtering component. This component was built using React.js and Node.js on the front end. It utilizes AWS Amplify for hosting and API Gateway for calling AWS Lambda for a serverless backend. The data is stored on DynamoDB as a NoSQL table. 

As I was building the component structure I was negotiating time vs proper structure. Ideally I would implement Redux for better state management between components. As of now I am using a simple parent/child relationship for passing state to props. This also limited me from maintaning a proper functional vs presentational component structure. 

Some additional functions that I would like to add in the future are the 'View Receipt' functions where a copy of the receipt can be pulled via a service such as S3. I would also like to and sorting functions to the table as well as some more responsive styling.

To Use:
    Select desired search criteria. Name, Phone, Email, or Receipt if a barcode scanner is connected
    Start entering the data from the customer, the table will respond with any entries that match your input
