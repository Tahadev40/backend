class ApiResponse {
    constructor(status, data, massage = "success"){
        this.statusCode = statusCode
        this.data = data
        this.massage = massage
        this.success = this.statusCode < 400
    }
}