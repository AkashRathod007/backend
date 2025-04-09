class Apiresponse{
    constructor( statusCode, data, message = "Succues")
    {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message
        this.success = statusCode < 400
    }
}
export{Apiresponse}