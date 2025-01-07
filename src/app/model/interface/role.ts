export interface IRole{
roleId:Number,
role:String
}

export interface IDesignation{
    designationId:Number,
    designation:String
}

export interface APIResponceModel{
    message:string,
    result:boolean,
    data: any
}