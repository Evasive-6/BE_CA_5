To test this api first u fork and clone or download and open this in your vs code
then do npm i and npm start in backend folder
go to a api testing client then u put the localhost link with enpoints being /regsiter for user registration which saves the user in memory for a bit of time
it requires uniqe usernames that dont already exist in memory 
then there is /welcome for the login which takes the user name in query as username=yourname and returns a welcome message if the user is saved in memory by /register endpoint 
